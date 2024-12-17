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
  const [searchMode, setSearchMode] = useState('fuzzy')
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [activeTooltip, setActiveTooltip] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)

  const publications = useMemo(() => {
    try {
      const publicationFile = data?.allFile?.edges?.find(
        edge => edge.node.sourceInstanceName === 'data' && 
               edge.node.name === 'publications_2017-2023'
      );
      
      if (!publicationFile?.node?.internal?.content) {
        return [];
      }
      
      const parsed = JSON.parse(publicationFile.node.internal.content);
      return parsed.publications_2020_merged || [];
    } catch (error) {
      console.error('Error parsing publications:', error);
      return [];
    }
  }, [data]);

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

  const fuse = useMemo(() => new Fuse(publications, {
    keys: ['title', 'mfn_authors', 'unknown_authors', 'journal', 'year', 'keyword'],
    ...fuseConfigs[searchMode]
  }), [publications, searchMode])

  const filteredPublications = useMemo(() => {
    if (!searchTerm) return publications;
    const results = fuse.search(searchTerm);
    return results.map(result => ({
      ...result.item,
      score: result.score,
      matches: result.matches
    }));
  }, [searchTerm, fuse, publications]);

  const pageCount = Math.ceil(filteredPublications.length / ITEMS_PER_PAGE);
  const paginatedPublications = filteredPublications.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <>
      <Header />
      <main>
        <Section backgroundColor="bg-Black-100" columns={1} padding="pt-16 pb-8">
          <div className="mb-8 max-w-[768px] mx-auto">
            <h1 className="text-center">Publikationen</h1>
            <label htmlFor="search-publications" className="block mt-2 max-w-3xl text-center mx-auto">
              Diese Datenbank enthält Publikationen aus dem Zeitraum 2017 bis 2023, die dem Museum für Naturkunde Berlin vorliegen. <br/><br/>
            </label>
            <div className="search-container mt-4">
              <div className="flex flex-col md:flex-row gap-4">
              
                <div className="flex-grow relative w-full">
                  <input
                    type="search"
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder="Suchen Sie nach Namen, Projekten, Tags..."
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

        {/* Publikationsliste */}
        <Section backgroundColor="bg-White" columns={1} padding="pt-16 pb-8">
          <div className="mb-8 publications-list max-w-3xl mx-auto" role="region" aria-label="Publikationsliste">
            <h2 className="mb-8 pb-4 border-b border-b-2 border-Green-200">
              {searchTerm 
                ? `${filteredPublications.length} Ergebnisse gefunden`
                : `${publications.length} Publikationen verfügbar`
              }
            </h2>

            {/* Publications List */}
            <div className="mt-8">
              {paginatedPublications.map((pub, index) => (
                <div key={index} className="mb-8 pb-8 border-b border-b-2 border-Green-200">
                  <article>
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
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </article>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {pageCount > 1 && (
              <nav aria-label="Pagination" className="mt-8">
                <ul className="flex justify-center items-center gap-2 p-0 m-0 list-none">
                  <li>
                    <button 
                      onClick={() => setCurrentPage(1)}
                      disabled={currentPage === 1}
                      className="px-3 py-2 rounded hover:bg-Green-100 disabled:opacity-50"
                      aria-label="Erste Seite"
                    >
                      <span aria-hidden="true">«</span>
                    </button>
                  </li>

                  <li>
                    <button 
                      onClick={() => setCurrentPage(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="px-3 py-2 rounded hover:bg-Green-100 disabled:opacity-50"
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
                    
                    pages.push(1);
                    
                    let start = Math.max(2, current - 2);
                    let end = Math.min(totalPages - 1, current + 2);
                    
                    if (start > 2) {
                      pages.push('...');
                    }
                    
                    for (let i = start; i <= end; i++) {
                      pages.push(i);
                    }
                    
                    if (end < totalPages - 1) {
                      pages.push('...');
                    }
                    
                    if (totalPages > 1) {
                      pages.push(totalPages);
                    }
                    
                    return pages.map((page, index) => {
                      if (page === '...') {
                        return (
                          <li key={`ellipsis-${index}`}>
                            <span className="px-3 py-2">…</span>
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

                  <li>
                    <button 
                      onClick={() => setCurrentPage(currentPage + 1)}
                      disabled={currentPage === pageCount}
                      className="px-3 py-2 rounded hover:bg-Green-100 disabled:opacity-50"
                      aria-label="Nächste Seite"
                    >
                      <span aria-hidden="true">›</span>
                    </button>
                  </li>

                  <li>
                    <button 
                      onClick={() => setCurrentPage(pageCount)}
                      disabled={currentPage === pageCount}
                      className="px-3 py-2 rounded hover:bg-Green-100 disabled:opacity-50"
                      aria-label="Letzte Seite"
                    >
                      <span aria-hidden="true">»</span>
                    </button>
                  </li>
                </ul>
              </nav>
            )}

            {/* Screen reader pagination info */}
            <div className="sr-only" aria-live="polite">
              Seite {currentPage} von {pageCount}
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
    allFile(filter: {sourceInstanceName: {eq: "data"}}) {
      edges {
        node {
          sourceInstanceName
          name
          internal {
            content
          }
        }
      }
    }
  }
`;

export default PublicationsPage
