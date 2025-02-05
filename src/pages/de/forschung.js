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

                <Section backgroundColor="bg-white" columns={1} padding="pt-16 pb-0">
                    <StoryTime
                        imageProps={{
                            imageName: 'NeuesCTimMuseumfürNaturkundecPabloCastagnola.jpg',
                            alt: "Neues CT im Museum für Naturkunde (c) Pablo Castagnola",
                            imageMap: imageMap,
                            className: "aspect-[16/9]"
                        }}
                        textProps={{
                            kicker: "Offen und integriert",
                            headline: "Unsere Forschung",
                            headlineStyle: "h1",
                            body: "Das \"Museum für Naturkunde – Leibniz-Institut für Evolutions- und Biodiversitätsforschung\" ist ein integriertes Forschungsmuseum der Leibniz-Gemeinschaft. Sammlung, Forschung und Wissenstransfer sind eng verknüpft und schaffen gemeinsam neue Erkenntnisse.",
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
                                        Informieren Sie sich über unsere Forschung
                                    </label>
                                    <p className="text-sm text-Black-700 mt-2">
                                        Suchen Sie nach Personen und/oder Stichworten und finden Sie dazu passende Forschungsaktivitäten. <br /><br />
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
                            kicker: "Forschen am Museum",
                            headline: "Forschungsbereiche & Infrastruktur",
                            headlineStyle: "h2",
                            body: "Am Museum erforschen Teams aus verschiedenen Disziplinen das Leben auf der Erde. Unsere Sammlung ist die Basis für weltweit vernetzte Forschung. Hieran beteiligen wir die Gesellschaft: In Kooperation mit Zivilgesellschaft, Politik und Wirtschaft entwickeln wir Formate, die Erkenntnisse vermitteln, für alle relevantes Wissen schaffen und die Bedeutung unserer Sammlung greifbar machen.",
                            spacing: "wide",
                            buttons: [
                                {
                                    text: "Mehr über die Forschung am Museum",
                                    url: "/de/forschung/forschung",
                                    variant: "plain"
                                },
                                {
                                    text: "Unsere Infrastruktur",
                                    url: "/de/forschung/infrastruktur",
                                    variant: "plain"
                                }

                            ]
                        }}
                        imagePosition="left"
                        className="max-w-7xl mx-auto"
                    />
                </Section>
                <Section 
                    backgroundColor="bg-Green-100" 
                    columns={3} 
                    padding="py-16"
                    className="grid-rows-auto"
                >
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
                        url="/de/wissenschaft/forschung/dynamik-der-natur/"
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
                        url="/de/wissenschaft/forschung/zukunft-der-sammlung"
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
                        url="/de/wissenschaft/forschung/gesellschaft-und-natur"
                    />


                    <Card
                        variant="white"
                        imageRatio="28.125" // 32:9 format
                        imageProps={{
                            imageName: "sammlung-ai-generated.jpg",
                            alt: "Drei Schnecken (KI generiertes Bild)",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{

                            headline: "Sammlung",
                            headlineStyle: "h3",
                            body: "Die Sammlung umfasst Objekte aus der Zeit des Ursprungs des Sonnensystems vor mehr als 4,5 Milliarden Jahren bis heute und enthält eine große Anzahl von Erstbeschreibungen von Arten (Typusexemplare).",
                            spacing: "regular"
                        }}
                        url="/de/forschung/infrastruktur/sammlung/"
                    />
                    <Card
                        variant="white"
                        imageRatio="28.125" // 32:9 format
                        imageProps={{
                            imageName: "archiv-ai-generated.jpg",
                            alt: "Buchseite (KI generiertes Bild)",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            headline: "Archiv",
                            headlineStyle: "h3",
                            body: "Historische Dokumente und Forschungsergebnisse stehen als wertvolle Ressourcen für Studien bereit.",
                            spacing: "regular"
                        }}
                        url="/de/forschung/infrastruktur/archiv"
                    />

                    <Card
                        variant="white"
                        imageRatio="28.125" // 32:9 format
                        imageProps={{
                            imageName: "bibliotheken-ai-generated.jpg",
                            alt: "Buchrücken (KI generiertes Bild)",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            headline: "Bibliothek",
                            headlineStyle: "h3",
                            body: "Nutzen sie unsere naturwissenschaftlichen und historischen Bestände zur Unterstützung von Forschung, Lehre und Wissensvermittlung.",
                            spacing: "regular"
                        }}
                        url="/de/forschung/infrastruktur/bibliothek/"
                    />

                </Section>
                <Section backgroundColor="bg-Green-100" columns={2} padding="py-0 pb-16">
                    <Card
                        variant="white"
                        imageRatio="28.125" // 32:9 format
                        imageProps={{
                            imageName: "it-infrastruktur-ai-generated.jpg",
                            alt: "Fotoapparat (KI generiertes Bild)",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{

                            headline: "Labore",
                            headlineStyle: "h3",
                            body: "Unsere  Labore stehen Mitarbeitenden des Museums, Studierenden, Doktoranden,  Postdocs und Gastwissenschaftlerinnen und Gastwissenschaftlern für ihre  Forschungsprojekte offen.",
                            spacing: "regular",
                        }}
                        url="/de/forschung/infrastruktur/labore"

                    />
                    <Card
                        variant="white"
                        imageRatio="28.125" // 32:9 format
                        imageProps={{
                            imageName: "Zeitschriften_Cover_04__c_Hwa_Ja-Goetz_MfN.jpg",
                            alt: "Coverfoto der drei Open Access-Journale des Museums",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            headline: "Wissenschaftliche Zeitschriften",
                            headlineStyle: "h3",
                            body: "Wir veröffentlichen drei wissenschaftliche Zeitschriften: Deutsche Entomologische Zeitschrift, Zoosystematics and Evolution (früher Mitteilungen aus dem Zoologischen Museum Berlin) und Fossil Record.",
                            spacing: "regular"
                        }}
                        url="/de/forschung/zeitschriften"
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
                            kicker: "Arbeitsgruppen und Teams",
                            headline: "Kontakt",
                            headlineStyle: "h2",
                            body: "Suchen und finden Sie Menschen, die am Museum für Naturkunde Berlin arbeiten. Die Suche bietet Informationen zu Personen, Projekten, Kontaktmöglichkeiten und Rollen.",
                            spacing: "wide",
                            buttons: [
                                {
                                    text: "Personenuche öffnen",
                                    url: "/de/forschung/personensuche",
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
                        headline="Arbeitsgruppen und Teams"
                        headlineStyle="h1"
                        spacing="wide"
                        alignment="center"
                    />
                </Section>
                <Section backgroundColor="bg-Green-100" columns={1} padding="pb-16">
                    <Slideshow imageMap={imageMap} centered={true}>
                        <SlideContent
                            imageName="Website_Palaeobotanik_aktualisiert.jpg"
                            altText="Blick auf die Sammlung der Paläobotanik. Foto: Carola Radke"
                            kicker="Forschungsbereich 1"
                            title="Arbeitsgruppe Paläobotanik"
                            text="Die AG Paläobotanik erforscht die Evolution und Diversität fossiler Pflanzen. Unser Fokus liegt auf der Rekonstruktion von ausgestorbenen Pflanzen und ihrer Lebensräume."
                            link="/de/wissenschaft/ag-palaeobotanik"
                        />
                        <SlideContent
                            imageName="Ortholasmatinae fossil Jonas Damzen.jpg"
                            altText="Ausgestorbener Weberknecht in ukrainischem Rovno Bernstein "
                            kicker="Forschungsbereich 1"
                            title="Arbeitsgruppe Dunlop"
                            text="Die AG Dunlop untersucht die Evolution und Systematik fossiler und rezenter Spinnentiere, mit besonderem Schwerpunkt auf Skorpionen und Spinnen."
                            link="/de/wissenschaft/ag-dunlop"
                        />
                         <SlideContent
                            imageName="2022_c_IsabelAlvarez_2021_c_AlenaSchmick_TheMuseumsLab.jpeg"
                            altText="TheMusemsLab "
                            kicker="Forschungsbereich 3"
                            title="TheMusemsLab"
                            text="TheMuseumsLab ist ein kollaboratives Projekt für gemeinsames Lernen und Wissensaustausch zwischen afrikanischen und europäischen Museumsfachkräften. In Zusammenarbeit mit zahlreichen internationalen Partnern schaffen wir Räume für Dialog, Vernetzung, berufliche Weiterentwicklung und Perspektiverweiterungen zur Museumszusammenarbeit zwischen Afrika und Europa."
                            link="/de/ueber-uns/das-museum/themuseumslab"
                        />
                        <SlideContent
                            imageName="Thomisid5-crop.jpg"
                            altText="Nahaufnahme einer Krabbenspinne (Thomisidae). "
                            kicker="Forschungsbereich 1"
                            title="Forschungsgruppe MultiplEye Lab"
                            text="Das MultiplEye Lab erforscht die Funktion und Evolution von Vielaugen-Systemen bei Tieren, insbesondere bei Spinnen und anderen Arthropoden."
                            link="/de/wissenschaft/multipleye-lab"
                        />
                        <SlideContent
                            imageName="Chameleon_Sudan_Erkowit.jpg"
                            altText="Chameleon on trunk, blue sky and trees in background"
                            kicker="Forschungsbereich 1"
                            title="Amniota Lab"
                            text="Unsere Forschung konzentriert sich auf fossile und an Land lebende Wirbeltiere, wie Eidechsen und Schlangen (Müller) sowie pflanzenfressende Säugetiere (Bibi). "
                            link="/de/wissenschaft/amniota-lab"
                        />
                        <SlideContent
                            imageName="zm_b_vi_0245_walmodell.jpg"
                            altText="Nahaufnahme einer Krabbenspinne (Thomisidae). "
                            kicker="Forschungsbereich 2"
                            title="Zentrum für Kultur- und Sozialwissenschaften der Natur"
                            text="Unsere Arbeitsgruppe widmet sich den Politiken, Geschichten und Kulturen von Natur durch eigenständige Forschung und öffentliche Aktivitäten im Bereich Wissenstransfer. "
                            link="de/wissenschaft/zentrum-fuer-kultur-und-sozialwissenschaften-der-natur"
                        />
                        <SlideContent
                            imageName="large_Header_2023_klein_beschnitten_belichted_7cca538a55.jpg"
                            altText="Naturblick "
                            kicker="Forschungsbereich 3"
                            title="Mensch-Natur-Beziehungen im Anthropozän"
                            text="Inter- und transdisziplinäre Forschung zu den Wechselbeziehungen zwischen Mensch, Natur und digitaler Transformation"
                            link="de/wissenschaft/mensch-natur-beziehungen-im-anthropozaen"
                        />
                        <SlideContent
                            imageName="ieti-keyvisual.png"
                            altText="IETI Keyvisual"
                            kicker="Forschungsbereich 3"
                            title="Public Engagement und Impact"
                            text="Wir fördern die strategische Verankerung von Public Engagement in der Forschung und in Forschungseinrichtungen. Dazu öffnen wir sowohl die Forschungskultur als auch -prozesse für nicht-akademische Stakeholder durch ein breites Spektrum an Formaten und Methoden."
                            link="de/wissenschaft/ieti-impact-orientiertes-public-engagement"
                        />

                    </Slideshow>
                </Section>
                {/* <Section backgroundColor="bg-White" columns={1} padding="pt-16 pb-8">
                    <CardText
                        headline="Publikationen"
                        headlineStyle="h1"
                        spacing="wide"
                        alignment="center"
                        buttons={[
                            {
                                text: "Publikationen 2007 - 2023",
                                variant: "plain",
                                url: "/de/forschung/publikationen/"
                            }
                        ]}
                    />
                </Section> */}
                {/* <Section backgroundColor="bg-White" columns={3} padding="pb-16">
                    <Link to="/de/presse/pressemitteilungen/wie-lebensstrategien-und-lebensraeume-die-regenerationsfaehigkeiten-von" className="group w-full p-3 rounded-[10px] inline-flex flex-col items-start gap-2.5 hover:bg-Green-200 focus:border-2 focus:border-[#729800]">
                        <div className="w-full bg-Green-100 flex flex-col  ">
                            <div className="w-full p-[30px] bg-Green-500 flex flex-col gap-20 group-hover:bg-Green-600 transition-colors duration-300">
                                <p className="typography-kicker text-White-White font-normal">
                                    Ausgewählte Publikation 2024                                </p>
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

                    <Link to="/de/presse/pressemitteilungen/neuer-bromacker-ursaurier-nach-unesco-geopark-thueringen-benannt" className="group w-full p-3 rounded-[10px] inline-flex flex-col items-start gap-2.5 hover:bg-Green-200 focus:border-2 focus:border-[#729800]">
                        <div className="w-full bg-Green-100 flex flex-col ">
                            <div className="w-full p-[30px] bg-Green-500 flex flex-col gap-20 group-hover:bg-Green-600 transition-colors duration-300">
                                <p className="typography-kicker text-White-White font-normal">
                                    Ausgewählte Publikation 2024                                </p>
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

                    <Link to="/de/presse/pressemitteilungen/paradiesvoegel-schmuecken-sich-erfolgreich-mit-fremden-federn" className="group w-full p-3 rounded-[10px] inline-flex flex-col items-start gap-2.5 hover:bg-Green-200 focus:border-2 focus:border-[#729800]">
                        <div className="w-full bg-Green-100 flex flex-col ">
                            <div className="w-full p-[30px] bg-Green-500 flex flex-col gap-20 group-hover:bg-Green-600 transition-colors duration-300">
                                <p className="typography-kicker text-White-White font-normal">
                                    Ausgewählte Publikation 2024                                </p>
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
                        headline="Kontakt"
                        headlineStyle="h1"
                        body="Fehlt Ihnen noch eine Information rund um das Thema Forschung?"
                        spacing="wide"
                        alignment="center"
                    />
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-2">
                        <Button variant="primary" url="/de/kontakt/">Stellen Sie uns eine Frage</Button>
                        <Button variant="primary" url="tel:+4930889140-8591">Rufen Sie uns an</Button>
                        <Button variant="primary" url="/de/besuch-planen/">Besuchen Sie uns im Museum</Button>
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
        title="Unsere Forschung"
        description="Das Museum für Naturkunde Berlin zählt weltweit zu den führenden Einrichtungen für biologische und geowissenschaftliche Evolution sowie Biodiversität"
        pathname="/de/forschung"
    />
)