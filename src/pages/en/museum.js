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
  `)

  const imageMap = {}
  data.allFile.edges.forEach(({ node }) => {
    imageMap[node.relativePath] = node.childImageSharp?.gatsbyImageData
  })

  return (
    <>
      <Header activeNavItem="museum" />
      <main className="bg-white flex flex-col items-center justify-center p-0">
        <AccessibilityNav currentPage="The Museum" />

        <Section backgroundColor="bg-white" columns={1}>
          <CardText
            kicker="Our Vision and Mission"
            headline="We explore the Earth and life in dialogue with people"
            headlineStyle="h1"
            body="As an excellent research museum and an innovative communication center, we shape the scientific and societal dialogue about the future of our planet—worldwide."
            spacing="wide"
            alignment="center"
            buttons={[
              {
                text: "Career",
                variant: "plain",
                url: "en/about/jobs-and-career/"
              },
              {
                text: "Team",
                variant: "plain",
                url: "en/about/team/"
              },
              {
                text: "Contact",
                variant: "plain",
                url: "/en/contact/"
              },
              {
                text: "News",
                variant: "plain",
                url: "en/about/news/"
              },
              {
                text: "Press",
                variant: "plain",
                url: "en/press-releases/"
              }
            ]}
          />
        </Section>

        <Section backgroundColor="bg-white" columns={1} forceGrid={true}>
          <Teaser
            imageProps={{
              imageName: 'Museum_fuer_Naturkunde_mit_Vorplatz_im_Sommer_c_Pablo_Castagnola.jpg',
              alt: "The Museum für Naturkunde in Berlin",
              imageMap: imageMap,
              className: "aspect-[16/9]"
            }}
            textProps={{
              headline: "A House for Nature and Society",
              body: "\"For us, it is about being a place of encounter, dialogue, and democracy. Constant change is part of our DNA. We are the museum of the future.\" Prof. Johannes Vogel, PhD, General Director",
              headlineStyle: "h4",
              spacing: "wide",
            }}
            textStyle="box-white"
            textPosition="bottom-left"
            alignment="center"
            className="w-full"
          />
        </Section>

        <Section
          backgroundColor="bg-Green-100"
          padding="pt-16 pb-0"
        >
          <Teaser
            imageProps={{
              imageName: 'gmp_4451_4451_Perspektive_Eingang.jpeg',
              alt: "Visualization of the winning design from the architectural competition: Main building forecourt with barrier-free entrance",
              imageMap: imageMap,
              className: "aspect-[16/9]"
            }}
            textProps={{
              headline: "The Museum of the Future",
              headlineStyle: "h2",
              spacing: "normal",
            }}
            textStyle="circle-white"
            textPosition="center-center"
            className="w-full"
          />
          <CardText
            body="The Museum für Naturkunde Berlin of the future will be open, integrated, and research-driven—a model for research museums worldwide. With our future plan, we are transforming the museum into a place for exchange about the future of our planet, where knowledge is conveyed and created in new ways—together with society."
            spacing="normal"
            alignment="center"
            buttons={[
              {
                text: "Future Plan",
                variant: "plain",
                url: "en/future/future-plan/"
              }
            ]}
          />
        </Section>

        <Section
          backgroundColor="bg-Green-100"
          padding="pt-0 pb-8"
          columns={3}
        >
          <Card
            variant="classic"
            imageProps={{
              imageName: "Digitize_Museum_fuer_Naturkunde_c_Thomas_Rosenthal.jpg",
              alt: "A scientist working at a computer",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "Collection Access and Development",
              headlineStyle: "h3",
              body: "At the Museum für Naturkunde Berlin, we preserve 30 million collection objects, each holding knowledge of inestimable value. To ensure comprehensive use of the collection, we are making it accessible as part of our future plan—this means securing it through conservation, digitizing it, and creating innovative ways of access and utilization.",
              spacing: "wide"
            }}
            url="en/science/collection-discovery-and-development/"
          />

          <Card
            variant="classic"
            imageProps={{
              imageName: "zp_1200x675_WEBSEITE.jpg",
              alt: "Kids at the Biodiversity Wall",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "Knowledge Transfer",
              headlineStyle: "h3",
              body: "As part of our future plan, we are transforming the museum and its exhibitions into a vibrant hub of knowledge. Through pioneering formats of interdisciplinary and participatory science and an open information infrastructure, we make the museum's collection and research accessible and tangible.",
              spacing: "wide"
            }}
            url="/en/future/knowledge-transfer"
          />

          <Card
            variant="classic"
            imageProps={{
              imageName: "diversityscanner-vielfalt-erhalten.jpg",
              alt: "Researchers at the DiversityScanner of the Center for Integrative Biodiversity Discovery",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "The Species Discovery Factory",
              headlineStyle: "h3",
              body: "Our \"Species Discovery Factory\" contributes to the exploration and preservation of biodiversity by using cutting-edge technology to analyze and systematically classify thousands of insect samples in a short time.",
              spacing: "wide"
            }}
            url="/en/species-discovery-factory"
          />

          <Card
            variant="classic"
            alignment="left"
            imageProps={{
              imageName: "2022_c_IsabelAlvarez_2021_c_AlenaSchmick_TheMuseumsLab.jpeg",
              alt: "TheMuseumsLab",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "TheMuseumsLab",
              headlineStyle: "h3",
              body: "In the international cooperation \"TheMuseumsLab,\" museum professionals from Africa and Europe jointly develop concepts for the future of museums on both continents. This initiative fosters mutual learning, exchange, and professional development.",
              spacing: "wide",
              alignment: "left"
            }}
            url="/en/about/the-museum/themuseumslab"
          />

          <Card
            variant="classic"
            imageProps={{
              imageName: "BromackerTeam_Drohnenfoto_Luftbild_Rohde_1200x800.jpg",
              alt: "Team Bromacker at the excavation site in August 2021, Photo: Luftbild Rohde",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "BROMACKER: New Approaches to Science Communication",
              headlineStyle: "h3",
              body: "This unique project connects research and knowledge transfer at the Ursaurier fossil site in the UNESCO Global Geopark Thuringia Inselsberg - Drei Gleichen, at the Museum für Naturkunde Berlin, and the Friedenstein Castle Foundation in Gotha, while also employing multimedia platforms for broader engagement.",
              spacing: "wide"
            }}
            url="/en/science/bromacker-new-ways-science-communication"
          />

          <Card
            variant="classic"
            imageProps={{
              imageName: "Hamann_Luther_FuerNaturJournal.jpg",
              alt: "Research on the Ribbeck Meteorite",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "Research on the Ribbeck Meteorite",
              headlineStyle: "h3",
              body: "Experts at the Museum für Naturkunde Berlin are studying the extraterrestrial aubrite rock and coordinating an international consortium to research the Ribbeck Meteorite. Initial findings suggest that it could be related to Earth—and may even contain the building blocks of life.",
              spacing: "wide"
            }}
            url="/en/visit-a-distant-relative"
          />
        </Section>
        <Section backgroundColor="bg-Green-100" padding="pt-0 pb-16" forceGrid={true}>
          <Teaser
            imageProps={{
              imageName: "180809_ct_09_www_c_carola-radke_mfn.jpg",
              alt: "Staff member Martin Kirchner working at the CT scanner in the new CT lab",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "An Integrated Research Museum of the Leibniz Association",
              headlineStyle: "h3",
              body: "At the museum, interdisciplinary teams study life on Earth. Collection, research, and knowledge transfer are closely interconnected, working together to generate new insights.",
              spacing: "wide",
              buttons: [
                {
                  text: "Learn More About Our Research",
                  url: "/en/research/",
                  className: "mt-4",
                  variant: "plain",
                },
                {
                  text: "Learn More About Our Opportunities to Participate in Research",
                  url: "/en/participate/",
                  className: "mt-4",
                  variant: "plain",
                }
              ]
            }}
            textStyle="box-white"
            textPosition="bottom-left"
            alignment="center"
            className="w-full"
          />
        </Section>

        <Section backgroundColor="bg-white" columns={1}>
          <CardText
            headline="The Museum"
            headlineStyle="h2"
            body="We Implement Our Future Plan Every Day. Learn more about our work and become part of our team."
            spacing="wide"
            alignment="center"
            buttons={[
              {
                text: "About Us",
                variant: "plain",
                url: "en/about/museum/"
              },
              {
                text: "Construction",
                variant: "plain",
                url: "en/about/building/"
              },
              {
                text: "Team",
                variant: "plain",
                url: "en/about/team/"
              },
              {
                text: "Sponsors",
                variant: "plain",
                url: "en/about/sponsors/"
              }
            ]}
          />
        </Section>

        <Section backgroundColor="bg-White" padding="pt-0 pb-16" columns={3}>
          <Card
            variant="classic"
            imageProps={{
              imageName: "zp_1200x675_WEBSEITE.jpg",
              alt: "Future Plan Installation",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "Future Plan Installation",
              headlineStyle: "h3",
              body: "At four locations along the exhibition tour, installations will provide information about the Future Plan from June 11, 2024, until the end of June 2027.",
              spacing: "wide"
            }}
            url="/en/museum/exhibitions/future-plan"
          />

          <Card
            variant="classic"
            imageProps={{
              imageName: "tagesspiegel-journal-1.jpg",
              alt: "Cover of the 'Für Natur' journal in Tagesspiegel",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "Our Journal Für Natur",
              headlineStyle: "h3",
              body: "In our journals Für Natur, we take you along on our journey into the future.",
              spacing: "wide"
            }}
            url="en/future/nature-journals/"
          />

          <Card
            variant="classic"
            imageProps={{
              imageName: "geschaeftsbericht.jpg",
              alt: "Science Reports and Annual Reports",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "Science Reports and Annual Reports",
              headlineStyle: "h3",
              body: "Our reports provide a detailed insight into our research fields and highlight the most exciting and significant research projects.",
              spacing: "wide"
            }}
            url="en/about/museum/publications-and-downloads"
          />

          <Card
            variant="classic"
            imageProps={{
              imageName: "sauriersaal_vermessung_03_c_hwa-ja_goetz_mfn_0.jpg",
              alt: "Scientist measuring the skull of a Brachiosaurus",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "Career Portal",
              headlineStyle: "h3",
              body: "Join our team in the scientific, technical, or administrative fields.",
              spacing: "wide"
            }}
            url="/en/about/jobs-and-career"
          />

          <Card
            variant="classic"
            imageProps={{
              imageName: "Museum_fuer_Naturkunde_mit_Vorplatz_im_Sommer_c_Pablo_Castagnola.jpg",
              alt: "Birds View of the Museum für Naturkunde",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "Contact",
              headlineStyle: "h3",
              body: "We are happy to connect with you directly regarding specific areas of our museum.",
              spacing: "wide"
            }}
            url="/en/contact"
          />

          <Card
            variant="classic"
            imageProps={{
              imageName: "190603_mfn_gesamt_gruppenfoto_22_1200x800px_c_hwa_ja-goetz_mfn.jpg",
              alt: "Museum staff gathered in front of the main entrance in 2019",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "Team",
              headlineStyle: "h3",
              body: "Search for and find the people who work at the Museum für Naturkunde Berlin.",
              spacing: "wide"
            }}
            url="/en/about/team/"
          />
        </Section>

        <Section columns={1} backgroundColor="bg-Black-100">
          <CardText
            headline="Contact"
            headlineStyle="h1"
            body="Would you like to learn more about the Museum für Naturkunde Berlin?"
            spacing="wide"
            alignment="center"
          />
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-2">
            <Button variant="primary" url="/en/contact/">
              Ask us a question
            </Button>
            <Button variant="primary" url="tel:+4930889140-8591">
              Call us
            </Button>
            <Button variant="primary" url="/en/visit/">
              Visit us at the Museum
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}

export default IndexPage

export const Head = () => (
  <HeadComponent
    title="The Museum"
    description="Welcome to the Museum für Naturkunde Berlin – Discover our digital offerings and plan your visit."
    pathname="/en/museum"
  />
)