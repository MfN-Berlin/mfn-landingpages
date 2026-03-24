/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

import './src/styles/global.css'
import { navigate, withPrefix } from 'gatsby'

// Version logging
const VERSION = 'v1.0.31'

const ARCHIVE_BASE_URL = 'https://website-archiv.museumfuernaturkunde.berlin'

export const onClientEntry = () => {
    // Temporär Prefetching deaktivieren
    if (typeof window !== 'undefined') {
      window.___loader = { enqueue: () => {}, hovering: () => {} }
    }
    
    // Version in Konsole ausgeben
    // console.log(VERSION)

    // Iframe-Link-Interceptor: nur aktiv wenn innerhalb eines iframes auf github.io
    if (typeof document === 'undefined') return
    if (window === window.top) return
    if (window.location.hostname !== 'mfn-berlin.github.io') return

    document.addEventListener('click', async (e) => {
      const anchor = e.target.closest('a[href]')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (!href || !href.startsWith('/') || href.startsWith('//')) return

      e.preventDefault()

      // Pfad normalisieren (trailing slash), Hash/Query separat halten
      const url = new URL(href, window.location.origin)
      const pathname = url.pathname.endsWith('/') ? url.pathname : `${url.pathname}/`
      const pageDataUrl = withPrefix(`/page-data${pathname}page-data.json`)

      try {
        const res = await fetch(pageDataUrl, { method: 'HEAD' })
        if (res.ok) {
          navigate(href)
        } else {
          window.top.location.href = `${ARCHIVE_BASE_URL}${href}`
        }
      } catch {
        window.top.location.href = `${ARCHIVE_BASE_URL}${href}`
      }
    })
}

// Alternative: Bei jedem Routenwechsel
export const onRouteUpdate = () => {
    // console.log(VERSION)
}