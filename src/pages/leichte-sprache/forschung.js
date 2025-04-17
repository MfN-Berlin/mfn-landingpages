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
                            kicker: "Forschung",
                            headline: "Unsere Forschung",
                            headlineStyle: "h1",
                            body: "Der ganze Name vom Museum ist: Museum für Naturkunde – Leibniz-Institut für Evolutions-Forschung und Biodiversitäts-Forschung.<br /><br />Evolution ist die Veränderung und Entwicklung von Lebewesen über viele Generationen.<br /><br />So entstehen im Laufe von Millionen Jahren neue Arten von Pflanzen und Lebewesen auf der Erde Bio-Diversität ist ein anderes Wort für Arten-Vielfalt.<br /><br />Das Museum für Naturkunde gehört zur Leibniz-Gemeinschaft. Die Leibniz-Gemeinschaft ist ein Zusammenschluss von deutschen Forschungs-Einrichtungen.<br /><br />Diese Forschungs-Einrichtungen gehören nicht zu Universitäten. Im Museum gibt es Forschung und Sammlungen.<br /><br />Wir geben das Wissen an andere Fachleute und Besucher weiter. So lernen wir immer mehr über die Natur.",
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
                                        Möchten Sie mehr über unsere Forschung wissen?
                                    </label>
                                    <p className="text-sm text-Black-700 mt-2">
                                        Dann können Sie nach Personen oder Themen suchen.<br />Zum Beispiel nach Namen, Aufgaben oder Projekten.
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
                            imageName: 'A60A1885.jpg',
                            alt: "Wissenschaftler bei der Forschungsarbeit. Bild: Pablo Castagnola",
                            imageMap: imageMap,
                            className: "aspect-[4/3] object-cover"
                        }}
                        textProps={{
                            kicker: "Forschungs-Bereiche",
                            headline: "Forschungs-Bereiche",
                            headlineStyle: "h2",
                            body: "Im Museum für Naturkunde arbeiten<br />viele Forschungs-Gruppen zusammen.<br />Sie erforschen das Leben auf der Erde.<br />Die Sammlung im Museum hilft bei der Forschung.<br />Wir arbeiten mit Bürgern, Politik und Unternehmen zusammen.<br />So teilen wir unser Wissen mit allen Menschen.",
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
                            kicker: "Forschungs-Bereich 1",
                            headline: "Dynamik der Natur",
                            headlineStyle: "h3",
                            body: "Wir erforschen:<br />Wie verändert sich die Natur?<br />Zum Beispiel:<br />Wie entstehen neue Arten?<br />Wie hat sich das Sonnen-System gebildet?",
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
                            kicker: "Forschungs-Bereich 2",
                            headline: "Zukunft der Sammlung",
                            headlineStyle: "h3",
                            body: "Unsere Sammlung soll offen und modern sein.<br />Mit neuen Methoden helfen wir der Wissenschaft.<br />Wir arbeiten mit Experten aus vielen Bereichen zusammen.",
                            spacing: "regular"
                        }}
                        url="/de/wissenschaft/forschung/zukunft-der-sammlung"
                    />

                    <Card
                        variant="green"
                        imageProps={{
                            imageName: "FB3_neu.jpg",
                            alt: "Zwei Wissenschaftlerinnen bei der Nuthung der Naturblick App",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            kicker: "Forschungs-Bereich 3",
                            headline: "Gesellschaft und Natur",
                            headlineStyle: "h3",
                            body: "Wir erforschen:<br />Kann Bürger-Forschung gut für die Wissenschaft sein?<br />So lernen wir alle mehr über die Natur.",
                            spacing: "regular"
                        }}
                        url="/de/wissenschaft/forschung/gesellschaft-und-natur"
                    />


                    <Card
                        variant="white"
                        imageRatio="28.125"
                        imageProps={{
                            imageName: "sammlung-ai-generated.jpg",
                            alt: "Drei Schnecken (KI generiertes Bild)",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            headline: "Sammlung",
                            headlineStyle: "h3",
                            body: "Unsere Sammlung hat sehr alte und auch neue Dinge.<br />Einige Dinge sind aus der Zeit,<br />in der unser Sonnen-System entstanden ist.<br />Das ist über 4,5 Milliarden Jahre her.<br />Andere Dinge sind aus der heutigen Zeit.<br />In der Sammlung gibt es viele erste Beschreibungen<br />von Tieren und Pflanzen.",
                            spacing: "regular"
                        }}
                        url="/de/forschung/infrastruktur/sammlung/"
                    />
                    <Card
                        variant="white"
                        imageRatio="28.125"
                        imageProps={{
                            imageName: "archiv-ai-generated.jpg",
                            alt: "Buchseite (KI generiertes Bild)",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            headline: "Archiv",
                            headlineStyle: "h3",
                            body: "Im Archiv gibt es alte Dokumente und Forschungs-Ergebnisse.<br />Diese sind wichtig für neue Studien und Forschungen.",
                            spacing: "regular"
                        }}
                        url="/de/forschung/archiv"
                    />

                    <Card
                        variant="white"
                        imageRatio="28.125"
                        imageProps={{
                            imageName: "bibliotheken-ai-generated.jpg",
                            alt: "Buchrücken (KI generiertes Bild)",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            headline: "Bibliothek",
                            headlineStyle: "h3",
                            body: "Unsere Bibliothek hat viele Bücher und Texte.<br />Die Bücher und Texte sind alle über Natur-Wissenschaften.<br />Einige Bücher und Texte sind schon sehr alt.<br />Sie können gerne unsere Bibliothek nutzen.",
                            spacing: "regular"
                        }}
                        url="/de/forschung/bibliothek"
                    />

                </Section>
                <Section backgroundColor="bg-Green-100" columns={2} padding="py-0 pb-16">
                    <Card
                        variant="white"
                        imageRatio="28.125"
                        imageProps={{
                            imageName: "it-infrastruktur-ai-generated.jpg",
                            alt: "Fotoapparat (KI generiertes Bild)",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            headline: "Labore",
                            headlineStyle: "h3",
                            body: "Unsere Labore sind für viele Forschende da.<br />Zum Beispiel für:<br />Mitarbeitende aus dem Museum<br />Studierende<br />Wissenschaftlerinnen und Wissenschaftler aus anderen Ländern",
                            spacing: "regular"
                        }}
                        url="/de/forschung/infrastruktur/labore"
                    />
                    <Card
                        variant="white"
                        imageRatio="28.125"
                        imageProps={{
                            imageName: "Zeitschriften_Cover_04__c_Hwa_Ja-Goetz_MfN.jpg",
                            alt: "Coverfoto der drei Open Access-Journale des Museums",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            headline: "Wissenschaftliche Zeitschriften",
                            headlineStyle: "h3",
                            body: "Wir veröffentlichen 3 wissenschaftliche Zeitschriften:<br />Deutsche Entomologische Zeitschrift<br />Zoosystematics and Evolution<br />Fossil Record",
                            spacing: "regular"
                        }}
                        url="/de/forschung/wissenschaftliche-zeitschriften"
                    />



                </Section>
                <Section backgroundColor="bg-White" columns={1} padding="py-16">
                    <StoryTime
                        imageProps={{
                            imageName: '213086456_4048064465229816_4437487348901250436_n 1.jpg',
                            alt: "Wissenschaftler bei der Forschungsarbeit. Bild: Pablo Castagnola",
                            imageMap: imageMap,
                            className: "aspect-[4/3] object-cover"
                        }}
                        textProps={{
                            kicker: "Teams",
                            headline: "Teams",
                            headlineStyle: "h2",
                            body: "Möchten Sie eine Person im Museum finden?<br />Unsere Suche zeigt Ihnen:<br />Wer im Museum arbeitet.<br />Welche Aufgaben sie haben.<br />Wie Sie Kontakt aufnehmen können.<br />Welche Projekte es im Museum gibt.",
                            spacing: "wide",
                            buttons: [
                                {
                                    text: "Personensuche öffnen",
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
                        headline="Arbeits-Gruppen"
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
                            kicker="Forschungs-Bereich 1"
                            title="Arbeits-Gruppe Paläo-Botanik"
                            text="Wir erforschen alte, versteinerte Pflanzen.<br />Wir wollen wissen:<br />Wie sahen die Pflanzen früher aus?<br />Wie sah die Natur früher aus?"
                            link="/de/wissenschaft/ag-palaeobotanik"
                        />
                        <SlideContent
                            imageName="Ortholasmatinae fossil Jonas Damzen.jpg"
                            altText="Ausgestorbener Weberknecht in ukrainischem Rovno Bernstein "
                            kicker="Forschungs-Bereich 1"
                            title="Arbeits-Gruppe Dunlop"
                            text="Wir erforschen Spinnen-Tiere.<br />Wir wollen wissen:<br />Wie haben sich die Spinnen-Tiere entwickelt?<br />Wir beschäftigen uns besonders mit Skorpionen und Spinnen."
                            link="/de/wissenschaft/ag-dunlop"
                        />
                         <SlideContent
                            imageName="2022_c_IsabelAlvarez_2021_c_AlenaSchmick_TheMuseumsLab.jpeg"
                            altText="TheMusemsLab "
                            kicker="Forschungs-Bereich 3"
                            title="TheMusemsLab"
                            text="TheMuseumsLab ist ein kollaboratives Projekt für gemeinsames Lernen und Wissensaustausch zwischen afrikanischen und europäischen Museumsfachkräften. In Zusammenarbeit mit zahlreichen internationalen Partnern schaffen wir Räume für Dialog, Vernetzung, berufliche Weiterentwicklung und Perspektiverweiterungen zur Museumszusammenarbeit zwischen Afrika und Europa."
                            link="/de/ueber-uns/das-museum/themuseumslab"
                        />
                        <SlideContent
                            imageName="Thomisid5-crop.jpg"
                            altText="Nahaufnahme einer Krabbenspinne (Thomisidae). "
                            kicker="Forschungs-Bereich 1"
                            title="Forschungs-Gruppe MultiplEye Lab"
                            text="Wir erforschen Tiere mit vielen Augen.<br />Wir wollen wissen:<br />Wie haben sich diese Tiere entwickelt?<br />Wir beschäftigen uns besonders mit Spinnen<br />und anderen Glieder-Füßer.<br />Viele Insekten sind Glieder-Füßer."
                            link="/de/wissenschaft/multipleye-lab"
                        />
                        <SlideContent
                            imageName="Chameleon_Sudan_Erkowit.jpg"
                            altText="Chameleon on trunk, blue sky and trees in background"
                            kicker="Forschungs-Bereich 1"
                            title="Amniota Lab"
                            text="Wir erforschen alte Wirbel-Tiere, die an Land lebten.<br />Zum Beispiel Eidechsen, Schlangen und<br />pflanzen-fressende Säugetiere."
                            link="/de/wissenschaft/amniota-lab"
                        />
                        <SlideContent
                            imageName="zm_b_vi_0245_walmodell.jpg"
                            altText="Nahaufnahme einer Krabbenspinne (Thomisidae). "
                            kicker="Forschungs-Bereich 2"
                            title="Zentrum für Kultur- und Sozialwissenschaften der Natur"
                            text="Wir erforschen, wie Menschen über Natur denken.<br />Zum Beispiel in Politik, Geschichte und Kultur.<br />Wir teilen unser Wissen mit der Öffentlichkeit."
                            link="/de/forschung/zentrum-fuer-kultur-und-sozialwissenschaften-der-natur"
                        />
                        <SlideContent
                            imageName="large_Header_2023_klein_beschnitten_belichted_7cca538a55.jpg"
                            altText="Naturblick "
                            kicker="Forschungs-Bereich 3"
                            title="Mensch-Natur-Beziehungen im Anthropozän"
                            text="Wir untersuchen das Verhältnis zwischen Mensch und Natur.<br />Auch die Rolle der Digitalisierung ist wichtig."
                            link="/de/wissenschaft/mensch-natur-beziehungen-im-anthropozaen"
                        />
                        <SlideContent
                            imageName="ieti-keyvisual.png"
                            altText="IETI Keyvisual"
                            kicker="Forschungs-Bereich 3"
                            title="Public Engagement und Impact"
                            text="Wir machen Forschung für alle zugänglich.<br />Bürgerinnen und Bürger sollen sich so<br />an der Forschung beteiligen können.<br />So kann es mehr Vielfalt und Mitbestimmung in der Forschung geben.<br />Auf Englisch nennt man das Public Engagement.<br />Auf Deutsch kann man dazu auch Bürger-Beteiligung sagen.<br />Impact ist auch ein Englisches Wort und bedeutet in etwa: Wirkung."
                            link="/de/wissenschaft/ieti-impact-orientiertes-public-engagement"
                        />
                         <SlideContent
                            imageName="1.MB_.DTE_.Dia 01, Lager Tendaguru.jpg"
                            altText="1.MB.DTE.Dia 01, Historisches Foto vom Tendaguru mit Lager, ca. 1910 ©Archiv MfN"
                            kicker="Forschungs-Bereich 2"
                            title="AG Digital Tendaguru"
                            text="Unser Team entwickelt eine kontextualisierte digitale Forschungsplattform über die Fossilien und Archivmaterialien der kolonialen deutschen Tendaguru-Expedition, die vom Museum für Naturkunde zwischen 1909 und 1913 im heutigen Tansania durchgeführt wurde."
                            link="/de/forschung/virtueller-zugang-zu-fossil-und-archivmaterial-der-deutschen-tendaguru-expedition-1909"
                        />
                         <SlideContent
                            imageName="public policy research photo.jpg"
                            altText="public policy research photo"
                            kicker="Forschungs-Bereich 3"
                            title="Arbeits-Gruppe Public Policy Research"
                            text="Die Arbeits-Gruppe Public Policy Research analysiert das Zusammenspiel von Wissenschaft und Politik. Im Mittelpunkt steht die Frage nach den Möglichkeiten und Grenzen evidenzbasierter Politikgestaltung in komplexen Problemlagen an der Schnittstelle von Gesellschaft und Natur."
                            link="/de/forschung/public-policy-research"
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