import * as React from "react"

const HeadComponent = ({ title, description, pathname }) => {
  return (
    <>
      <title key="title">{title}</title>
      <meta 
        key="description" 
        name="description" 
        content={description} 
      />
      <meta 
        key="viewport" 
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