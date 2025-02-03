import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Location } from '@reach/router'
import Header from "../../components/layouts/Header"
import CardText from '../../components/elements/CardText'
import Section from '../../components/elements/Section'
import StoryTime from '../../components/layouts/StoryTime'
import Footer from '../../components/layouts/Footer'
import AccessibilityNav from '../../components/layouts/AccessibilityNav'
import HeadComponent from '../../components/layouts/HeadComponent'

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
          }
        }
      }
    }
  `)

  const imageMap = React.useMemo(() => {
    return Object.fromEntries(
      data.allFile.edges
        .filter(({ node }) => node.childImageSharp)
        .map(({ node }) => [
          node.relativePath,
          node.childImageSharp.gatsbyImageData
        ])
    )
  }, [data])

  return (
    <Location>
      {({ location }) => (
        <>
          <Header activeNavItem="contact" location={location} />
          <main className="bg-white flex flex-col items-center justify-center p-0">
            <AccessibilityNav currentPage="Contact" />
            <Section backgroundColor="bg-white" padding="pt-8 pb-0">
              {Object.keys(imageMap).length > 0 && (
                <StoryTime
                  imageProps={{
                    imageName: "Museum_fuer_Naturkunde_mit_Vorplatz_im_Sommer_c_Pablo_Castagnola.jpg",
                    alt: "Birds view of the Museum für Naturkunde",
                    imageMap: imageMap,
                    className: "w-full h-full object-cover"
                  }}
                  textProps={{
                    kicker: "Get in Touch",
                    headline: "Contact",
                    body: "We're happy to be in direct contact with you regarding specific areas of our museum. Here's an initial orientation.",
                    headlineStyle: "h1",
                    spacing: "wide",
                    alignment: "center",
                    buttons: [
                      {
                        text: "Team",
                        url: "en/about/team",
                        variant: "plain"
                      },
                      {
                        text: "FAQ",
                        url: "en/plan-your-visit/faq",
                        variant: "plain"
                      },
                      {
                        text: "Press",
                        url: "en/press-releases",
                        variant: "plain"
                      },
                      {
                        text: "Plan Your Visit",
                        url: "en/visit/",
                        variant: "plain"
                      },
                      {
                        text: "About Us",
                        url: "en/about/museum",
                        variant: "plain"
                      }]
                  }}
                  imagePosition="right"
                />
              )}
            </Section>
            <Section backgroundColor="bg-Green-100" columns={2} padding="pt-16 pb-16">
              <CardText
                headline="General Contact"
                headlineStyle="h3"
                spacing="regular"
                alignment="left"
                body={`For questions about the museum<br/>
                <a href='mailto:info@mfn.berlin'>info@mfn.berlin</a><br/>
                (030) 889140-8591<br/>
                Monday to Thursday 8am-4:30pm, Friday 7:30am-2:30pm`}
              />
              <CardText
                headline="Press Contact"
                headlineStyle="h3"
                spacing="regular"
                alignment="left"
                body={`For media representatives, we have set up a <a href='en/press-releases'>press portal</a>.<br/>
                <a href='mailto:presse@mfn.berlin'>presse@mfn.berlin</a><br/>
                <a href='mailto:gesine.steiner@mfn.berlin'>Dr. Gesine Steiner</a> (Press Officer)<br/>
                030 889140-8917`}
              />
            </Section>
            <Section backgroundColor="bg-Green-100" columns={2} padding="py-8">
              <CardText
                headline="Events"
                headlineStyle="h3"
                spacing="regular"
                alignment="left"
                body={`For questions about our <a href='en/museum/events'>events</a><br/>
                
                <a href='mailto:info@mfn.berlin'>info@mfn.berlin</a>`}
              />
              <CardText
                headline="Guided Tours"
                headlineStyle="h3"
                spacing="regular"
                alignment="left"
                body={`Everything about our <a href='/en/museum/education/guided-tours'>guided tours</a><br/>
                <a href='mailto:bildung@mfn.berlin'>bildung@mfn.berlin</a><br/>
                <a href='https://survey.naturkundemuseum-berlin.de/en/contact%20form'>Contact form</a> (currently out of order) for email inquiries`}
              />
            </Section>
            <Section backgroundColor="bg-Green-100" columns={2} padding="py-8">
              <CardText
                headline="Museum Shop"
                headlineStyle="h3"
                spacing="regular"
                alignment="left"
                body={`Our <a href='https://www.naturkundemuseum-shop.de'>shop</a> is located on the ground floor<br/>
                <a href='mailto:shop@mfn.berlin'>shop@mfn.berlin</a><br/>
                030 8891406101`}
              />
              <CardText
                headline="Venue Rental"
                headlineStyle="h3"
                spacing="regular"
                alignment="left"
                body={`For individual offers, please contact: Stefanie Krzyzniewski (<a href='mailto:s.krzyzniewski@mfn.berlin'>s.krzyzniewski@mfn.berlin</a>)`}
              />
            </Section>
            <CardText
              headline="Library"
              headlineStyle="h3"
              spacing="regular"
              alignment="left"
              body={`<a href='/en/science/library'>The library</a> is accessible Tuesday through Friday for external users. Please contact us via <a href='mailto:bibliothek@mfn.berlin'>email</a> to schedule an appointment.`}
            />
            <CardText
              headline="Archive"
              headlineStyle="h3"
              spacing="regular"
              alignment="left"
              body={`Archive visits are only possible by prior appointment.<br/>
              <a href='mailto:archiv@mfn.berlin'>archiv@mfn.berlin</a><br/>
              030 889140 8519<br/>
              `}
            />
          </main>
          <Footer />
        </>
      )}
    </Location>
  )
}

export default ContactPage

export const Head = () => (
  <HeadComponent
    title="Contact | Museum für Naturkunde Berlin"
    description="Get in touch with the Museum für Naturkunde Berlin."
    pathname="/en/contact"
  />
)