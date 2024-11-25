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
          <Header activeNavItem="home" location={location} />
          <main className="bg-white flex flex-col items-center justify-center p-0">
            <Section backgroundColor="bg-white" padding="pt-8 pb-0">
              <AccessibilityNav currentPage="Home" />
            </Section>


            <Section backgroundColor="bg-white" columns={1}>
              <CardText
                headline="MfN Landing Pages EN"
                headlineStyle="h1"
                body="Internal homepage, here are the already created landing pages and additional pages"
                spacing="wide"
                alignment="center"
              />
            </Section>
           

            <Section backgroundColor="bg-Green-100" columns={3} gapClass="gap-8">
              <Card
                variant="classic"
                textProps={{
                  headline: "Plan Your Visit",
                  headlineStyle: "h2",
                  body: "Opening hours, tickets, directions and all important information for your museum visit.",
                  spacing: "regular"
                }}
                url="/en/visit"
              />
              <Card
                variant="classic"
                textProps={{
                  headline: "Participate",
                  headlineStyle: "h2",
                  body: "Discover ways to get involved with our museum and research.",
                  spacing: "regular"
                }}
                url="/en/participate"
              />
              <Card
                variant="classic"
                textProps={{
                  headline: "Research",
                  headlineStyle: "h2",
                  body: "Explore our scientific research and findings.",
                  spacing: "regular"
                }}
                url="/en/research"
              />
              <Card
                variant="classic"
                textProps={{
                  headline: "Museum",
                  headlineStyle: "h2",
                  body: "Learn about our vision, mission and future plans.",
                  spacing: "regular"
                }}
                url="/en/museum"
              />


              <Card
                variant="classic"
                textProps={{
                  headline: "Publications",
                  headlineStyle: "h2",
                  body: "Discover our scientific publications and research results.",
                  spacing: "regular"
                }}
                url="/en/publications"
              />

              <Card
                variant="classic"
                textProps={{
                  headline: "Contact",
                  headlineStyle: "h2",
                  body: "Get in touch with us.",
                  spacing: "regular"
                }}
                url="/en/contact"
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
    description="Welcome to the Museum für Naturkunde Berlin - Discover our digital offerings and plan your visit."
    pathname="/en/"
  />
)