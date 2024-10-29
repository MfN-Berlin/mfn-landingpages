import React from 'react'

const HeadComponent = ({ 
  title = "Museum für Naturkunde", 
  description = "Das Museum für Naturkunde Berlin ist ein integriertes Forschungsmuseum, an dem mit Leidenschaft und Kompetenz für Natur geforscht wird.",
  image = "../images/goldwespe_web.jpg",
  pathname = ""
}) => {
  const siteUrl = "https://www.museumfuernaturkunde.berlin"

  return (
    <>
      <title>{title} | Museum für Naturkunde</title>
      <meta charSet="utf-8" />
      
      {/* Favicon */}
      <link rel="icon" href="../images/favicon.ico" type="image/x-icon" />
      
      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="MobileOptimized" content="width" />
      <meta name="HandheldFriendly" content="true" />
      
      {/* SEO Meta Tags */}
      <meta name="description" content={description} />
      <link rel="canonical" href={`${siteUrl}${pathname}`} />
      
      {/* Open Graph */}
      <meta property="og:site_name" content="Museum für Naturkunde" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${siteUrl}${pathname}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@mfnberlin" />
      <meta name="twitter:title" content={`${title} | Museum für Naturkunde`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
      
      {/* Language Alternates */}
      <link rel="alternate" hreflang="de" href={`${siteUrl}/de${pathname}`} />
      <link rel="alternate" hreflang="en" href={`${siteUrl}/en${pathname}`} />
      
      
    </>
  )
}

export default HeadComponent