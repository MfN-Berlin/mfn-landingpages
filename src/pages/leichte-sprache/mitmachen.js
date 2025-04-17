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
                            kicker: "Mitmachen und Wissenschaft erleben",
                            headline: "Setzen Sie sich für die Natur ein!",
                            body: "Sie möchten gerne bei unserer Forschung mitmachen?<br />Und Sie möchten gerne die Natur erleben?<br />Dafür haben wir verschiedene Angebote.",
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
                                    text: "Bildungs-Angebote",
                                    url: "/de/mitmachen/bildungsangebote",
                                    variant: "plain"
                                },
                                {
                                    text: "Veranstaltungen",
                                    url: "/de/mitmachen/veranstaltungen",
                                    variant: "plain"
                                },
                                {
                                    text: "Bürger-Forschung",
                                    url: "/de/museum/mitmachen/buergerwissenschaften",
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
                            imageName: "naturderdinge2.png",
                            alt: "Objektcollage aus Sammlungsobjekten von Natur der Dinge",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            headline: "Natur der Dinge. Eine Sammlung zum Wandel der Umwelt",
                            body: "Wie hat sich Ihre Umwelt verändert?<br />Welche Dinge oder Erinnerungen zeigen das?<br />Bringen Sie ein persönliches Objekt mit<br />und erzählen Sie Ihre Geschichte!<br />So helfen Sie dabei:<br />Wir können die Veränderung in der Umwelt<br />und die Zukunft besser verstehen.",
                            headlineStyle: "h3",
                            alignment: "center"
                        }}
                        url="/de/wissenschaft/natur-der-dinge.-eine-partizipative-sammlung-des-anthropozaens"
                    />



                </Section>
                <Section columns={2} backgroundColor="bg-Green-100" padding="pt-16 pb-0">

                   

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
                            headline: "Helfen Sie dem Archiv!",
                            body: "Wir möchten alte Dokumente für die Forschung nutzen.<br />Dafür müssen die alten Dokumente wieder lesbar sein.<br />Und dabei können Sie uns helfen!<br />Sie müssen alt-deutsche Schrift-Arten wie Kurrent<br />oder Sütterlin lesen können.",
                            headlineStyle: "h3",
                            alignment: "left"
                        }}
                        url="/de/mitmachen/ehrenamt"
                    />

               
                    <Card
                        variant="classic"
                        imageProps={{
                            imageName: "Mikroskopierzentrum_CapsarPauli.jpg",
                            alt: "Kinder und Erwachsene erforschen verschiedene Gegenstände unter dem MIkroskop",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            headline: "Offenes Museums-Atelier im Mikroskopier-Zentrum",
                            body: "Hier können Sie besondere Dinge aus der Natur ganz nah sehen!<br />Bunte Schmetterlinge, große Vogel-Flügel oder sehr alte Fossilien.<br />Sie dürfen sie anschauen und anfassen.<br />Und Sie können diese Sachen ganz nah unter dem Mikroskop entdecken.<br />Ein Mikroskop ist ein Gerät,<br />mit dem man sehr kleine Dinge stark vergrößern kann.",
                            headlineStyle: "h3",
                            alignment: "left"
                        }}
                        url="/de/museum/bildung/schule-und-kita/workshops-und-mikroskopieren"
                    />
 </Section>
                <Section columns={2} backgroundColor="bg-Green-100" padding="pt-16 pb-0">

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
                            body: "mit:forschen! ist eine Internet-Seite für Bürger-Forschung<br />in Deutschland.<br />Wir haben diese Internet-Seite zusammen mit Wissenschaft im Dialog gemacht.<br />Bei mit:forschen! können Sie bei 270 Forschungs-Projekten<br />aus vielen Bereichen mitmachen.",
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
                            body: "Das Netzwerk Naturwissen ist eine Gruppe von Menschen.<br />Die Menschen arbeiten zusammen.<br />Sie wollen mehr über die Natur lernen.<br />Einmal im Monat treffen wir uns und reden gemeinsam<br />über einen wissenschaftlichen Text.<br />Unser Ziel ist:<br />Wir erforschen die Erde und das Leben.<br />Und dabei bleiben wir im Gespräch mit anderen Menschen.",
                            headlineStyle: "h3",
                            alignment: "left"
                        }}
                        url="/de/wissenschaft/netzwerk-naturwissen"
                    />

                </Section>
                <Section columns={1} backgroundColor="bg-Green-100" padding="pt-16 pb-0">
                    <Blockquote
                        text="<strong>Unsere Mission:</strong><br/> „Wir erforschen die Erde und das Leben im Dialog mit den Menschen.“"
                        backgroundColor=""
                        className="bg-Green-500"
                    />
                </Section>

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
                            headline: "Naturblick: Stadt-Natur entdecken",
                            body: "Mit Naturblick wollen wir allen Menschen zeigen:<br />So toll ist Natur in der Stadt.<br />Und wir wollen Menschen helfen, Natur zu erleben.<br />Darum haben wir die App Naturblick gemacht.<br />Mit der App können Sie Tiere und Pflanzen erkennen.<br />Zum Beispiel:<br />Sie können Foto von einer Pflanze machen.<br />Dann zeigt die App den Namen von der Pflanze.<br />Sie können diese Beobachtungen auch speichern.<br />So helfen Sie der Wissenschaft und dem Naturschutz.",
                            headlineStyle: "h3",
                            alignment: "left"
                        }}
                        url="/de/forschung/naturblick-stadtnatur-entdecken"
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
                            headline: "Natur künstlerisch erleben: Führung und Masken basteln",
                            body: "Im Saurier-Saal sehen die Kinder riesige Dinosaurier.<br />Zum Beispiel den Giraffa-Titan, der über 13 Meter groß ist.<br />Auch der Fleisch-Fresser Allosaurus<br />und der Stachel-Dinosaurier Kentrosaurus sind dabei.",
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
                            headline: "Fachgruppe Mineralogie und Geologie",
                            body: "Hier treffen sich Menschen mit dem Hobby Mineralien und Gesteine.<br />Mineralien sind feste Stoffe aus der Natur.<br />Sie kommen in Steinen vor.<br />Einige Mineralien sind wertvoll.<br />Zum Beispiel Gold oder Diamanten.<br />Andere Mineralien sehen schön aus.<br />Zum Beispiel Quarz oder Amethyst.<br />Jeden ersten Dienstag im Monat gibt es ein Treffen.<br />Im August gibt es kein Treffen.<br />Bei den Treffen gibt es spannende Vorträge.",
                            headlineStyle: "h3",
                            alignment: "left"
                        }}
                        url="/de/mitmachen/buergerwissenschaften/fachgruppen"
                    />

                    <Card
                        variant="classic"
                        imageProps={{
                            imageName: "csm_Ruesselkaefer_697cb77b53.jpg",
                            alt: "Rüsselkäfer im Baltischen Bernstein, ca. 35 Millionen Jahre alt, Sammlung und Foto Michael Zwanzig",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            headline: "Der Kulturring in Berlin e.V. – Fachgruppe Paläontologie",
                            body: "Paläontologie ist eine Wissenschaft.<br />Paläontologie beschäftigt sich mit alten Tieren und Pflanzen.<br />Sie untersucht Fossilien.<br />Fossilien sind die Überreste von Tieren und Pflanzen.<br />Diese Tiere und Pflanzen haben vor vielen Millionen Jahren gelebt.<br />Paläontologen schauen sich diese Fossilien an und lernen so:<br />Wie haben diese Tiere und Pflanzen früher ausgesehen?<br />Und wie haben sie früher gelebt?<br />An jedem dritten Dienstag im Monat gibt es interessante Vorträge.<br />Die Vorträge sind für alle Menschen,<br />die sich für Paläontologie interessieren.<br />Nach dem Vortrag können die Menschen mit den Forschenden sprechen und Fragen stellen.",
                            headlineStyle: "h3",
                            alignment: "left"
                        }}
                        url="/de/mitmachen/buergerwissenschaften/fachgruppen"
                    />

                    <Card
                        variant="classic"
                        imageProps={{
                            imageName: "160216_lepidoptera_kasten_05_c_hwaja-goetz_mfn.jpg",
                            alt: "Fotografie eines Insektenkastens mit Schmetterlingen in unterschiedlichen Farben.",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            headline: "Entomologische Gesellschaft ORION Berlin",
                            body: "Entomologie ist eine Wissenschaft.<br />Entomologie beschäftigt sich mit Insekten.<br />Die Gesellschaft zeigt jungen Menschen:<br />So viele verschiedene Insekten gibt es in unserer Umgebung.<br />Die Gesellschaft setzt sich für den Schutz von bedrohten Insekten<br />und ihren Lebensräumen ein.<br />Die Gesellschaft bietet Bildungs-Angebote und macht Projekte zum Naturschutz.<br />Damit unterstützt die Gesellschaft das Ziel:<br />Die Vielfalt von Tieren und Pflanzen bleibt erhalten.",
                            headlineStyle: "h3",
                            alignment: "left"
                        }}
                        url="/de/mitmachen/buergerwissenschaften/fachgruppen"
                    />

                    <Card
                        variant="classic"
                        imageProps={{
                            imageName: "bild-2619.png",
                            alt: "Fotografie eines Käfers auf einem Blatt.",
                            imageMap: imageMap,
                            className: "w-full h-auto object-cover"
                        }}
                        textProps={{
                            headline: "Deutsche Jugendbund für Natur-Beobachtung",
                            body: "Der Deutsche Jugendbund für Natur-Beobachtung<br />ist eine Gruppe von jungen Menschen aus Berlin und Umgebung.<br />Sie interessieren sich für die Natur und auch für Politik.<br />Gemeinsam erkunden sie verschiedene Natur-Gebiete in Deutschland.<br />Dort schauen sie sich die vielen Tiere und Pflanzen an.<br />Einige dieser Gebiete sind zum Beispiel:<br />die Schorfheide,<br />das Odertal und<br />die Havel-Landschaft.",
                            headlineStyle: "h3",
                            alignment: "left"
                        }}
                        url="/de/mitmachen/buergerwissenschaften/fachgruppen"
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
                <Section columns={1} backgroundColor="bg-White" padding="pt-16 pb-8" forceGrid={true}>
                    <Teaser
                        imageProps={{
                            imageName: "bioblitz_9847_c_carola-radke_mfn.jpg",
                            alt: "Insektensammeln in Parkanlage beim Bioblitz mit dem Orion Verein, Foto: (c) Carola Radke",
                            imageMap: imageMap
                        }}
                        textProps={{
                            headline: "Bürger-Forschung",
                            body: "Helfen Sie Wissenschaftlern bei ihrer Arbeit.<br />So können Sie bei neuem Wissen mitwirken.<br />Sie können die Forschung aktiv unterstützen.<br />Sie können auch einfach viel über Forschung lernen.<br />Sie können dabei vor allem Spaß am Forschen haben.",
                            headlineStyle: "h3"
                        }}
                        buttonProps={{
                            label: "Forschen Sie mit uns!",
                            variant: "primary",
                            url: "/de/mitmachen/buergerwissenschaften"
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
                            body: "Helfen Sie dem Museum.<br />Sie können uns bei diesen Sachen helfen:<br />Objekte aus der Sammlung ordnen,<br />in eine Liste eintragen und mit Etiketten bekleben.<br />Informationen in Datenbanken eintragen<br />Recherchen machen<br />Fachleute können bestimmte Gruppen oder Teile von der Sammlung bearbeiten und untersuchen.",
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
                            headline: "Bildungs-Angebote",
                            body: "Wir haben viele Angebote für:<br />Kinder und Familien,<br />Kitas und Schulen und<br />Erwachsene.<br />Wir machen zum Beispiel Führungen und Veranstaltungen.<br />Die Angebote können direkt im Museum sein.<br />Die Angebote können aber auch an anderen Orten in der Stadt sein.<br />Und die Angebote können auch im Internet sein.",
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

export default IndexPage

export const Head = () => (
    <HeadComponent
        title="Mitmachen"
        description="Willkommen im Museum für Naturkunde Berlin - Entdecken Sie unsere digitalen Angebote und planen Sie Ihren Besuch."
        pathname="/mitmachen"
    />
)