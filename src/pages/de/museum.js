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
            body="Als exzellentes Forschungsmuseum und innovatives Kommunikationszentrum prägen wir den wissenschaftlichen und gesellschaftlichen Dialog um die Zukunft unserer Erde mit – weltweit. 
            Karriere  Team  Service   News  Sponsoren"
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
        <Section backgroundColor="bg-white" columns={1}>
          <Teaser
            imageProps={{
              imageName: 'Visualisierung_Innenhof@GMP mit Rainer Schmidt Landschaftsarchitekt.jpg',
              alt: "Visualisierung_Innenhof@GMP mit Rainer Schmidt Landschaftsarchitekt",
              imageMap: imageMap,
              className: "aspect-[16/9] dada"
            }}
            textProps={{
              kicker: "Das inspiriert uns",
              headline: "Ein Haus für Natur und Gesellschaft",
              body: "„Für uns geht es darum, ein Ort der Begegnung, des Dialogs und der Demokratie zu sein. Konstante Veränderung ist Teil unserer DNA. Wir si﻿nd das Museum der Zukunft“ – Prof. Johannes Vogel, PhD, Generaldirektor",
              headlineStyle: "h4",
              spacing: "normal",
              buttons: [
                {
                  text: "Zum Interview mit Johannes Vogel",
                  variant: "plain",
                  url: "/de/evolution-des-museums"
                },
              ]
            }}
            textStyle="box-white"
            textPosition="bottom-left"
            alignment="center"
            className="w-full"
          />
        </Section>
        <Section
          backgroundColor="bg-Blue-200"
          innerBg="bg-Green-100"
          padding="pt-16 pb-0"
        >
          
            <Teaser
              imageProps={{
                imageName: 'agn_Adlershof_NMB_Perspektive.jpeg',
                alt: "Visualisierung des neuen Standorts in Adlershof: Der Gebäudeentwurf ist vom Wechsel von Begrünung und Holzfassade geprägt. Der rechteckige Grundriss gliedert sich über drei Geschosse.",
                imageMap: imageMap,
                className: "aspect-[16/9]"
              }}
              textProps={{
                headline: "Das Museum in Zukunft",
                headlineStyle: "h1-small",
                spacing: "normal",
              }}
              textStyle="circle-white"
              textPosition="center-center"
              className="w-full"
            />
            <CardText
            body="Der Zukunftsplan, den das Museum tagtäglich umsetzt, sieht die bauliche Sanierung des Museums vor, die mehr als 30 Millionen Objekte umfassende wissenschaftliche Sammlung des Museums wird erschlossen und besser zugänglich gemacht."
            spacing="normal"
            alignment="center"
            buttons={[
              {
                text: "Zukunftsplan",
                variant: "plain",
                url: "/de/museum/zukunft/zukunftsplan/"
              },
              {
                text: "Wissenstransfer",
                variant: "plain",
                url: "/de/zukunft/wissenstransfer/"
              }
            ]}
          />
        </Section>
       
        <Section
          backgroundColor="bg-Blue-200"
          innerBg="bg-Green-100"
          padding="pt-0 pb-16"
          columns={3}
        >
          <Card
            variant="classic"
            imageProps={{
              imageName: "zp_1200x675_WEBSEITE.jpg",
              alt: "logo Zukunftsplan and shadow drawing of a person with a wheelbarrow",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "Der Zukunftsplan",
              headlineStyle: "h3",
              body: "Lesen Sie hier unseren Geschäftsbericht, der leicht verständlich einen Überblick über die Tätigkeiten des Museums für Naturkunde Berlin im jeweils vergangenen Jahr vermittelt.",
              spacing: "wide"
            }}
            url="/de/museum/zukunft/zukunftsplan/"
          />
          <Card
            variant="classic"
            imageProps={{
              imageName: "Digitize_Museum_fuer_Naturkunde_(c)_Thomas_Rosenthal_3.jpg",
              alt: "Besucherinnen bestaunen Insektenfilm in der Ausstellung",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "Die Erschließung der gesamten Sammlung",
              headlineStyle: "h3",
              body:"Das Museum für Naturkunde Berlin experimentiert mit verschiedenen individuell zugeschnittenen Formaten, um mit vielen unterschiedlichen Zielgruppen in den Dialog zu treten.",
              spacing: "wide"
            }}
            url="/de/wissenschaft/sammlungserschliessung-und-entwicklung/"
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
              body:"Der Meteoritenfall von Ribbeck im Januar 2024 sorgte für Aufsehen. Expert:innen untersuchen das Aubrit-Gestein und leiten ein internationales Forschungskonsortium. Erste Analysen deuten auf eine mögliche Verbindung zur Erde und Bausteine des Lebens hin.",
              spacing: "wide"
            }}
            url="/de/zukunde/besuch-eines-fernen-verwandten"
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
              headline: "Artentdeckungsfabrik",
              headlineStyle: "h3",
              body: "Das Museum für Naturkunde Berlin setzt den innovativen DiversityScanner ein, um Insektenvielfalt effizient zu erfassen. Mit modernster Technologie können Tausende von Proben in kurzer Zeit analysiert und systematisch zugeordnet werden. So trägt die \"Artentdeckungsfabrik\" zur Erforschung und Erhaltung der biologischen Vielfalt bei.",
              spacing: "wide"
            }}
            url="de/die-artentdeckungsfabrik"
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
              body:"Im August 2020 hat das einmalige Kooperationsprojekt 'Öffnen von Wissenschaft: Neue Wege des Wissenstransfers am Beispiel des Forschungsprojekts BROMACKER' unter der Mitwirkung eines interdisziplinären Forschungsteams begonnen.",
              spacing: "wide"
            }}
            url="de/wissenschaft/bromacker-neue-wege-der-wissenschaftskommunikation"
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
          <Blockquote
                        text="Die sieben Exzellenzcluster in Berlin leben die aktive, transdisziplinäre Zusammenarbeit und sind genau deshalb so wichtig für die BUA. Wenn ich die BUA-Cluster besuche, erlebe ich all das: transd﻿isziplinäre Zusammenarbeit, die Suche nach Lösungen für die großen Probleme, die wir heute und in Zukunft haben."
                        source="Prof. Johannes Vogel"
                        sourceTitle="(Leiter des Museums)"
                        backgroundColor=""  // Green-500 color
                        className="bg-Blue-500 col-span-1 md:col-span-2"
                    />
          <Card
            variant="classic"
            imageProps={{
              imageName: "180809_ct_09_www_c_carola-radke_mfn.jpg",
              alt: "Mitarbeiter Martin Kirchner arbeitet am Computertomografen im neuen CT Labor",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "Unsere wissenschaftliche Arbeit",
              headlineStyle: "h3",
              body:"Das Museum für Naturkunde Berlin experimentiert mit verschiedenen individuell zugeschnittenen Formaten, um mit vielen unterschiedlichen Zielgruppen in den Dialog zu treten.",
              spacing: "wide"
            }}
            url="/de/forschung/"
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
                headline: "Das Museum Heute",
                headlineStyle: "h1-small",
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
            body="Der Zukunftsplan, den das Museum tagtäglich umsetzt, sieht die bauliche Sanierung des Museums vor, die mehr als 30 Millionen Objekte umfassende wissenschaftliche Sammlung des Museums wird erschlossen und besser zugänglich gemacht."
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
              imageName: "tagesspiegel-journal-1.jpg",
              alt: "Titelbild des Journals 'für natur' im Tagesspiegel",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "Unser Magazin „für natur“",
              headlineStyle: "h3",
              body: "In unseren Journalen für Natur nehmen wir Sie mit auf diesem Weg in die Zukunft.",
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
              headline: "Unser Geschäftsbericht 2023",
              headlineStyle: "h3",
              body:"Das Museum für Naturkunde Berlin experimentiert mit verschiedenen individuell zugeschnittenen Formaten, um mit vielen unterschiedlichen Zielgruppen in den Dialog zu treten.",
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
              body:"Lesen Sie hier unseren Geschäftsbericht, der leicht verständlich einen Überblick über die Tätigkeiten des Museums für Naturkunde Berlin im jeweils vergangenen Jahr vermittelt.",
              spacing: "wide"
            }}
            url="de/museum/jobs-und-karriere/"
          />
        
          <Card
            variant="classic"
            imageProps={{
              imageName: "conus_kegelschnecken_c_hwaja_goetz_mfn.jpg",
              alt: "Kegelschnecken © HwaJa Goetz, MfN",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "Mitgliedschaften",
              headlineStyle: "h3",
              body: "Im Sammlungsexperiment beleuchten wir sowohl die planetare Wirkmacht des Menschen als geologischem Faktor als auch seine Verstrickung in das Erdsystem .",
              spacing: "wide"
            }}
            url="/de/ueber-uns/das-museum/mitgliedschaften"
          />
          <Card
            variant="classic"
            imageProps={{
              imageName: "Jana Hoffmann und Christiane Quaiser in digitize (c) Pablo Castagnola.jpg",
              alt: "Jana Hoffmann und Christiane Quaiser sitzen vor einer Wand auf Insektenkästen in der Sonderausstellung digitize!",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "Kontakt",
              headlineStyle: "h3",
              body:"Im August 2020 hat das einmalige Kooperationsprojekt 'Öffnen von Wissenschaft: Neue Wege des Wissenstransfers am Beispiel des Forschungsprojekts BROMACKER' unter der Mitwirkung eines interdisziplinären Forschungsteams begonnen.",
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
              body:"Das Museum für Naturkunde Berlin experimentiert mit verschiedenen individuell zugeschnittenen Formaten, um mit vielen unterschiedlichen Zielgruppen in den Dialog zu treten.",
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