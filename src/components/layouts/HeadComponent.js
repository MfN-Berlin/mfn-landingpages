import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const HeadComponent = ({ title, description, pathname }) => {
  const fullTitle = `${title} | Museum für Naturkunde Berlin`

  return (
    <>
      <title key={`title-${pathname}`}>{fullTitle}</title>
      <meta key={`desc-${pathname}`} name="description" content={description} />
      <link 
        key={`lang-${pathname}`}
        rel="alternate" 
        hrefLang="de"
        href={`https://www.museumfuernaturkunde.berlin${pathname}`}
      />
      <meta key={`og-title-${pathname}`} property="og:title" content={fullTitle} />
      <meta key={`og-desc-${pathname}`} property="og:description" content={description} />
    </>
  )
}

export default HeadComponent