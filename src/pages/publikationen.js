import React, { useState, useMemo, useEffect, Component } from 'react'
import { graphql } from "gatsby"
import Fuse from 'fuse.js'

import Header from "../components/layouts/Header"
import Footer from '../components/layouts/Footer'
import Section from '../components/elements/Section'

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
  
  if (allAuthors.length === 0) return 'Unknown Author'
  if (allAuthors.length > 7) {
    return `${allAuthors.slice(0, 6).join(', ')}, ... ${allAuthors[allAuthors.length - 1]}`
  }
  return allAuthors.join(', ')
}

const formatAPA = (pub) => {
  try {
    const authors = formatAuthors(pub.mfn_authors || '', pub.unknown_authors || '')
    const year = pub.year || 'n.d.'
    const title = pub.title 
      ? `<span class="font-bold">${pub.title}</span>` 
      : '<span class="font-bold">Untitled</span>'
    const journal = pub.journal || 'Unknown Journal'
    const volume = pub.volume ? `*${pub.volume}*` : ''
    const issue = pub.issue ? `(${pub.issue})` : ''
    const pageInfo = pub.page_info 
      ? (typeof pub.page_info === 'string' && pub.page_info.startsWith('Article') 
        ? pub.page_info 
        : `p. ${pub.page_info}`)
      : ''
    const doi = pub.upload_id && typeof pub.upload_id === 'string' && pub.upload_id.startsWith('10.') 
      ? `<a href="https://doi.org/${pub.upload_id}" target="_blank" rel="noopener noreferrer" class="text-Green-500 hover:text-Green-600">https://doi.org/${pub.upload_id}</a>` 
      : ''

    return `${authors}. (${year}). ${title}. *${journal}*, ${volume}${issue}, ${pageInfo}. ${doi}`.trim().replace(/\s+/g, ' ')
  } catch (error) {
    console.error('Error formatting publication:', pub, error)
    return 'Error formatting publication'
  }
}

const ITEMS_PER_PAGE = 10

// Add these helper components at the top of your file
const VisuallyHidden = ({ children }) => (
  <span className="absolute overflow-hidden h-[1px] w-[1px] m-[-1px] p-0 border-0 clip-rect-1">
    {children}
  </span>
);

const PublicationsPage = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [publications, setPublications] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)

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

  const fuse = useMemo(() => new Fuse(publications, {
    keys: ['title', 'mfn_authors', 'unknown_authors', 'journal', 'year', 'keyword'],
    threshold: 0.3,
  }), [publications])

  const filteredPublications = useMemo(() => {
    return searchTerm ? fuse.search(searchTerm).map(result => result.item) : publications
  }, [searchTerm, fuse, publications])

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
        <Section backgroundColor="bg-Black-100">
          <ErrorBoundary>
            <h1 className="typography-h1">Alle Publikationen seit 2019</h1>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch} // Use the new handler instead of direct setState
              placeholder="Search publications..."
            />
            <table>
              <thead>
                <tr>
                  <th>Publication (APA Style)</th>
                </tr>
              </thead>
              <tbody>
                {paginatedPublications.map((pub, index) => (
                  <tr key={index}>
                    <td dangerouslySetInnerHTML={{ __html: formatAPA(pub) }} className="pb-12"/>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>
              <ul className="p-0 m-0 text-[#666]">
                {/* First Page */}
                <li className="inline">
                  <button 
                    onClick={() => setCurrentPage(1)}
                    disabled={currentPage === 1}
                    className={`px-[0.3em] text-[#666] hover:text-[#91bd0d] transition-colors duration-300 ${
                      currentPage === 1 ? 'text-[#7da30b]' : ''
                    }`}
                  >
                    <VisuallyHidden>Erste Seite</VisuallyHidden>
                    «
                  </button>
                </li>

                {/* Previous Page */}
                <li className="inline">
                  <button 
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-[0.3em] text-[#666] hover:text-[#91bd0d] transition-colors duration-300"
                  >
                    <VisuallyHidden>Vorherige Seite</VisuallyHidden>
                    ‹
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
                        <li key={`ellipsis-${index}`} className="inline px-[0.3em] text-[#666]" role="presentation">
                          …
                        </li>
                      );
                    }
                    
                    return (
                      <li key={page} className="inline">
                        <button
                          onClick={() => setCurrentPage(page)}
                          className={`px-[0.3em] hover:text-[#91bd0d] transition-colors duration-300 ${
                            currentPage === page ? 'text-[#7da30b]' : 'text-[#666]'
                          }`}
                        >
                          <VisuallyHidden>
                            {currentPage === page ? 'Aktuelle Seite' : `Seite ${page}`}
                          </VisuallyHidden>
                          {page}
                        </button>
                      </li>
                    );
                  });
                })()}

                {/* Next Page */}
                <li className="inline">
                  <button 
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === pageCount}
                    className="px-[0.3em] text-[#666] hover:text-[#91bd0d] transition-colors duration-300"
                  >
                    <VisuallyHidden>Nächste Seite</VisuallyHidden>
                    <span aria-hidden="true">›</span>
                  </button>
                </li>

                {/* Last Page */}
                <li className="inline">
                  <button 
                    onClick={() => setCurrentPage(pageCount)}
                    disabled={currentPage === pageCount}
                    className="px-[0.3em] text-[#666] hover:text-[#91bd0d] transition-colors duration-300"
                  >
                    <VisuallyHidden>Letzte Seite</VisuallyHidden>
                    <span aria-hidden="true">»</span>
                  </button>
                </li>
              </ul>
            </div>
          </ErrorBoundary>
        </Section>
      </main>
      <Footer />
    </>
  )
}

export const query = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "publications"}, extension: {eq: "json"}}) {
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
