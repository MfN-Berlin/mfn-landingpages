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
            body="As an excellent research museum and innovative communication center, we shape the scientific and social dialogue about the future of our planet – worldwide. 
            Career  Team  Contact  News  Sponsors"
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

        <Section backgroundColor="bg-white" columns={1}>
          <Teaser
            imageProps={{
              imageName: 'Visualisierung_Innenhof@GMP mit Rainer Schmidt Landschaftsarchitekt.jpg',
              alt: "Visualization of the courtyard by GMP with Rainer Schmidt Landscape Architect",
              imageMap: imageMap,
              className: "aspect-[16/9] dada"
            }}
            textProps={{
              headline: "A House for Nature and Society",
              body: `
      <div class="text-sm">
        <div id="shortText">
          The Museum für Naturkunde Berlin of the future will be open, integrated and strong in research, a role model for research museums worldwide. Our script on the way there is our future plan.
        </div>
        <div id="fullText" style="display: none">
          The Museum für Naturkunde Berlin of the future will be open, integrated and strong in research, a role model for research museums worldwide. Our script on the way there is our future plan.<br/><br/>
          Upon completion of this future plan, the entire building will be structurally renovated and made fit for the future. We will open the museum even further to society than before, not only with new and innovative exhibitions but also through the complete development of our collection, which will be digitally accessible worldwide. Of course, we want to further expand our position as one of the most visited museums in Berlin. – <i>Prof. Johannes Vogel, PhD, Director General</i> & <i>Stephan Junker, Managing Director of the Museum</i>
        </div>
        <button 
          onclick="
            const shortText = document.getElementById('shortText');
            const fullText = document.getElementById('fullText');
            const btn = this;
            if (fullText.style.display === 'none') {
              shortText.style.display = 'none';
              fullText.style.display = 'block';
              btn.textContent = 'Show less';
            } else {
              shortText.style.display = 'block';
              fullText.style.display = 'none';
              btn.textContent = 'Read more';
            }
          "
          class="mt-4 text-Green-500 hover:text-Green-600 text-sm font-medium focus:outline-none"
        >
          Read more
        </button>
      </div>
    `,
              headlineStyle: "h4",
              spacing: "normal",
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
              alt: "Visualization of the new location in Adlershof: The building design is characterized by alternating greenery and wooden façade. The rectangular layout is divided over three floors.",
              imageMap: imageMap,
              className: "aspect-[16/9]"
            }}
            textProps={{
              headline: "The Museum in the Future",
              headlineStyle: "h1-small",
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
          backgroundColor="bg-Blue-200"
          innerBg="bg-Green-100"
          padding="pt-0 pb-16"
          columns={3}
        >
          <Card
            variant="classic"
            imageProps={{
              imageName: "zp_1200x675_WEBSEITE.jpg",
              alt: "Future Plan logo and silhouette of a person with a wheelbarrow",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "The Future Plan",
              headlineStyle: "h3",
              body: "Read our annual report here, which provides an easy-to-understand overview of the activities of the Museum für Naturkunde Berlin during the past year.",
              spacing: "wide"
            }}
            url="en/future/future-plan/"
          />
          <Card
            variant="classic"
            imageProps={{
              imageName: "Digitize_Museum_fuer_Naturkunde_(c)_Thomas_Rosenthal_3.jpg",
              alt: "Visitors marvel at insect film in the exhibition",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "Making the Entire Collection Accessible",
              headlineStyle: "h3",
              body: "The Museum für Naturkunde Berlin experiments with various individually tailored formats to engage in dialogue with many different target groups.",
              spacing: "wide"
            }}
            url="en/science/collection-discovery-and-development/"
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

          <Card
            variant="classic"
            imageProps={{
              imageName: "diversityscanner-vielfalt-erhalten.jpg",
              alt: "Researchers at the DiversityScanner of the Center for Integrative Biodiversity Discovery",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "Species Discovery Factory",
              headlineStyle: "h3",
              body: "The Museum für Naturkunde Berlin uses the innovative DiversityScanner to efficiently capture insect diversity. Using state-of-the-art technology, thousands of samples can be analyzed and systematically classified in a short time. In this way, the \"Species Discovery Factory\" contributes to the research and conservation of biological diversity.",
              spacing: "wide"
            }}
            url="en/species-discovery-factory"
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
              body: "In August 2020, the unique cooperation project ‘Opening Science: New Ways of Knowledge Transfer Using the BROMACKER Research Project as an Example’ began, involving an interdisciplinary research team.",
              spacing: "wide"
            }}
            url="/en/science/bromacker-new-ways-science-communication"
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
          <Blockquote
            text="The seven Excellence Clusters in Berlin embody active, transdisciplinary collaboration and are therefore so important for the BUA. When I visit the BUA clusters, I experience all of this: transdisciplinary collaboration, the search for solutions to the major problems we face today and in the future."
            source="Prof. Johannes Vogel"
            sourceTitle="(Director of the Museum)"
            backgroundColor=""
            className="bg-Blue-500 col-span-1 md:col-span-2"
          />
          <Card
            variant="classic"
            imageProps={{
              imageName: "180809_ct_09_www_c_carola-radke_mfn.jpg",
              alt: "Staff member Martin Kirchner working at the CT scanner in the new CT lab",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "Our Scientific Work",
              headlineStyle: "h3",
              body: "The Museum für Naturkunde Berlin experiments with various individually tailored formats to engage in dialogue with many different target groups.",
              spacing: "wide"
            }}
            url="/en/research/"
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
              headline: "The Museum Today",
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
            body="The future plan, which the museum implements daily, envisions the structural renovation of the museum, and will render the scientific collection of more than 30 million objects more accessible and better available."
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
              imageName: "tagesspiegel-journal-1.jpg",
              alt: "Cover of the 'für natur' journal in Tagesspiegel",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "Our 'für natur' Magazine",
              headlineStyle: "h3",
              body: "In our 'für natur' journals, we take you along on this journey into the future.",
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
              headline: "Our Annual Report 2023",
              headlineStyle: "h3",
              body: "The Museum für Naturkunde Berlin experiments with various individually tailored formats to engage in dialogue with many different target groups.",
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
              body: "Read our annual report, which provides an easy-to-understand overview of the Museum für Naturkunde Berlin’s activities in the past year.",
              spacing: "wide"
            }}
            url="/en/about/jobs-and-career"
          />

          <Card
            variant="classic"
            imageProps={{
              imageName: "conus_kegelschnecken_c_hwaja_goetz_mfn.jpg",
              alt: "Cone snails © HwaJa Goetz, MfN",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "Memberships",
              headlineStyle: "h3",
              body: "In this collection experiment, we examine both humanity’s planetary impact as a geological factor and its entanglement in the Earth system.",
              spacing: "wide"
            }}
            url="/en/about/museum/memberships"
          />
          <Card
            variant="classic"
            imageProps={{
              imageName: "PCastagnola_MfN_Einzelportraits_06-2.jpg",
              alt: "Jana Hoffmann and Christiane Quaiser sitting in front of a wall of insect boxes in the special digitize! exhibition",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "Contact",
              headlineStyle: "h3",
              body: "In August 2020, the unique cooperation project ‘Opening Science: New Ways of Knowledge Transfer Using the BROMACKER Research Project as an Example’ began, involving an interdisciplinary research team.",
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
              body: "The Museum für Naturkunde Berlin experiments with various individually tailored formats to engage in dialogue with many different target groups.",
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