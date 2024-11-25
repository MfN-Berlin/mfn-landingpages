import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Location } from '@reach/router'
import Header from "../../components/layouts/Header"
import Button from "../../components/elements/Button"
import CardText from '../../components/elements/CardText'
import Section from '../../components/elements/Section'
import Card from '../../components/elements/Card'
import StoryTime from '../../components/layouts/StoryTime'
import Footer from '../../components/layouts/Footer'
import Slideshow from '../../components/layouts/Slideshow'
import SlideContent from '../../components/layouts/SlideContent'
import AccessibilityNav from '../../components/layouts/AccessibilityNav'
import HeadComponent from '../../components/layouts/HeadComponent'
import Teaser from '../../components/layouts/Teaser';

const ResearchPage = () => {
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
                    <Header activeNavItem="research" location={location} />
                    <main className="bg-white flex flex-col items-center justify-center p-0">
                        <Section backgroundColor="bg-white" padding="pt-8 pb-0">
                            <AccessibilityNav currentPage="Research" />
                        </Section>


                        <Section backgroundColor="bg-white" columns={1}>
                            <CardText
                                kicker="Open and Integrated"
                                headline="Our Research"
                                headlineStyle="h1"
                                body="The Museum für Naturkunde Berlin is an integrated research museum of the Leibniz Association and is one of the leading institutions worldwide for biological and geological evolution and biodiversity. With the scientific research and our collection as the main infrastructure, these areas form together with the science communication the central pillars of the museum."
                                spacing="wide"
                                alignment="center"
                            />
                        </Section>
                        <Section
                            backgroundColor="bg-white"
                            columns={2}
                            gapClass="gap-6"
                            layout="equal"
                        >
                            <div className="bg-Green-100 p-8 h-full w-full  flex flex-col">
                                <form
                                    action="https://www.museumfuernaturkunde.berlin/de/wissenschaft/navigator"
                                    method="get"
                                    className="flex flex-col flex-1"
                                >
                                    <div className="flex flex-col gap-2">
                                        <label
                                            htmlFor="science-search"
                                            className="text-xl font-bold text-Black-900"
                                        >
                                            Science Search
                                        </label>
                                        <p className="text-sm text-Black-700">
                                            Search for names, roles, projects of the museum – or simply by keywords to find suitable project portraits
                                        </p>
                                        <div className="mt-auto flex-col md:flex-row gap-2">
                                            <input
                                                type="text"
                                                id="science-search"
                                                name="query"
                                                placeholder="Search for names, roles, projects..."
                                                className="flex-1 p-3 border border-Black-300 focus:outline-none focus:ring-2 focus:ring-Green-500"
                                            />
                                            <button
                                                type="submit"
                                                className="px-6 py-2 bg-Green-500 text-white font-bold hover:bg-Green-600 transition-colors"
                                            >
                                                Search
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="bg-Green-100 p-8 h-full w-full flex flex-col">
                                <form
                                    action="https://www.museumfuernaturkunde.berlin/de/wissenschaft/navigator"
                                    method="get"
                                    className="flex flex-col flex-1"
                                >
                                    <div className="flex flex-col gap-2">
                                        <label
                                            htmlFor="projects-search"
                                            className="text-xl font-bold text-Black-900"
                                        >
                                            Projects and Working Groups
                                        </label>
                                        <p className="text-sm text-Black-700">
                                            Use our filter to display thematic projects
                                        </p>
                                        <div className="mt-auto flex flex-col md:flex-row gap-2">
                                            <select
                                                name="f[2]"
                                                className="w-full p-3 border border-Black-300 rounded appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-Green-500"
                                            >
                                                <option value="">All Themes</option>
                                                <optgroup label="Core Terms">
                                                    <option value="topic:792">Research</option>
                                                    <option value="topic:794">Transfer</option>
                                                </optgroup>
                                                <optgroup label="Keywords">
                                                    <option value="topic:796">Species Protection</option>
                                                    <option value="topic:797">Species Extinction</option>
                                                    <option value="topic:798">Biodiversity</option>
                                                    <option value="topic:799">Citizen Science</option>
                                                    <option value="topic:800">Database</option>
                                                    <option value="topic:802">Digitalization</option>
                                                    <option value="topic:803">Evolution</option>
                                                    <option value="topic:806">Genetics</option>
                                                    <option value="topic:821">Genomics</option>
                                                    <option value="topic:808">Society</option>
                                                    <option value="topic:810">Cooperation</option>
                                                    <option value="topic:814">Politics</option>
                                                    <option value="topic:815">Collection</option>
                                                    <option value="topic:818">Data Management</option>
                                                    <option value="topic:816">Science Communication</option>
                                                    <option value="topic:817">Knowledge Transfer</option>
                                                    <option value="topic:823">Museum Opening</option>
                                                </optgroup>

                                            </select>
                                            <button
                                                type="submit"
                                                className="px-6 py-2 bg-Green-500 text-white font-bold hover:bg-Green-600 transition-colors"
                                            >
                                                Search
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </Section>
                        <Section backgroundColor="bg-white" columns={1} padding="py-8">
                            <Teaser
                                imageProps={{
                                    imageName: '180809_ct_09_www_c_carola-radke_mfn.jpg',
                                    alt: "Mitarbeiter Martin Kirchner arbeitet am Computertomografen im neuen CT Labor",
                                    imageMap: imageMap,
                                    className: "aspect-[16/9]"
                                }}
                                textProps={{
                                    headline: "We explore the Earth and its living beings in dialogue with humans.",
                                    body: "As an excellent research museum and an innovative communication center, we shape the scientific and societal dialogue about the future of our Earth – worldwide.",
                                    headlineStyle: "h4",
                                    spacing: "normal"
                                }}
                                textStyle="circle-green"
                                textPosition="center-right"
                                className="w-full"
                            />
                        </Section>
                        <Section backgroundColor="bg-Green-100" columns={1} padding="py-16">
                            <StoryTime
                                imageProps={{
                                    imageName: '213086456_4048064465229816_4437487348901250436_n 1.jpg', // Replace with your actual image
                                    alt: "Wissenschaftler bei der Forschungsarbeit. Bild: Pablo Castagnola",
                                    imageMap: imageMap,
                                    className: "aspect-[4/3] object-cover"
                                }}
                                textProps={{
                                    kicker: "Research Areas & Infrastructure",
                                    headline: "Research at the Museum",
                                    headlineStyle: "h2",
                                    body: "We research in collaborations, collection-based, and globally networked. Teams from different areas of expertise and with various tasks deepen their research in a dynamic process about life, the Earth, and our solar system.",
                                    spacing: "wide",
                                    buttons: [
                                        {
                                            text: "More about research at the MfN",
                                            url: "/teams-projekte",
                                            variant: "plain"
                                        },
                                        {
                                            text: "Our Research Areas",
                                            url: "/teams-projekte",
                                            variant: "plain"
                                        }
                                    ]
                                }}
                                imagePosition="left"
                                className="max-w-7xl mx-auto"
                            />
                        </Section>
                        <Section backgroundColor="bg-Green-100" columns={3} padding="py-16">
                            <Card
                                variant="green"
                                imageProps={{
                                    imageName: "TRR170_TeaserBild_0.jpeg",
                                    alt: "collision event between two celestial bodies",
                                    imageMap: imageMap,
                                    className: "w-full h-auto object-cover"
                                }}
                                textProps={{
                                    kicker: "research area 1",
                                    headline: "Dynamics of Nature",
                                    headlineStyle: "h3",
                                    body: "Investigation of the processes that shape the development and diversity of life on Earth.",
                                    spacing: "regular"
                                }}
                            />
                            <Card
                                variant="green"
                                imageProps={{
                                    imageName: "Biodivwand_Mittelteil__(c)_Dittmann_MfN.jpg",
                                    alt: "Biodiversitätswand des Museums für Naturkunde",
                                    imageMap: imageMap,
                                    className: "w-full h-auto object-cover"
                                }}
                                textProps={{
                                    kicker: "research area 2",
                                    headline: "Future of Collections",
                                    headlineStyle: "h3",
                                    body: "Open collections and new approaches to support research and discovery worldwide.",
                                    spacing: "regular"
                                }}
                            />

                            <Card
                                variant="green"
                                imageProps={{
                                    imageName: "large_Header_2023_klein_beschnitten_belichted_7cca538a55.jpg",
                                    alt: "Naturblick",
                                    imageMap: imageMap,
                                    className: "w-full h-auto object-cover"
                                }}
                                textProps={{
                                    kicker: "research area 3",
                                    headline: "Society and Nature",
                                    headlineStyle: "h3",
                                    body: "Dialogue with various stakeholders leads to joint solutions for nature conservation.",
                                    spacing: "regular"
                                }}
                            />


                            <Card
                                variant="white"
                                imageProps={{
                                    imageName: "sammlung-ai-generated.jpg",
                                    alt: "Drei Schnecken (KI generiertes Bild)",
                                    imageMap: imageMap,
                                    className: "w-full h-auto object-cover"
                                }}
                                textProps={{

                                    headline: "Collection",
                                    headlineStyle: "h3",
                                    body: "Our collection offers a wide range of data sources for the study of biological and geological diversity.",
                                    spacing: "regular"
                                }}
                            />
                            <Card
                                variant="white"
                                imageProps={{
                                    imageName: "archiv-ai-generated.jpg",
                                    alt: "Buchseite (KI generiertes Bild)",
                                    imageMap: imageMap,
                                    className: "w-full h-auto object-cover"
                                }}
                                textProps={{
                                    headline: "Archive",
                                    headlineStyle: "h3",
                                    body: "Historical documents and research results are available as valuable resources for studies.",
                                    spacing: "regular"
                                }}
                            />

                            <Card
                                variant="white"
                                imageProps={{
                                    imageName: "bibliotheken-ai-generated.jpg",
                                    alt: "Buchrücken (KI generiertes Bild)",
                                    imageMap: imageMap,
                                    className: "w-full h-auto object-cover"
                                }}
                                textProps={{
                                    headline: "Libraries",
                                    headlineStyle: "h3",
                                    body: "Natural sciences and historical collections support research, teaching, and science communication.",
                                    spacing: "regular"
                                }}
                            />

                        </Section>
                        <Section backgroundColor="bg-Green-100" columns={2} padding="py-0 pb-16">
                            <Card
                                variant="white"
                                imageProps={{
                                    imageName: "it-infrastruktur-ai-generated.jpg",
                                    alt: "Fotoapparat (KI generiertes Bild)",
                                    imageMap: imageMap,
                                    className: "w-full h-auto object-cover"
                                }}
                                textProps={{

                                    headline: "Our Labs & IT",
                                    headlineStyle: "h3",
                                    body: "In addition to our large collection, the museum maintains a variety of modern laboratories, an IT research infrastructure, and a research data management infrastructure. LaboreIT-SystemeForschungs-Datenmanagement",
                                    spacing: "regular"
                                }}
                            />
                            <Card
                                variant="white"
                                imageProps={{
                                    imageName: "wissen-verbindet.jpg",
                                    alt: "Telefon mit einer Socialmedia App",
                                    imageMap: imageMap,
                                    className: "w-full h-auto object-cover"
                                }}
                                textProps={{
                                    headline: "Knowledge Connects",
                                    headlineStyle: "h3",
                                    body: "The Museum für Naturkunde Berlin experiments with various individually tailored formats to engage with many different target groups. Formats for science communication and public policy advice Our commitment to citizen science",
                                    spacing: "regular"
                                }}
                            />



                        </Section>
                        <Section backgroundColor="bg-White" columns={1} padding="py-16">
                            <StoryTime
                                imageProps={{
                                    imageName: 'Portrait_4_w.png', // Replace with your actual image
                                    alt: "Wissenschaftler bei der Forschungsarbeit. Bild: Pablo Castagnola",
                                    imageMap: imageMap,
                                    className: "aspect-[4/3] object-cover"
                                }}
                                textProps={{
                                    kicker: "Contact",
                                    headline: "Teams & Projects",
                                    headlineStyle: "h2",
                                    body: "Connect with our over 200 scientific staff members who are involved in over 100 projects.",
                                    spacing: "wide",
                                    buttons: [
                                        {
                                            text: "Open the team and project database",
                                            url: "/teams-projekte",
                                            variant: "primary"
                                        }
                                    ]
                                }}
                                imagePosition="right"
                                className="max-w-7xl mx-auto"
                            />
                        </Section>
                        <Section backgroundColor="bg-Green-100" columns={1} padding="pt-16 pb-8">
                            <CardText
                                headline="Working Groups"
                                headlineStyle="h1"
                                spacing="wide"
                                alignment="center"
                            />
                        </Section>
                        <Section backgroundColor="bg-Green-100" columns={1} padding="pb-16">
                            <Slideshow imageMap={imageMap}>
                                <SlideContent
                                    imageName="Website_Palaeobotanik_aktualisiert.jpg"
                                    altText="Blick auf die Sammlung der Paläobotanik. Foto: Carola Radke"
                                    kicker="Research Area 1"
                                    title="AG Paläobotanik"
                                    text="The AG Paläobotanik researches the evolution and diversity of fossil plants. Our focus is on reconstructing extinct plants and their habitats."
                                    link="/wissenschaft/ag-palaeobotanik"
                                />
                                <SlideContent
                                    imageName="Ortholasmatinae fossil Jonas Damzen.jpg"
                                    altText="Ausgestorbener Weberknecht in ukrainischem Rovno Bernstein "
                                    kicker="Research Area 1"
                                    title="AG Dunlop"
                                    text="The AG Dunlop investigates the evolution and systematics of fossil and recent arachnids, with a particular focus on scorpions and spiders."
                                    link="/wissenschaft/ag-dunlop"
                                />
                                <SlideContent
                                    imageName="Thomisid5-crop.jpg"
                                    altText="Nahaufnahme einer Krabbenspinne (Thomisidae). "
                                    kicker="Research Area 1"
                                    title="Forschungsgruppe MultiplEye Lab"
                                    text="The MultiplEye Lab researches the function and evolution of multi-eyed systems in animals, particularly in spiders and other arthropods."
                                    link="/wissenschaft/multipleye-lab"
                                />
                                <SlideContent
                                    imageName="Chameleon_Sudan_Erkowit.jpg"
                                    altText="Chameleon on trunk, blue sky and trees in background"
                                    kicker="Research Area 1"
                                    title="Amniota Lab"
                                    text="Our research focuses on fossil and land-living vertebrates, such as lizards and snakes (Müller) and plant-eating mammals (Bibi). "
                                    link="/wissenschaft/multipleye-lab"
                                />
                                <SlideContent
                                    imageName="zm_b_vi_0245_walmodell.jpg"
                                    altText="Nahaufnahme einer Krabbenspinne (Thomisidae). "
                                    kicker="Research Area 2"
                                    title="Center for Culture and Social Sciences of Nature"
                                    text="Our working group is dedicated to the politics, history, and culture of nature through independent research and public activities in the field of knowledge transfer. "
                                    link="/wissenschaft/multipleye-lab"
                                />
                                <SlideContent
                                    imageName="large_Header_2023_klein_beschnitten_belichted_7cca538a55.jpg"
                                    altText="Naturblick "
                                    kicker="Research Area 3"
                                    title="Human-Nature Relationships in the Anthropocene"
                                    text="Inter- and transdisciplinary research on the interrelationships between humans, nature, and digital transformation"
                                    link="/wissenschaft/multipleye-lab"
                                />
                                <SlideContent
                                    imageName="ECSA_Tag2_BenKriemann_MfN2022_334_zugeschnitten.jpg"
                                    altText="ECSA post its 2 "
                                    kicker="Research Area 3"
                                    title="Development of a Citizen Science Center for Nature, Sustainability, Digitalization"
                                    text="Innovative technologies in nature and environmental protection: How can we respond to the opportunities and challenges of citizen science?"
                                    link="/wissenschaft/multipleye-lab"
                                />
                                <SlideContent
                                    imageName="ieti-keyvisual.png"
                                    altText="IETI Keyvisual"
                                    kicker="Research Area 3"
                                    title="Public Engagement and Impact"
                                    text="We promote the strategic anchoring of public engagement in research and research institutions. To do this, we open both the research culture and -processes to non-academic stakeholders through a wide range of formats and methods."
                                    link="/wissenschaft/multipleye-lab"
                                />

                            </Slideshow>
                        </Section>
                        <Section backgroundColor="bg-White" columns={1} padding="pt-16 pb-8">
                            <CardText
                                headline="Publications"
                                headlineStyle="h1"
                                spacing="wide"
                                alignment="center"
                                buttons={[
                                    {
                                        text: "All Publications in Overview",
                                        variant: "plain",
                                        url: "#"
                                    }
                                ]}
                            />
                        </Section>
                        <Section backgroundColor="bg-White" columns={3} padding="pb-16">
                            <div className="p-3 rounded-[10px] inline-flex flex-col items-start gap-2.5">
                                <div className="w-full bg-Green-100 flex flex-col">
                                    <div className="w-full p-[30px] bg-Green-500 flex flex-col gap-20"> {/* Reduced gap from 90px */}
                                        <p className="typography-kicker text-White-White font-normal">
                                            September 2024 / Ecography
                                        </p>
                                        <h3 className="text-White-White  font-normal">
                                            Environmental heterogeneity, rather than stability, explains spider assemblage differences between ecosystems
                                        </h3>
                                    </div>
                                    <div className="w-full p-[30px] flex flex-col gap-2.5">
                                        <p className="text-Green-500 typography-body text-sm leading-tight font-italic">
                                            Daniel Suárez, Paula Arribas, Amrita Srivathsan, [...], Brent C. Emerson
                                        </p>
                                        <p className="text-Black-700 text-sm leading-tight">
                                            The open ecosystem (e.g. grasslands, prairies, shrublands) tends to be ecologically less stable than closed one (i.e. forests) and encompassess higher spatial heterogeneity in terms of environmental diversity. Such differences are expected to…
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 rounded-[10px] inline-flex flex-col items-start gap-2.5">
                                <div className="w-full bg-Green-100 flex flex-col">
                                    <div className="w-full p-[30px] bg-Green-500 flex flex-col gap-20"> {/* Reduced gap from 90px */}
                                        <p className="typography-kicker text-White-White font-normal">
                                            September 2024 / Ecography
                                        </p>
                                        <h3 className="text-White-White  font-normal">
                                            Environmental heterogeneity, rather than stability, explains spider assemblage differences between ecosystems
                                        </h3>
                                    </div>
                                    <div className="w-full p-[30px] flex flex-col gap-2.5">
                                        <p className="text-Green-500 typography-body text-sm leading-tight font-italic">
                                            Daniel Suárez, Paula Arribas, Amrita Srivathsan, [...], Brent C. Emerson
                                        </p>
                                        <p className="text-Black-700 text-sm leading-tight">
                                            The open ecosystem (e.g. grasslands, prairies, shrublands) tends to be ecologically less stable than closed one (i.e. forests) and encompassess higher spatial heterogeneity in terms of environmental diversity. Such differences are expected to…
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 rounded-[10px] inline-flex flex-col items-start gap-2.5">
                                <div className="w-full bg-Green-100 flex flex-col">
                                    <div className="w-full p-[30px] bg-Green-500 flex flex-col gap-20"> {/* Reduced gap from 90px */}
                                        <p className="typography-kicker text-White-White font-normal">
                                            September 2024 / Ecography
                                        </p>
                                        <h3 className="text-White-White font-normal">
                                            Environmental heterogeneity, rather than stability, explains spider assemblage differences between ecosystems
                                        </h3>
                                    </div>
                                    <div className="w-full p-[30px] flex flex-col gap-2.5">
                                        <p className="text-Green-500 typography-body text-sm leading-tight font-italic">
                                            Daniel Suárez, Paula Arribas, Amrita Srivathsan, [...], Brent C. Emerson
                                        </p>
                                        <p className="text-Black-700 text-sm leading-tight">
                                            The open ecosystem (e.g. grasslands, prairies, shrublands) tends to be ecologically less stable than closed one (i.e. forests) and encompassess higher spatial heterogeneity in terms of environmental diversity. Such differences are expected to…
                                        </p>
                                    </div>
                                </div>
                            </div>

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
                                <Button variant="primary">Ask Us a Question</Button>
                                <Button variant="primary">Call Us</Button>
                                <Button variant="primary">Visit Us at the Museum</Button>
                            </div>

                        </Section>
                    </main>
                    <Footer />
                </>
            )}
        </Location>
    )
}

export default ResearchPage

export const Head = () => (
    <HeadComponent
        title="Research | Museum für Naturkunde Berlin"
        description="Discover our scientific research and findings."
        pathname="/en/research"
    />
)