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
            headline="We research Earth and life in dialogue with people"
            headlineStyle="h1"
            body="As an excellent research museum and innovative communication center, we shape the scientific and social dialogue about the future of our planet – worldwide."
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
                text: "Sponsors",
                variant: "plain",
                url: "en/about/berliner-sparkasse-main-sponsor-museum-fur-naturkunde-berlin/"
              }
            ]}
          />
        </Section>

        <Section backgroundColor="bg-white" columns={1} forceGrid={true}>
          <Teaser
            imageProps={{
              imageName: 'gmp_4451_4451_Perspektive_Eingang.jpeg',
              alt: "Visualization of the winning design from the architectural competition: Main building forecourt with barrier-free entrance",
              imageMap: imageMap,
              className: "aspect-[16/9] dada"
            }}
            textProps={{
              headline: "A House for Nature and Society",
              body: "The Museum für Naturkunde Berlin of the future will be open, integrated and strong in research, a role model for research museums worldwide. Our script on the way there is our future plan.",
              headlineStyle: "h4",
              spacing: "wide",
              buttons: [
                {
                  text: "Future Plan",
                  url: "/en/future/future-plan/",
                  className: "mt-4",
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
          backgroundColor="bg-Green-100"
          padding="pt-16 pb-0"
        >
          <Teaser
            imageProps={{
              imageName: 'agn_Adlershof_NMB_Perspektive.jpeg',
              alt: "Visualization of the new location in Adlershof: The building design is characterized by alternating greenery and wooden façade. The rectangular layout is divided over three floors.",
              imageMap: imageMap,
              className: "aspect-[16/9]"
            }}
            textProps={{
              headline: "The Museum in the Future",
              headlineStyle: "h2",
              spacing: "normal",
            }}
            textStyle="circle-white"
            textPosition="center-center"
            className="w-full"
          />
          <CardText
            body="The future plan, which the museum implements daily, envisions the structural renovation of the museum, and will render the scientific collection of more than 30 million objects more accessible and better available."
            spacing="normal"
            alignment="center"
            buttons={[
              {
                text: "Future Plan",
                variant: "plain",
                url: "en/future/future-plan/"
              },
              {
                text: "Knowledge Transfer",
                variant: "plain",
                url: "en/future/knowledge-transfer/"
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
              headline: "Collection Development and Access",
              headlineStyle: "h3",
              body: "At the Museum für Naturkunde Berlin, we preserve 30 million collection objects, each holding knowledge of invaluable worth. To enable comprehensive use of the collection, we are making it accessible as part of our Future Plan – this means conservation, digital cataloging, and creating innovative access solutions.",
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
              body: "As part of the Future Plan, we are developing the museum and its exhibition into a vibrant place of knowledge, making the museum's collection and research accessible and experienceable through forward-looking formats of interdisciplinary and participatory science and an open information infrastructure.",
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
              headline: "The species discovery factory",
              headlineStyle: "h3",
              body: "Our \"Species Discovery Factory\" contributes to the research and conservation of biological diversity by using state-of-the-art technology to analyze and systematically classify thousands of insect samples in a short time.",
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
              headline: "The Museums Lab",
              headlineStyle: "h3",
              body: "In the international cooperation 'TheMuseumsLab', African and European museum professionals jointly develop concepts for the future of museums in Africa and Europe. The initiative promotes mutual learning, exchange, and professional development.",
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
              headline: "BROMACKER: New Ways of Science Communication",
              headlineStyle: "h3",
              body: "This unique project connects research and knowledge transfer at the primitive reptile excavation site in the UNESCO Global Geopark Thuringia Inselsberg - Drei Gleichen, at the Museum für Naturkunde Berlin, at the Friedenstein Castle Foundation Gotha, and through multimedia platforms.",
              spacing: "wide"
            }}
            url="/en/science/bromacker-new-ways-science-communication"
          />

          <Card
            variant="classic"
            imageProps={{
              imageName: "Hamann_Luther_FuerNaturJournal.jpg",
              alt: "Hamann_Luther_Für Natur Journal",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "Research on the Ribbeck Meteorite",
              headlineStyle: "h3",
              body: "The meteorite fall in Ribbeck in January 2024 caused a sensation. Experts are examining the aubrite rock and leading an international research consortium. Initial analyses suggest a possible connection to Earth and building blocks of life.",
              spacing: "wide"
            }}
            url="en/visit-a-distant-relative"
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
              body: "At the museum, teams from various disciplines study life on Earth. Collection, research, and knowledge transfer are closely interconnected, jointly creating new insights.",
              spacing: "wide",
              buttons: [
                {
                  text: "Learn more about our research",
                  url: "/en/research/",
                  className: "mt-4",
                  variant: "plain",
                },
                {
                  text: "Learn more about opportunities to participate in our research",
                  url: "/en/participate/",
                  className: "mt-4",
                  variant: "plain",
                }
              ]
            }}
            url="/en/research/"
            alignment="center"
            className="w-full"
            textStyle="box-white"
          />
        </Section>



        <Section backgroundColor="bg-White" padding="pt-16 pb-0">
          <Teaser
            imageProps={{
              imageName: '230826_mfn_318.jpg',
              alt: "Museum façade and people waiting in line",
              imageMap: imageMap,
              className: "aspect-[16/9]"
            }}
            textProps={{
              headline: "The Museum",
              headlineStyle: "h2",
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
            body="We implement our Future Plan every day. Learn more about our work and join our team."
            spacing="wide"
            alignment="center"
            buttons={[
              {
                text: "About Us",
                variant: "plain",
                url: "en/about/museum/"
              },
              {
                text: "Building",
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
                url: "en/about/berliner-sparkasse-main-sponsor-museum-fur-naturkunde-berlin/"
              }
            ]}
          />
        </Section>

        <Section backgroundColor="bg-White" padding="pt-0 pb-16" columns={3}>
          <Card
            variant="classic"
            imageProps={{
              imageName: "zp_1200x675_WEBSEITE.jpg",
              alt: "Titelbild Zukunftsplan",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "Installation Zukunftsplan",
              headlineStyle: "h3",
              body: "From June 11, 2024 until the end of June 2027, we will provide information about the Future Plan through installations at four locations along the exhibition route.",
              spacing: "wide"
            }}
            url="/en/museum/exhibitions/zukunftsplan"
          />
          <Card
            variant="classic"
            imageProps={{
              imageName: "tagesspiegel-journal-1.jpg",
              alt: "Cover of the 'für natur' journal in Tagesspiegel",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "Our 'für natur' Magazine",
              headlineStyle: "h3",
              body: "In our 'für natur' journals, we take you along on our journey into the future.",
              spacing: "wide"
            }}
            url="en/future/nature-journals/"
          />
          <Card
            variant="classic"
            imageProps={{
              imageName: "geschaeftsbericht.jpg",
              alt: "Our Annual Report",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "Scientific Reports and Annual Reports",
              headlineStyle: "h3",
              body: "Our reports provide detailed insights into our research areas and highlight our most exciting and important research projects.",
              spacing: "wide"
            }}
            url="en/about/museum/publications-and-downloads"
          />
          <Card
            variant="classic"
            imageProps={{
              imageName: "sauriersaal_vermessung_03_c_hwa-ja_goetz_mfn_0.jpg",
              alt: "Scientist measuring the skull of a Brachiosaurus in the Museum für Naturkunde’s exhibition",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "Career Portal",
              headlineStyle: "h3",
              body: "Join our team in scientific research, technical operations, or administration.", 
              spacing: "wide"
            }}
            url="/en/about/jobs-and-career"
          />


          <Card
            variant="classic"
            imageProps={{
              imageName: "Museum für Naturkunde mit Vorplatz im Sommer (c) Pablo Castagnola.jpg",
              alt: "Birds View of the Museum für Naturkunde",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "Contact",
              headlineStyle: "h3",
              body: "We welcome direct contact regarding specific areas of our museum.",
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
              body: "Find and connect with people working at the Museum für Naturkunde Berlin.",
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