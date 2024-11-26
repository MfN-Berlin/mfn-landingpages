import * as React from "react"
import { withPrefix } from "gatsby"
import Section from "../components/elements/Section"
import Card from "../components/elements/Card"
import CardText from "../components/elements/CardText"
import AccessibilityNav from '../components/layouts/AccessibilityNav'
import HeadComponent from '../components/layouts/HeadComponent'

const IndexPage = () => {
  const debugInfo = {
    nodeEnv: process.env.NODE_ENV,
    isProduction: process.env.NODE_ENV === 'production',
    prefix: withPrefix("/"),
    baseUrl: typeof window !== 'undefined' ? window.location.href : '',
    testPath: withPrefix("/images/logo.svg"),
    windowLocation: typeof window !== 'undefined' ? {
      pathname: window.location.pathname,
      hostname: window.location.hostname,
      origin: window.location.origin
    } : null,
    rawPrefix: process.env.GATSBY_PATH_PREFIX,
    buildTime: {
      command: process.env.npm_lifecycle_event,
      prefixPaths: process.env.PREFIX_PATHS === 'true'
    },
    testPaths: {
      root: withPrefix("/"),
      image: withPrefix("/images/logo.svg"),
      absolute: withPrefix("https://example.com"),
      relative: withPrefix("./relative/path")
    }
  }

  return (
    <>
      
      <main className="bg-white flex flex-col items-center justify-center p-0">
        <Section backgroundColor="bg-white" padding="pt-8 pb-0">
          <AccessibilityNav currentPage="Startseite" />
        </Section>


        <Section backgroundColor="bg-white" columns={1}>
          <CardText
            headline="mfn-landingpages v0.0.96"
            headlineStyle="h1"
            body="interne Startseite, hier sind die bereits angelegten Landingpages und Zusatzseiten"
            spacing="wide"
            alignment="center"
          />
        </Section>
        <Section backgroundColor="bg-Yellow-100" columns={1}>
          <div className="p-4 font-mono text-sm">
            <h2 className="font-bold mb-2">Debug Information:</h2>
            <pre className="whitespace-pre-wrap">
              {JSON.stringify(debugInfo, null, 2)}
            </pre>
          </div>
        </Section>

        <Section backgroundColor="bg-Green-100" columns={3} gapClass="gap-8">
          <Card
            variant="classic"
            textProps={{
              headline: "Besuch planen",
              headlineStyle: "h2",
              body: "Öffnungszeiten, Tickets, Anfahrt und alle wichtigen Informationen für Ihren Museumsbesuch.",
              spacing: "regular"
            }}
            url="/de/besuch-planen"
          />
          <Card
            variant="classic"
            textProps={{
              headline: "Mitmachen",
              headlineStyle: "h2",
              body: "Öffnungszeiten, Tickets, Anfahrt und alle wichtigen Informationen für Ihren Museumsbesuch.",
              spacing: "regular"
            }}
            url="/de/mitmachen"
          />
          <Card
            variant="classic"
            textProps={{
              headline: "Forschung",
              headlineStyle: "h2",
              body: "Öffnungszeiten, Tickets, Anfahrt und alle wichtigen Informationen für Ihren Museumsbesuch.",
              spacing: "regular"
            }}
            url="/de/forschung"
          />
          <Card
            variant="classic"
            textProps={{
              headline: "Museum",
              headlineStyle: "h2",
              body: "Öffnungszeiten, Tickets, Anfahrt und alle wichtigen Informationen für Ihren Museumsbesuch.",
              spacing: "regular"
            }}
            url="/de/museum"
          />


          <Card
            variant="classic"
            textProps={{
              headline: "Publikationen",
              headlineStyle: "h2",
              body: "Entdecken Sie unsere wissenschaftlichen Veröffentlichungen und Forschungsergebnisse.",
              spacing: "regular"
            }}
            url="/publikationen"
          />

          <Card
            variant="classic"
            textProps={{
              headline: "404 - Fehlerseite",
              headlineStyle: "h2",
              body: "Ein Beispiel unserer Fehlerseite, falls Sie sich mal verlaufen.",
              spacing: "regular"
            }}
            url="/404"
          />
        </Section>
      </main>
      
    </>
  )
}

export default IndexPage

export const Head = () => (
  <HeadComponent 
    title="Museum für Naturkunde Berlin"
    description="Willkommen im Museum für Naturkunde Berlin - Entdecken Sie unsere digitalen Angebote und planen Sie Ihren Besuch."
    pathname="/"
  />
)