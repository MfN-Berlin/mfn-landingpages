import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
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
import { Link } from "gatsby"

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
        <>
            <Header activeNavItem="research" />
            <main className="bg-white flex flex-col items-center justify-center p-0">
                <AccessibilityNav currentPage="Research" />

                <Section backgroundColor="bg-white" columns={1} padding="pt-16 pb-0">
                    <StoryTime
                        imageProps={{
                            imageName: 'NeuesCTimMuseumfürNaturkundecPabloCastagnola.jpg',
                            alt: "New CT at the Museum für Naturkunde. Photo: Pablo Castagnola",
                            imageMap: imageMap,
                            className: "aspect-[16/9]"
                        }}
                        textProps={{
                            kicker: "Open and Integrated",
                            headline: "Our Research",
                            headlineStyle: "h1",
                            body: "The \"Museum für Naturkunde – Leibniz Institute for Evolution and Biodiversity Research\" is an integrated research museum within the Leibniz Association. Collections, research, and knowledge transfer are closely interconnected, working together to generate new insights.",
                            spacing: "wide",
                            alignment: "center",
                        }}
                        imagePosition="right"
                        className="max-w-7xl mx-auto"
                    />
                </Section>
                <Section
                    backgroundColor="bg-white"
                    columns={1}
                    gapClass="gap-6"
                    layout="equal"
                >
                    <div className="bg-Green-100 p-8 h-full flex">
                        <form
                            action="https://www.museumfuernaturkunde.berlin/en/science/navigator"
                            method="get"
                            className="flex flex-col w-full"
                        >
                            <div className="flex flex-col h-full">
                                <div className="flex-none">
                                    <label
                                        htmlFor="science-search"
                                        className="text-xl font-bold text-Black-900"
                                    >
                                        Explore Our Research
                                    </label>
                                    <p className="text-sm text-Black-700 mt-2">
                                        Search for people and/or keywords to find related research activities. <br /><br />
                                    </p>
                                </div>
                                <div className="mt-auto flex flex-col md:flex-row gap-2">
                                    <input
                                        type="text"
                                        id="science-search"
                                        name="query"
                                        placeholder="Search for names, roles, projects..."
                                        className="w-full p-3 border border-Black-300 rounded appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-Green-500"
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


                </Section>

                <Section backgroundColor="bg-Green-100" columns={1} padding="py-16">
                    <StoryTime
                        imageProps={{
                            imageName: 'A60A1885.jpg',
                            alt: "Scientists at research work. Photo: Pablo Castagnola",
                            imageMap: imageMap,
                            className: "aspect-[4/3] object-cover"
                        }}
                        textProps={{
                            kicker: "Research at the Museum",
                            headline: "Research Areas & Infrastructure",
                            headlineStyle: "h2",
                            body: "At the museum, teams from various disciplines explore life on Earth. Our collection serves as the foundation for globally connected research. We involve society in this endeavor: In cooperation with civil society, politics, and industry, we develop formats that convey insights, create relevant knowledge for all, and make the significance of our collection tangible.",
                            spacing: "wide",
                            buttons: [
                                {
                                    text: "More about Research at MfN",
                                    url: "/en/science/research",
                                    variant: "plain"
                                },
                                {
                                    text: "Our Infrastructure",
                                    url: "/en/science/infrastructure",
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
                            imageName: "DART_@NASAJohns Hopkins APL.jpg",
                            alt: "A satellite DART_@NASAJohns Hopkins APL.jpg",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            kicker: "Research Area 1",
                            headline: "Dynamics of Nature",
                            headlineStyle: "h3",
                            body: "We study the processes that shape the natural world, from the evolution and diversity of species to the formation of the solar system.",
                            spacing: "regular"
                        }}
                        url="/en/science/dynamics-of-nature"
                    />
                    <Card
                        variant="green"
                        imageProps={{
                            imageName: "DSC00396_web.jpg",
                            alt: "Collection of the Museum für Naturkunde",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            kicker: "Research Area 2",
                            headline: "Future of the Collection",
                            headlineStyle: "h3",
                            body: "We are creating an open and networked collection that opens up new paths for research and knowledge transfer through innovative approaches in data and knowledge management – together with partners from science, society, and culture.",
                            spacing: "regular"
                        }}
                        url="/en/science/research/collection-future"
                    />

                    <Card
                        variant="green"
                        imageProps={{
                            imageName: "titel_fb3.png",
                            alt: "Summary graphic from Martina Schraudner's keynote on 26.9.2022 about participation in science.",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            kicker: "Research Area 3",
                            headline: "Society and Nature",
                            headlineStyle: "h3",
                            body: "We investigate how participation and knowledge exchange enrich research and practical knowledge for nature.",
                            spacing: "regular"
                        }}
                        url="/en/science/society-and-nature"
                    />

                    <Card
                        variant="white"
                        imageRatio="28.125" // 32:9 format
                        imageProps={{
                            imageName: "sammlung-ai-generated.jpg",
                            alt: "Three snails (AI generated image)",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            headline: "Collection",
                            headlineStyle: "h3",
                            body: "The collection includes objects from the time of the origin of the solar system more than 4.5 billion years ago to the present day and contains a large number of first descriptions of species (type specimens).",
                            spacing: "regular"
                        }}
                        url="/en/science/infrastructure/collection"
                    />
                    <Card
                        variant="white"
                        imageRatio="28.125" // 32:9 format
                        imageProps={{
                            imageName: "archiv-ai-generated.jpg",
                            alt: "Book page (AI generated image)",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            headline: "Archive",
                            headlineStyle: "h3",
                            body: "Historical documents and research results are available as valuable resources for studies.",
                            spacing: "regular"
                        }}
                        url="/en/science/archive"
                    />

                    <Card
                        variant="white"
                        imageRatio="28.125" // 32:9 format
                        imageProps={{
                            imageName: "bibliotheken-ai-generated.jpg",
                            alt: "Book spines (AI generated image)",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            headline: "Library",
                            headlineStyle: "h3",
                            body: "Scientific and historical collections support research, teaching, and knowledge transfer.",
                            spacing: "regular"
                        }}
                        url="/en/science/library"
                    />

                </Section>
                <Section backgroundColor="bg-Green-100" columns={2} padding="py-0 pb-16">
                    <Card
                        variant="white"
                        imageRatio="28.125" // 32:9 format

                        imageProps={{
                            imageName: "it-infrastruktur-ai-generated.jpg",
                            alt: "Camera (AI generated image)",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            headline: "Laboratories",
                            headlineStyle: "h3",
                            body: "Our laboratories are open to museum staff, students, doctoral candidates, postdocs, and visiting scientists for their research projects.",
                            spacing: "regular",
                            buttons: [
                                {
                                    text: "Laboratories",
                                    url: "/en/science/infrastructure/labs/",
                                    variant: "plain"
                                }
                            ]
                        }}
                    />
                    <Card
                        variant="white"
                        imageRatio="28.125" // 32:9 format
                        imageProps={{
                            imageName: "Zeitschriften_Cover_04__c_Hwa_Ja-Goetz_MfN.jpg",
                            alt: "Cover photo of the museum's three Open Access journals",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            headline: "Scientific Journals",
                            headlineStyle: "h3",
                            body: "We publish three scientific journals: Deutsche Entomologische Zeitschrift, Zoosystematics and Evolution (formerly Mitteilungen aus dem Zoologischen Museum Berlin), and Fossil Record.",
                            spacing: "regular"
                        }}
                        url="/en/science/scientific-journals"
                    />
                </Section>

                <Section backgroundColor="bg-White" columns={1} padding="py-16">
                    <StoryTime
                        imageProps={{
                            imageName: '213086456_4048064465229816_4437487348901250436_n 1.jpg',
                            alt: "Scientists at research work. Photo: Pablo Castagnola",
                            imageMap: imageMap,
                            className: "aspect-[4/3] object-cover"
                        }}
                        textProps={{
                            kicker: "Working Groups and Teams",
                            headline: "Contact",
                            headlineStyle: "h2",
                            body: "Search and find people working at the Museum für Naturkunde Berlin. The search provides information about people, projects, contact options, and roles.",
                            spacing: "wide",
                            buttons: [
                                {
                                    text: "Open Person Search",
                                    url: "/en/research/team-projects/",
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
                            altText="View of the paleobotany collection. Photo: Carola Radke"
                            kicker="Research Area 1"
                            title="Paleobotany Working Group"
                            text="The Paleobotany Working Group researches the evolution and diversity of fossil plants. Our focus is on reconstructing extinct plants and their habitats."
                            link="/en/science/paleobotany-working-group"
                        />
                        <SlideContent
                            imageName="Ortholasmatinae fossil Jonas Damzen.jpg"
                            altText="Extinct harvestman in Ukrainian Rovno amber"
                            kicker="Research Area 1"
                            title="Dunlop Working Group"
                            text="The Dunlop Working Group investigates the evolution and systematics of fossil and recent arachnids, with particular emphasis on scorpions and spiders."
                            link="/en/science/dunlop-working-group"
                        />
                        <SlideContent
                            imageName="Thomisid5-crop.jpg"
                            altText="Close-up of a crab spider (Thomisidae)"
                            kicker="Research Area 1"
                            title="MultiplEye Lab Research Group"
                            text="The MultiplEye Lab researches the function and evolution of multiple-eye systems in animals, particularly in spiders and other arthropods."
                            link="/en/science/multipleye-lab"
                        />
                        <SlideContent
                            imageName="Chameleon_Sudan_Erkowit.jpg"
                            altText="Chameleon on trunk, blue sky and trees in background"
                            kicker="Research Area 1"
                            title="Amniota Lab"
                            text="Our research focuses on fossil and living terrestrial vertebrates, such as lizards and snakes (Müller) and herbivorous mammals (Bibi)."
                            link="/en/science/amniota-lab"
                        />
                        <SlideContent
                            imageName="zm_b_vi_0245_walmodell.jpg"
                            altText="Historical whale model"
                            kicker="Research Area 2"
                            title="Center for Cultural and Social Sciences of Nature"
                            text="Our working group is dedicated to the politics, histories, and cultures of nature through independent research and public activities in knowledge transfer."
                            link="/en/science/cultural-social-sciences"
                        />
                        <SlideContent
                            imageName="large_Header_2023_klein_beschnitten_belichted_7cca538a55.jpg"
                            altText="Nature View"
                            kicker="Research Area 3"
                            title="Human-Nature Relations in the Anthropocene"
                            text="Inter- and transdisciplinary research on the interrelations between humans, nature, and digital transformation"
                            link="/en/science/human-nature-relations"
                        />
                        <SlideContent
                            imageName="ieti-keyvisual.png"
                            altText="IETI Keyvisual"
                            kicker="Research Area 3"
                            title="Public Engagement and Impact"
                            text="We promote the strategic anchoring of public engagement in research and research institutions. To this end, we open up both research culture and processes to non-academic stakeholders through a broad spectrum of formats and methods."
                            link="/en/science/public-engagement"
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
                                text: "Publications 2007 - 2023",
                                variant: "plain",
                                url: "/en/research/publications/"
                            }
                        ]}
                    />
                </Section>

                {/* <Section backgroundColor="bg-White" columns={3} padding="pb-16">
                    <Link to="/en/press/releases/how-life-strategies-and-habitats-influence-regeneration-abilities" className="group w-full p-3 rounded-[10px] inline-flex flex-col items-start gap-2.5 hover:bg-Green-200 focus:border-2 focus:border-[#729800]">
                        <div className="w-full bg-Green-100 flex flex-col">
                            <div className="w-full p-[30px] bg-Green-500 flex flex-col gap-20 group-hover:bg-Green-600 transition-colors duration-300">
                                <p className="typography-kicker text-White-White font-normal">
                                    Selected Publication 2024
                                </p>
                                <h3 className="text-White-White font-normal">
                                    Effects of life history strategies and habitats on limb regeneration in plethodontid salamanders
                                </h3>
                            </div>
                            <div className="w-full p-[30px] flex flex-col gap-2.5">
                                <p className="text-Black-700 text-sm leading-tight">
                                    Bothe, V., Müller, H., Shubin, N., & Fröbisch, N. (2024).
                                    <span className="font-bold">Effects of life history strategies and habitats on limb regeneration in plethodontid salamanders</span>.
                                    <span className="italic">Developmental Dynamics</span>.
                                    <a href="https://doi.org/10.1002/dvdy.742" className="text-Green-500 hover:text-Green-600 hover:underline break-all">
                                        https://doi.org/10.1002/dvdy.742
                                    </a>
                                </p>
                            </div>
                        </div>
                    </Link>

                    <Link to="/en/press/releases/new-bromacker-early-reptile-named-after-unesco-geopark-thuringia" className="group w-full p-3 rounded-[10px] inline-flex flex-col items-start gap-2.5 hover:bg-Green-200 focus:border-2 focus:border-[#729800]">
                        <div className="w-full bg-Green-100 flex flex-col">
                            <div className="w-full p-[30px] bg-Green-500 flex flex-col gap-20 group-hover:bg-Green-600 transition-colors duration-300">
                                <p className="typography-kicker text-White-White font-normal">
                                    Selected Publication 2024
                                </p>
                                <h3 className="text-White-White font-normal">
                                    A comprehensive phylogeny and revised taxonomy of Diadectomorpha with a discussion on the origin of tetrapod herbivory
                                </h3>
                            </div>
                            <div className="w-full p-[30px] flex flex-col gap-2.5">
                                <p className="text-Black-700 text-sm leading-tight">
                                    Ponstein, J., MacDougall, M. J., & Fröbisch, J. (2024).
                                    <span className="font-bold">A comprehensive phylogeny and revised taxonomy of Diadectomorpha with a discussion on the origin of tetrapod herbivory</span>.
                                    <span className="italic">Royal Society Open Science</span>.
                                    <a href="https://doi.org/10.1098/rsos.231355" className="text-Green-500 hover:text-Green-600 hover:underline break-all">
                                        https://doi.org/10.1098/rsos.231355
                                    </a>
                                </p>
                            </div>
                        </div>
                    </Link>

                    <Link to="/en/press/releases/birds-of-paradise-successfully-adorn-themselves-with-borrowed-feathers" className="group w-full p-3 rounded-[10px] inline-flex flex-col items-start gap-2.5 hover:bg-Green-200 focus:border-2 focus:border-[#729800]">
                        <div className="w-full bg-Green-100 flex flex-col">
                            <div className="w-full p-[30px] bg-Green-500 flex flex-col gap-20 group-hover:bg-Green-600 transition-colors duration-300">
                                <p className="typography-kicker text-White-White font-normal">
                                    Selected Publication 2024
                                </p>
                                <h3 className="text-White-White font-normal">
                                    Contemporary intergeneric hybridization and backcrossing among birds-of-paradise
                                </h3>
                            </div>
                            <div className="w-full p-[30px] flex flex-col gap-2.5">
                                <p className="text-Black-700 text-sm leading-tight">
                                    Thörn, F., Soares, A. E. R., Müller, I. A., Päckert, M., Frahnert, S., van Grouw, H., Kamminga, P., Peona, V., Suh, A., Blom, M. P. K., & Irestedt, M. (2024).
                                    <span className="font-bold">Contemporary intergeneric hybridization and backcrossing among birds-of-paradise</span>.
                                    <span className="italic">Evolution Letters</span>.
                                    <a href="https://doi.org/10.1093/evlett/qrae023" className="text-Green-500 hover:text-Green-600 hover:underline break-all">
                                        https://doi.org/10.1093/evlett/qrae023
                                    </a>
                                </p>
                            </div>
                        </div>
                    </Link>
                </Section> */}

                <Section columns={1} backgroundColor="bg-Black-100">
                    <CardText
                        headline="Contact"
                        headlineStyle="h1"
                        body="Need more information about our research?"
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

export default ResearchPage

export const Head = () => (
    <HeadComponent
        title="Research | Museum für Naturkunde Berlin"
        description="Explore the research activities at the Museum für Naturkunde Berlin"
        pathname="/en/research"
    />
)