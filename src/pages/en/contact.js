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
            <Section backgroundColor="bg-white" padding="pt-8 pb-0">
              <AccessibilityNav currentPage="Contact" />
              {Object.keys(imageMap).length > 0 && (
                <StoryTime
                  imageProps={{
                    imageName: "PCastagnola_MfN_Einzelportraits_06-1.jpg",
                    alt: "Thomas Kleinert, Museumsschlosser, ist immer für ein Wort zu haben. Foto: Pablo Castagnola",
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
                        url: "de/museum/team",
                        variant: "plain"
                      },
                      {
                        text: "FAQ",
                        url: "de/besuch-planen/faq",
                        variant: "plain"
                      },
                      {
                        text: "Presse",
                        url: "de/presse",
                        variant: "plain"
                      },
                      {
                        text: "Besuch planen",
                        url: "de/besuch-planen",
                        variant: "plain"
                      }
                      ,
                      {
                        text: "Über uns",
                        url: "de/ueber-uns",
                        variant: "plain"
                      }]
                  }}
                  imagePosition="right"
                />
              )}
            </Section>
            <Section backgroundColor="bg-Green-100" columns={2} padding="pt-16 pb-8">
              <CardText
                headline="Allgemeiner Kontakt"
                headlineStyle="h3"
                spacing="regular"
                alignment="left"
                body={`Für Fragen rund um das Museum<br/>
                <a href='mailto:info@mfn.berlin'>info@mfn.berlin</a><br/>
                (030) 889140-8591<br/>
                Montag bis Donnerstag 8-16.30 Uhr, Freitag 7.30-14.30 Uhr`}
              />
              <CardText
                headline="Pressekontakt"
                headlineStyle="h3"
                spacing="regular"
                alignment="left"
                body={`Für Medienvertreter haben wir ein <a href='/de/presse'>Presseportal</a> eingerichtet.<br/>
                <a href='mailto:presse@mfn.berlin'>presse@mfn.berlin</a><br/>
                <a href='mailto:gesine.steiner@mfn.berlin'>Dr. Gesine Steiner</a> (Pressesprecherin)<br/>
                030 889140-8917`}
              />
            </Section>
            <Section backgroundColor="bg-Green-100" columns={2} padding="py-8">
              <CardText
                headline="Veranstaltungen"
                headlineStyle="h3"
                spacing="regular"
                alignment="left"
                body={`Für Fragen rund um unsere <a href='/de/mitmachen/veranstaltungen'>Veranstaltungen</a><br/>
                
                <a href='mailto:info@mfn.berlin'>info@mfn.berlin</a>`}
              />
              <CardText
                headline="Führungen"
                headlineStyle="h3"
                spacing="regular"
                alignment="left"
                body={`Alles rund um unsere <a href='/de/museum/bildung/fuehrungen'>Führungen</a><br/>
                <a href='mailto:bildung@mfn.berlin'>bildung@mfn.berlin</a><br/>
                <a href='/de/kontakt'>Kontaktformular</a> für Mailanfragen`}
              />
            </Section>
            <Section backgroundColor="bg-Green-100" columns={2} padding="py-8">
              <CardText
                headline="Museumsshop"
                headlineStyle="h3"
                spacing="regular"
                alignment="left"
                body={`Unser <a href='https://www.naturkundemuseum-shop.de'>Shop</a> findet sich im Erdgeschoss<br/>
                <a href='mailto:shop@mfn.berlin'>shop@mfn.berlin</a><br/>
                030 8891406101`}
              />
              <CardText
                headline="Vermietung"
                headlineStyle="h3"
                spacing="regular"
                alignment="left"
                body={`Für ein individuelles Angebot wenden Sie sich gern an:<br/>
                <a href='mailto:s.krzyzniewski@mfn.berlin'>Stefanie Krzyzniewski</a><br/>
                <a href='mailto:s.krzyzniewski@mfn.berlin'>s.krzyzniewski@mfn.berlin</a>`}
              />
            </Section>
            <Section backgroundColor="bg-Green-100" columns={2} padding="pt-8 pb-16">
              <CardText
                headline="Bibliothek"
                headlineStyle="h3"
                spacing="regular"
                alignment="left"
                body={`<a href='/de/wissenschaft/bibliothek'>Die Bibliothek</a> ist Dienstag bis Freitag für externe Nutzende zugänglich. Bitte melden Sie sich per <a href='mailto:bibliothek@mfn.berlin'>Email</a> zwecks Terminabsprache.`}
              />
              <CardText
                headline="Archiv"
                headlineStyle="h3"
                spacing="regular"
                alignment="left"
                body={`Der Archivbesuch ist nur nach vorheriger Terminvereinbarung möglich.<br/>
                <a href='mailto:archiv@mfn.berlin'>archiv@mfn.berlin</a><br/>
                030 889140 8519<br/>
                `}
              />
            </Section>
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