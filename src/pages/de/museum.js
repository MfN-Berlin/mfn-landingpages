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
            kicker="Unsere Vision und Mission"
            headline="Wir erforschen die Erde und das Leben im Dialog mit den Menschen"
            headlineStyle="h1"
            body="Als exzellentes Forschungsmuseum und innovatives Kommunikationszentrum prägen wir den wissenschaftlichen und gesellschaftlichen Dialog um die Zukunft unserer Erde mit – weltweit."
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
                text: "Sponsoren",
                variant: "plain",
                url: "/de/ueber-uns/berliner-sparkasse-ist-hauptsponsor/"
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
              body: " \"Für uns geht es darum, ein Ort der Begegnung, des Dialogs und der Demokratie zu sein. Konstante Veränderung ist Teil unserer DNA. Wir sind das Museum der Zukunft.\" – Prof. Johannes Vogel, PhD, Generaldirektor",
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
            body="Das Museum für Naturkunde Berlin der Zukunft wird offen, integriert und forschungsstark sein, ein Vorbild für die Forschungsmuseen weltweit. Unser Drehbuch auf dem Weg dorthin ist unser Zukunftsplan."
            spacing="wide"
            alignment="center"
            buttons={[
              {
                text: "Zukunftsplan",
                variant: "plain",
                url: "/de/museum/zukunft/zukunftsplan/"
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
              headline: "Sammlungserschließung und -entwicklung",
              headlineStyle: "h3",
              body: "Am Museum für Naturkunde Berlin bewahren wir 30 Millionen Sammlungsobjekte, jedes davon birgt Wissen von unschätzbarem Wert. Um eine umfängliche Nutzung der Sammlung zu ermöglichen, erschließen wir sie im Rahmen des Zukunftsplans – das heißt konservatorisch sichern, digital erfassen und innovative Nutzungszugänge schaffen.",
              spacing: "wide"
            }}
            url="/de/wissenschaft/sammlungserschliessung-und-entwicklung/"
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
              headline: "Wissenstransfer",
              headlineStyle: "h3",
              body: "Im Rahmen des Zukunftsplans entwickeln wir das Museum und seine Ausstellung zu einem lebendigen Ort des Wissens, der über zukunftsweisender Formate interdisziplinärer und partizipativer Wissenschaft und einer offenen Informationsinfrastruktur, die Sammlung und Forschung des Museums zugänglich und erlebbar macht. ",
              spacing: "wide"
            }}
            url="/de/zukunft/wissenstransfer"
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
              headline: "Die Artentdeckungsfabrik",
              headlineStyle: "h3",
              body: "Unsere \"Artentdeckungsfabrik\" trägt zur Erforschung und Erhaltung der biologischen Vielfalt bei, indem wir mit modernster Technologie  Tausende von Insekten-Proben in kurzer Zeit analysieren und systematisch zuordnen können.",
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
              headline: "The Museums Lab",
              headlineStyle: "h3",
              body: "In der internationalen Kooperation \"TheMuseumsLab\" entwickeln afrikanische und europäische Museumsbeschäftigte gemeinsam Konzepte für die Zukunft von Museen in Afrika und Europa. Das Vorhaben fördert beiderseitiges Lernen, Austausch und Fortbildung.",
              spacing: "wide",
              alignment: "left"
            }}
            url="de/ueber-uns/das-museum/themuseumslab"
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
              headline: "BROMACKER: Neue Wege der Wissenschafts-kommunikation",
              headlineStyle: "h3",
              body: "Das einzigartige Projekt verknüpft Forschung und Wissenstransfer an der Ursaurier-Fundstelle im UNESCO Global Geopark Thüringen Inselsberg - Drei Gleichen, am Museum für Naturkunde Berlin, an der Stiftung Schloss Friedenstein Gotha und übergeordnet multimedial.",
              spacing: "wide"
            }}
            url="de/wissenschaft/bromacker-neue-wege-der-wissenschaftskommunikation"
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
              body: "Expert:innen des Museums für Naturkunde Berlin untersuchen das außerirdische Aubrit-Gestein und koordinieren ein internationales Konsortium zur Erforschung des Ribbeck-Meteoriten. Erste Ergebnisse zeigen: Er könnte mit der Erde verwandt sein – und Bausteine des Lebens in sich tragen.",
              spacing: "wide"
            }}
            url="/de/zukunde/besuch-eines-fernen-verwandten"
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
              headline: "Ein integriertes Forschungsmuseum der Leibniz-Gemeinschaft",
              headlineStyle: "h3",
              body: "Am Museum erforschen Teams aus verschiedenen Disziplinen das Leben auf der Erde. Sammlung, Forschung und Wissenstransfer sind eng verknüpft und schaffen gemeinsam neue Erkenntnisse.",
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
            body="Wir setzen unseren Zukunftsplan tagtäglich um. Erfahren Sie mehr über unsere Arbeit und verstärken Sie unser Team."
            spacing="wide"
            alignment="center"
            buttons={[
              {
                text: "Über uns",
                variant: "plain",
                url: "/de/ueber-uns/das-museum/"
              },
              {
                text: "Bau",
                variant: "plain",
                url: "/de/ueber-uns/bau/"
              },
              {
                text: "Team",
                variant: "plain",
                url: "/de/ueber-uns/team/"
              },
              {
                text: "Sponsoren",
                variant: "plain",
                url: "/de/ueber-uns/berliner-sparkasse-ist-hauptsponsor/"
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
              headline: "Installation Zukunftsplan",
              headlineStyle: "h3",
              body: "An vier Orten im Ausstellungsrundgang informieren wir vom 11. Juni 2024 bis Ende Juni 2027 mit Installationen über den Zukunftsplan.",
              spacing: "wide"
            }}
            url="de/museum/ausstellungen/zukunftsplan"
          />
          <Card
            variant="classic"
            imageProps={{
              imageName: "tagesspiegel-journal-1.jpg",
              alt: "Titelbild des Journals 'für natur' im Tagesspiegel",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "Unser Magazin \"für natur\"",
              headlineStyle: "h3",
              body: "In unseren Journalen für Natur nehmen wir Sie mit auf unseren Weg in die Zukunft.",
              spacing: "wide"
            }}
            url="de/museum/medien/journal-fuer-natur/"
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
              headline: "Wissenschaftsreports und Geschäftsberichte",
              headlineStyle: "h3",
              body: "Unsere Berichte geben einen detaillierten Einblick in unsere Forschungsbereiche sowie über die spannendsten und wichtigsten Forschungsprojekte.",
              spacing: "wide"
            }}
            url="de/ueber-uns/das-museum/publikationen-und-downloads"
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
              headline: "Karriereportal",
              headlineStyle: "h3",
              body: "Verstärken Sie unser Team im wissenschaftlichen Bereich, im technischen Bereich oder in der Verwaltung.",
              spacing: "wide"
            }}
            url="de/museum/jobs-und-karriere/"
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
              body: "Wir stehen gerne mit Ihnen in direktem Kontakt zu einzelnen Bereichen unseres Museums.",
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
              body: "Suchen und finden Sie Menschen, die am Museum für Naturkunde Berlin arbeiten.",
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