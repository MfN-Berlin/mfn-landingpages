import React, { useState, useMemo, useEffect, Component } from 'react'
import { graphql } from "gatsby"
import Fuse from 'fuse.js'

import Header from "../../../components/layouts/Header"
import Footer from '../../../components/layouts/Footer'
import Section from '../../../components/elements/Section'

// Error Boundary Component
class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.log('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }

    return this.props.children
  }
}

// Formatting functions
const formatAuthors = (mfnAuthors, unknownAuthors) => {
  const allAuthors = [
    ...(unknownAuthors ? unknownAuthors.split('; ') : []),
    ...(mfnAuthors ? [mfnAuthors] : [])
  ].filter(Boolean)
    .filter(author => author !== "0");
  
  if (allAuthors.length === 0) return 'Unknown Author';
  if (allAuthors.length > 20) {
    return `${allAuthors.slice(0, 19).join(', ')}, ... ${allAuthors[allAuthors.length - 1]}`;
  }
  return allAuthors.join(', ');
};

const highlightMatches = (text, searchTerm) => {
  if (!searchTerm || !text) return text;
  
  try {
    // Escape special characters in the search term
    const escapedSearchTerm = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedSearchTerm})`, 'gi');
    return text.replace(regex, '<mark class="bg-Yellow-100">$1</mark>');
  } catch (error) {
    console.error('Error highlighting matches:', error);
    return text;
  }
}

const formatAPA = (pub, searchTerm) => {
  try {
    // Helper function to check if a value is empty or "0"
    const isValidValue = value => value && value !== "0" && value !== 0;

    const authors = isValidValue(pub.mfn_authors) || isValidValue(pub.unknown_authors)
      ? `<span id="authors" class="publication-authors">${highlightMatches(formatAuthors(pub.mfn_authors || '', pub.unknown_authors || ''), searchTerm)}</span>`
      : '';

    const year = isValidValue(pub.year)
      ? `<span id="year" class="publication-year">${pub.year}</span>`
      : '<span id="year" class="publication-year">n.d.</span>';

    const title = isValidValue(pub.title)
      ? `<span id="title" class="publication-title font-bold">${highlightMatches(pub.title, searchTerm)}</span>`
      : '<span id="title" class="publication-title font-bold">Untitled</span>';

    const journal = isValidValue(pub.journal)
      ? `<span id="journal" class="publication-journal">${highlightMatches(pub.journal, searchTerm)}</span>`
      : '';

    const volume = isValidValue(pub.volume)
      ? `<span id="volume" class="publication-volume"><i>${highlightMatches(pub.volume, searchTerm)}</i></span>`
      : '';

    const issue = isValidValue(pub.issue)
      ? `<span id="issue" class="publication-issue">(${highlightMatches(pub.issue, searchTerm)})</span>`
      : '';

    const pageInfo = isValidValue(pub.page_info)
      ? `<span id="pages" class="publication-pages">${typeof pub.page_info === 'string' && pub.page_info.startsWith('Article')
          ? highlightMatches(pub.page_info, searchTerm)
          : `p. ${highlightMatches(pub.page_info, searchTerm)}`}</span>`
      : '';

    const doi = isValidValue(pub.upload_id) && typeof pub.upload_id === 'string' && pub.upload_id.startsWith('10.')
      ? `<span id="doi" class="publication-doi"><a href="https://doi.org/${pub.upload_id}" target="_blank" rel="noopener noreferrer" class="underline text-Green-500 hover:text-Green-600">https://doi.org/${pub.upload_id}</a></span>`
      : '';

    // Combine elements and filter out empty strings
    const elements = [
      authors && `${authors}.`,
      `(${year})`,
      `${title}.`,
      journal && `<i>${journal}</i>`,
      volume,
      issue,
      pageInfo,
      doi
    ].filter(Boolean);

    return elements.join(' ').trim().replace(/\s+/g, ' ').replace(/\s+\./g, '.').replace(/,\s*\./g, '.');
  } catch (error) {
    console.error('Error formatting publication:', pub, error);
    return 'Error formatting publication';
  }
};

const ITEMS_PER_PAGE = 10


