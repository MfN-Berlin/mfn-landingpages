/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

import './src/styles/global.css'

// Version logging
const VERSION = 'v1.0.25'

export const onClientEntry = () => {
    // Temporär Prefetching deaktivieren
    if (typeof window !== 'undefined') {
      window.___loader = { enqueue: () => {}, hovering: () => {} }
    }
    
    // Version in Konsole ausgeben
    // console.log(VERSION)
}

// Alternative: Bei jedem Routenwechsel
export const onRouteUpdate = () => {
    // console.log(VERSION)
}