import * as React from "react"
import { graphql, useStaticQuery, withPrefix, Link } from "gatsby"  // Gatsby-spezifische Imports für Datenabfragen und Navigation
import Header from "../../components/layouts/Header"  // Kopfbereich der Seite mit Navigation
import Button from "../../components/elements/Button"  // Wiederverwendbare Button-Komponente
import CardText from '../../components/elements/CardText'  // Text-Komponente für Karten mit verschiedenen Stilen
import ContentImage from '../../components/elements/ContentImage'  // Bild-Komponente mit Gatsby-Image-Optimierung
import Section from '../../components/elements/Section'  // Container für Seitenabschnitte
import Card from '../../components/elements/Card'  // Karten-Komponente für Content-Blöcke
import StoryTime from '../../components/layouts/StoryTime'  // Layout für Story-artige Inhalte mit Bild und Text
import Footer from '../../components/layouts/Footer'  // Fußbereich der Seite
import { Accordion, AccordionItem, AccordionSpacer } from '../../components/layouts/Accordion'  // Ausklappbare Inhaltsblöcke
import Slideshow from '../../components/layouts/Slideshow'  // Karussell für Bilder/Inhalte
import SlideContent from '../../components/layouts/SlideContent'  // Einzelne Slides für die Slideshow
import AccessibilityNav from '../../components/layouts/AccessibilityNav'  // Barrierefreie Navigation
import OpenToday from '../../components/features/OpenToday'  // Zeigt aktuelle Öffnungszeiten
import Feedback from '../../components/features/Feedback'  // Feedback-Formular mit Sternebewertung
import HeadComponent from '../../components/layouts/HeadComponent'  // Head/Meta-Informationen für SEO
import UpcomingHoliday from '../../components/features/UpcomingHoliday'  // Zeigt kommende Feiertage/Events
import { getAssetPath } from '../../scripts/assetPrefix'  // Helper für Asset-Pfade
import TransportIcon from '../../components/elements/TransportIcon'  // Icons für Verkehrsmittel


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
      <Header activeNavItem="besuchplanen" />
      <main className="flex flex-col items-center justify-center min-h-screen p-0 bg-Black-000">
        <AccessibilityNav currentPage="Besuch planen" />
        <Section backgroundColor="bg-white" gapClass="gap-10 md:gap-20 xl:gap-36">
          <StoryTime
            imageProps={{
              imageName: "171030_naturkunde_156_c_thomas_rosenthal_0.jpg",
              alt: "Besucherinnen in der Nasssammlung (c) Thomas Rosenthal_0",
              imageMap: imageMap,
              className: "w-full h-full object-cover"
            }}
            textProps={{
              kicker: "Auf einen Blick",
              headline: "Planen Sie Ihren Besuch",
              body: "Hier finden Sie alle Informationen für Ihren Besuch im Museum für Naturkunde Berlin.",
              headlineStyle: "h1",
              spacing: "wide",
              alignment: "center",
              buttons: [
                {
                  text: "Tickets",
                  url: "https://ticketshop.museumfuernaturkunde.berlin",
                  variant: "plain"
                },
                {
                  text: "Anfahrt",
                  url: "#anreise",
                  variant: "plain"
                },
                {
                  text: "Ausstellungen",
                  url: "#im-museum",
                  variant: "plain"
                },
                {
                  text: "Digitale Angebote",
                  url: "/de/mitmachen/bildungsangebote/fuernatur-digital-angebote-fuer-familien-und-kinder",
                  variant: "plain"
                },
                {
                  text: "Bildungs-Angebote",
                  url: "/de/mitmachen/bildungsangebote",
                  variant: "plain"
                }]
            }}
            linkUrl="https://ticketshop.museumfuernaturkunde.berlin"
            className="h-96"
            imagePosition="right"
            linkText="Zum Ticket Shop"
          />

        </Section>
        <Section columns={2} backgroundColor="bg-Green-100" gapClass="gap-10 md:gap-20 xl:gap-36" justifyContent="center">
          <div className="py-10 md:py-20">
            <CardText
              headline="Öffnungs-Zeiten"
              headlineStyle="h1"
              body="Montag: geschlossen<br />Dienstag bis Freitag: 9:30 Uhr bis 18:00 Uhr<br />Samstag und Sonntag: 10:00 Uhr bis 18:00 Uhr<br />Feiertage: 10:00 Uhr bis 18:00 Uhr<br />Letzter Einlass ist um 17:30 Uhr."
              spacing="wide"
              alignment="center"
            />
            <UpcomingHoliday />
            <div className="w-full">
              <Button
                text="Genauer Plan mit Sonderöffnungszeiten"
                url="/de/sonderoeffnungszeiten"
                variant="plain"
                className="w-full justify-center"
              />
            </div>
          </div>
          <Accordion bgColor="white" id="öffnungszeiten">

            <OpenToday />

            <AccordionSpacer>
              <div className="p-0 flex flex-col justify-center items-center gap-0">
                <div className="text-center text-Green-600 typography-kicker">
                  Dienstag, Mittwoch, Donnerstag, Freitag
                </div>
                <div className="text-center text-Black-900 font-bold text-[34px] py-2  leading-none">
                  09:30 bis 18:00
                </div>
              </div>
            </AccordionSpacer>

            <AccordionSpacer>
              <div className="p-0 flex flex-col justify-center items-center gap-0">
                <div className="text-center text-Green-600 typography-kicker">
                  Samstag, Sonntag, und <a href="/de/sonderoeffnungszeiten" className="underline">an Feiertagen</a>
                </div>
                <div className="text-center text-Black-900 font-bold text-[34px] py-2 leading-none">
                  10:00 bis 18:00
                </div>
              </div>
            </AccordionSpacer>

            <AccordionSpacer>
              <div className="p-0 flex flex-col justify-center items-center gap-0">
                <div className="text-center text-Green-600 typography-kicker">
                  Montag
                </div>
                <div className="text-center text-Black-500 font-bold text-[34px] py-2">
                  geschlossen
                </div>
              </div>
            </AccordionSpacer>

          </Accordion>

        </Section>
        <Section id="tickets-preise" columns={2} backgroundColor="bg-white" gapClass="gap-10 md:gap-20 xl:gap-36" justifyContent="center">
          <div className="flex flex-col justify-center items-center gap-10 md:gap-20 py-10 md:py-20">
            {/* <div className="flex items-center justify-center w-[166px] h-[166px] p-4 rotate-[7deg] bg-Yellow rounded-full shadow-lg">
              <p className="text-center text-black">
                Am ersten Sonntag des Monats ist der <strong>Eintritt frei!</strong>
              </p>
            </div> */}
            <CardText
              headline="Tickets und Preise"
              headlineStyle="h1"
              body="Sie können Tickets an der Kasse im Museum kaufen.<br />Sie können die Tickets auch schon vorher über das Internet kaufen.<br />Dafür haben wir unseren Ticket-Shop.<br />Hier kommen Sie zu unserem Ticket-Shop:<br /><a href='https://ticketshop.museumfuernaturkunde.berlin/' className='underline'>Ticket-Shop Museum für Naturkunde Berlin</a><br /><br />Wir empfehlen:<br />Buchen Sie Ihre Tickets und die Uhrzeit für Ihren Besuch vorab über das Internet.<br />Dann müssen Sie nicht an der Kasse warten."
              spacing="wide"
              alignment="center"
              buttons={[
                {
                  text: "Ticketkooperationen",
                  url: "/de/ticketkooperationen",
                  variant: "plain"
                }]}
            />

          </div>
          <Accordion bgColor="green" defaultOpenIndex={0} id="tickets-preise">
            <AccordionItem title="Einzel-Tickets">
              <div className="p-5">
                <p>
                  Erwachsene: 11 Euro
                  <br />
                  Kinder ab 6 Jahre: 5 Euro
                  <br />
                  Ermäßigung: 5 Euro
                </p>
              </div>
            </AccordionItem>
            <AccordionItem title="Gruppen-Tickets">
              <div className="p-5">
                <p>
                  Familien-Karte für 2 Erwachsene
                  und höchstens 3 Kinder unter 14 Jahren:
                  18 Euro
                  <br /><br />
                  Mini-Familie für 1 Erwachsenen
                  und höchstens 2 Kinder unter 14 Jahren:
                  12 Euro
                  <br /><br />
                  Erwachsene in Gruppen ab 10 Personen:
                  8 Euro für jede Person
                  <br /><br />
                  Ermäßigte in Gruppen ab 10 Personen:
                  2 Euro für jede Person
                </p>
              </div>
            </AccordionItem>
            <AccordionItem title="Jahres-Karten">
              <div className="p-5">
                <p>
                  Erwachsene: 35 Euro
                  <br />
                  Ermäßigte: 23 Euro
                  <br />
                  Familien-Karte für 2 Erwachsene
                  und höchstens 3 Kinder unter 14 Jahren:
                  65 Euro
                  <br />
                  Mini-Familie für 1 Erwachsene
                  und höchstens 2 Kinder unter 14 Jahren:
                  38 Euro
                  <br /><br />
                  Möchten Sie eine Jahres-Karte kaufen?
                  Dann können Sie hier das Anmelde-Formular herunterladen:
                  <a href="http://www.museumfuernaturkunde.berlin/sites/default/files/23_0629a_Antrag_Jahreskarten_DE.pdf" className="underline">Antrag Jahres-Karte</a>
                  <br /><br />
                  Schicken Sie das ausgefüllte Anmelde-Formular gerne mit E-Mail an diese Adresse: <a href="mailto:info@mfn.berlin" className="underline">info@mfn.berlin</a>
                </p>
              </div>
            </AccordionItem>
            <AccordionItem title="Gutscheine">
              <div className="p-5">
                <p>
                  Sie möchten einen Besuch bei uns im Museum verschenken?
                  Dann können Sie gerne einen Gutschein kaufen.
                  Sie können den Gutschein an der Kasse vom Museum kaufen.
                  Die Kasse hat nur zu den Öffnungs-Zeiten vom Museum geöffnet.
                </p>
              </div>
            </AccordionItem>
            <AccordionItem title="Ermäßigungen">
              <div className="p-5">
                <p>
                  Diese Personen müssen weniger Eintritt bezahlen.
                  Bitte bringen Sie einen Nachweis mit.
                  Ein Nachweis kann zum Beispiel ein passender Ausweis sein.
                  Zum Beispiel ein Ausweis von der Universität oder Schule.
                  Oder ein Schwerbehinderten-Ausweis.
                  <br /><br />
                  ● Schülerinnen und Schüler ab 16 Jahre
                  <br />
                  ● Studierende
                  <br />
                  ● Auszubildende
                  <br />
                  ● Rentnerinnen und Rentner
                  <br />
                  ● Empfänger von Sozial-Hilfe
                  <br />
                  ● Arbeitslose
                  <br />
                  ● Menschen im Freiwilligen-Dienst
                  <br />
                  ● Menschen mit Ehrenamts-Karte
                  <br />
                  ● Menschen mit Behinderung (ab Grad der Behinderung 50)
                  <br /><br />
                  Die Ermäßigung gilt auch für Personen mit:
                  Museums-Pass Berlin
                  WelcomeCard Berlin
                  Eintrittskarte vom Deutschen Technik-Museums.
                  <br /><br />
                  Mehr Informationen über unsere Ticket-Kooperationen finden Sie hier:
                  <a href="/de/ticketkooperationen" className="underline">Ticket-Kooperation</a>
                </p>
              </div>
            </AccordionItem>
            <AccordionItem title="Freier Eintritt">
              <div className="p-5">
                <p>
                  Diese Personen bekommen freien Eintritt in das Museum.
                  Sie müssen nichts bezahlen.
                  <br /><br />
                  Vorschul-Kinder, Kinder unter 6 Jahren
                  <br />
                  bis zu 2 Lehrkräfte oder Erzieherinnen oder Erzieher,
                  die eine Schul-Klasse, Kinder-Gruppe oder Jugend-Gruppe begleiten
                  <br />
                  Angemeldete Gruppen von Studierenden
                  von Berliner Universitäten und Hochschulen.
                  Der Besuch im Museum muss zu einer Lehr-Veranstaltung gehören.
                  <br /><br />
                  Folgende Personen bekommen auch freien Eintritt.
                  Bitte bringen Sie einen Nachweis mit.
                  Ein Nachweis kann zum Beispiel ein passender Ausweis
                  oder eine Mitglieds-Karte sein.
                  <br /><br />
                  Mitglieder vom Internationalen Museums-Rat
                  <br />
                  Mitglieder von der WFTGA
                  Die Abkürzung steht für:
                  The World Federation of Tourist Guide Associations.
                  Das ist der Welt-Verband für Gästeführer.
                  <br />
                  Mitglieder vom Deutschen Museums-Bund
                  <br />
                  Personen mit gültigem Presse-Ausweis
                  <br />
                  Mitarbeitende aus anderen Berliner Museen
                  <br />
                  Begleit-Personen von Menschen mit Schwer-Behinderung.
                  Dafür muss das Merkzeichen B im Schwerbehinderten-Ausweis stehen.
                  <br />
                  Geflüchtete und Willkommens-Klassen
                </p>
              </div>
            </AccordionItem>

          </Accordion>

        </Section>

        <Section id="anreise" columns={2} backgroundColor="bg-Green-100" gapClass="gap-10 md:gap-20 xl:gap-36" justifyContent="center">
          <div className="flex flex-col justify-center items-center py-10 md:py-20">
            <div className="py-[30px] mb-[17px]">
              <div className="w-[200px] h-[200px] relative overflow-hidden rounded-full">
                <ContentImage
                  imageName="150313_u-bahhof_14_c_carola-radke_mfn.jpg"
                  alt="U-Bahnhof Naturkundemuseum - Haupteingang zur U6"
                  imageMap={imageMap}
                  className="w-full h-full object-cover"
                  imgStyle={{
                    objectPosition: 'center center',
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                  }}
                />
              </div>
            </div>
            <CardText
              headline="Anreise"
              headlineStyle="h1"
              body="Wir freuen uns über Ihren Besuch!<br /><br />Das Museum für Naturkunde liegt in Berlin-Mitte.<br /><br />Wir empfehlen:<br />Kommen Sie mit öffentlichen Verkehrsmitteln wie Bus und Straßen-Bahn.<br /><br />Oder kommen Sie mit dem Fahrrad.<br /><br />Denn in der Nähe vom Museum gibt es nur wenige Parkplätze."
              spacing="wide"
              alignment="center"
              className="text-[#5f5f5f]"
              buttons={[
                {
                  text: "Das Museum auf Google Maps",
                  url: "https://maps.app.goo.gl/4orDoD9aBkAnS8zy9",
                  variant: "plain"
                }
              ]}
            />
          </div>

          <Accordion bgColor="white" defaultOpenIndex={0} id="anreise">
            <AccordionItem title="Mit Bus und Bahn">
              <div className="p-5">
                <p>
                  Haltestelle: U-Naturkundemuseum
                  Bus-Linie 245 und Bus-Linie N40
                  Von der Haltestelle sind es zu Fuß etwa 300 Meter zum Museum.
                  <br /><br />
                  Haltstelle: S-Haupt-Bahnhof
                  Linie S5 und Linie S7
                  Von der Haltestelle sind es zu Fuß etwa 1,3 Kilometer zum Museum.
                  <br /><br />
                  Haltestelle: S-Nord-Bahnhof
                  Linie S1 und Linie S2
                  Von der Haltestelle sind es zu Fuß etwa 900 Meter zum Museum.
                  <br /><br />
                  Haltestelle: Invalidenpark
                  Bus-Linie 120, Bus-Linie 123, Bus-Linie 142, Bus-Linie 245,
                  Bus-Linie N20, Bus-Linie N40
                  Von der Haltestelle sind es zu Fuß etwa 300 Meter zum Museum.
                </p>
              </div>
            </AccordionItem>
            <AccordionItem title="Mit Fahrrad">
              <div className="p-5">
                <p>
                  Sie können leicht mit dem Fahrrad zum Museum kommen.
                  Wir haben genug Stellplätze für Fahrräder.
                  Sie kommen mit dem Fahrrad?
                  Dann helfen Sie der Umwelt.
                  Und Sie müssen nicht auf die Abfahr-Zeiten von Bus und Bahn achten.
                  <br /><br />
                  Sie können Ihre Sachen wie einen Fahrrad-Helm
                  sicher bei uns in der Garderobe lassen.
                  <br /><br />
                  Neben dem Museum ist das Bundes-Ministerium für Digitales
                  und Verkehr.
                  Dort gibt es eine elektrische Fahrrad-Pumpe.
                  Sie können die Fahrrad-Pumpe jederzeit kostenlos nutzen.
                </p>
              </div>
            </AccordionItem>
            <AccordionItem title="Mit Auto">
              <div className="p-5">
                <p>
                  Das Museum für Naturkunde hat keine eigenen Parkplätze.
                  Sie können hier mit dem Auto parken:
                  <br /><br />
                  <a href="https://www.mercure.com/de/hotel-1565-mercure-hotel-berlin-city/index.shtml" className="underline">Parkplatz vom Mercure Hotel Berlin City</a>&nbsp; 
                  Invalidenstraße 38
                  10115 Berlin
                  <br /><br />
                  Das Parken kostet Geld.
                  Von hier sind es etwa 200 Meter zu Fuß zum Museum.
                  <br /><br />
                  <a href="https://www.hplushotels.com/de/hotels/berlin/h-hotel-berlin-mitte" className="underline">Parkplatz von H+ Hotel Berlin Mitte / Rewe</a>&nbsp;
                  Chausseestraße 118-120
                  10115 Berlin
                  <br /><br />
                  Das Parken kostet Geld.
                  Von hier sind es etwa 350 Meter zu Fuß zum Museum.
                </p>
              </div>
            </AccordionItem>
            <AccordionItem title="Barriere-freier Eingang">
              <div className="p-5">
                <p>
                  Wir haben einen barriere-freien Eingang.
                  Zum Beispiel für Menschen mit Rollstuhl oder Rollator.
                  Der barriere-freie Eingang ist rechts neben dem Haupt-Eingang.
                  Beim barriere-freien Eingang gibt es einen Fahrstuhl
                  und einen Treppen-Lift.
                  So kommen Sie von dem Eingang dann zur Garderobe und
                  zu der barriere-freien Toilette.
                  Und Sie kommen von hier auch direkt zur Ausstellung.
                  <br /><br />
                  Gegenüber vom barriere-freien Eingang sind 3 Behinderten-Parkplätze.
                  <br /><br />
                  Wichtig:
                  Am Gebäude neben dem Museum ist gerade Baustelle.
                  Darum können Sie die Behinderten-Parkplätze gerade nicht nutzen.
                  Wir bitten um Verständnis dafür.
                  <br /><br />
                  <a href="/de/museum/besuch-planen/barrierefreiheit" className="underline">Mehr Infos</a>
                </p>
              </div>
            </AccordionItem>
          </Accordion>
        </Section>
        <Section id="im-museum" columns={1} backgroundColor="bg-white" padding="pt-8 md:pt-16 pb-4 md:pb-8">
          <div className="py-10 md:py-20">
            <CardText
              headline="Im Museum"
              headlineStyle="h1"
              body="In unseren Ausstellungen können Sie die spannenden Abenteuer der Natur entdecken.<br />Dafür zeigen wir echte Forschungs-Objekte.<br />Zum Bespiel echte Tiere und Skelette.<br /><br />Mehr zu unserer <a href='/de/museum/besuch-planen/besuchendenordnung' className='underline'>Besuchendenordnung</a> und<br />unseren <a href='/de/museum/besuch-planen/fotografieren-und-filmaufnahmen' className='underline'>Regeln für Film- und Foto-Aufnahmen</a>."
              spacing="wide"
              alignment="center"
            />

          </div>


          <Slideshow imageMap={imageMap}>
            <SlideContent
              imageName="zv_1200x675_WEBSEITE_0.jpg"
              title="ZUGvögel – Eine Sammlung in Bewegung"
              kicker="Sonderausstellung vom 11. Juni 2024 bis Ende Juni 2027"
              link="/de/museum/ausstellungen/zugvoegel"
              altText="Zugvögel"
            />
            <SlideContent
              imageName="zp_1200x675_WEBSEITE.jpg"
              title="Zukunftsplan – Das Museum in Bewegung"
              kicker="Installation im Museum vom 11. Juni 2024 bis Ende Juni 2027"
              link="/de/museum/ausstellungen/zukunftsplan"
              altText="Visualisierung des Zukunftsplans für das Museum für Naturkunde Berlin"
            />
            <SlideContent
              imageName="Ribbeck-Meteorit_im_Museum_fuer_Naturkunde_Berlin_c_Pablo_Castagnola.jpg"
              title="Ribbet Meteorit im Mineraliensaal"
              kicker="Bruchstücke fielen im Januar 2024 im Havelland vom Himmel"
              link="/de/besuch-eines-fernen-verwandten"
              altText="Ribbeck-Meteorit im Museum für Naturkunde Berlin (c) Pablo Castagnola"
            />
            <SlideContent
              imageName="1200x800_0.jpg"
              title="Dinosaurier!"
              kicker="Unsere Ausstellungen"
              link="/de/museum/ausstellungen/dinosaurier-zeitalter-der-riesenechsen"
              altText="Dinosaurier! Zeitalter der Riesenechsen"
            />
            <SlideContent
              imageName="digitize_webseite_V2_1200x800_Live Science.jpg"
              title="digitize!"
              kicker="Unsere Ausstellungen"
              link="/de/museum/ausstellungen/digitize"
              altText="digitize! Live Science"
            />
            <SlideContent
              imageName="sauriersaal_04_c_carola-radke-mfn.jpg"
              title="Saurierwelt"
              kicker="Unsere Ausstellungen"
              link="/de/museum/ausstellungen/saurierwelt"
              altText="Saurierskelette im Sauriersaal"
            />
            <SlideContent
              imageName="system_erde_02_c_carola-radke_mfn.jpg"
              title="System Erde"
              kicker="Unsere Ausstellungen"
              link="/de/museum/ausstellungen/system-erde"
              altText="Der Multimedia-Globus im Museum für Naturkunde Berlin"
            />
            <SlideContent
              imageName="kosmos_saal_c_hwa-ja-goetz-mfn.jpg"
              title="Kosmos und Sonnensystem"
              kicker="Unsere Ausstellungen"
              link="/de/museum/ausstellungen/kosmos-und-sonnensystem"
              altText="Besucher schauen liegend in Projektionshimmel im Museum für Naturkunde Berlin"
            />
            <SlideContent
              imageName="biodivwand_c_carola-radke-mfn.jpg"
              title="Evolution in Aktion"
              kicker="Unsere Ausstellungen"
              link="/de/museum/ausstellungen/evolution-aktion"
              altText="Die Biodiversitätswand im Museum für Naturkunde Berlin"
            />
            <SlideContent
              imageName="101028_nasssammlung_02_c_carola-radke-mfn.jpg"
              title="Nass-Sammlung"
              kicker="Unsere Ausstellungen"
              link="/de/museum/ausstellungen/nass-sammlung"
              altText="Hohe Regale mit Tierpräparaten in der Nass-Sammlung"
            />
            <SlideContent
              imageName="130220_kellermodell_floh_c_carola-radke_mfn.jpg"
              title="Kellers Insektenmodelle"
              kicker="Unsere Ausstellungen"
              link="/de/museum/ausstellungen/kellers-insektenmodelle"
              altText="Modell eines Flohs"
            />
            <SlideContent
              imageName="2015_bobby_c_carola-radke_mfn_0.jpg"
              title="Highlights der Präparationskunst"
              kicker="Unsere Ausstellungen"
              link="/de/museum/ausstellungen/highlights-der-praeparationskunst"
              altText="Das Gesicht des Gorillas Bobby, dahinter das Präparat einer Riesen-Elanantilope"
            />
            <SlideContent
              imageName="110919_mineraliensaal_13_c_hwa-ja-goetz-mfn.jpg"
              title="Mineralien"
              kicker="Unsere Ausstellungen"
              link="/de/museum/ausstellungen/mineralien"
              altText="Schaukästen mit Mineralien im Mineraliensaal"
            />
            <SlideContent
              imageName="humboldt-intervention-museum-fuer-naturkunde-berlin.jpg"
              title="Humboldt-Intervention"
              kicker="Unsere Ausstellungen"
              link="/de/museum/ausstellungen/humboldt-intervention"
              altText="Plakate der Humboldt-Intervention zwischen und über den Schaukästen im Mineraliensaal"
            />
            <SlideContent
              imageName="100423_parasiten_03_c_hwaja-goetz_mfn_0.jpg"
              title="Wanderausstellungen"
              kicker="Unsere Ausstellungen"
              link="/de/museum/wanderausstellungen"
              altText="Das Foto zeigt einen präparierten Springbock mit Madenhacker"
            />
            <SlideContent
              imageName="federband_c_hwaja-goetz_mfn.jpg"
              title="Archiv: Sonderausstellungen"
              kicker="Unsere Ausstellungen"
              link="/de/museum/ausstellungen/archiv-sonderausstellungen"
              altText="Federband aus verschiedenfarbigen Federn"
            />
          </Slideshow>
        </Section>
        <Section backgroundColor="bg-white" padding="pt-8 md:pt-16 pb-4 md:pb-8">
          <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="sm:col-span-2 lg:col-span-2">
              <Card
                variant="classic"
                imageRatio="65" // 4:3 format

                imageProps={{
                  imageName: "veranstaltungen-museum-fuer-naturkunde-berlin (1).jpg",
                  alt: "Veranstaltungsbesuchende im Sauriersaal des Museums für Naturkunde Berlin",
                  imageMap: imageMap,
                  className: "w-full h-auto object-cover"
                }}
                textProps={{
                  headline: "Veranstaltungen",
                  spacing: "regular",
                  headlineStyle: "h3"
                }}
                url="/de/museum/veranstaltungen"
              />
            </div>

            <div className="sm:col-span-2 lg:col-span-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <Card
                variant="classic"
                imageProps={{
                  imageName: "23_0929_Ausstellung_Beschilderung_Rundgang_A5-1.jpg",
                  alt: "Lageplan & Barrierefreiheit",
                  imageMap: imageMap,
                  className: "w-full h-auto object-cover"
                }}
                textProps={{
                  headline: "Lageplan & Barrierefreiheit",
                  spacing: "tight",
                  headlineStyle: "h3"
                }}
                url="/de/museum/besuch-planen/barrierefreiheit"
              />
              <Card
                variant="classic"
                imageProps={{
                  imageName: "151216_saal_1_picnic-area_28_c_hwaja-goetz-mfn.jpg",
                  alt: "Garderobe und Picknickbereich im Saal 1 des Museums",
                  imageMap: imageMap,
                  className: "w-full h-auto object-cover"
                }}
                textProps={{
                  headline: "Garderobe",
                  spacing: "tight",
                  headlineStyle: "h3"
                }}
                url="/de/museum/besuch-planen/garderobe"
              />
            </div>

            <div className="sm:col-span-1 lg:col-span-1">
              <Card
                variant="classic"
                imageProps={{
                  imageName: "230713-Museumscafe_15_web__(c)_Hwa_Ja-Götz.jpg",
                  alt: "Innenansicht des Museumscafés mit Sitzgelegenheiten",
                  imageMap: imageMap,
                  className: "w-full h-auto object-cover"
                }}
                textProps={{
                  headline: "Cafeteria",
                  headlineStyle: "h3",
                  spacing: "regular"
                }}
                url="/de/museum/besuch-planen/museumscafe"
              />
            </div>
            <div className="sm:col-span-1 lg:col-span-1">
              <Card
                variant="classic"
                imageProps={{
                  imageName: "app_foto_(c) Sonja Kreft.jpg",
                  alt: "Führungen & Audioguides",
                  imageMap: imageMap,
                  className: "w-full h-auto object-cover"
                }}
                textProps={{
                  headline: "Führungen & Audioguides",
                  headlineStyle: "h3",
                  spacing: "wide"
                }}
                url="/de/museum/besuch-planen/digital-guide"
              />
            </div>

          </div>
        </Section>
        <Section columns={1} backgroundColor="bg-Green-100" padding="pt-8 md:pt-16 pb-0">
          <div className="py-10 md:py-20">

            <CardText
              headline="Besondere Besuche"
              headlineStyle="h1"
              body="Sie möchten mit einer Gruppe zu uns kommen?<br />Oder Sie möchten einen besonderen Anlass bei uns feiern?<br />Das finden wir toll!"
              spacing="wide"
              alignment="center"
              buttons={
                [
                  {
                    text: "Alle Bildungsangebote",
                    url: "/de/museum/bildung",
                    variant: "plain"
                  }
                ]
              }
            />
          </div>
        </Section>
        <Section columns={4} backgroundColor="bg-Green-100">
          <Card
            variant="classic"
            imageProps={{
              imageName: "160222_Schueler_Fuehrung_System_Erde_07__(c)_Hwa-Ja_Goetz_MfN.jpg",
              alt: "Schulklasse bei einer Führung mit der Grabungskiste",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "Schulklassen",
              headlineStyle: "h3",
              spacing: "wide"
            }}
            url="/de/museum/bildung/schule-und-kita"
          />
          <Card
            variant="classic"
            imageProps={{
              imageName: "111123_Zeichenkurs_Exploratorium_15_2.jpg",
              alt: "Eine Frau sitzt am Mikroskop und zeichnet die vergrößerte Ansicht auf Papier. | Bildquelle: Museum für Naturkunde Berlin",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "Erwachsene",
              headlineStyle: "h3",
              spacing: "wide"
            }}
            url="/de/museum/bildung/erwachsene"
          />
          <Card
            variant="classic"
            imageProps={{
              imageName: "160222_Schueler_Fuehrung_Grabungskiste_28.jpg",
              alt: "Another Image",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "Kindergeburtstage",
              headlineStyle: "h3",
              spacing: "wide"
            }}
            url="/de/museum/bildung/kindergeburtstage"
          />
          <Card
            variant="classic"
            imageProps={{
              imageName: "171030_naturkunde_356_(c)_Thomas_Rosenthal.jpg",
              alt: "Ausstellungsbereich im Museum für Naturkunde Berlin",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "Gruppen",
              headlineStyle: "h3",
              spacing: "wide"
            }}
            url="/de/museum/bildung/familien"
          />
        </Section>
        <Section columns={2} backgroundColor="bg-white" gapClass="gap-10 md:gap-36" justifyContent="center">
          <div className="py-10 md:py-20">
            <CardText
              headline="Oft gestellte Fragen"
              headlineStyle="h1"
              body="Viele Leute haben Fragen über einen Besuch bei uns im Museum.<br />Hier antworten wir auf oft gestellte Fragen.<br />Haben Sie noch eine andere Frage?<br />Dann melden Sie sich gerne bei uns."
              spacing="wide"
              alignment="center"
              className="text-[#5f5f5f]"
              buttons={[
                {
                  text: "Mehr häufig gestellte Fragen",
                  url: "/de/haeufig-gestellte-fragen",
                  variant: "plain"
                }
              ]}
            />
          </div>

            <Accordion bgColor="green" id="faq">
              <AccordionItem title="Wo erhalte ich die Tickets?">
                <div className="p-5">
                  <p>
                    Sie können Online-Tickets <a href="https://ticketshop.museumfuernaturkunde.berlin" className="underline" target="_blank" rel="noopener noreferrer">hier</a> oder vor Ort an der Museumskasse kaufen.
                    <br /><br />
                    Wir empfehlen die Buchung von Online-Zeitfenstertickets im Vorfeld um
                    Wartezeiten an der Kasse zu vermeiden. Die Tickets sind 14 Tage im Voraus
                    buchbar.
                    <br /><br />
                    Ein Zeitfensterticket berechtigt Sie zum Eintritt in das Museum innerhalb von
                    einer Stunde, ab der gebuchten Uhrzeit. Danach können Sie sich im Rahmen
                    unserer Öffnungszeiten unbegrenzt im Museum aufhalten.
                    <br /><br />
                    Hinweis: Ihre Eintrittskarte gilt am selben Tag für alle laufenden Ausstellungen im
                    Museum für Naturkunde.
                  </p>
                </div>
              </AccordionItem>
              <AccordionItem title="Wie reise ich am besten an?">
                <div className="p-5">
                  <p>Wir empfehlen die Anreise mit den öffentlichen Verkehrsmitteln oder mit dem Fahrrad.
                  </p>
                </div>
              </AccordionItem>
              <AccordionItem title="Gibt es einen Audioguide?">
                <div className="p-5">
                  <p>
                    Ja. Wir bieten einen kostenfreien digitalen Guide für Ihr eigenes Smartphone an.
                    Diesen gibt es in 11 Sprachen. Es gibt außerdem einen Audioguide für Kinder und
                    eine Highlight-Tour für Gehörlose in deutscher Gebärdensprache (DGS).
                    <br /><br />
                    Außerdem bieten wir zwei Audio Guides mit thematischen Schwerpunkten an, um
                    die Ausstellung und Objekte durch eine zusätzliche Perspektive erfahrbar zu
                    machen.
                    <br /><br />
                    <a href="/de/museum/besuch-planen/digital-guide" className="underline" target="_blank" rel="noopener noreferrer">Hier</a> finden Sie weitere Informationen.
                    <br /><br />
                    Für die Nutzung des Audioguides empfehlen wir Ihnen eigene Kopfhörer mitzubringen.
                  </p>
                </div>
              </AccordionItem>
              <AccordionItem title="Darf ich im Museum fotografieren?">
                <div className="p-5">
                  <p>
                    Das Fotografieren für private Zwecke ist im Museum erlaubt. Für kommerzielle Zwecke benötigen Sie eine Genehmigung. Mehr Infos <a href="/de/museum/besuch-planen/fotografieren-und-filmaufnahmen" className="underline" target="_blank" rel="noopener noreferrer">hier</a>.
                  </p>
                </div>
              </AccordionItem>
              <AccordionItem title="Darf ich meinen Kinderwagen mit in das Museum nehmen?">
                <div className="p-5">
                  <p>Ja, das Museum kann mit einem Kinderwagen besucht werden.
                  </p>
                </div>
              </AccordionItem>
              <AccordionItem title="Darf ich Tiere mit in das Museum nehmen?">
                <div className="p-5">
                  <p>Nein. Ausnahmen gelten für Assistenz- und Blindenführhunde mit entsprechendem Nachweis.
                  </p>
                </div>
              </AccordionItem>
            </Accordion>
        </Section>
        <Section columns={1} backgroundColor="bg-Black-100">
          <CardText
            headline="Kontakt"
            headlineStyle="h1"
            body="Haben Sie Fragen?<br />Möchten Sie uns etwas sagen?<br />Dann melden Sie sich gerne.<br />Wir freuen uns auf Ihre Nachricht."
            spacing="wide"
            alignment="center"
          />
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-2">
            <Button
              text="Stellen Sie uns eine Frage"
              variant="primary"
              url="/de/kontakt/"
            />
            <Button
              text="Rufen Sie uns an"
              variant="primary"
              url="tel:+4930889140-8591"  // Telefonnummer ohne Klammern und Leerzeichen
            />
          </div>

        </Section>
        <Section columns={1} backgroundColor="bg-Black-100">
          <Feedback />
        </Section>
      </main>
      <Footer />
    </>
  )
}

export default IndexPage

export const Head = () => (
  <HeadComponent
    title="Besuch planen"
    description="Planen Sie Ihren Besuch im Museum für Naturkunde Berlin"
    pathname="/besuch-planen"
  />
)
