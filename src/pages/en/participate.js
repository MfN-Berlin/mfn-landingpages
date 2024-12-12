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
import Teaser from '../../components/layouts/Teaser'
import Blockquote from '../../components/layouts/Blockquote'

const ParticipatePage = () => {
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
            <Header activeNavItem="participate" />
            <main className="bg-white flex flex-col items-center justify-center p-0">
                <Section backgroundColor="bg-white" padding="pt-8 pb-0">
                    <AccessibilityNav currentPage="Participate" />
                </Section>

                <Section backgroundColor="bg-white" gapClass="gap-20 xl:gap-36">
                    <StoryTime
                        imageProps={{
                            imageName: "240702_mfn_0079.jpg",
                            alt: "Citizens and project participants of 'Understanding Diversity' in a green space in Berlin-Reinickendorf",
                            imageMap: imageMap,
                            className: "w-full h-full object-cover"
                        }}
                        textProps={{
                            kicker: "Experience Science",
                            headline: "Get Involved with Nature!",
                            body: "Discover our opportunities to participate in our research, create new knowledge together, and experience nature.",
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
                                    text: "Educational Programs",
                                    url: "/teams-projekte",
                                    variant: "plain"
                                },
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
                        headline="Get Active"
                        headlineStyle="h1"
                        spacing="wide"
                        alignment="center"
                    />
                </Section>
                <Section columns={1} backgroundColor="bg-Green-100" padding="pt-16 pb-0">
                    <Card
                        variant="classic"
                        imageProps={{
                            imageName: "TR1C6470 (1).jpg",
                            alt: "People standing in front of the visualized network of Anthropocene objects",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            headline: "Nature of Things: A Participatory Collection of the Anthropocene",
                            body: "How has your environment changed? What personal items or testimonies from the past tell this story? Contribute with your object and your story to better understand environmental change and future challenges!",
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
                            alt: "Writing alphabet with quill and ink",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            headline: "Help the Archive",
                            body: "Help the museum's historical department make historical documents readable and usable for research. Knowledge of old German scripts like Kurrent or Sütterlin is required.",
                            headlineStyle: "h3",
                            alignment: "left"
                        }}
                        url="/small-card-1-page"
                    />

                    <Card
                        variant="classic"
                        alignment="center"
                        imageProps={{
                            imageName: "MfN_Sammlung_Hwja_Goetz.jpg",
                            alt: "Our bird collection with approximately 200,000 objects",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            headline: "Volunteer Engagement",
                            body: "Help us explore our collection and actively contribute to developing new knowledge. Gain experience in museum work, database entry, and research. Read more about your possible areas of responsibility.",
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
                            headline: "Open Museum Studio in the Microscope Center",
                            body: "Colorful butterflies, impressive bird wings, ancient fossils: In our Open Museum Studio, objects aren't behind glass but in your hand, in front of your nose, or under the microscope.",
                            headlineStyle: "h3",
                            alignment: "left"
                        }}
                        url="/small-card-1-page"
                    />

                    <Card
                        variant="classic"
                        imageProps={{
                            imageName: "bioblitz_9822_c_carola-radke_mfn.jpg",
                            alt: "Man collecting insects",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            headline: "Participate in Research!",
                            body: "Together with Science in Dialogue, we operate the central online platform for citizen science in Germany. Participate in one of 270 projects from various disciplines.",
                            headlineStyle: "h3",
                            alignment: "left"
                        }}
                        url="/small-card-1-page"
                    />

                    <Card
                        variant="classic"
                        imageProps={{
                            imageName: "gemeinsames-handeln_transform-lab-kopie.webp",
                            alt: "Transformation Lab participants sitting at group tables discussing",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            headline: "Nature Knowledge Network",
                            body: "We reflect on nature knowledge from different perspectives through exchange. We also meet once a month at the museum to discuss scientific texts together.",
                            headlineStyle: "h3",
                            alignment: "left"
                        }}
                        url="/small-card-1-page"
                    />
                </Section>

                <Section columns={1} backgroundColor="bg-Green-100" padding="pt-16 pb-0">
                    <Blockquote
                        text="Our Mission: We explore Earth and Life in dialogue with people."
                        backgroundColor=""
                        className="bg-Green-500"
                    />
                </Section>

                <Section columns={2} backgroundColor="bg-Green-100" padding="pt-16 pb-0">
                    <Card
                        variant="classic"
                        imageProps={{
                            imageName: "Naturblick_Screen_2024_klein.jpg",
                            alt: "Start screen of the Naturblick app",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            headline: "Naturblick: Discover Urban Nature",
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
                            headline: "Flashlight Tours",
                            body: "After the museum doors have closed, explore the dark museum rooms with your flashlight. Search for different nocturnal animals while discovering the museum's exhibitions.",
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
                            alt: "Children examining objects in the museum's microscope center | Source: Museum für Naturkunde Berlin",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            headline: "Experience Nature Through Art – Tour and Mask Making",
                            body: "In the Dinosaur Hall, children learn about the over 13-meter-tall Giraffatitan and many other dinosaurs, such as the carnivorous Allosaurus or the spiky Kentrosaurus.",
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
                            headline: "Urban Safaris",
                            body: "Experience Berlin as Europe's greenest and most biodiverse capital! On an urban ecological tour around the museum, discover the diversity of animals and plants in the city center and learn how they adapt to city life. The focus is on the visible effects of climate change on plants, animals, and humans in Berlin.",
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
                            headline: "Active Together",
                            body: "Here you'll find offerings specifically designed for groups – from creative collaboration to shared activities that connect and inspire.",
                            headlineStyle: "h3",
                            alignment: "left"
                        }}
                        url="/small-card-1-page"
                    />
                </Section>

                <Section columns={1} backgroundColor="bg-White" padding="pt-16">
                    <CardText
                        headline="Participation: Briefly Explained"
                        headlineStyle="h1"
                        spacing="wide"
                        alignment="center"
                    />
                </Section>

                <Section columns={1} backgroundColor="bg-White" padding="pt-16 pb-8">
                    <Teaser
                        imageProps={{
                            imageName: "bioblitz_9847_c_carola-radke_mfn.jpg",
                            alt: "Collecting insects in park area during Bioblitz with the Orion Association, Photo: (c) Carola Radke",
                            imageMap: imageMap
                        }}
                        textProps={{
                            headline: "Citizen Science",
                            body: "Support scientists' work and create new knowledge. Become part of the research process and shape it actively or passively depending on the type of participation, satisfy your own curiosity – and above all, have fun while researching!",
                            headlineStyle: "h3"
                        }}
                        buttonProps={{
                            label: "Research with us!",
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
                            imageName: "sammlungsraum_diptera_17_chwaja-goetz_mfn.jpg",
                            alt: "Collection room with insect boxes, Photo: Hwa Ja Götz",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            headline: "Volunteer",
                            body: "Support the museum by organizing collection items, inventorying, labeling, entering data into databases, and conducting research. Experts can also take on the processing of certain groups or subcollections in our scientific collections.",
                            headlineStyle: "h3",
                            alignment: "left"
                        }}
                        url="/small-card-1-page"
                    />

                    <Card
                        variant="classic"
                        imageProps={{
                            imageName: "150423_girlsday_07_c_carola-radke-mfn_0.jpg",
                            alt: "Girls' Day",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            headline: "Educational Programs",
                            body: "With guided tours and various events, we offer a wide range of programs for children, families, kindergartens, schools, and adults – in the city, at the museum, and digitally.",
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
    )
}

export default ParticipatePage

export const Head = () => (
    <HeadComponent
        title="Participate"
        description="Welcome to the Museum für Naturkunde Berlin - Discover our participation opportunities and plan your visit."
        pathname="/en/participate"
    />
)