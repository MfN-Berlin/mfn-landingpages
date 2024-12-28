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
                            alt: "Bürger:innen und Projektbeteiligte von &quot;Vielfalt verstehen&quot; in einer Grünanlage in Berlin-Reinickendorf",
                            imageMap: imageMap,
                            className: "w-full h-full object-cover"
                        }}
                        textProps={{
                            kicker: "Wissenschaft erleben",
                            headline: "Engagieren Sie sich für Natur!",
                            body: "Entdecken Sie unsere Angebote, sich an unserer Forschung zu beteiligen, gemeinsam neues Wissen zu schaffen und Natur zu erleben.",
                            headlineStyle: "h1",
                            spacing: "wide",
                            alignment: "center",
                            buttons: [
                                {
                                    text: "Ehrenamt",
                                    url: "/de/mitmachen/ehrenamt",
                                    variant: "plain"
                                },
                                {
                                    text: "Bildungsangebote",
                                    url: "/de/mitmachen/bildung",
                                    variant: "plain"
                                }
                                ,
                                {
                                    text: "Veranstaltungen",
                                    url: "/de/mitmachen/veranstaltungen",
                                    variant: "plain"
                                },
                                {
                                    text: "Bürgerwissenschaften",
                                    url: "/de/mitmachen/bürgerwissenschaften",
                                    variant: "plain"
                                }]

                        }}
                        imagePosition="right"
                    />
                </Section>

                <Section columns={1} backgroundColor="bg-Green-100" padding="pt-16 pb-0">
                    <CardText
                        headline="Aktiv werden"
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
                            imageName: "Key visual_NaturderDinge_ohneLogo_klein.jpg",
                            alt: "Objektcollage aus Sammlungsobjekten von Natur der Dinge",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            headline: "Natur der Dinge. Eine partizipative Sammlung des Anthropozäns",
                            body: "Wie hat sich Ihre Umwelt verändert? Welche persönlichen Dinge oder Zeugnisse aus der Vergangenheit erzählen davon? Tragen Sie dazu bei, mit Ihrem Objekt und Ihrer Geschichte den Wandel der Umwelt und die Herausforderungen der Zukunft besser zu verstehen!",
                            headlineStyle: "h3",
                            alignment: "center"
                        }}
                        url="/de/wissenschaft/natur-der-dinge.-eine-partizipative-sammlung-des-anthropozaens"
                    />



                </Section>
                <Section columns={2} backgroundColor="bg-Green-100" padding="pt-16 pb-0">

                    <Card
                        variant="classic"
                        imageProps={{
                            imageName: "20220827_223801__1200x800Px.jpg",
                            alt: "Alphabet mit Feder und Tinte nachschreiben",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            headline: "Helfen Sie dem Archiv",
                            body: "Helfen Sie der historischen Arbeitsstelle des Museums historische Dokumente wieder leserlich und für die Forschung nutzbar zu machen. Voraussetzung ist die Kenntnis altdeutscher Sprachen, wie Kurrent oder Sütterlin.",
                            headlineStyle: "h3",
                            alignment: "left"
                        }}
                        url="/de/museum/mitmachen/transkriptionswerkstatt"
                    />

                    <Card
                        variant="classic"
                        alignment="center"
                        imageProps={{
                            imageName: "MfN_Sammlung_Hwja_Goetz.jpg",
                            alt: "Unsere Vogelsammlung mit circa 200.000 Objekten",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            headline: "Ehrenamtliches Engagement",
                            body: "Helfen Sie bei der Erschließung unserer Sammlung und tragen Sie aktiv zur Entwicklung neuen Wissens bei. Dabei sammeln Sie unter anderem Erfahrungen in der Museumsarbeit, Datenbankerfassung und Forschung. Lesen Sie hier mehr über Ihre möglichen Aufgabenbereiche.",
                            headlineStyle: "h3",
                            alignment: "left"
                        }}
                        url="/de/mitmachen/ehrenamt"
                    />

                </Section>
                <Section columns={3} backgroundColor="bg-Green-100" padding="pt-16 pb-0">

                    <Card
                        variant="classic"
                        imageProps={{
                            imageName: "Mikroskopierzentrum_CapsarPauli.jpg",
                            alt: "Kinder und Erwachsene erforschen verschiedene Gegenstände unter dem MIkroskop",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            headline: "Offenes Museumsatelier im Mikroskopierzentrum",
                            body: "Farbenprächtige Schmetterlinge, beeindruckende Vogelflügel, uralte Fossilien: In unserem Offenen Museumsatelier liegen die Objekte nicht hinter Glas, sondern auf Ihrer Hand, vor Ihrer Nase oder unter dem Mikroskop.",
                            headlineStyle: "h3",
                            alignment: "left"
                        }}
                        url="/de/museum/bildung/schule-und-kita/workshops-und-mikroskopieren"
                    />

                    <Card
                        variant="classic"
                        imageProps={{
                            imageName: "bioblitz_9822_c_carola-radke_mfn.jpg",
                            alt: "Mann beim Insektensammeln",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            headline: "mit:forschen!",
                            body: "Gemeinsam mit Wissenschaft im Dialog betreiben wir mit:forschen!, die zentrale Online-Platform für Citizen Science in Deutschland. Beteiligen Sie sich an einem der 270 Projekte aus den unterschiedlichsten Disziplinen.",
                            headlineStyle: "h3",
                            alignment: "left"
                        }}
                        url="/de/wissenschaft/mit%3Aforschen%21"
                    />

                    <Card
                        variant="classic"
                        imageProps={{
                            imageName: "gemeinsames-handeln_transform-lab-kopie.webp",
                            alt: "Teilnehmende des Transformationslabs sitzen an Gruppentischen und diskutieren miteinander",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            headline: "Netzwerk Naturwissen",
                            body: "Im Austausch reflektieren wir Naturwissen aus unterschiedlichen Perspektiven. Einmal im Monat treffen wir uns dazu auch, um im Museum gemeinsam wissenschaftliche Texte zu diskutieren.",
                            headlineStyle: "h3",
                            alignment: "left"
                        }}
                        url="/de/wissenschaft/netzwerk-naturwissen"
                    />

                </Section>
                <Section columns={1} backgroundColor="bg-Green-100" padding="pt-16 pb-0">
                    <Blockquote
                        text="<strong>Unsere Mission:</strong><br/> Wir erforschen die Erde und das Leben im Dialog mit den Menschen."
                        backgroundColor=""  // Green-500 color
                        className="bg-Green-500"
                    />
                </Section>
                {/* <Section columns={2} backgroundColor="bg-Green-100" padding="pt-16 pb-0">



                    <Card
                        variant="classic"
                        imageProps={{
                            imageName: "fuchs_c_selina_schultze_mfn.jpg",
                            alt: "Stadtnatur am Musuem für Naturkunde",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            headline: "Großstadtsafaris",
                            body: "Erleben Sie Berlin als grünste und artenreichste Hauptstadt Europas! Auf einer stadtökologischen Führung rund um das Museum entdecken Sie die Tier- und Pflanzenvielfalt der Innenstadt und erfahren, wie sich diese an das Leben in der Großstadt anpasst. Der Fokus liegt dabei auf den sichtbaren Folgen des Klimawandels für Pflanzen, Tiere und Menschen in Berlin.",
                            headlineStyle: "h3",
                            alignment: "left"
                        }}
                        url="/de/museum/veranstaltungen/grossstadtsafari-stadtoekologie-und-klimawandel-5"
                    />


                    <Card
                        variant="classic"
                        imageProps={{
                            imageName: "131031_taschenlampenfuehrung_halloween_21_c_carola-radke_mfn_0.jpg",
                            alt: "Taschenlampenführung",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            headline: "Taschenlampenführungen",
                            body: "Nachdem sich die Tore des Museums geschlossen haben, schleichen Sie im Licht Ihrer Taschenlampen durch die dunklen Museumsräume. Auf der Suche nach den unterschiedlichen Tieren der Nacht erkunden Sie die Ausstellungen des Museums.",
                            headlineStyle: "h3",
                            alignment: "left"
                        }}
                        url="/de/mitmachen/taschenlampenführungen"
                    />

                </Section> */}
                <Section columns={3} backgroundColor="bg-Green-100" padding="pt-16 pb-16">
                    <Card
                        variant="classic"
                        imageProps={{
                            imageName: "Naturblick_Screen_2024_klein.jpg",
                            alt: "Startbildschirm der Naturblick-App",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            headline: "Naturblick: Stadtnatur entdecken",
                            body: "Mit Naturblick können Sie Pflanzen und Tiere einfach bestimmen und mehr über die Natur in ihrer Stadt erfahren. Speichern Sie Ihre Beobachtungen und teilen Sie diese mit Wissenschaft und Naturschutz.",
                            headlineStyle: "h3",
                            alignment: "left"
                        }}
                        url="/de/wissenschaft/naturblick-stadtnatur-entdecken"
                    />
                    <Card
                        variant="classic"
                        imageProps={{
                            imageName: "180622_Forschen_und_Feiern_37__(c)_Hwa Ja-Goetz_MfN.jpg",
                            alt: "Kinder betrachten Objekte im Mikroskopierzentrum des Museums. | Bildquelle: Museum für Naturkunde Berlin",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            headline: "Natur künstlerisch erleben – Führung und Masken basteln",
                            body: "Im Sauriersaal lernen die Kinder den über 13 Meter großen <em>Giraffatitan</em> und viele weitere Dinosaurier, wie den Fleischfresser <em>Allosaurus</em> oder den Stacheldinosaurier <em>Kentrosaurus</em>, kennen.",
                            headlineStyle: "h3",
                            alignment: "left"
                        }}
                        url="/de/museum/bildung/schule-und-kita/workshops-und-mikroskopieren"
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
                            headline: "Gemeinsam aktiv",
                            body: "Hier finden Sie Angebote, die speziell für Gruppen konzipiert sind – vom kreativen Miteinander bis zu gemeinsamen Aktivitäten, die verbinden und inspirieren.",
                            headlineStyle: "h3",
                            alignment: "left"
                        }}
                        url="/de/museum/mitmachen"
                    />

                </Section>
                <Section columns={1} backgroundColor="bg-White" padding="pt-16">
                    <CardText
                        headline="Mitmachen: Kurz erklärt"
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
                            body: "Unterstützen Sie die Arbeit von Wissenschaftler:innen und schaffen so neues Wissen. Werden Sie Teil des Forschungsprozesses und gestalten Sie ihn, je nach Art der Beteiligung, aktiv mit, stillen Sie ihre eigene Neugier – und vor allem haben viel Spaß beim Mitforschen!",
                            headlineStyle: "h3"
                        }}
                        buttonProps={{
                            label: "Forschen Sie bei uns mit!",
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
                            alt: "Sammlungsraum mit Insektenkästen, Foto: Hwa Ja Götz",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            headline: "Ehrenamt",
                            body: "Unterstützen Sie das Museum, indem Sie Sammlungsobjekte ordnen, inventarisieren, etikettieren, Daten in Datenbanken erfassen und Recherchen übernehmen. Fachleute können auch die Bearbeitung bestimmter Gruppen oder Teilsammlungen in unseren wissenschaftlichen Sammlungen übernehmen.",
                            headlineStyle: "h3",
                            alignment: "left"
                        }}
                        url="/de/mitmachen/ehrenamt"
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
                            headline: "Bildungsangebote",
                            body: "Mit Führungen und verschiedenen Veranstaltungen bieten wir eine Vielzahl von Programmen und Veranstaltungen für Kinder, Familien, Kita, Schule und Erwachsene an – in der Stadt, im Museum und digital.",
                            headlineStyle: "h3",
                            alignment: "left"
                        }}
                        url="/de/mitmachen/bildungsangebote"
                    />

                </Section>
                <Section columns={1} backgroundColor="bg-Black-100">
                    <CardText
                        headline="Kontakt"
                        headlineStyle="h1"
                        body="Brauchen Sie noch etwas anderes bei uns mitzumachen?"
                        spacing="wide"
                        alignment="center"
                    />
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-2">
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
        title="Mitmachen"
        description="Willkommen im Museum für Naturkunde Berlin - Entdecken Sie unsere digitalen Angebote und planen Sie Ihren Besuch."
        pathname="/mitmachen"
    />
)