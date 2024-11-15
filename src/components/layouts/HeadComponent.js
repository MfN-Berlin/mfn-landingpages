import * as React from "react"
import PropTypes from 'prop-types'

const HeadComponent = ({ title, description, pathname }) => {
  return (
    <>
      <title key="page-specific-title">{title}</title>
      <meta 
        key="page-description" 
        name="description" 
        content={description} 
      />
      <meta 
        key="page-viewport" 
        name="viewport" 
        content="width=device-width, initial-scale=1" 
      />
      <link 
        key="canonical" 
        rel="canonical" 
        href={`https://www.museumfuernaturkunde.berlin${pathname}`} 
      />
    </>
  )
}

export default HeadComponent