import * as React from "react"
import Section from "../../components/elements/Section"
import Card from "../../components/elements/Card"
import CardText from "../../components/elements/CardText"
import AccessibilityNav from '../../components/layouts/AccessibilityNav'
import HeadComponent from '../../components/layouts/HeadComponent'
import Header from "../../components/layouts/Header"
import Footer from "../../components/layouts/Footer"
import { Location } from '@reach/router'

const IndexPage = () => {
  return (
    <Location>
      {({ location }) => (
        <>
          <Header activeNavItem="startseite" location={location} />
          <main className="bg-white flex flex-col items-center justify-center p-0">
            <AccessibilityNav currentPage="Startseite" />


            <Section backgroundColor="bg-white" columns={1}>
              <CardText
                headline="mfn-landingpages DE"
                headlineStyle="h1"
                body="interne Startseite, hier sind die bereits angelegten Landingpages und Zusatzseiten"
                spacing="wide"
                alignment="center"
              />
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
                url="/de/publikationen"
              />

              <Card
                variant="classic"
                textProps={{
                  headline: "Kontakt",
                  headlineStyle: "h2",
                  body: "Ein Beispiel unserer Fehlerseite, falls Sie sich mal verlaufen.",
                  spacing: "regular"
                }}
                url="/de/kontakt"
              />
            </Section>
          </main>
          <Footer />
        </>
      )}
    </Location>
  )
}

export default IndexPage

export const Head = () => (
  <HeadComponent 
    title="Museum für Naturkunde Berlin"
    description="Willkommen im Museum für Naturkunde Berlin - Entdecken Sie unsere digitalen Angebote und planen Sie Ihren Besuch."
    pathname="/de/"
  />
)