import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Header from "../../components/layouts/Header"
import Button from "../../components/elements/Button"
import CardText from '../../components/elements/CardText'
import Section from '../../components/elements/Section'
import Card from '../../components/elements/Card'
import Footer from '../../components/layouts/Footer'
import AccessibilityNav from '../../components/layouts/AccessibilityNav'
import HeadComponent from '../../components/layouts/HeadComponent'
import Teaser from "../../components/layouts/Teaser"
import Blockquote from "../../components/layouts/Blockquote"

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
      <Header activeNavItem="museum" />
      <main className="bg-white flex flex-col items-center justify-center p-0">
        <AccessibilityNav currentPage="Das Museum" />

        <Section backgroundColor="bg-white" columns={1}>
          <CardText
            kicker="Unser Ziel"
            headline="Wir wollen die Erde und das Leben erforschen"
            headlineStyle="h1"
            body="Unser Ziel ist: Wir wollen die Erde und das Leben erforschen. Dabei wollen wir mit den Menschen im Gespräch bleiben. Das bedeutet: Die Menschen sollen bei unserer Forschung mitmachen können.<br /><br />Wir sind ein sehr gutes Forschungs·museum und auch ein modernes Informations·zentrum. Wir reden mit Menschen auf der ganzen Welt über Wissenschaft und die Zukunft unserer Erde."
            spacing="wide"
            alignment="center"
            buttons={[
              {
                text: "Karriere",
                variant: "plain",
                url: "/de/museum/jobs-und-karriere/"
              },
              {
                text: "Team",
                variant: "plain",
                url: "/de/ueber-uns/team/"
              },
              {
                text: "Kontakt",
                variant: "plain",
                url: "/de/kontakt/"
              },
              {
                text: "News",
                variant: "plain",
                url: "/de/museum/medien/news/"
              },
              {
                text: "Presse",
                variant: "plain",
                url: "/de/pressemitteilungen"
              }
            ]}
          />
        </Section>
        <Section backgroundColor="bg-white" columns={1} forceGrid={true}>
          <Teaser
            imageProps={{
              imageName: 'Museum_fuer_Naturkunde_mit_Vorplatz_im_Sommer_c_Pablo_Castagnola.jpg',
              alt: "Das Museum für Naturkunde in Berlin",
              imageMap: imageMap,
              className: "aspect-[16/9] dada"
            }}
            textProps={{
              headline: "Ein Haus für Natur und Gesellschaft",
              body: "Professor Johannes Vogel ist der General-Direktor vom Museum. Er sagt: „In unserem Museum sollen sich Menschen treffen und austauschen können. Wir wollen ein Ort für Demokratie sein. Viele Sachen verändern sich in der Welt. Wir passen uns immer daran an. Wir sind das Museum der Zukunft.“",
              headlineStyle: "h4",
              spacing: "wide",
            }}
            textStyle="box-white"
            textPosition="bottom-left"
            alignment="center"
            className="w-full"
          />
        </Section>
        <Section
          backgroundColor="bg-Green-100"
          padding="pt-16 pb-0"
        >
          <Teaser
            imageProps={{
              imageName: 'gmp_4451_4451_Perspektive_Eingang.jpeg',
              alt: "Visualisierung des Gewinnerentwurfs aus dem Architekturwettbewerb: Vorplatz des Hauptgebäudes mit einem barrierefreien Eingang",
              imageMap: imageMap,
              className: "aspect-[16/9]"
            }}
            textProps={{
              headline: "Das Museum in Zukunft",
              headlineStyle: "h2",
              spacing: "normal",
            }}
            textStyle="circle-white"
            textPosition="center-center"
            className="w-full"
          />
        </Section>
        <Section backgroundColor="bg-Green-100" columns={1}>
          <CardText
            body="Wir wollen weiter ein gutes Museum bleiben. Zum Beispiel werden wir auch in der Zukunft offen für Veränderungen bleiben. Wir werden auch weiter fest zur Gesellschaft gehören. Und wir werden weiter gute Forschung machen. Unser Museum wird ein gutes Beispiel für andere Museen auf der ganzen Welt sein.<br /><br />Diese Sachen wollen wir erreichen. Dafür haben wir uns einen Zukunfts-Plan überlegt. Mit unserem Zukunfts-Plan machen wir das Museum zu einem Ort, an dem Menschen über die Zukunft von der Erde sprechen. Wir zeigen und teilen unser Wissen mit neuen Angeboten. Dafür arbeiten mit den Menschen in der Gesellschaft zusammen."
            spacing="wide"
            alignment="center"
            buttons={[
              {
                text: "Zukunftsplan",
                variant: "plain",
                url: "/de/museum/zukunft"
              }
            ]}
          />
        </Section>

        <Section
          backgroundColor="bg-Green-100"
          padding="pt-0 pb-8"
          columns={3}
        >
          <Card
            variant="classic"
            imageProps={{
              imageName: "Digitize_Museum_fuer_Naturkunde_c_Thomas_Rosenthal.jpg",
              alt: "Eine Wissenschaftlerin arbeitet am Computer",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "Unsere Sammlung entwickelt sich weiter",
              headlineStyle: "h3",
              body: "In unserer Sammlung haben wir 30 Millionen Gegenstände. Jedes Teil davon ist sehr wichtig für uns. Denn wir können von jedem Teil sehr viel lernen. Wir möchten für die Zukunft erreichen: Unsere Sammlung kann voll und ganz genutzt werden.<br /><br />Dafür wollen wir die Sammlung gut sichern. Dazu gehört zum Beispiel: Wir machen die Sammlungs-Gegenstände für sehr lange Zeit haltbar. Wir speichern die Sammlungs-Gegenstände auch digital. Zum Beispiel mit Fotos. Und wir wollen neue Möglichkeiten finden, wie wir die Sammlung nutzen können.",
              spacing: "wide"
            }}
            url="/de/wissenschaft/sammlungserschliessung"
          />
          <Card
            variant="classic"
            imageProps={{
              imageName: "biodiversitaetswand_c_thomas_rosenthal.jpg",
              alt: "Kinder an der Biodiversitätswand",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "Wissen teilen",
              headlineStyle: "h3",
              body: "Mit unserem Zukunfts-Plan machen wir das Museum zu einem lebendigen Ort des Wissens. Damit meinen wir: Alle Menschen sollen bei uns lernen können. Sie sollen unsere Sammlung nutzen können. Und alle Menschen sollen bei unserer Forschung mitmachen können. Dafür entwickeln wir auch neue Formen von Wissenschaft.",
              spacing: "wide"
            }}
            url="/de/museum/zukunft/wissenstransfer"
          />
          <Card
            variant="classic"
            imageProps={{
              imageName: "diversityscanner-vielfalt-erhalten.jpg",
              alt: "Forschende am DiversityScanner des Zentrums für Integrative Biodiversitätsentdeckung",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "Die Art-Entdeckungs-Fabrik",
              headlineStyle: "h3",
              body: "Unsere \"Art-Entdeckungs-Fabrik\" hilft dabei: Wir können die Arten-Vielfalt von Tieren erforschen und schützen. Mit moderner Technologie können wir Tausende von Insekten-Proben schnell analysieren und richtig zuordnen.",
              spacing: "wide"
            }}
            url="/de/die-artentdeckungsfabrik"
          />
          <Card
            variant="classic"
            alignment="left"
            imageProps={{
              imageName: "2022_c_IsabelAlvarez_2021_c_AlenaSchmick_TheMuseumsLab.jpeg",
              alt: "TheMuseumsLab",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "TheMuseumsLab",
              headlineStyle: "h3",
              body: "TheMuseumsLab ist Englisch und bedeutet etwa: Das Museums-Labor. Für dieses Programm arbeiten Mitarbeitende aus Museen in Europa und Afrika zusammen. Die Mitarbeitenden überlegen sich zusammen Pläne für die Zukunft von Museen. Bei dem Programm teilen wir unser Wissen und unsere Erfahrungen mit den anderen Museen. Und wir können auch viele Sachen von den anderen Museen lernen.",
              spacing: "wide",
              alignment: "left"
            }}
            url="/de/museum/heute/das-museum/themuseumslab"
          />
          <Card
            variant="classic"
            imageProps={{
              imageName: "BromackerTeam_Drohnenfoto_Luftbild_Rohde_1200x800.jpg",
              alt: "Team Bromacker in der Grabungsstelle im August 2021, Foto: Luftbild Rohde",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "BROMACKER: Wissen teilen",
              headlineStyle: "h3",
              body: "Bei diesem besonderen Projekt arbeiten mit: der UNESCO Global Geopark Thüringen Inselsberg – Drei Gleichen. Hier wurden Ur-Saurier gefunden. Das Museum für Naturkunde Berlin. Die Stiftung Schloss Friedenstein Gotha.<br /><br />Bei dem Projekt geht es darum: Wir verbinden Forschung und wie wir das Wissen aus der Forschung an andere weitergeben können.",
              spacing: "wide"
            }}
            url="/de/wissenschaft/bromacker-neue-wege-der-wissenschaftskommunikation"
          />
          <Card
            variant="classic"
            imageProps={{
              imageName: "Hamann_Luther_FuerNaturJournal.jpg",
              alt: "Hamann_Luther_Für Natur Journal",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "Erforschung des Ribbeck-Meteoriten",
              headlineStyle: "h3",
              body: "Der Ribbeck-Meteorit ist im Januar 2024 auf die Erde gefallen. Ein Meteorit ist ein Stück von einem Asteroiden oder von einem Kometen. Der Meteorit ist aus dem Weltall auf die Erde gefallen. Hat ein Meteorit die Erde erreicht? Dann ist er meistens ein kleiner Stein oder ein Stück Metall.<br /><br />Der Ribbeck-Meteorit ist auf ein Feld im Stadt-Teil Ribbeck gefallen. Ribbeck gehört zu der Stadt Nauen in Brandenburg. Experten vom Museum für Naturkunde Berlin untersuchen den Stein aus dem Weltall. Erste Ergebnisse zeigen: Der Meteorit ist vielleicht mit der Erde verwandt. In dem Meteoriten sind vielleicht wichtige Bausteine für Leben.",
              spacing: "wide"
            }}
            url="/de/besuch-eines-fernen-verwandten"
          />
        </Section>
        <Section backgroundColor="bg-Green-100" padding="pt-0 pb-16" forceGrid={true}>
          <Teaser
            imageProps={{
              imageName: "180809_ct_09_www_c_carola-radke_mfn.jpg",
              alt: "Staff member Martin Kirchner working at the CT scanner in the new CT lab",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "Leibniz-Gemeinschaft",
              headlineStyle: "h3",
              body: "Das Museum für Naturkunde gehört zur Leibniz-Gemeinschaft. Die Leibniz-Gemeinschaft ist ein Zusammenschluss von deutschen Forschungs-Einrichtungen. Diese Forschungs-Einrichtungen gehören nicht zu Universitäten.<br /><br />Bei uns arbeiten Forschungs-Gruppen aus verschiedenen Fachbereichen zusammen. Sie erforschen das Leben auf der Erde. Die Sammlung im Museum hilft bei der Forschung. Wir arbeiten mit Bürgern, Politik und Unternehmen zusammen. So teilen wir unser Wissen mit allen Menschen.",
              spacing: "wide",
              buttons: [
                {
                  text: "Mehr über unsere Forschung",
                  url: "/de/forschung/",
                  className: "mt-4",
                  variant: "plain",
                },
                {
                  text: "Mehr über unsere Angebote, sich an unserer Forschung zu beteiligen",
                  url: "/de/mitmachen/",
                  className: "mt-4",
                  variant: "plain",
                }
              ]
            }}
            url="/en/research/"
            alignment="center"
            className="w-full"
            textStyle="box-white"
          />
        </Section>
        <Section
          backgroundColor="bg-White"
          padding="pt-16 pb-0"
        >
          <Teaser
            imageProps={{
              imageName: '230826_mfn_318.jpg',
              alt: "Fassade des Museums und Menschen die in der Schlange anstehen",
              imageMap: imageMap,
              className: "aspect-[16/9]"
            }}
            textProps={{
              headline: "Das Museum",
              headlineStyle: "h2",
              spacing: "normal",
            }}
            textStyle="circle-white"
            textPosition="center-center"
            className="w-full h-[25rem] text-sm"
            alignment="center"
          />
        </Section>
        <Section backgroundColor="bg-white" columns={1}>
          <CardText
            body="Wir wollen weiter ein gutes Museum bleiben. Dafür haben wir uns einen Zukunfts-Plan überlegt. Wir arbeiten jeden Tag an unserem Zukunfts-Plan. Sie können sich gerne über unsere Arbeit informieren."
            spacing="wide"
            alignment="center"
            buttons={[
              {
                text: "Über uns",
                variant: "plain",
                url: "/de/museum"
              },
              {
                text: "Bau",
                variant: "plain",
                url: "/de/museum/heute/bau"
              },
              {
                text: "Team",
                variant: "plain",
                url: "/de/museum/heute/team"
              },
              {
                text: "Sponsoren",
                variant: "plain",
                url: "/de/museum/heute/berliner-sparkasse-ist-hauptsponsor-des-museums-fuer-naturkunde-berlin"
              },
              {
                text: "Museums-Evolution",
                variant: "plain",
                url: "/de/museum/zukunft/werde-teil-unserer-museums-evolution"
              }
            ]}
          />
        </Section>
        <Section
          backgroundColor="bg-White"
          padding="pt-0 pb-16"
          columns={3}
        >
          <Card
            variant="classic"
            imageProps={{
              imageName: "zp_1200x675_WEBSEITE.jpg",
              alt: "Titelbild Zukunftsplan",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "Ausstellung zum Zukunfts-Plan",
              headlineStyle: "h3",
              body: "Wir informieren in der Museums-Ausstellung an 4 Orten über unseren Zukunfts-Plan. Die Ausstellung über den Zukunfts-Plan ist von Juni 2024 bis Juni 2027.",
              spacing: "wide"
            }}
            url="/de/museum/ausstellungen/zukunftsplan"
          />
          <Card
            variant="classic"
            imageProps={{
              imageName: "tagesspiegel-journal-1.jpg",
              alt: "Titelbild des Journals 'Für Natur' im Tagesspiegel",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "Unsere Zeitschrift: Für Natur",
              headlineStyle: "h3",
              body: "In unserer Zeitschrift Für Natur schreiben wir auch Texte über die Zukunft vom Museum.",
              spacing: "wide"
            }}
            url="/de/museum/medien/journal-fuer-natur"
          />
          <Card
            variant="classic"
            imageProps={{
              imageName: "geschaeftsbericht.jpg",
              alt: "Unser Geschäftsbericht",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "Berichte",
              headlineStyle: "h3",
              body: "Wir schreiben verschiedene Berichte über unsere Forschung. In den Berichten beschreiben wir genau: Welche Arbeiten passieren in unseren Forschungs-Bereichen? An welchen spannenden Forschungs-Projekten arbeiten wir?",
              spacing: "wide"
            }}
            url="/de/museum/heute/das-museum/publikationen-und-downloads"
          />
          <Card
            variant="classic"
            imageProps={{
              imageName: "sauriersaal_vermessung_03_c_hwa-ja_goetz_mfn_0.jpg",
              alt: "Wissenschaftler vermisst den Schädel des Brachiosaurus in der Ausstellung des Museums für Naturkunde",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "Karriere",
              headlineStyle: "h3",
              body: "Sie möchten gerne für das Museum für Naturkunde Berlin arbeiten? In unserem Karriere-Portal finden Sie alle Informationen über freie Stellen in unseren verschiedenen Bereichen.",
              spacing: "wide"
            }}
            url="/de/museum/jobs-und-karriere"
          />
          <Card
            variant="classic"
            imageProps={{
              imageName: "Museum_fuer_Naturkunde_mit_Vorplatz_im_Sommer_c_Pablo_Castagnola.jpg",
              alt: "Fassade des Museums für Naturkunde",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "Kontakt",
              headlineStyle: "h3",
              body: "Haben Sie Fragen zum Museum oder zu unserer Forschung? Dann können Sie sich gerne bei uns melden. Wir freuen uns, von Ihnen zu hören.",
              spacing: "wide"
            }}
            url="/de/kontakt/"
          />
          <Card
            variant="classic"
            imageProps={{
              imageName: "190603_mfn_gesamt_gruppenfoto_22_1200x800px_c_hwa_ja-goetz_mfn.jpg",
              alt: "Beschäftigte des Museums versammeln sich vor dem Hauptportal, Stand 2019",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "Team",
              headlineStyle: "h3",
              body: "Hier können Sie nach Mitarbeitenden vom Museum für Naturkunde Berlin suchen.",
              spacing: "wide"
            }}
            url="/de/ueber-uns/team/"
          />
        </Section>
        <Section columns={1} backgroundColor="bg-Black-100">
          <CardText
            headline="Kontakt"
            headlineStyle="h1"
            body="Möchten Sie mehr über das Museum für Naturkunde Berlin erfahren?"
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
    title="Das Museum"
    description="Willkommen im Museum für Naturkunde Berlin - Entdecken Sie unsere digitalen Angebote und planen Sie Ihren Besuch."
    pathname="/museum"
  />
)