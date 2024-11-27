import React from 'react'
import { withPrefix } from 'gatsby'
import { getEnvironmentConfig } from '../../scripts/urlHelper'
import { getAssetPath } from '../../scripts/assetPrefix';

const HeadComponent = ({ 
  title = "Museum für Naturkunde", 
  description = "Das Museum für Naturkunde Berlin ist ein integriertes Forschungsmuseum, an dem mit Leidenschaft und Kompetenz für Natur geforscht wird.",
  image = "/images/goldwespe_web.jpg",
  pathname = ""
}) => {
  // Get the correct site URL based on environment
  const getBaseUrl = () => {
    const { hostname } = getEnvironmentConfig()
    
    if (hostname === 'mfn-berlin.github.io') {
      return 'https://mfn-berlin.github.io'
    }
    return 'https://www.museumfuernaturkunde.berlin'
  }

  const siteUrl = getBaseUrl()

  return (
    <>
      <title>{title} | Museum für Naturkunde</title>
      <meta charSet="utf-8" />
      
      {/* Favicon - using withPrefix */}
      <link rel="icon" href={getAssetPath('/images/favicon.ico')} type="image/x-icon" />
      
      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="MobileOptimized" content="width" />
      <meta name="HandheldFriendly" content="true" />
      
      {/* SEO Meta Tags */}
      <meta name="description" content={description} />
      <link rel="canonical" href={`${siteUrl}${pathname}`} />
      
      {/* Open Graph - using withPrefix for image */}
      <meta property="og:site_name" content="Museum für Naturkunde" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${siteUrl}${pathname}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${withPrefix(image)}`} />
      
      {/* Twitter Card - using withPrefix for image */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@mfnberlin" />
      <meta name="twitter:title" content={`${title} | Museum für Naturkunde`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${withPrefix(image)}`} />
      
      {/* Language Alternates - using withPrefix for paths */}
      <link rel="alternate" hrefLang="de" href={`${siteUrl}${withPrefix(`/de${pathname}`)}`} />
      <link rel="alternate" hrefLang="en" href={`${siteUrl}${withPrefix(`/en${pathname}`)}`} />
    </>
  )
}

export default HeadComponent