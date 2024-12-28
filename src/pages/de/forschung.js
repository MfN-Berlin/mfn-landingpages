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

const VisitPage = () => {
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
            <Header activeNavItem="forschung" />
            <main className="bg-white flex flex-col items-center justify-center p-0">
                <AccessibilityNav currentPage="Forschung" />

                <Section backgroundColor="bg-white" columns={1}>
                     <StoryTime
                        imageProps={{
                            imageName: 'Neues CT im Museum für Naturkunde (c) Pablo Castagnola.jpg',
                            alt: "Neues CT im Museum für Naturkunde (c) Pablo Castagnola",
                            imageMap: imageMap,
                            className: "aspect-[16/9]"
                        }}
                        textProps={{
                            kicker: "Offen und integriert",
                            headline: "Unsere Forschung",
                            headlineStyle: "h1",
                            body: "Das Museum für Naturkunde Berlin ist ein integriertes Forschungsmuseum der Leibniz-Gemeinschaft und zählt weltweit zu den führenden Einrichtungen für biologische und geowissenschaftliche Evolution sowie Biodiversität.<br/><br/> Mit der wissenschaftlichen Forschung und unserer Sammlung als Hauptinfrastruktur bilden diese Bereiche zusammen mit der Wissensvermittlung die zentralen Säulen des Museums.",
                            spacing: "wide",
                            alignment: "center",
                        }}
                        imagePosition="right"
                        className="max-w-7xl mx-auto"
                    />
                </Section>
                <Section
                    backgroundColor="bg-white"
                    columns={2}
                    gapClass="gap-6"
                    layout="equal"
                >
                    <div className="bg-Green-100 p-8 h-full flex">
                        <form
                            action="https://www.museumfuernaturkunde.berlin/de/wissenschaft/navigator"
                            method="get"
                            className="flex flex-col w-full"
                        >
                            <div className="flex flex-col h-full">
                                <div className="flex-none">
                                    <label
                                        htmlFor="science-search"
                                        className="text-xl font-bold text-Black-900"
                                    >
                                        Projekt-Suche
                                    </label>
                                    <p className="text-sm text-Black-700 mt-2">
                                    Suchen Sie nach Personen und/oder Stichworte und finden Sie dazu passende Forschungsaktivitäten. <br/><br/>
                                    </p>
                                </div>
                                <div className="mt-auto flex flex-col md:flex-row gap-2">
                                    <input
                                        type="text"
                                        id="science-search"
                                        name="query"
                                        placeholder="Suchen Sie nach Namen, Rollen, Projekten..."
                                        className="w-full p-3 border border-Black-300 rounded appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-Green-500"
                                    />
                                    <button
                                        type="submit"
                                        className="px-6 py-2 bg-Green-500 text-white font-bold hover:bg-Green-600 transition-colors"
                                    >
                                        Suchen
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="bg-Green-100 p-8 h-full flex">
                        <form
                            action="https://www.museumfuernaturkunde.berlin/de/wissenschaft/navigator"
                            method="get"
                            className="flex flex-col w-full"
                        >
                            <div className="flex flex-col h-full">
                                <div className="flex-none">
                                    <label
                                        htmlFor="projects-search"
                                        className="text-xl font-bold text-Black-900"
                                    >
                                        Arbeitsgruppen
                                    </label>
                                    <p className="text-sm text-Black-700 mt-2">
                                        Nutzen Sie unseren Filter, um Themenspezifische Projekte anzeigen zu lassen
                                    </p>
                                </div>
                                <div className="mt-auto flex flex-col md:flex-row gap-2">
                                    <select
                                        name="f[2]"
                                        className="w-full p-3 border border-Black-300 rounded appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-Green-500"
                                    >
                                        <option value="">Alle Themen</option>
                                        <optgroup label="Kernbegriffe">
                                            <option value="topic:792">Forschung</option>
                                            <option value="topic:794">Transfer</option>
                                        </optgroup>
                                        <optgroup label="Schlagwörter">
                                            <option value="topic:796">Artenschutz</option>
                                            <option value="topic:797">Artensterben</option>
                                            <option value="topic:798">Biodiversität</option>
                                            <option value="topic:799">Bürgerwissenschaften</option>
                                            <option value="topic:800">Datenbank</option>
                                            <option value="topic:802">Digitalisierung</option>
                                            <option value="topic:803">Evolution</option>
                                            <option value="topic:806">Genetik</option>
                                            <option value="topic:821">Genomik</option>
                                            <option value="topic:808">Gesellschaft</option>
                                            <option value="topic:810">Kooperation</option>
                                            <option value="topic:814">Politik</option>
                                            <option value="topic:815">Sammlung</option>
                                            <option value="topic:818">Wissenschaftsdatenmanagement</option>
                                            <option value="topic:816">Wissenschaftskommunikation</option>
                                            <option value="topic:817">Wissenstransfer</option>
                                            <option value="topic:823">Öffnung des Museums</option>
                                        </optgroup>

                                    </select>
                                    <button
                                        type="submit"
                                        className="px-6 py-2 bg-Green-500 text-white font-bold hover:bg-Green-600 transition-colors"
                                    >
                                        Suchen
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </Section>
              
                <Section backgroundColor="bg-Green-100" columns={1} padding="py-16">
                    <StoryTime
                        imageProps={{
                            imageName: 'A60A1885.jpg', // Replace with your actual image
                            alt: "Wissenschaftler bei der Forschungsarbeit. Bild: Pablo Castagnola",
                            imageMap: imageMap,
                            className: "aspect-[4/3] object-cover"
                        }}
                        textProps={{
                            kicker: "Forschungsbereiche & Infrastruktur",
                            headline: "Forschen am Museum",
                            headlineStyle: "h2",
                            body: "Am Museum erforschen Teams aus verschiedenen Disziplinen das Leben auf der Erde. Unsere Sammlung ist die Basis für weltweit vernetzte Forschung. Hieran beteiligen wir die Gesellschaft: In Kooperation mit Zivilgesellschaft, Politik und Wirtschaft entwickeln wir Formate, die Erkenntnisse vermitteln, für alle relevantes Wissen schaffen und die Bedeutung unserer Sammlung greifbar machen.",
                            spacing: "wide",
                            buttons: [
                                {
                                    text: "Mehr über die Forschung am MfN",
                                    url: "/teams-projekte",
                                    variant: "plain"
                                },
                                {
                                    text: "Unsere Forschungsbereiche",
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
                            imageName: "DART_@NASAJohns Hopkins APL.jpg",
                            alt: "Ein Satellit DART_@NASAJohns Hopkins APL.jpg",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            kicker: "Forschungsbereich 1",
                            headline: "Dynamik der Natur",
                            headlineStyle: "h3",
                            body: "Wir untersuchen die Prozesse, die die natürliche Welt formen, von der Evolution und Vielfalt der Arten bis hin zur Entstehung des Sonnensystems.",
                            spacing: "regular"
                        }}
                        url="/de/forschung/dynamik-der-natur"
                    />
                    <Card
                        variant="green"
                        imageProps={{
                            imageName: "DSC00396_web.jpg",
                            alt: "Sammlung des Museums für Naturkunde",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            kicker: "Forschungsbereich 2",
                            headline: "Zukunft der Sammlung",
                            headlineStyle: "h3",
                            body: "Wir gestalten eine offene und vernetzte Sammlung, die durch innovative Ansätze im Daten- und Wissensmanagement neue Wege für Forschung und Wissenstransfer eröffnet – gemeinsam mit Partnern aus Wissenschaft, Gesellschaft und Kultur.",
                            spacing: "regular"
                        }}
                        url="/de/forschung/zukunft-der-sammlung"
                    />

                    <Card
                        variant="green"
                        imageProps={{
                            imageName: "titel_fb3.png",
                            alt: "Zusammenfassung in einer Graphik der Keynote von Martina Schraudner am 26.9.2022. zum Thema Partizipation in der Wissenschaft.",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            kicker: "forschungsbereich 3",
                            headline: "Gesellschaft und Natur",
                            headlineStyle: "h3",
                            body: "Wir erforschen, wie Partizipation und Wissensaustausch Forschung und Praxiswissen für Natur bereichern.",
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

                            headline: "Sammlung",
                            headlineStyle: "h3",
                            body: "Unsere Sammlung bietet vielfältige Datenquellen für die Erforschung biologischer und geologischer Vielfalt.",
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
                            headline: "Archiv",
                            headlineStyle: "h3",
                            body: "Historische Dokumente und Forschung-sergebnisse stehen als wertvolle Ressourcen für Studien bereit.",
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
                            headline: "Bibliotheken",
                            headlineStyle: "h3",
                            body: "Naturwissenschaftliche und historische Bestände unterstützen Forschung, Lehre und Wissensvermittlung.",
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

                            headline:  "Labore",
                            headlineStyle: "h3",
                            body: "Unsere  Labore stehen Mitarbeitenden des Museums, Studierenden, Doktoranden,  Postdocs und Gastwissenschaftlerinnen und Gastwissenschaftlern für ihre  Forschungsprojekte offen.",
                            spacing: "regular",
                            buttons: [
                                {
                                    text: "Labore",
                                    url: "/teams-projekte",
                                    variant: "plain"
                                },
                                {
                                    text: "IT-Systeme",
                                    url: "/teams-projekte",
                                    variant: "plain"
                                },
                                {
                                    text: "Forschungs-Datenmanagement",
                                    url: "/teams-projekte",
                                    variant: "plain"
                                },
                            ]
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
                            headline: "Wissen verbindet",
                            headlineStyle: "h3",
                            body: "Zu unserem Angebot gehören  interdisziplinäre und internationale Fortbildungen in den Bereichen  öffentliches Engagement (Public Engagement), Offene Wissenschaft (Open  Science), Bürgerwissenschaften (Citizen Science) und Museum.",
                            spacing: "regular",
                            buttons: [
                                {
                                    text: "Formate zur Wissenschaftskommunikation",
                                    url: "/teams-projekte",
                                    variant: "plain"
                                },
                                {
                                    text: "Politikberatung",
                                    url: "/teams-projekte",
                                    variant: "plain"
                                },
                                {
                                    text: "Unser Engagement für Bürgerwissenschaften",
                                    url: "/teams-projekte",
                                    variant: "plain"
                                },
                            ]
                        }}
                    />



                </Section>
                <Section backgroundColor="bg-White" columns={1} padding="py-16">
                    <StoryTime
                        imageProps={{
                            imageName: '213086456_4048064465229816_4437487348901250436_n 1.jpg', // Replace with your actual image
                            alt: "Wissenschaftler bei der Forschungsarbeit. Bild: Pablo Castagnola",
                            imageMap: imageMap,
                            className: "aspect-[4/3] object-cover"
                        }}
                        textProps={{
                            kicker: "Kontakt",
                            headline: "Teams & Projekte",
                            headlineStyle: "h2",
                            body: "Vernetzen Sie sich mit unseren über 200 Wissenschaftler:innen, die sich in über 100 Projekten engagieren.",
                            spacing: "wide",
                            buttons: [
                                {
                                    text: "Team- und Projektdatenbank öffnen",
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
                        headline="Arbeitsgruppen"
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
                            kicker="Forschungsbereich 1"
                            title="AG Paläobotanik"
                            text="Die AG Paläobotanik erforscht die Evolution und Diversität fossiler Pflanzen. Unser Fokus liegt auf der Rekonstruktion von ausgestorbenen Pflanzen und ihrer Lebensräume."
                            link="/wissenschaft/ag-palaeobotanik"
                        />
                        <SlideContent
                            imageName="Ortholasmatinae fossil Jonas Damzen.jpg"
                            altText="Ausgestorbener Weberknecht in ukrainischem Rovno Bernstein "
                            kicker="Forschungsbereich 1"
                            title="AG Dunlop"
                            text="Die AG Dunlop untersucht die Evolution und Systematik fossiler und rezenter Spinnentiere, mit besonderem Schwerpunkt auf Skorpionen und Spinnen."
                            link="/wissenschaft/ag-dunlop"
                        />
                        <SlideContent
                            imageName="Thomisid5-crop.jpg"
                            altText="Nahaufnahme einer Krabbenspinne (Thomisidae). "
                            kicker="Forschungsbereich 1"
                            title="Forschungsgruppe MultiplEye Lab"
                            text="Das MultiplEye Lab erforscht die Funktion und Evolution von Vielaugen-Systemen bei Tieren, insbesondere bei Spinnen und anderen Arthropoden."
                            link="/wissenschaft/multipleye-lab"
                        />
                        <SlideContent
                            imageName="Chameleon_Sudan_Erkowit.jpg"
                            altText="Chameleon on trunk, blue sky and trees in background"
                            kicker="Forschungsbereich 1"
                            title="Amniota Lab"
                            text="Unsere Forschung konzentriert sich auf fossile und an Land lebende Wirbeltiere, wie Eidechsen und Schlangen (Müller) sowie pflanzenfressende Säugetiere (Bibi). "
                            link="/wissenschaft/multipleye-lab"
                        />
                        <SlideContent
                            imageName="zm_b_vi_0245_walmodell.jpg"
                            altText="Nahaufnahme einer Krabbenspinne (Thomisidae). "
                            kicker="Forschungsbereich 2"
                            title="Zentrum für Kultur- und Sozialwissenschaften der Natur"
                            text="Unsere Arbeitsgruppe widmet sich den Politiken, Geschichten und Kulturen von Natur durch eigenständige Forschung und öffentliche Aktivitäten im Bereich Wissenstransfer. "
                            link="/wissenschaft/multipleye-lab"
                        />
                        <SlideContent
                            imageName="large_Header_2023_klein_beschnitten_belichted_7cca538a55.jpg"
                            altText="Naturblick "
                            kicker="Forschungsbereich 3"
                            title="Mensch-Natur-Beziehungen im Anthropozän"
                            text="Inter- und transdisziplinäre Forschung zu den Wechselbeziehungen zwischen Mensch, Natur und digitaler Transformation"
                            link="/wissenschaft/multipleye-lab"
                        />
                        <SlideContent
                            imageName="ECSA_Tag2_BenKriemann_MfN2022_334_zugeschnitten.jpg"
                            altText="ECSA post its 2 "
                            kicker="Forschungsbereich 3"
                            title="Entwicklung eines Citizen Science-Zentrums für Natur, Nachhaltigkeit, Digitalisierung"
                            text="Innovative Technologien im Natur- und Umweltschutz: Wie können wir den Chancen und Herausforderungen für Citizen Science begegnen?"
                            link="/wissenschaft/multipleye-lab"
                        />
                        <SlideContent
                            imageName="ieti-keyvisual.png"
                            altText="IETI Keyvisual"
                            kicker="Forschungsbereich 3"
                            title="Public Engagement und Impact"
                            text="Wir fördern die strategische Verankerung von Public Engagement in der Forschung und in Forschungseinrichtungen. Dazu öffnen wir sowohl die Forschungskultur als auch -prozesse für nicht-akademische Stakeholder durch ein breites Spektrum an Formaten und Methoden."
                            link="/wissenschaft/multipleye-lab"
                        />

                    </Slideshow>
                </Section>
                <Section backgroundColor="bg-White" columns={1} padding="pt-16 pb-8">
                    <CardText
                        headline="Publikationen"
                        headlineStyle="h1"
                        spacing="wide"
                        alignment="center"
                        buttons={[
                            {
                                text: "Alle Publikationen im Überblick",
                                variant: "plain",
                                url: "/de/forschung/publikationen/"
                            }
                        ]}
                    />
                </Section>
                <Section backgroundColor="bg-White" columns={3} padding="pb-16">
                    <Link to="https://www.museumfuernaturkunde.berlin/de/presse/pressemitteilungen/wie-lebensstrategien-und-lebensraeume-die-regenerationsfaehigkeiten-von" className="group w-full p-3 rounded-[10px] inline-flex flex-col items-start gap-2.5 hover:bg-Green-200 focus:border-2 focus:border-[#729800]">
                        <div className="w-full bg-Green-100 flex flex-col  ">
                            <div className="w-full p-[30px] bg-Green-500 flex flex-col gap-20 group-hover:bg-Green-600 transition-colors duration-300">
                                <p className="typography-kicker text-White-White font-normal">
                                    September 20th 2024 / Developmental Dynamics
                                </p>
                                <h3 className="text-White-White font-normal">
                                    Effects of life history strategies and habitats on limb regeneration in plethodontid salamanders
                                </h3>
                            </div>
                            <div className="w-full p-[30px] flex flex-col gap-2.5">
                                <p className="text-Green-500 typography-body text-sm leading-tight font-italic ">
                                    Vivien Bothe, Hendrik Müller, Neil Shubin, Nadia Fröbisch
                                </p>
                                <p className="text-Black-700 text-sm leading-tight ">
                                    Salamanders are the only tetrapods that exhibit the ability to fully regenerate limbs...
                                </p>
                            </div>
                        </div>
                    </Link>

                    <Link to="https://www.museumfuernaturkunde.berlin/de/presse/pressemitteilungen/neuer-bromacker-ursaurier-nach-unesco-geopark-thueringen-benannt" className="group w-full p-3 rounded-[10px] inline-flex flex-col items-start gap-2.5 hover:bg-Green-200 focus:border-2 focus:border-[#729800]">
                        <div className="w-full bg-Green-100 flex flex-col ">
                            <div className="w-full p-[30px] bg-Green-500 flex flex-col gap-20 group-hover:bg-Green-600 transition-colors duration-300">
                                <p className="typography-kicker text-White-White font-normal">
                                    June 26th 2024 / Royal Society Open Science
                                </p>
                                <h3 className="text-White-White font-normal">
                                    A comprehensive phylogeny and revised taxonomy of Diadectomorpha with a discussion on the origin of tetrapod herbivory
                                </h3>
                            </div>
                            <div className="w-full p-[30px] flex flex-col gap-2.5">
                                <p className="text-Green-500 typography-body text-sm leading-tight font-italic">
                                    Jasper Ponstein, Mark J. MacDougall, Jörg Fröbisch
                                </p>
                                <p className="text-Black-700 text-sm leading-tight ">
                                    Among terrestrial tetrapods, the origin of herbivory marked a key evolutionary event...
                                </p>
                            </div>
                        </div>
                    </Link>

                    <Link to="https://www.museumfuernaturkunde.berlin/de/presse/pressemitteilungen/paradiesvoegel-schmuecken-sich-erfolgreich-mit-fremden-federn" className="group w-full p-3 rounded-[10px] inline-flex flex-col items-start gap-2.5 hover:bg-Green-200 focus:border-2 focus:border-[#729800]">
                        <div className="w-full bg-Green-100 flex flex-col ">
                            <div className="w-full p-[30px] bg-Green-500 flex flex-col gap-20 group-hover:bg-Green-600 transition-colors duration-300">
                                <p className="typography-kicker text-White-White font-normal">
                                    June 8th 2024 / Evolution Letters
                                </p>
                                <h3 className="text-White-White font-normal">
                                    Contemporary intergeneric hybridization and backcrossing among birds-of-paradise
                                </h3>
                            </div>
                            <div className="w-full p-[30px] flex flex-col gap-2.5">
                                <p className="text-Green-500 typography-body text-sm leading-tight font-italic">
                                    Filip Thörn, André E R Soares, Ingo A Müller, Martin Päckert...
                                </p>
                                <p className="text-Black-700 text-sm leading-tight ">
                                    Despite large differences in morphology, behavior and lek-mating strategies...
                                </p>
                            </div>
                        </div>
                    </Link>
                </Section>
                <Section columns={1} backgroundColor="bg-Black-100">
                    <CardText
                        headline="Kontakt"
                        headlineStyle="h1"
                        body="Fehlt Ihnen noch eine Information rund um das Thema Forschung?"
                        spacing="wide"
                        alignment="center"
                    />
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-2">
                        <Button variant="primary">Stellen Sie uns eine Frage</Button>
                        <Button variant="primary">Rufen Sie uns an</Button>
                        <Button variant="primary">Kontaktieren Sie uns!</Button>
                    </div>

                </Section>
            </main>
            <Footer />
        </>
    )
}

export default VisitPage

export const Head = () => (
    <HeadComponent
        title="Plan Your Visit"
        description="Plan your visit to the Museum für Naturkunde Berlin"
        pathname="/en/visit"
    />
)