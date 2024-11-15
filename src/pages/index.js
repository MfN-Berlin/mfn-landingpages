import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../components/layouts/Header"
import Footer from "../components/layouts/Footer"
import Section from "../components/elements/Section"
import Card from "../components/elements/Card"
import CardText from "../components/elements/CardText"
import AccessibilityNav from '../components/layouts/AccessibilityNav'
import HeadComponent from '../components/layouts/HeadComponent'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        buildTime
      }
    }
  `)

  // Remove any client-side-only logic from initial render
  React.useEffect(() => {
    // Put client-side-only logic here
  }, [])

  return (
    <>
      
      <main className="bg-white flex flex-col items-center justify-center p-0">
        <Section backgroundColor="bg-white" padding="pt-8 pb-0">
          <AccessibilityNav currentPage="Startseite" />
        </Section>


        <Section backgroundColor="bg-white" columns={1}>
          <CardText
            headline="mfn-landingpages v0.0.38"
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
              {JSON.stringify(data.site, null, 2)}
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
            url="/mfn-landingpages/besuch-planen"
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