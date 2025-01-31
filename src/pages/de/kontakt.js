import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Header from "../../components/layouts/Header"
import Section from '../../components/elements/Section'
import StoryTime from '../../components/layouts/StoryTime'
import Footer from '../../components/layouts/Footer'
import AccessibilityNav from '../../components/layouts/AccessibilityNav'
import HeadComponent from '../../components/layouts/HeadComponent'
import CardText from '../../components/elements/CardText'

const IndexPage = () => {
    const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `);

    const imageMap = {};
    data.allFile.edges.forEach(({ node }) => {
        imageMap[node.relativePath] = node.childImageSharp?.gatsbyImageData;
    });

    return (
        <>
            <Header activeNavItem="mitmachen" />
            <main className="bg-white flex flex-col items-center justify-center p-0">
                    <AccessibilityNav currentPage="Kontakt" />


                <Section backgroundColor="bg-white" gapClass="gap-20 xl:gap-36">
                    <StoryTime
                        imageProps={{
                            imageName: "Museum für Naturkunde mit Vorplatz im Sommer (c) Pablo Castagnola.jpg",
                            alt: "Fassade des Museums für Naturkunde",
                            imageMap: imageMap,
                            className: "w-full h-full object-cover"
                        }}
                        textProps={{
                            kicker: "Für Sie erreichbar",
                            headline: "Kontakt",
                            body: "Wir stehen gerne mit Ihnen in direktem Kontakt zu einzelnen Bereichen unseres Museums. Hier bieten wir Ihnen eine erste Orientierung.",
                            headlineStyle: "h1",
                            spacing: "wide",
                            alignment: "center",
                            buttons: [
                                {
                                    text: "Team",
                                    url: "de/ueber-uns/team",
                                    variant: "plain"
                                },
                                {
                                    text: "FAQ",
                                    url: "de/besuch-planen/faq",
                                    variant: "plain"
                                },
                                {
                                    text: "Presse",
                                    url: "de/pressemitteilungen",
                                    variant: "plain"
                                },
                                {
                                    text: "Besuch planen",
                                    url: "de/besuch-planen/",
                                    variant: "plain"
                                }
                                ,
                                {
                                    text: "Über uns",
                                    url: "de/ueber-uns/das-museum",
                                    variant: "plain"
                                }]

                        }}
                        imagePosition="right"
                    />
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
                        body={`Für Medienvertreter haben wir ein <a href='de/pressemitteilungen'>Presseportal</a> eingerichtet.<br/>
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
                        <a href='https://survey.naturkundemuseum-berlin.de/de/Kontaktformular'>Kontaktformular</a> (aktuell nicht erreichbar) für Mailanfragen`}
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
                        body={`Für ein individuelles Angebot wenden Sie sich gern an Stefanie Krzyzniewski 
                        (<a href='mailto:s.krzyzniewski@mfn.berlin'>s.krzyzniewski@mfn.berlin</a>)`}
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
    )
}

export default IndexPage

export const Head = () => (
    <HeadComponent
        title="Kontakt"
        description="Willkommen im Museum für Naturkunde Berlin - Wir freuen uns von Ihnen zu hören!"
        pathname="/de/kontakt"
    />
)