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
            <Section backgroundColor="bg-white" padding="pt-8 pb-0">
              <AccessibilityNav currentPage="Startseite" />
            </Section>


            <Section backgroundColor="bg-white" columns={1}>
              <CardText
                headline="Team & Projekte"
                headlineStyle="h1"
                body="tbd"
                spacing="wide"
                alignment="center"
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
    title="Team und Projekte"
    description="…"
    pathname="/de/team-projekte"
  />
)