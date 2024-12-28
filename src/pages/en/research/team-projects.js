import React, { useState, useEffect, useMemo } from 'react'
import { graphql } from "gatsby"
import Fuse from 'fuse.js'

import Header from "../../../components/layouts/Header"
import Footer from '../../../components/layouts/Footer'
import Section from '../../../components/elements/Section'
import AccessibilityNav from '../../../components/layouts/AccessibilityNav'
const ITEMS_PER_PAGE = 10

const TeamProjectsPage = ({ data }) => {
  const [teamData, setTeamData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [searchMode, setSearchMode] = useState('fuzzy')
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    if (data?.file?.internal?.content) {
      try {
        const parsedContent = JSON.parse(data.file.internal.content);
        setTeamData(parsedContent);
        setIsLoading(false);
      } catch (error) {
        console.error('Error parsing JSON:', error);
        setError('Error loading team data');
        setIsLoading(false);
      }
    }
  }, [data]);

  // Fuse Konfigurationen
  const fuseConfigs = {
    exact: {
      threshold: 0,
      ignoreLocation: true,
      includeMatches: true,
      includeScore: true,
    },
    fuzzy: {
      threshold: 0.3,
      distance: 100,
      includeMatches: true,
      includeScore: true,
    },
    extended: {
      useExtendedSearch: true,
      includeMatches: true,
      includeScore: true,
    }
  }

  // Suchindex erstellen
  const fuse = useMemo(() => {
    const searchableData = Object.entries(teamData).map(([name, data]) => ({
      name,
      ...data,
      projects: data.navigator_projects || []
    }))

    return new Fuse(searchableData, {
      keys: [
        'name',
        'email',
        'role',
        'projects.title',
        'projects.tags'
      ],
      ...fuseConfigs[searchMode]
    })
  }, [teamData, searchMode])

  // Gefilterte Ergebnisse
  const filteredTeamMembers = useMemo(() => {
    if (!searchTerm) {
      return Object.entries(teamData).map(([name, data]) => ({
        name,
        ...data,
        projects: data.navigator_projects || []
      }))
    }
    
    const results = fuse.search(searchTerm)
    return results.map(result => ({
      ...result.item,
      score: result.score,
      matches: result.matches
    }))
  }, [searchTerm, fuse, teamData])

  // Paginierung
  const pageCount = Math.ceil(filteredTeamMembers.length / ITEMS_PER_PAGE)
  const paginatedMembers = filteredTeamMembers.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  // Reset Seite bei Suche
  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm])

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  // Funktion zum Markieren der Suchbegriffe
  const highlightMatches = (text, searchTerm) => {
    if (!searchTerm || !text) return text;
    
    try {
      const escapedSearchTerm = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`(${escapedSearchTerm})`, 'gi');
      return text.replace(regex, '<mark class="bg-Yellow-100">$1</mark>');
    } catch (error) {
      console.error('Error highlighting matches:', error);
      return text;
    }
  }

  if (isLoading) return <div>Loading team data...</div>
  if (error) return <div>{error}</div>

  return (
    <>
      <Header />
      <main>
        <AccessibilityNav currentPage="Team and Projects" />
        <Section backgroundColor="bg-White" columns={1} padding="pt-16 pb-8">
          <div className="mb-8 max-w-[768px] mx-auto">
            <h1 className="text-center">Team and Projects</h1>
            <label htmlFor="search-publications" className="block mt-2 max-w-3xl text-center mx-auto">
            Find people at Museum für Naturkunde Berlin and projects by name, email, phone number, project title and tags. <br/><br/>
              </label>
            <div className="search-container mt-4">
              <div className="flex flex-col md:flex-row gap-4">
              
                <div className="flex-grow relative w-full">
                  <input
                    type="search"
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder="Search for names, projects, tags or roles…"
                    className="w-full p-2 border border-Black-300 rounded pr-10"
                    aria-label="Suchen Sie in allen Team-Projekten"
                  />
                  <button
                    onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-Black-100 rounded-full"
                    aria-label="Sucheinstellungen"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>

              {isSettingsOpen && (
                <div className="mt-2 p-4 bg-white border border-Black-200 rounded shadow-lg">
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Search mode (different algorithms can yield different search results):</label>
                    <select
                      value={searchMode}
                      onChange={(e) => setSearchMode(e.target.value)}
                      className="w-full p-2 border border-Black-300 rounded"
                      aria-label="Select search mode"
                    >
                      <option value="fuzzy">Fuzzy Search (Default)</option>
                      <option value="exact">Exact Search</option>
                      <option value="extended">Extended Search</option>
                    </select>
                  </div>
                  
                  {searchMode === 'extended' && (
                    <div className="text-sm text-Black-600">
                      <p className="font-medium mb-2">Extended search operators:</p>
                      <ul className="list-disc pl-5">
                        <li>'word (exact match)</li>
                        <li>^word (prefix search)</li>
                        <li>word$ (suffix search)</li>
                        <li>!word (negation)</li>
                        <li>'word1 word2 (AND search)</li>
                        <li>'word1 |word2 (OR search)</li>
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </Section>

        <Section backgroundColor="bg-Green-100" columns={1} padding="pt-16 pb-8">
          <div className="mb-8">
            <h2 className="mb-8">
              {searchTerm 
                ? filteredTeamMembers.length === 0
                  ? `No results found for "${searchTerm}". Have you tried expanding the search?`
                  : `${filteredTeamMembers.length} team member${filteredTeamMembers.length === 1 ? '' : 's'} match "${searchTerm}"`
                : `Searching ${filteredTeamMembers.length} team member${filteredTeamMembers.length === 1 ? '' : 's'}`
              }
            </h2>

            {/* Team Members List */}
            <div className="mt-8">
              {paginatedMembers.map((member) => (
                <div key={member.name} className="bg-White-White mb-8 p-8">
                  <div className="grid grid-cols-8 gap-6">
                    {/* Left Column: Personal Information (3/8) */}
                    <div className="col-span-3">
                      <h2 className="text-xl font-bold mb-2">
                        {member.url ? (
                          <a 
                            href={member.url}
                            className="text-Black-900 hover:text-Green-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                            dangerouslySetInnerHTML={{ __html: highlightMatches(member.name, searchTerm) }}
                          />
                        ) : (
                          <span 
                            className="text-Black-900"
                            dangerouslySetInnerHTML={{ __html: highlightMatches(member.name, searchTerm) }}
                          />
                        )}
                      </h2>
                      
                      <div className="mb-4 text-sm text-Black-600">
                        {member.email && (
                          <div className="mb-1">
                            <a 
                              href={`mailto:${member.email}`} 
                              className="hover:underline"
                              dangerouslySetInnerHTML={{ __html: highlightMatches(member.email, searchTerm) }}
                            />
                          </div>
                        )}
                        {member.phone && (
                          <div>
                            <a 
                              href={`tel:${member.phone.replace(/\s/g, '')}`} 
                              className="hover:underline"
                              dangerouslySetInnerHTML={{ __html: highlightMatches(member.phone, searchTerm) }}
                            />
                          </div>
                        )}
                      </div>

                      {member.role && (
                        <p 
                          className="text-sm text-Black-600"
                          dangerouslySetInnerHTML={{ __html: highlightMatches(member.role, searchTerm) }}
                        />
                      )}
                    </div>

                    {/* Right Column: Projects (5/8) */}
                    <div className="col-span-5">
                      {member.projects?.length > 0 && (
                        <div className="mb-4">
                          <h3 className="text-xs uppercase tracking-wider font-light text-Black-400 mb-2">
                            Projects
                          </h3>
                          
                          {/* Project List */}
                          <div className="flex flex-wrap gap-2 mb-2">
                            {member.projects.map((project, index) => (
                              <a 
                                key={index}
                                href={project.url} 
                                className="px-3 py-1.5 bg-Green-200 text-Black-900 text-xs hover:bg-Green-400 hover:text-Green-800 rounded"
                                dangerouslySetInnerHTML={{ __html: highlightMatches(project.title, searchTerm) }}
                              />
                            ))}
                          </div>

                          {/* Collected Tags */}
                          {/* <div className="flex flex-wrap gap-2 mt-2">
                            {member.projects
                              .flatMap(project => project.tags || [])
                              .filter((tag, index, self) => tag && self.indexOf(tag) === index) // Duplikate entfernen
                              .sort()
                              .map((tag, index) => (
                                <a
                                  key={index}
                                  href={`?search=${encodeURIComponent(tag)}`}
                                  className="text-xs text-Black-500 hover:text-Green-500 hover:underline"
                                >
                                  #{tag}
                                </a>
                              ))}
                          </div> */}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {pageCount > 1 && (
              <nav aria-label="Pagination" className="mt-8">
                <ul className="flex justify-center items-center gap-2 p-0 m-0 list-none">
                  {/* First Page */}
                  <li>
                    <button 
                      onClick={() => setCurrentPage(1)}
                      disabled={currentPage === 1}
                      className="px-3 py-2 rounded hover:bg-Green-100 disabled:opacity-50 disabled:hover:bg-transparent"
                      aria-label="First page"
                    >
                      <span aria-hidden="true">«</span>
                    </button>
                  </li>

                  {/* Previous Page */}
                  <li>
                    <button 
                      onClick={() => setCurrentPage(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="px-3 py-2 rounded hover:bg-Green-100 disabled:opacity-50 disabled:hover:bg-transparent"
                      aria-label="Previous page"
                    >
                      <span aria-hidden="true">‹</span>
                    </button>
                  </li>

                  {/* Page Numbers */}
                  {(() => {
                    let pages = [];
                    const totalPages = pageCount;
                    const current = currentPage;
                    
                    // Always show first page
                    pages.push(1);
                    
                    // Calculate range around current page
                    let start = Math.max(2, current - 2);
                    let end = Math.min(totalPages - 1, current + 2);
                    
                    // Add ellipsis after first page if needed
                    if (start > 2) {
                      pages.push('...');
                    }
                    
                    // Add pages around current page
                    for (let i = start; i <= end; i++) {
                      pages.push(i);
                    }
                    
                    // Add ellipsis before last page if needed
                    if (end < totalPages - 1) {
                      pages.push('...');
                    }
                    
                    // Add last page if there is more than one page
                    if (totalPages > 1) {
                      pages.push(totalPages);
                    }
                    
                    return pages.map((page, index) => {
                      if (page === '...') {
                        return (
                          <li key={`ellipsis-${index}`}>
                            <span className="px-3 py-2" aria-hidden="true">…</span>
                          </li>
                        );
                      }
                      
                      return (
                        <li key={page}>
                          <button
                            onClick={() => setCurrentPage(page)}
                            className={`px-3 py-2 rounded hover:bg-Green-100 
                              ${currentPage === page ? 'bg-Green-500 text-white' : ''}`}
                            aria-label={`Seite ${page}`}
                            aria-current={currentPage === page ? 'page' : undefined}
                          >
                            {page}
                          </button>
                        </li>
                      );
                    });
                  })()}

                  {/* Next Page */}
                  <li>
                    <button 
                      onClick={() => setCurrentPage(currentPage + 1)}
                      disabled={currentPage === pageCount}
                      className="px-3 py-2 rounded hover:bg-Green-100 disabled:opacity-50 disabled:hover:bg-transparent"
                      aria-label="Next page"
                    >
                      <span aria-hidden="true">›</span>
                    </button>
                  </li>

                  {/* Last Page */}
                  <li>
                    <button 
                      onClick={() => setCurrentPage(pageCount)}
                      disabled={currentPage === pageCount}
                      className="px-3 py-2 rounded hover:bg-Green-100 disabled:opacity-50 disabled:hover:bg-transparent"
                      aria-label="Last page"
                    >
                      <span aria-hidden="true">»</span>
                    </button>
                  </li>
                </ul>
              </nav>
            )}

            {/* Pagination info for screen readers */}
            <div className="sr-only" aria-live="polite">
              Page {currentPage} of {pageCount}
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}

export const query = graphql`
  query {
    file(name: {eq: "team_profiles_with_projects_en"}) {
      sourceInstanceName
      internal {
        content
      }
    }
  }
`

export default TeamProjectsPage