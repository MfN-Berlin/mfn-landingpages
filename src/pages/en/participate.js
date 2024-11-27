import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Header from "../../components/layouts/Header"
import Button from "../../components/elements/Button"
import CardText from '../../components/elements/CardText'
import Section from '../../components/elements/Section'
import Card from '../../components/elements/Card'
import StoryTime from '../../components/layouts/StoryTime'
import Footer from '../../components/layouts/Footer'
import AccessibilityNav from '../../components/layouts/AccessibilityNav'
import HeadComponent from '../../components/layouts/HeadComponent'
import Teaser from '../../components/layouts/Teaser';
import Blockquote from '../../components/layouts/Blockquote';
import { Location } from '@reach/router'

const ParticipatePage = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { 
          sourceInstanceName: { eq: "images" }
          extension: { regex: "/(jpg|jpeg|png|gif)/" }
        }
      ) {
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
    if (!data?.allFile?.edges) return {};
    
    return Object.fromEntries(
      data.allFile.edges
        .filter(({ node }) => 
          node?.childImageSharp?.gatsbyImageData != null
        )
        .map(({ node }) => [
          node.relativePath,
          node.childImageSharp.gatsbyImageData
        ])
    );
  }, [data]);

  return (
    <Location>
      {({ location }) => (
        <>
          <Header activeNavItem="participate" location={location} />
          <main className="bg-white flex flex-col items-center justify-center p-0">
            <Section backgroundColor="bg-white" padding="pt-8 pb-0">
              <AccessibilityNav currentPage="Participate" />
            </Section>


            <Section backgroundColor="bg-white" gapClass="gap-20 xl:gap-36">
              <StoryTime
                imageProps={{
                  imageName: "naturtiefen_mfnberlin_c_klara_harden.jpg",
                  alt: "naturtiefen_mfnberlin_c_klara_harden",
                  imageMap: imageMap,
                  className: "w-full h-full object-cover"
                }}
                textProps={{
                  kicker: "Experience Science",
                  headline: "Get Involved with Nature!",
                  body: "Discover our opportunities to participate and create new knowledge together. Find what suits you:",
                  headlineStyle: "h1",
                  spacing: "wide",
                  alignment: "center",
                  buttons: [
                    {
                      text: "Volunteer",
                      url: "/teams-projekte",
                      variant: "plain"
                    },
                    {
                      text: "  Participation",
                      url: "/teams-projekte",
                      variant: "plain"
                    },
                    {
                      text: "Educational Programs",
                      url: "/teams-projekte",
                      variant: "plain"
                    }
                    ,
                    {
                      text: "Events",
                      url: "/teams-projekte",
                      variant: "plain"
                    },
                    {
                      text: "Citizen Science",
                      url: "/teams-projekte",
                      variant: "plain"
                    },
                    {
                      text: "Workshop",
                      url: "/teams-projekte",
                      variant: "plain"
                    }]

                }}
                imagePosition="right"
              />
            </Section>

            <Section columns={1} backgroundColor="bg-Green-100" padding="pt-16 pb-0">
              <CardText
                headline="Get Involved"
                headlineStyle="h1"
                spacing="wide"
                alignment="center"
              />
            </Section>
            <Section columns={1} backgroundColor="bg-Green-100" padding="pt-16 pb-0">

              <Card
                variant="classic"
                alignment="center"
                imageProps={{
                  imageName: "bioblitz_9822_c_carola-radke_mfn.jpg",
                  alt: "Man collecting insects",
                  imageMap: imageMap,
                  className: "w-full h-auto object-cover"
                }}
                textProps={{
                  headline: "Volunteer Engagement",
                  body: "Help us with the exploration of our collection items and contribute actively to the dissemination of knowledge. You will gain experience in museum work, data entry, and research. Read more about your possible areas of responsibility",
                  headlineStyle: "h3",
                  alignment: "center"
                }}
                url="/small-card-1-page"
              />

            </Section>
            <Section columns={2} backgroundColor="bg-Green-100" padding="pt-16 pb-0">

              <Card
                variant="classic"
                imageProps={{
                  imageName: "20220827_223801__1200x800Px.jpg",
                  alt: "Writing alphabet with feather and ink",
                  imageMap: imageMap,
                  className: "w-full h-auto object-cover"
                }}
                textProps={{
                  headline: "Transcriptions Workshop",
                  body: "Help us make historical documents from our archive readable and usable for research. The prerequisite is knowledge of the old German dialects Kurrent and Sutterlin.",
                  headlineStyle: "h3",
                  alignment: "left"
                }}
                url="/small-card-1-page"
              />

              <Card
                variant="classic"
                imageProps={{
                  imageName: "Key visual_NaturderDinge_ohneLogo_klein.jpg",
                  alt: "Object collage from collection items of Nature of Things",
                  imageMap: imageMap,
                  className: "w-full h-auto object-cover"
                }}
                textProps={{
                  headline: "Natur der Dinge. Eine partizipative Sammlung des Anthropozäns",
                  body: "Apfelbäume blühen früher, Schmetterlinge verschwinden: Was ist passiert? Wie hat sich ihre Umwelt verändert? Welche persönlichen Dinge oder Zeugnisse aus der Vergangenheit erzählen davon?  Tragen Sie dazu bei, mit Ihrem Objekt und Ihrer Geschichte den Wandel der Umwelt und die Herausforderungen der Zukunft besser zu verstehen!",
                  headlineStyle: "h3",
                  alignment: "left"
                }}
                url="/small-card-1-page"
              />

            </Section>
            <Section columns={3} backgroundColor="bg-Green-100" padding="pt-16 pb-0">

              <Card
                variant="classic"
                imageProps={{
                  imageName: "Mikroskopierzentrum_CapsarPauli.jpg",
                  alt: "Children and adults exploring various objects under the microscope",
                  imageMap: imageMap,
                  className: "w-full h-auto object-cover"
                }}
                textProps={{
                  headline: "Open Museum Workshop in the Microscope Center",
                  body: "Help us with the exploration of our collection items and contribute actively to the dissemination of knowledge. You will gain experience in museum work, data entry, and research. Read more about your possible areas of responsibility.",
                  headlineStyle: "h3",
                  alignment: "left"
                }}
                url="/small-card-1-page"
              />

              <Card
                variant="classic"
                imageProps={{
                  imageName: "citizensciencefest (14 von 32).jpeg",
                  alt: "Young person looking for insects in the forest. Photo: Karo Krämer/WiD",
                  imageMap: imageMap,
                  className: "w-full h-auto object-cover"
                }}
                textProps={{
                  headline: "mit:forschen!",
                  body: "We work together with science in dialogue on mit:forschen!, the central online platform for citizen science in Germany. Currently, over 270 projects from various fields are presented and invite you to participate.",
                  headlineStyle: "h3",
                  alignment: "left"
                }}
                url="/small-card-1-page"
              />

              <Card
                variant="classic"
                imageProps={{
                  imageName: "bild.png",
                  alt: "The user interface of Atlas Nature Knowledge. Various image tiles show the keywords About Us, Our Network, Joint Action, and Nature Knowledge",
                  imageMap: imageMap,
                  className: "w-full h-auto object-cover"
                }}
                textProps={{
                  headline: "Netzwerk Naturwissen",
                  body: "Climate change, species extinction, or loss of biodiversity: The challenges of the present cannot be solved alone. A comprehensive picture requires without question a multiperspective exchange.",
                  headlineStyle: "h3",
                  alignment: "left"
                }}
                url="/small-card-1-page"
              />

            </Section>
            <Section columns={1} backgroundColor="bg-Green-100" padding="pt-16 pb-0">
              <Blockquote
                text="Our Mission: We explore Earth and Life in dialogue with people."
                backgroundColor=""  // Green-500 color
                className="bg-Green-500"
              />
            </Section>
            <Section columns={2} backgroundColor="bg-Green-100" padding="pt-16 pb-0">

              <Card
                variant="classic"
                imageProps={{
                  imageName: "Naturblick_Screen_2024_klein.jpg",
                  alt: "Startbildschirm der Naturblick-App",
                  imageMap: imageMap,
                  className: "w-full h-auto object-cover"
                }}
                textProps={{
                  headline: "Naturblick - Stadtnatur entdecken",
                  body: "With Naturblick, you can easily identify plants and animals and learn more about nature in your city. Save your observations and share them with science and nature conservation.",
                  headlineStyle: "h3",
                  alignment: "left"
                }}
                url="/small-card-1-page"
              />

              <Card
                variant="classic"
                imageProps={{
                  imageName: "131031_taschenlampenfuehrung_halloween_21_c_carola-radke_mfn_0.jpg",
                  alt: "Flashlight tour",
                  imageMap: imageMap,
                  className: "w-full h-auto object-cover"
                }}
                textProps={{
                  headline: "Taschenlampenführung",
                  body: "After the museum doors have closed, you can explore the dark museum rooms with the light of your flashlight. On the hunt for the different animals of the night, you can discover the museum's exhibits.",
                  headlineStyle: "h3",
                  alignment: "left"
                }}
                url="/small-card-1-page"
              />

            </Section>
            <Section columns={3} backgroundColor="bg-Green-100" padding="pt-16 pb-16">

              <Card
                variant="classic"
                imageProps={{
                  imageName: "180622_Forschen_und_Feiern_37__(c)_Hwa Ja-Goetz_MfN.jpg",
                  alt: "Children examining objects in the museum's microscope center. | Source: Museum für Naturkunde Berlin",
                  imageMap: imageMap,
                  className: "w-full h-auto object-cover"
                }}
                textProps={{
                  headline: "Natur künstlerisch erleben – Führung und Masken basteln",
                  body: "In the Sauriersaal, the children learn about the over 13 meter tall Giraffatitan and many other dinosaurs, such as the meat-eating Allosaurus or the stegosaurier Kentrosaurus .",
                  headlineStyle: "h3",
                  alignment: "left"
                }}
                url="/small-card-1-page"
              />

              <Card
                variant="classic"
                imageProps={{
                  imageName: "fuchs_c_selina_schultze_mfn.jpg",
                  alt: "Urban nature at the Museum für Naturkunde",
                  imageMap: imageMap,
                  className: "w-full h-auto object-cover"
                }}
                textProps={{
                  headline: "Großstadtsafaris",
                  body: "Experience Berlin as the greenest and most diverse capital of Europe! During a city-ecological tour around the museum, you can discover the diversity of animals and plants in the city center and learn how this fits into city life. The focus is on the visible consequences of climate change for plants, animals, and humans in Berlin.",
                  headlineStyle: "h3",
                  alignment: "left"
                }}
                url="/small-card-1-page"
              />

              <Card
                variant="classic"
                imageProps={{
                  imageName: "MFN_MIN_1997_2032__Gold_Detail__(c)_HwaJa-Goetz_MfN.jpg",
                  alt: "(c) Hwa Ja Götz",
                  imageMap: imageMap,
                  className: "w-full h-auto object-cover"
                }}
                textProps={{
                  headline: "Fachgruppen",
                  body: "Regularly, scientists, hobby collectors, and interested people meet in working groups to discuss exciting scientific topics. Come by, support us at our events and information stands, and become part of our events like children's festivals and long nights!",
                  headlineStyle: "h3",
                  alignment: "left"
                }}
                url="/small-card-1-page"
              />

            </Section>
            <Section columns={1} backgroundColor="bg-White" padding="pt-16">
              <CardText
                headline="Participate: Briefly Explained"
                headlineStyle="h1"
                spacing="wide"
                alignment="center"
              />
            </Section>
            <Section columns={1} backgroundColor="bg-White" padding="pt-16 pb-8">
              <Teaser
                imageProps={{
                  imageName: "bioblitz_9847_c_carola-radke_mfn.jpg",
                  alt: "Insektensammeln in Parkanlage beim Bioblitz mit dem Orion Verein, Foto: (c) Carola Radke",
                  imageMap: imageMap
                }}
                textProps={{
                  headline: "Citizen Science/ Bürgerforschung",
                  body: "Support the work of scientists and create new knowledge. Become part of the research process and shape it, actively or passively, according to the type of participation, and above all have fun while researching!",
                  headlineStyle: "h3"
                }}
                buttonProps={{
                  label: "Participate with us!",
                  variant: "primary"
                }}
                textStyle="box-white"
                textPosition="bottom-left"
              />
            </Section>
            <Section columns={2} backgroundColor="bg-White" padding="pt-0 pb-16" >

              <Card
                variant="classic"
                imageProps={{
                  imageName: "1685433666641.jpeg",
                  alt: "Die Sammlung des Museums für Naturkunde. Foto: (c) Carola Radke",
                  imageMap: imageMap,
                  className: "w-full h-auto object-cover"
                }}
                textProps={{
                  headline: "Volunteer",
                  body: "Support the museum by organizing, inventorying, labeling, entering data into databases, and conducting research. Special: You can also take on the processing of certain groups or subcollections in our scientific collections.",
                  headlineStyle: "h3",
                  alignment: "left"
                }}
                url="/small-card-1-page"
              />

              <Card
                variant="classic"
                imageProps={{
                  imageName: "150423_girlsday_07_c_carola-radke-mfn_0.jpg",
                  alt: "Girls´ Day",
                  imageMap: imageMap,
                  className: "w-full h-auto object-cover"
                }}
                textProps={{
                  headline: "Educational Programs",
                  body: "We offer a wide range of programs and events for children, families, kindergartens, schools, and adults – in the city, at the museum, and digitally.",
                  headlineStyle: "h3",
                  alignment: "left"
                }}
                url="/small-card-1-page"
              />

            </Section>
            <Section columns={1} backgroundColor="bg-Black-100">
              <CardText
                headline="Contact"
                headlineStyle="h1"
                body="Do you need anything else to participate with us?"
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

export default ParticipatePage

export const Head = () => (
  <HeadComponent
    title="Participate | Museum für Naturkunde Berlin"
    description="Discover ways to get involved with the Museum für Naturkunde Berlin."
    pathname="/en/participate"
  />
)