const PublicationsPage = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [publications, setPublications] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchMode, setSearchMode] = useState('fuzzy');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState(null);

  useEffect(() => {
    if (data && data.allFile && data.allFile.edges.length > 0) {
      const fileContent = data.allFile.edges[0].node.internal.content
      try {
        const parsedContent = JSON.parse(fileContent)
        setPublications(parsedContent.publications_2020_merged || [])
        setIsLoading(false)
      } catch (error) {
        console.error('Error parsing JSON:', error)
        setError('Error loading publications')
        setIsLoading(false)
      }
    }
  }, [data])

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
  };

  const fuse = useMemo(() => new Fuse(publications, {
    keys: ['title', 'mfn_authors', 'unknown_authors', 'journal', 'year', 'keyword'],
    ...fuseConfigs[searchMode]
  }), [publications, searchMode]);

  const filteredPublications = useMemo(() => {
    if (!searchTerm) return publications;
    const results = fuse.search(searchTerm);
    console.log('Search results:', results); // Debug-Log
    return results.map(result => ({
      ...result.item,
      score: result.score,
      matches: result.matches
    }));
  }, [searchTerm, fuse, publications]);

  const pageCount = Math.ceil(filteredPublications.length / ITEMS_PER_PAGE)
  const paginatedPublications = filteredPublications.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  // Modify the search handler to reset pagination
  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
    setCurrentPage(1) // Reset to first page whenever search term changes
  }

  if (isLoading) return <div>Loading publications...</div>
  if (error) return <div>{error}</div>

  return (
    <>
      <Header />
      <main className="bg-white flex flex-col items-center justify-center p-0">
        <ErrorBoundary>
        <Section backgroundColor="bg-Black-100" columns={1} padding="pt-16 pb-8">
          <div className="mb-8 max-w-4xl mx-auto">
            <h1>Publikationen</h1>
            <div className="search-container mt-4">
              <label htmlFor="search-publications" className="block mb-2">
                Diese Datenbank enthält Publikationen aus dem Zeitraum 2017 bis 2023, die dem Museum für Naturkunde Berlin vorliegen. <br/><br/>
              </label>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-grow relative">
                  <input
                    id="search-publications"
                    type="search"
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder="Suchen Sie nach Titel, Autor, Journal..."
                    className="w-full p-2 border border-Black-300 rounded pr-12"
                    aria-label="Suchen Sie in allen Publikationen"
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
              
              {/* Settings Dropdown */}
              {isSettingsOpen && (
                <div className="mt-2 p-4 bg-white border border-Black-200 rounded shadow-lg">
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Suchmodus:</label>
                    <select
                      value={searchMode}
                      onChange={(e) => setSearchMode(e.target.value)}
                      className="w-full p-2 border border-Black-300 rounded"
                      aria-label="Suchmodus auswählen"
                    >
                      <option value="fuzzy">Fuzzy Suche (Standard)</option>
                      <option value="exact">Exakte Suche</option>
                      <option value="extended">Erweiterte Suche</option>
                    </select>
                  </div>
                  
                  {searchMode === 'extended' && (
                    <div className="text-sm text-Black-600">
                      <p className="font-medium mb-2">Erweiterte Suchoperatoren:</p>
                      <ul className="list-disc pl-5">
                        <li>'wort (exakte Übereinstimmung)</li>
                        <li>^wort (Präfix-Suche)</li>
                        <li>wort$ (Suffix-Suche)</li>
                        <li>!wort (Negation)</li>
                        <li>'wort1 wort2 (AND-Suche)</li>
                        <li>'wort1 |wort2 (OR-Suche)</li>
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </Section>

        <Section backgroundColor="bg-White" columns={1} padding="pt-16 pb-8">
          <div className="mb-8 publications-list max-w-4xl mx-auto" role="region" aria-label="Publikationsliste">
            <h2 className="mb-8">
              {searchTerm 
                ? `${filteredPublications.length} Ergebnisse mit dem Suchbegriff "${searchTerm}" gefunden`
                : `${publications.length} Publikationen sind verfügbar`
              }
            </h2>
            {paginatedPublications.length > 0 ? (
              <ul className="list-none p-0">
                {paginatedPublications.map((pub, index) => (
                  <li key={index} className="mb-12 border-b border-Black-100 pb-4">
                    <article className="relative">
                      <div className="flex items-start justify-between">
                        <p dangerouslySetInnerHTML={{ 
                          __html: formatAPA(pub, searchTerm) 
                        }} className="flex-grow" />
                        {searchTerm && (
                          <div className="relative ml-2">
                            <button
                              onClick={() => setActiveTooltip(activeTooltip === index ? null : index)}
                              className="p-2 hover:bg-Black-100 rounded-full"
                              aria-label="Zeige Suchergebnisdetails"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                              </svg>
                            </button>
                            {activeTooltip === index && (
                              <div className="absolute z-10 right-0 mt-2 w-64 bg-white border border-Black-200 rounded-lg shadow-lg p-4">
                                <h4 className="font-bold mb-2">Gefunden in:</h4>
                                {pub.matches?.map((match, i) => (
                                  <p key={i} className="text-sm mb-1">
                                    <span className="font-medium">{match.key}:</span> {match.value}
                                    <br />
                                    <span className="text-Black-500">
                                      Score: {Math.round(pub.score * 100)}%
                                    </span>
                                  </p>
                                ))}
                                <div className="absolute right-0 top-0 transform -translate-y-2 translate-x-2">
                                  <div className="w-3 h-3 bg-white border-t border-l border-Black-200 transform rotate-45" />
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Keine Publikationen gefunden.</p>
            )}
          </div>
        </Section>
        <Section backgroundColor="bg-Black-100" columns={1} padding="pt-8 pb-16">
          <nav 
            aria-label="Pagination" 
            className="mt-8"
          >
            <ul className="flex justify-center items-center gap-2 p-0 m-0 list-none">
              {/* First Page */}
              <li>
                <button 
                  onClick={() => setCurrentPage(1)}
                  disabled={currentPage === 1}
                  className="px-3 py-2 rounded hover:bg-Green-100 disabled:opacity-50 disabled:hover:bg-transparent"
                  aria-label="Erste Seite"
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
                  aria-label="Vorherige Seite"
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
                  aria-label="Nächste Seite"
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
                  aria-label="Letzte Seite"
                >
                  <span aria-hidden="true">»</span>
                </button>
              </li>
            </ul>
          </nav>

          {/* Add pagination info for screen readers */}
          <div className="sr-only" aria-live="polite">
            Seite {currentPage} von {pageCount}
          </div>
        </Section>
        </ErrorBoundary>
      </main>
      <Footer />
    </>
  );
};

export const query = graphql`
  query {
    allFile(
      filter: {
        sourceInstanceName: {eq: "publications"}, 
        name: {eq: "publications_2017-2023"}
      }
    ) {
      edges {
        node {
          name
          internal {
            content
          }
        }
      }
    }
  }
`

export default PublicationsPage
