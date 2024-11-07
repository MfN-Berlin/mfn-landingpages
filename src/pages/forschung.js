import * as React from "react"
import { graphql, useStaticQuery, withPrefix } from "gatsby"
import Header from "../components/layouts/Header"
import Button from "../components/elements/Button"
import CardText from '../components/elements/CardText'
import ContentImage from '../components/elements/ContentImage'
import Section from '../components/elements/Section'
import Card from '../components/elements/Card'
import StoryTime from '../components/layouts/StoryTime'
import Footer from '../components/layouts/Footer'
import { Accordion, AccordionItem, AccordionSpacer } from '../components/layouts/Accordion'
import Slideshow from '../components/layouts/Slideshow'
import SlideContent from '../components/layouts/SlideContent'
import AccessibilityNav from '../components/layouts/AccessibilityNav'
import OpenToday from '../components/features/OpenToday'
import Feedback from '../components/features/Feedback'
import HeadComponent from '../components/layouts/HeadComponent'
import UpcomingHoliday from '../components/features/UpcomingHoliday';
import Teaser from '../components/layouts/Teaser';

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
            <Header activeNavItem="forschung" />
            <main className="bg-white flex flex-col items-center justify-center p-0">
                <Section backgroundColor="bg-white" padding="pt-8 pb-0">
                    <AccessibilityNav currentPage="Forschung" />
                </Section>


                <Section backgroundColor="bg-white" columns={1}>
                    <CardText
                        kicker="Offen und integriert"
                        headline="Unsere Forschung"
                        headlineStyle="h1"
                        body="Das Museum für Naturkunde Berlin ist ein integriertes Forschungsmuseum der Leibniz-Gemeinschaft und zählt weltweit zu den führenden Einrichtungen für biologische und geowissenschaftliche Evolution sowie Biodiversität. Mit der wissenschaftlichen Forschung und unserer Sammlung als Hauptinfrastruktur bilden diese Bereiche zusammen mit der Wissensvermittlung die zentralen Säulen des Museums."
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
                    <div className="bg-Green-100 p-8 h-full flex flex-col">
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
                                    Wissenschafts-Suche
                                </label>
                                <p className="text-sm text-Black-700">
                                    Suchen Sie nach Namen, Rollen, Projekten des Museums – oder einfach nach Stichworten um passende Projektportraits zu finden                        </p>
                                <div className="mt-auto flex gap-2">
                                    <input
                                        type="text"
                                        id="science-search"
                                        name="query"
                                        placeholder="Suchen Sie nach Namen, Rollen, Projekten..."
                                        className="flex-1 p-3 border border-Black-300 focus:outline-none focus:ring-2 focus:ring-Green-500"
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

                    <div className="bg-Green-100 p-8 h-full flex flex-col">
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
                                    Projekte und Arbeitsgruppen
                                </label>
                                <p className="text-sm text-Black-700">
                                    Nutzen Sie unseren Filter, um Themenspezifische Projekte anzeigen zu lassen
                                </p>
                                <div className="mt-auto flex gap-2">
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
                <Section backgroundColor="bg-white" columns={1} padding="py-8">
                    <Teaser
                        imageProps={{
                            imageName: '180809_ct_09_www_c_carola-radke_mfn.jpg',
                            alt: "Mitarbeiter Martin Kirchner arbeitet am Computertomografen im neuen CT Labor",
                            imageMap: imageMap,
                            className: "aspect-[16/9]"
                        }}
                        textProps={{
                            headline: "Wir erforschen die Erde und ihre Lebewesen im Dialog mit dem Menschen.",
                            body: "Als exzellentes Forschungsmuseum und innovatives Kommunikationszentrum prägen wir den wissenschaftlichen und gesellschaftlichen Dialog um die Zukunft unserer Erde mit – weltweit.",
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
                            kicker: "Forschungsbereiche & Infrastruktur",
                            headline: "Forschen am Museum",
                            headlineStyle: "h2",
                            body: "Wir forschen in Kooperationen, sammlungsbasiert und global vernetz. Teams aus unterschiedlichen Fachrichtungen und mit verschiedenen Aufgaben vertiefen in einem dynamischen Prozess ihre Forschung über das Leben, die Erde und unser Sonnensystem.<br/><br/> Unsere Forschungsbereiche<br/>Mehr über die Forschung am MfN",
                            spacing: "wide",
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
                            kicker: "forschungsbereich 1",
                            headline: "Dynamik der Natur",
                            headlineStyle: "h3",
                            body: "Untersuchung der Prozesse, die die Entwicklung und Vielfalt des Lebens auf der Erde prägen.",
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
                            kicker: "forschungsbereich 2",
                            headline: "Zu﻿kunft der Sammlung",
                            headlineStyle: "h3",
                            body: "Offene Sammlungen und neue Ansätze, die Forschung und Entdeckung weltweit unterstützen.",
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
                            kicker: "forschungsbereich 3",
                            headline: "G﻿esellschaft und Natur",
                            headlineStyle: "h3",
                            body: "Im Dialog mit verschiedenen Akteuren entstehen gemeinsame Lösungen für den Schutz der Natur.",
                            spacing: "regular"
                        }}
                    />

                </Section>
                <Section backgroundColor="bg-Green-100" columns={3} padding="py-0">
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

                            headline: "Unsere Labore & IT",
                            headlineStyle: "h3",
                            body: "Neben unserer großen Sammlung unterhält das Museum eine Vielzahl an hochmodernen Laboren, eine IT-Forschungs-infrastruktur sowie eine Forschungsdatenmanagement-infrastruktur. LaboreIT-SystemeForschungs-Datenmanagement",
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
                            headline: "Wissen verbindet",
                            headlineStyle: "h3",
                            body: "Das Museum für Naturkunde Berlin experimentiert mit verschiedenen individuell zugeschnittenen Formaten, um mit vielen unterschiedlichen Zielgruppen in den Dialog zu treten. Formate zur Wissenschafts-Kommunikation Politikberatung Unser Engagement für Bürger-Wissenschaften",
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
                            kicker: "Kontakt",
                            headline: "Teams & Projekte",
                            headlineStyle: "h2",
                            body: "Vernetzen Sie sich mit unseren über 200 Wissenschaftlichen Mitarbeitenden, die sich in über 100 Projekten engagieren.",
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
                                <h3 className="text-White-White">
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
                                <h3 className="text-White-White">
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
                                <h3 className="text-White-White">
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
                        headline="Kontakt"
                        headlineStyle="h1"
                        body="Brauchen Sie noch etwas anderes bei uns mitzumachen?"
                        spacing="wide"
                        alignment="center"
                    />
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
                        <Button variant="primary">Stellen Sie uns eine Frage</Button>
                        <Button variant="primary">Rufen Sie uns an</Button>
                        <Button variant="primary">Besuchen Sie uns im Museum</Button>
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
        title="Forschung"
        description="Willkommen im Museum für Naturkunde Berlin - Entdecken Sie unsere digitalen Angebote und planen Sie Ihren Besuch."
        pathname="/forschung"
    />
)