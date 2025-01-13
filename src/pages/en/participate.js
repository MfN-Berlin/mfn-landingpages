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
                <AccessibilityNav currentPage="Mitmachen" />

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
                                    text: "Volunteering",
                                    url: "/en/museum/participate/citizen-science/volunteering",
                                    variant: "plain"
                                },
                                {
                                    text: "Educational Programs",
                                    url: "/en/museum/education",
                                    variant: "plain"
                                },
                                {
                                    text: "Events",
                                    url: "/en/museum/events",
                                    variant: "plain"
                                },
                                {
                                    text: "Citizen Science",
                                    url: "/en/museum/participate/citizen-science",
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
                        alignment="center"
                        imageProps={{
                            imageName: "naturderdinge2.png",
                            alt: "Object collage from collection objects of Nature of Things",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            headline: "Nature of Things. A Participatory Collection of the Anthropocene",
                            body: "How has your environment changed? Which personal items or testimonies from the past tell this story? Contribute with your object and your story to better understand environmental change and future challenges!",
                            headlineStyle: "h3",
                            alignment: "center"
                        }}
                        url="/en/science/changing-natures.-collecting-anthropocene-together"
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
                            body: "Help us develop our collection and actively contribute to the creation of new knowledge. Along the way, you'll gain experience in museum work, database management, and research.",
                            headlineStyle: "h3",
                            alignment: "left"
                        }}
                        url="/en/museum/participate/transcription-workshop"
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
                            body: "Help us develop our collection and actively contribute to the creation of new knowledge. Gain experience in museum work, database management, and research. Read more about your potential areas of involvement here.",
                            headlineStyle: "h3",
                            alignment: "left"
                        }}
                        url="/en/museum/participate/citizen-science/volunteering"
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
                            headline: "Open Museum Studio in the Microscopy Center",
                            body: "Colorful butterflies, impressive bird wings, ancient fossils: In our Open Museum Studio, objects aren't behind glass - they're in your hand, right in front of you, or under the microscope.",
                            headlineStyle: "h3",
                            alignment: "left"
                        }}
                        url="/en/museum/education/school-and-kindergarten/workshops-and-microscopy"
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
                            headline: "mit:forschen! (co:research!)",
                            body: "Together with Science in Dialogue, we operate mit:forschen!, the central online platform for Citizen Science in Germany. Participate in one of 270 projects from various disciplines.",
                            headlineStyle: "h3",
                            alignment: "left"
                        }}
                        url="/en/science/citizens-create-knowledge"
                    />

                    <Card
                        variant="classic"
                        imageProps={{
                            imageName: "gemeinsames-handeln_transform-lab-kopie.webp",
                            alt: "Transformation Lab participants sitting at group tables discussing with each other",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            headline: "Nature Knowledge Network",
                            body: "We reflect on natural knowledge from different perspectives through exchange. Once a month, we also meet at the museum to discuss scientific texts together.",
                            headlineStyle: "h3",
                            alignment: "left"
                        }}
                        url="/en/science/netzwerk-naturwissen"
                    />

                </Section>
                <Section columns={1} backgroundColor="bg-Green-100" padding="pt-16 pb-0">
                    <Blockquote
                        text="<strong>Our Mission:</strong><br/> We explore Earth and Life in dialogue with people."
                        backgroundColor=""
                        className="bg-Green-500"
                    />
                </Section>
                <Section columns={3} backgroundColor="bg-Green-100" padding="pt-16 pb-16">
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
                        url="/en/science/naturblick-discover-urban-nature"
                    />
                    <Card
                        variant="classic"
                        imageProps={{
                            imageName: "180622_Forschen_und_Feiern_37__(c)_Hwa Ja-Goetz_MfN.jpg",
                            alt: "Children examining objects in the museum's microscopy center | Source: Museum für Naturkunde Berlin",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            headline: "Experience Nature Through Art – Guided Tour and Mask Making",
                            body: "In the dinosaur hall, children get to know the over 13-meter-tall <em>Giraffatitan</em> and many other dinosaurs, such as the carnivorous <em>Allosaurus</em> or the spiky <em>Kentrosaurus</em>.",
                            headlineStyle: "h3",
                            alignment: "left"
                        }}
                        url="/en/museum/education/school-and-kindergarten/workshops-and-microscopy"
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
                            headline: "Mineralogy/Geology Special Interest Group",
                            body: "The Mineralogy/Geology Group at the Museum für Naturkunde is an open association of hobby collectors and enthusiasts who share a passion for minerals and rocks. They meet for fascinating specialist lectures on the first Tuesday of every month (except August).",
                            headlineStyle: "h3",
                            alignment: "left"
                        }}
                        url="/en/museum/participate/citizen-science/special-interest-groups"
                    />

                    <Card
                        variant="classic"
                        imageProps={{
                            imageName: "csm_Ruesselkaefer_697cb77b53.jpg",
                            alt: "Weevil in Baltic amber, approx. 35 million years old, collection and photo by Michael Zwanzig",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            headline: "Kulturring in Berlin e.V. – Paleontology Group",
                            body: "Every third Tuesday of the month, we invite hobby collectors and anyone interested in paleontology to engaging specialist lectures. Afterwards, there are opportunities to engage with the researchers, ask questions, and participate in discussions.",
                            headlineStyle: "h3",
                            alignment: "left"
                        }}
                        url="/en/museum/participate/citizen-science/special-interest-groups"
                    />

                    <Card
                        variant="classic"
                        imageProps={{
                            imageName: "160216_lepidoptera_kasten_05_c_hwaja-goetz_mfn.jpg",
                            alt: "Photograph of an insect box with butterflies in different colors.",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            headline: "Entomological Society ORION Berlin",
                            body: "The society inspires young people to appreciate regional insect diversity and is committed to protecting endangered species and their habitats. Through educational programs and nature conservation projects, they actively contribute to preserving biodiversity.",
                            headlineStyle: "h3",
                            alignment: "left"
                        }}
                        url="/en/museum/participate/citizen-science/special-interest-groups"
                    />

                    <Card
                        variant="classic"
                        imageProps={{
                            imageName: "bild-2619.png",
                            alt: "Photograph of a beetle on a leaf.",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            headline: "German Youth Association for Nature Observation",
                            body: "The DJN group Brandenburg and Berlin consists of young people from Berlin and surrounding areas who are interested in natural history and politics. Together, they explore some of Germany's most species-rich and exciting natural areas – including the Schorfheide, the Oder Valley, former military training grounds, and the Havel landscape.",
                            headlineStyle: "h3",
                            alignment: "left"
                        }}
                        url="/en/museum/participate/citizen-science/special-interest-groups"
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
                            alt: "Insect collecting in park during Bioblitz with the Orion Association, Photo: (c) Carola Radke",
                            imageMap: imageMap
                        }}
                        textProps={{
                            headline: "Citizen Science",
                            body: "Support scientists in their work and contribute to the creation of new knowledge. Depending on how you choose to participate, you can actively shape the research process, satisfy your curiosity, and above all: experience the joy of being part of research!",
                            headlineStyle: "h3"
                        }}
                        buttonProps={{
                            label: "Research with us!",
                            variant: "primary",
                            url: "/en/museum/participate/citizen-science/"
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
                            headline: "Volunteering",
                            body: "Support the museum by organizing, inventorying, and labeling collection objects, entering data into databases, and conducting research. Experts can also take on the processing of specific groups or partial collections in our scientific collections.",
                            headlineStyle: "h3",
                            alignment: "left"
                        }}
                        url="/en/museum/participate/citizen-science/volunteering"
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
                            body: "With guided tours and various events, we offer a wide range of programs and events for children, families, kindergartens, schools, and adults – in the city, at the museum, and digitally.",
                            headlineStyle: "h3",
                            alignment: "left"
                        }}
                        url="/en/museum/education"
                    />

                </Section>
                <Section columns={1} backgroundColor="bg-Black-100">
                    <CardText
                        headline="Contact"
                        headlineStyle="h1"
                        body="Need something else to participate in?"
                        spacing="wide"
                        alignment="center"
                    />
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-2">
                        <Button variant="primary" url="/en/contact/">Ask us a question</Button>
                        <Button variant="primary" url="tel:+4930889140-8591">Call us</Button>
                        <Button variant="primary" url="/en/visit/">Visit us at the Museum</Button>
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
        title="Participate"
        description="Welcome to the Museum für Naturkunde Berlin - Discover our digital offerings and plan your visit."
        pathname="/en/participate"
    />
)