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
                            kicker: "Hands-On Science",
                            headline: "Get Stuck in for Nature!",
                            body: "Discover the various ways you can get involved with our research, help us discover new things, and experience nature.",
                            headlineStyle: "h1",
                            spacing: "wide",
                            alignment: "center",
                            buttons: [
                                {
                                    text: "Volunteer Scheme",
                                    url: "/en/museum/participate/citizen-science/volunteering",
                                    variant: "plain"
                                },
                                {
                                    text: "Education Offers",
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
                            headline: "The Nature of Things. An interactive collection on the Anthropocene",
                            body: "How has our environment changed? What personal items or evidence from the past can tell us about these changes? Use your item and your history to help us better understand changes in the environment and the challenges of the future!",
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
                            headline: "Transcribe Historical Documents Together",
                            body: "Help internal research projects gain easy access to the contents of historical documents from the archive. Knowledge of old German scripts like Kurrent or Sütterlin is required.",
                            headlineStyle: "h3",
                            alignment: "left"
                        }}
                        url="/en/museum/participate/transcription-workshop"
                    />

                    <Card
                        variant="classic"
                        imageProps={{
                            imageName: "MfN_Sammlung_Hwja_Goetz.jpg",
                            alt: "Our bird collection with approximately 200,000 objects",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            headline: "Volunteering",
                            body: "Help us unlock the secrets of our collection and play an active part in new discoveries. Along the way, you will gain experience in research, database management, what it's like to work at a museum and much more.",
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
                            headline: "Open Museum Workshop in the microscope centre",
                            body: "Brightly coloured butterflies, impressive bird wings, ancient fossils: our Open Museum Workshop does away with glass cabinets, allowing you to explore exhibits with your hands, your nose, or a microscope.",
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
                            headline: "mit:forschen!",
                            body: "We've partnered up with Wissenschaft im Dialog to run mit:forschen!, the central online platform for citizen science in Germany. Get involved in one of 270 projects across a range of subjects.",
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
                            body: "We create dialogue to reflect on nature knowledge from different perspectives. We meet up in the museum once a month to discuss scientific texts as a group.",
                            headlineStyle: "h3",
                            alignment: "left"
                        }}
                        url="/en/science/netzwerk-naturwissen"
                    />
                </Section>

                <Section columns={1} backgroundColor="bg-Green-100" padding="pt-16 pb-0">
                    <Blockquote
                        text="<strong>Our mission:</strong><br/> to explore life and the earth in dialogue with the people on it."
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
                            headline: "Naturblick: Exploring Nature in the City",
                            body: "Naturblick makes it easy to identify plants and animals, and to learn more about nature in your city. Save your observations and share them with researchers and conservationists.",
                            headlineStyle: "h3",
                            alignment: "left"
                        }}
                        url="/en/research/naturblick-discovering-nature-city"
                    />

                    <Card
                        variant="classic"
                        imageProps={{
                            imageName: "180622_Forschen_und_Feiern_37__(c)_Hwa Ja-Goetz_MfN.jpg",
                            alt: "Children examining objects in the museum's microscopy center",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            headline: "Nature Meets Art – Guided Tour and Mask Painting",
                            body: "In the Dinosaur Hall, children will meet the 13 metre-tall Giraffatitan, plus loads of other dinosaurs, like the carnivorous Allosaurus or the spiny Kentrosaurus.",
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
                            headline: "Mineralogy/Geology Group",
                            body: "The Mineralogy/Geology Group is an open collective of hobby collectors and enthusiasts who share a passion for rocks and minerals. They meet on the first Tuesday of every month (except August) for exciting talks from experts.",
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
                            headline: "Kulturring in Berlin e.V. – Palaeontology Group",
                            body: "The Palaeontology Group invites anyone interested in palaeontology to attend one of their exciting talks from experts, held on the third Tuesday of every month. After the talk, you will have an opportunity to chat with the experts, ask questions and discuss palaeontology.",
                            headlineStyle: "h3",
                            alignment: "left"
                        }}
                        url="/en/museum/participate/citizen-science/special-interest-groups"
                    />

                    <Card
                        variant="classic"
                        imageProps={{
                            imageName: "160216_lepidoptera_kasten_05_c_hwaja-goetz_mfn.jpg",
                            alt: "Photograph of an insect box with butterflies in different colors",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            headline: "Entomologische Gesellschaft ORION Berlin",
                            body: "Berlin's entomological society is all about getting young people excited about the regional diversity of insect life, and works on protecting threatened species and their habitats. With educational programmes and conservation projects, they play an active role in maintaining biodiversity.",
                            headlineStyle: "h3",
                            alignment: "left"
                        }}
                        url="/en/museum/participate/citizen-science/special-interest-groups"
                    />

                    <Card
                        variant="classic"
                        imageProps={{
                            imageName: "bild-2619.png",
                            alt: "Photograph of a beetle on a leaf",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            headline: "Deutscher Jugendbund für Naturbeobachtung",
                            body: "The DJN Brandenburg and Berlin is a group of young people from the Greater Berlin area who are interested in natural sciences and politics. They come together to explore some of the most diverse and exciting areas of natural beauty in Germany – such as Schorfheide, the Oder Valley, old military parade grounds, and the Havel region.",
                            headlineStyle: "h3",
                            alignment: "left"
                        }}
                        url="/en/museum/participate/citizen-science/special-interest-groups"
                    />
                </Section>
                <Section columns={1} backgroundColor="bg-White" padding="pt-16">
                    <CardText
                        headline="Getting Involved: In Brief"
                        headlineStyle="h1"
                        spacing="wide"
                        alignment="center"
                    />
                </Section>

                <Section columns={1} forceGrid={true} backgroundColor="bg-White" padding="pt-16 pb-8">
                    <Teaser
                        imageProps={{
                            imageName: "bioblitz_9847_c_carola-radke_mfn.jpg",
                            alt: "Insect collecting in park during Bioblitz with the Orion Association, Photo: (c) Carola Radke",
                            imageMap: imageMap
                        }}
                        textProps={{
                            headline: "Citizen Science",
                            body: "Support researchers in their work and play a role in making new discoveries. Whether it's about actively shaping the research process or satisfying your curiosity, how you get involved is up to you – the most important thing is taking joy in science!",
                            headlineStyle: "h3"
                        }}
                        buttonProps={{
                            label: "Come and get involved in our research work!",
                            variant: "primary",
                            url: "/en/museum/participate/citizen-science/"
                        }}
                        textStyle="box-white"
                        textPosition="bottom-left"
                    />
                </Section>

                <Section columns={2} backgroundColor="bg-White" padding="pt-0 pb-16">
                    <Card
                        variant="classic"
                        imageProps={{
                            imageName: "sammlungsraum_diptera_17_chwaja-goetz_mfn.jpg",
                            alt: "Collection room with insect boxes, Photo: Hwa Ja Götz",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            headline: "Volunteer Scheme",
                            body: "Support the museum by organising, cataloguing and labelling exhibits, entering data into databases, and undertaking research. Qualified professionals can also get involved in curating specific groups or sub-collections within our scientific collections.",
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
                            headline: "Education",
                            body: "With guided tours and a variety of different events, we have a wide range of programmes and events for kids, families, nurseries, schools and grown-ups – in the city, in the museum and virtually.",
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