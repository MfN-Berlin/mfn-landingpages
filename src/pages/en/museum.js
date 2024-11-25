import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Header from "../../components/layouts/Header"
import Button from "../../components/elements/Button"
import CardText from '../../components/elements/CardText'
import Section from '../../components/elements/Section'
import Card from '../../components/elements/Card'
import Footer from '../../components/layouts/Footer'
import AccessibilityNav from '../../components/layouts/AccessibilityNav'
import HeadComponent from '../../components/layouts/HeadComponent'
import Teaser from "../../components/layouts/Teaser"
import Blockquote from "../../components/layouts/Blockquote"
import { Location } from '@reach/router'

const MuseumPage = () => {
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
    <Location>
      {({ location }) => (
        <>
          <Header activeNavItem="museum" location={location} />
          <main className="bg-white flex flex-col items-center justify-center p-0">
            <Section backgroundColor="bg-white" padding="pt-8 pb-0">
              <AccessibilityNav currentPage="Museum" />
            </Section>


            <Section backgroundColor="bg-white" columns={1}>
              <CardText
                kicker="Our Vision and Mission"
                headline="We explore Earth and Life in dialogue with people"
                headlineStyle="h1"
                body="As an excellent research museum and innovative communication center, we shape the scientific and social dialogue about the future of our Earth - worldwide."
                spacing="wide"
                alignment="center"
                buttons={[
                  {
                    text: "Career",
                    variant: "plain",
                    url: "/en/museum/jobs-and-career"
                  },
                  {
                    text: "Team",
                    variant: "plain",
                    url: "/en/museum/team"
                  },
                  {
                    text: "Service",
                    variant: "plain",
                    url: "/en/museum/service"
                  },
                  {
                    text: "News",
                    variant: "plain",
                    url: "/en/museum/news"
                  },
                  {
                    text: "Sponsors",
                    variant: "plain",
                    url: "/en/museum/sponsors"
                  }
                ]}
              />
            </Section>
            <Section backgroundColor="bg-white" columns={1}>
              <Teaser
                imageProps={{
                  imageName: 'Visualisierung_Innenhof@GMP mit Rainer Schmidt Landschaftsarchitekt.jpg',
                  alt: "Visualisierung_Innenhof@GMP mit Rainer Schmidt Landschaftsarchitekt",
                  imageMap: imageMap,
                  className: "aspect-[16/9] dada"
                }}
                textProps={{
                  kicker: "What inspires us",
                  headline: "A House for Nature and Society",
                  body: "For us, it's about being a place of encounter, dialogue, and democracy. Constant change is part of our DNA. We are the Museum of the Future - Prof. Johannes Vogel, PhD, Director General",
                  headlineStyle: "h4",
                  spacing: "normal",
                  buttons: [
                    {
                      text: "Interview with Johannes Vogel",
                      variant: "plain",
                      url: "#"
                    },
                    {
                      text: "Our Vision",
                      variant: "plain",
                      url: "#"
                    }
                  ]
                }}
                textStyle="box-white"
                textPosition="bottom-left"
                alignment="center"
                className="w-full"
              />
            </Section>
            <Section
              backgroundColor="bg-Blue-200"
              innerBg="bg-Green-100"
              padding="pt-16 pb-0"
            >
              
                <Teaser
                  imageProps={{
                    imageName: 'agn_Adlershof_NMB_Perspektive.jpeg',
                    alt: "Visualisierung des neuen Standorts in Adlershof: Der Gebäudeentwurf ist vom Wechsel von Begrünung und Holzfassade geprägt. Der rechteckige Grundriss gliedert sich über drei Geschosse.",
                    imageMap: imageMap,
                    className: "aspect-[16/9]"
                  }}
                  textProps={{
                    headline: "The Future Plan",
                    headlineStyle: "h1-small",
                    spacing: "normal",
                  }}
                  textStyle="circle-white"
                  textPosition="center-center"
                  className="w-full"
                />
              
            </Section>
            <Section
              backgroundColor="bg-Blue-200"
              innerBg="bg-Green-100"
              padding="pt-0 pb-0"
            >
              <CardText
                body="The future plan that the Museum implements daily sees the renovation of the Museum, which encompasses the more than 30 million objects of the Museum's scientific collection, making it more accessible and accessible."
                spacing="normal"
                alignment="center"
                buttons={[
                  {
                    text: "Future Plan",
                    variant: "plain",
                    url: "#"
                  },
                  {
                    text: "Knowledge Transfer",
                    variant: "plain",
                    url: "#"
                  }
                ]}
              />
            </Section>
            <Section
              backgroundColor="bg-Blue-200"
              innerBg="bg-Green-100"
              padding="pt-0 pb-16"
              columns={3}
            >
              <Card
                variant="classic"
                imageProps={{
                  imageName: "zp_1200x675_WEBSEITE.jpg",
                  alt: "logo Zukunftsplan and shadow drawing of a person with a wheelbarrow",
                  imageMap: imageMap,
                  className: "w-full h-auto object-cover"
                }}
                textProps={{
                  headline: "The Future Plan",
                  headlineStyle: "h3",
                  body: "Read our annual report, which provides an easy-to-understand overview of the Museum für Naturkunde Berlin's activities in the past year.",
                  spacing: "wide"
                }}
                url="/flat-card-page"
              />
              <Card
                variant="classic"
                imageProps={{
                  imageName: "Digitize_Museum_fuer_Naturkunde_(c)_Thomas_Rosenthal_3.jpg",
                  alt: "Besucherinnen bestaunen Insektenfilm in der Ausstellung",
                  imageMap: imageMap,
                  className: "w-full h-auto object-cover"
                }}
                textProps={{
                  headline: "Accessing the entire collection",
                  headlineStyle: "h3",
                  body:"The Museum für Naturkunde Berlin experiments with various individually tailored formats to engage with many different target groups in dialogue.",
                  spacing: "wide"
                }}
                url="/flat-card-page"
              />
              <Card
                variant="classic"
                imageProps={{
                  imageName: "Museums-Evolution 3 (c) Pablo Castagnola.jpg",
                  alt: "Christiane Quaisser und Jana Hoffmann an der Massendigitalisierungsstraße in der Sonderausstellung digitize!",
                  imageMap: imageMap,
                  className: "w-full h-auto object-cover"
                }}
                textProps={{
                  headline: "Museum development on Youtube",
                  headlineStyle: "h3",
                  body:"Read our annual report, which provides an easy-to-understand overview of the Museum für Naturkunde Berlin's activities in the past year.",
                  spacing: "wide"
                }}
                url="/flat-card-page"
              />
            
              <Card
                variant="classic"
                imageProps={{
                  imageName: "naturderdinge.png",
                  alt: "naturderdinge logo",
                  imageMap: imageMap,
                  className: "w-full h-auto object-cover"
                }}
                textProps={{
                  headline: "Natur der Dinge. Eine partizipative Sammlung des Anthropozäns",
                  headlineStyle: "h3",
                  body: "In the collection experiment, we illuminate both the planetary power of humans as a geologic factor and their entanglement in the Earth system .",
                  spacing: "wide"
                }}
                url="/flat-card-page"
              />
              <Card
                variant="classic"
                imageProps={{
                  imageName: "BromackerTeam_Drohnenfoto_Luftbild_Rohde_1200x800.jpg",
                  alt: "Team Bromacker in der Grabungsstelle im August 2021, Foto: Luftbild Rohde",
                  imageMap: imageMap,
                  className: "w-full h-auto object-cover"
                }}
                textProps={{
                  headline: "BROMACKER: Neue Wege der Wissenschafts-kommunikation",
                  headlineStyle: "h3",
                  body:"Im August 2020 hat das einmalige Kooperationsprojekt 'Öffnen von Wissenschaft: Neue Wege des Wissenstransfers am Beispiel des Forschungsprojekts BROMACKER' unter der Mitwirkung eines interdisziplinären Forschungsteams begonnen.",
                  spacing: "wide"
                }}
                url="/flat-card-page"
              />
              <Card
                variant="classic"
                imageProps={{
                  imageName: "TR1C6470.jpg",
                  alt: "Personen stehen vor dem verbildlichten Netzwerk der Anthropozänobjekte",
                  imageMap: imageMap,
                  className: "w-full h-auto object-cover"
                }}
                textProps={{
                  headline: "Knowledge connects",
                  headlineStyle: "h3",
                  body:"The Museum für Naturkunde Berlin experiments with various individually tailored formats to engage with many different target groups in dialogue.",
                  buttons: [
                    {
                      text: "Formats for Science Communication",
                      variant: "plain",
                      url: "#"
                    },
                    {
                      text: "Political Consultation",
                      variant: "plain",
                      url: "#"
                    },
                    {
                      text: "Our Engagement for Citizen Science",
                      variant: "plain",
                      url: "#"
                    }
                  ],
                  spacing: "wide",
                  alignment:"left"
                }}
                url="/flat-card-page"
              />
              <Blockquote
                            text="Die sieben Exzellenzcluster in Berlin leben die aktive, transdisziplinäre Zusammenarbeit und sind genau deshalb so wichtig für die BUA. Wenn ich die BUA-Cluster besuche, erlebe ich all das: transd﻿isziplinäre Zusammenarbeit, die Suche nach Lösungen für die großen Probleme, die wir heute und in Zukunft haben."
                            source="Prof. Johannes Vogel"
                            sourceTitle="(Leiter des Museums)"
                            backgroundColor=""  // Green-500 color
                            className="bg-Blue-500 col-span-1md:col-span-2"
                        />
              <Card
                variant="classic"
                imageProps={{
                  imageName: "180809_ct_09_www_c_carola-radke_mfn.jpg",
                  alt: "Mitarbeiter Martin Kirchner arbeitet am Computertomografen im neuen CT Labor",
                  imageMap: imageMap,
                  className: "w-full h-auto object-cover"
                }}
                textProps={{
                  headline: "Our scientific work",
                  headlineStyle: "h3",
                  body:"The Museum für Naturkunde Berlin experiments with various individually tailored formats to engage with many different target groups in dialogue.",
                  spacing: "wide"
                }}
                url="/flat-card-page"
              />
            </Section>
            <Section
              backgroundColor="bg-White"
              padding="pt-16 pb-0"
            >
              
                <Teaser
                  imageProps={{
                    imageName: '230826_mfn_318.jpg',
                    alt: "Fassade des Museums und Menschen die in der Schlange anstehen",
                    imageMap: imageMap,
                    className: "aspect-[16/9]"
                  }}
                  textProps={{
                    headline: "Museum Today",
                    headlineStyle: "h1-small",
                    spacing: "normal",
                  }}
                  textStyle="circle-white"
                  textPosition="center-center"
                  className="w-full h-[25rem] text-sm"
                  alignment="center"
                />
              
            </Section>
            <Section backgroundColor="bg-white" columns={1}>
              <CardText
                body="The future plan that the Museum implements daily sees the renovation of the Museum, which encompasses the more than 30 million objects of the Museum's scientific collection, making it more accessible and accessible."
                spacing="wide"
                alignment="center"
                buttons={[
                  {
                    text: "About Us",
                    variant: "plain",
                    url: "#"
                  },
                  {
                    text: "Building",
                    variant: "plain",
                    url: "#"
                  },
                  {
                    text: "The Museum",
                    variant: "plain",
                    url: "#"
                  },
                  {
                    text: "Sponsors",
                    variant: "plain",
                    url: "#"
                  }
                ]}
              />
            </Section>
            <Section
              backgroundColor="bg-White"
              padding="pt-0 pb-16"
              columns={3}
            >
              <Card
                variant="classic"
                imageProps={{
                  imageName: "tagesspiegel-journal-1.jpg",
                  alt: "Titelbild des Journals 'für natur' im Tagesspiegel",
                  imageMap: imageMap,
                  className: "w-full h-auto object-cover"
                }}
                textProps={{
                  headline: "Our Magazine „für natur“",
                  headlineStyle: "h3",
                  body: "In our journals for nature, we take you on this journey to the future.",
                  spacing: "wide"
                }}
                url="/flat-card-page"
              />
              <Card
                variant="classic"
                imageProps={{
                  imageName: "geschaeftsbericht.jpg",
                  alt: "Unser Geschäftsbericht",
                  imageMap: imageMap,
                  className: "w-full h-auto object-cover"
                }}
                textProps={{
                  headline: "Our Annual Report 2023",
                  headlineStyle: "h3",
                  body:"The Museum für Naturkunde Berlin experiments with various individually tailored formats to engage with many different target groups in dialogue.",
                  spacing: "wide"
                }}
                url="/flat-card-page"
              />
              <Card
                variant="classic"
                imageProps={{
                  imageName: "sauriersaal_vermessung_03_c_hwa-ja_goetz_mfn_0.jpg",
                  alt: "Wissenschaftler vermisst den Schädel des Brachiosaurus in der Ausstellung des Museums für Naturkunde",
                  imageMap: imageMap,
                  className: "w-full h-auto object-cover"
                }}
                textProps={{
                  headline: "Career Portal",
                  headlineStyle: "h3",
                  body:"Read our annual report, which provides an easy-to-understand overview of the Museum für Naturkunde Berlin's activities in the past year.",
                  spacing: "wide"
                }}
                url="/flat-card-page"
              />
            
              <Card
                variant="classic"
                imageProps={{
                  imageName: "conus_kegelschnecken_c_hwaja_goetz_mfn.jpg",
                  alt: "Kegelschnecken © HwaJa Goetz, MfN",
                  imageMap: imageMap,
                  className: "w-full h-auto object-cover"
                }}
                textProps={{
                  headline: "Memberships",
                  headlineStyle: "h3",
                  body: "In the collection experiment, we illuminate both the planetary power of humans as a geologic factor and their entanglement in the Earth system .",
                  spacing: "wide"
                }}
                url="/flat-card-page"
              />
              <Card
                variant="classic"
                imageProps={{
                  imageName: "Jana Hoffmann und Christiane Quaiser in digitize (c) Pablo Castagnola.jpg",
                  alt: "Jana Hoffmann und Christiane Quaiser sitzen vor einer Wand auf Insektenkästen in der Sonderausstellung digitize!",
                  imageMap: imageMap,
                  className: "w-full h-auto object-cover"
                }}
                textProps={{
                  headline: "Service",
                  headlineStyle: "h3",
                  body:"Im August 2020 hat das einmalige Kooperationsprojekt 'Öffnen von Wissenschaft: Neue Wege des Wissenstransfers am Beispiel des Forschungsprojekts BROMACKER' unter der Mitwirkung eines interdisziplinären Forschungsteams begonnen.",
                  spacing: "wide"
                }}
                url="/flat-card-page"
              />
              <Card
                variant="classic"
                imageProps={{
                  imageName: "190603_mfn_gesamt_gruppenfoto_22_1200x800px_c_hwa_ja-goetz_mfn.jpg",
                  alt: "Beschäftigte des Museums versammeln sich vor dem Hauptportal, Stand 2019",
                  imageMap: imageMap,
                  className: "w-full h-auto object-cover"
                }}
                textProps={{
                  headline: "Team",
                  headlineStyle: "h3",
                  body:"The Museum für Naturkunde Berlin experiments with various individually tailored formats to engage with many different target groups in dialogue.",
                  spacing: "wide"
                }}
                url="/flat-card-page"
              />
            </Section>
            <Section columns={1} backgroundColor="bg-Black-100">
                        <CardText
                            headline="Contact"
                            headlineStyle="h1"
                            body="Do you need anything else to join us?"
                            spacing="wide"
                            alignment="center"
                        />
                        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
                            <Button variant="primary">Ask us a question</Button>
                            <Button variant="primary">Call us</Button>
                            <Button variant="primary">Visit us at the Museum</Button>
                        </div>

                    </Section>
          </main>
          <Footer />
        </>
      )}
    </Location>
  )
}

export default MuseumPage

export const Head = () => (
  <HeadComponent
    title="Museum | Museum für Naturkunde Berlin"
    description="Discover the Museum für Naturkunde Berlin - A place of encounter, dialogue and democracy."
    pathname="/en/museum"
  />
)