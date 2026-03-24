import React, { useEffect } from 'react'

const NotFoundPage = () => {
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      window !== window.top &&
      window.location.hostname === 'mfn-berlin.github.io'
    ) {
      window.top.location.href =
        `https://website-archiv.museumfuernaturkunde.berlin${window.location.pathname}`
    }
  }, [])

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>404 – Seite nicht gefunden</h1>
      <p>Diese Seite existiert nicht.</p>
    </main>
  )
}

export default NotFoundPage
