import * as React from "react"
import { graphql, useStaticQuery, withPrefix, Link } from "gatsby"
import Header from "../../components/layouts/Header"
import Button from "../../components/elements/Button"
import CardText from '../../components/elements/CardText'
import ContentImage from '../../components/elements/ContentImage'
import Section from '../../components/elements/Section'
import Card from '../../components/elements/Card'
import StoryTime from '../../components/layouts/StoryTime'
import Footer from '../../components/layouts/Footer'
import { Accordion, AccordionItem, AccordionSpacer } from '../../components/layouts/Accordion'
import Slideshow from '../../components/layouts/Slideshow'
import SlideContent from '../../components/layouts/SlideContent'
import AccessibilityNav from '../../components/layouts/AccessibilityNav'
import OpenToday from '../../components/features/OpenToday'
import Feedback from '../../components/features/Feedback'
import HeadComponent from '../../components/layouts/HeadComponent'
import UpcomingHoliday from '../../components/features/UpcomingHoliday';


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
      <Header activeNavItem="besuchplanen"/>
      <main className="flex flex-col items-center justify-center min-h-screen p-0 bg-Black-000">
        <Section backgroundColor="bg-Black-000" padding="pt-8 pb-0">
          <AccessibilityNav currentPage="Besuch planen" />
        </Section>
        <Section backgroundColor="bg-white" gapClass="gap-20 xl:gap-36">
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
              body: "Hier finden Sie alle Informationen, die Sie für einen Besuch im Museum für Naturkunde Berlin benötigen.",
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
                    url: "/de/museum/besuch-planen/anfahrt",
                    variant: "plain"
                },
                {
                    text: "Ausstellungen",
                    url: "/de/museum/ausstellungen",
                    variant: "plain"
                }
                ,
                {
                    text: "Digitale Angebote",
                    url: "/de/museum/bildung/fuernatur-digital-angebote",
                    variant: "plain"
                },
                {
                    text: "Bildungsangebote",
                    url: "/de/mitmachen/bildung",
                    variant: "plain"
                }]
            }}
            linkUrl="https://ticketshop.museumfuernaturkunde.berlin"
            className="h-96"
            imagePosition="right"
            linkText="Zum Ticket Shop"
          />

        </Section>
        <Section columns={2} backgroundColor="bg-Green-100" gapClass="gap-20 xl:gap-36" justifyContent="center">
          <div>
            <CardText
            headline="Öffnungszeiten"
            headlineStyle="h1"
            body="Das Museum öffnet täglich bis 18:00 Uhr.<br/>Montags ist das Museum geschlossen.<br/>Letzter Einlass ist 30 Minuten vor Schluss."
            spacing="wide"
            alignment="center" // Center-aligned text
          />
            <UpcomingHoliday />
            <div className="w-full">
              <Link 
                to="/de/besuch-planen/sonderoeffnungszeiten"
                className="w-full block text-center text-Green-500 typography-p"
              >
                Genauer Plan mit Sonderöffnungszeiten
              </Link>
            </div>
            </div>
          <Accordion bgColor="white">

            <OpenToday />

            <AccordionSpacer>
              <div className="p-0 flex flex-col justify-center items-center gap-0">
                <div className="text-center text-Green-600 typography-kicker">
                  Dienstag, Mittwoch, Donnerstag, Freitag
                </div>
                <div className="text-center text-Black-900 font-bold text-[34px] py-2">
                  09:30 bis 18:00
                </div>
              </div>
            </AccordionSpacer>

            <AccordionSpacer>
              <div className="p-0 flex flex-col justify-center items-center gap-0">
                <div className="text-center text-Green-600 typography-kicker">
                  Samstag, Sonntag, und an <span className="underline">Feiertagen</span>
                </div>
                <div className="text-center text-Black-900 font-bold text-[34px] py-2">
                  10:00 bis 18:00
                </div>
              </div>
            </AccordionSpacer>

            <AccordionSpacer>
              <div className="p-0 flex flex-col justify-center items-center gap-0">
                <div className="text-center text-Green-600 typography-kicker">
                  Montag
                </div>
                <div className="text-center text-Black-900 font-bold text-[34px] py-2">
                  geschlossen
                </div>
              </div>
            </AccordionSpacer>

          </Accordion>

        </Section>
        <Section columns={2} backgroundColor="bg-white" gapClass="gap-20 xl:gap-36" justifyContent="center">
          <div className="flex -mt-40 flex-col justify-center items-center gap-20">
            <div className="flex items-center justify-center w-[166px] h-[166px] p-4 rotate-[7deg] bg-Yellow rounded-full shadow-lg">
              <p className="text-center text-black">
                Am ersten Sonntag des Monats ist der <strong>Eintritt frei!</strong>
              </p>
            </div>
            <CardText
              headline="Tickets & Preise"
              headlineStyle="h1"
              body={`Tickets können Sie vor Ort und im <a href="/tickets/online-shop" className="underline">Onlineshop</a> kaufen. 
                Wir empfehlen die Buchung von <a href="/tickets/zeitfenster" className="underline">Online-Zeitfenstertickets</a> 
              im Vorfeld um Wartezeiten an der Kasse zu vermeiden.`}
              spacing="wide"
              alignment="center"
              buttons={[
                {
                    text: "Ticketkooperationen",
                    url: "/de/besuch-planen/kooperationen",
                    variant: "plain"
                }]}
            />

          </div>
          <Accordion bgColor="green" defaultOpenIndex={0}>
            <AccordionItem title="Einzeltickets">
              <div className="flex flex-col items-end justify-start w-full px-4 pb-4 gap-2.5">
                <div className="flex justify-between items-baseline gap-2.5 w-full">
                  <h3 className="text-Black-700 flex-1 text-[21px]">
                    Erwachsene
                  </h3>
                  <h3 className="w-[125px] text-right text-Black-900 text-[21px]">
                    11,00 €
                  </h3>
                </div>
                <div className="flex justify-between items-baseline gap-2.5 w-full">
                  <h3 className="text-Black-700 flex-1 text-[21px]">
                    Kinder ab 6
                  </h3>
                  <h3 className="w-[125px] text-right text-Black-900 text-[21px]">
                    5,00 €
                  </h3>
                </div>
              </div>

            </AccordionItem>
            <AccordionItem title="Gruppentickets">
              <div className="p-5">
                <ul className="flex flex-col gap-4 list-disc pl-4">
                  <li>
                    <div className="flex justify-between items-baseline">
                      <p className="flex-1 pr-8">
                        Familien (zwei Erwachsene mit bis zu drei Kindern unter 14 Jahre)
                      </p>
                      <p className="font-bold whitespace-nowrap">
                        18,00 €
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-baseline">
                      <p className="flex-1 pr-8">
                        Mini-Familien (eine erwachsene Person mit bis zu zwei Kindern unter 14 Jahre)
                      </p>
                      <p className="font-bold whitespace-nowrap">
                        12,00 €
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-baseline">
                      <p className="flex-1 pr-8">
                        Erwachsene in Gruppen ab 10 Personen
                      </p>
                      <p className="font-bold whitespace-nowrap">
                        8,00 €
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-baseline">
                      <p className="flex-1 pr-8">
                        Ermäßigte in Gruppen ab 10 Personen
                      </p>
                      <p className="font-bold whitespace-nowrap">
                        2,00 €
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </AccordionItem>
            <AccordionItem title="Jahreskarten und Gutscheine">
              <div className="p-5">
                <div className="flex flex-col gap-6">
                  <ul className="flex flex-col gap-4 list-disc pl-4">
                    <li>
                      <div className="flex justify-between items-baseline">
                        <p className="flex-1 pr-8">
                          Erwachsene
                        </p>
                        <p className="font-bold whitespace-nowrap">
                          35,00 €
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between items-baseline">
                        <p className="flex-1 pr-8">
                          Ermäßigte
                        </p>
                        <p className="font-bold whitespace-nowrap">
                          23,00 €
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between items-baseline">
                        <p className="flex-1 pr-8">
                          Familien (zwei Erwachsene mit bis zu drei Kindern unter 14 Jahre)
                        </p>
                        <p className="font-bold whitespace-nowrap">
                          65,00 €
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between items-baseline">
                        <p className="flex-1 pr-8">
                          Mini-Familien (eine erwachsene Person mit bis zu zwei Kindern unter 14 Jahre)
                        </p>
                        <p className="font-bold whitespace-nowrap">
                          38,00 €
                        </p>
                      </div>
                    </li>
                  </ul>

                  <p>
                    Laden Sie sich das <a href="https://www.naturkundemuseum-shop.de" className="underline">Anmeldeformular</a> herunter und beantragen Sie Ihre Jahreskarte noch heute. Senden Sie das ausgefüllte Formular gerne per E-Mail an <a href="mailto:info@mfn.berlin" className="underline">info@mfn.berlin</a>.
                  </p>
                  <h4>Gutscheine</h4>
                  <p>Sie erhalten Gutscheine für einen Museumsbesuch an der Museumskasse zu den regulären Kassenöffnungszeiten.</p>
                </div>
              </div>
            </AccordionItem>
            <AccordionItem title="Ermäßigungen">
              <div className="p-5">
                <div className="flex flex-col gap-6">
                  <p>
                    Folgende Personen erhalten mit entsprechendem Nachweis ermäßigten Eintritt:
                  </p>

                  <ul className="flex flex-col gap-4 list-disc pl-4">
                    <li>
                      <div className="flex justify-between items-baseline">
                        <p className="flex-1 pr-8">
                          Schülerinnen und Schüler ab 16 Jahre mit Schüler:innenausweis
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between items-baseline">
                        <p className="flex-1 pr-8">
                          Studierende
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between items-baseline">
                        <p className="flex-1 pr-8">
                          Auszubildende
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between items-baseline">
                        <p className="flex-1 pr-8">
                          Rentnerinnen und Rentner
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between items-baseline">
                        <p className="flex-1 pr-8">
                          Sozialhilfeempfangende
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between items-baseline">
                        <p className="flex-1 pr-8">
                          Erwerbslose
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between items-baseline">
                        <p className="flex-1 pr-8">
                          Teilnehmende an Freiwilligendiensten und bei Vorlage der Ehrenamtskarte
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between items-baseline">
                        <p className="flex-1 pr-8">
                          Schwerbehinderte (ab GdB 50) mit entsprechendem amtlichen Nachweis
                        </p>
                      </div>
                    </li>
                  </ul>

                  <p>
                    Sie erhalten Ermäßigung mit dem Museumspass Berlin, der Welcome Card Berlin und einer Eintrittskarte des Deutschen Technikmuseums. <a href="/de/besuch-planen/kooperationen" className="underline">Mehr Infos zu Kooperationen</a>
                  </p>
                </div>
              </div>
            </AccordionItem>
            <AccordionItem title="Freier Eintritt">
              <div className="p-5">
                <div className="flex flex-col gap-6">
                  <ul className="flex flex-col gap-4 list-disc pl-4">
                    <li>
                      <div className="flex justify-between items-baseline">
                        <p className="flex-1 pr-8">
                          Vorschulkinder, Kinder unter 6 Jahren
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between items-baseline">
                        <p className="flex-1 pr-8">
                          bis zu zwei Lehrkräfte, Erzieherinnen oder Erzieher, die eine Schulklasse, Kinder- oder Jugendgruppe begleiten
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between items-baseline">
                        <p className="flex-1 pr-8">
                          ICOM-Mitglieder und Mitgliederinnen (Internationaler Museumsrat, International Council of Museums)
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between items-baseline">
                        <p className="flex-1 pr-8">
                          Mitglieder und Mitgliederinnen der WFTGA (the World Federation of Tourist Guide Associations)
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between items-baseline">
                        <p className="flex-1 pr-8">
                          Inhabende einer Mitgliedskarte des Deutschen Museumsbundes
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between items-baseline">
                        <p className="flex-1 pr-8">
                          Angemeldete Gruppen von Studierenden der Berliner Universitäten und Hochschulen, die im Rahmen einer Lehrveranstaltung das Museum besuchen
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between items-baseline">
                        <p className="flex-1 pr-8">
                          Inhabende eines gültigen Presseausweises
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between items-baseline">
                        <p className="flex-1 pr-8">
                          Beschäftigte anderer Berliner Museen, die sich als solche ausweisen
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between items-baseline">
                        <p className="flex-1 pr-8">
                         Begleitpersonen von Schwerbehinderten, die im Schwerbehindertenausweis eingetragen sind
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between items-baseline">
                        <p className="flex-1 pr-8">
                          Geflüchtete und Willkommensklassen, die sich als solche ausweisen
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </AccordionItem>

          </Accordion>

        </Section>

        <Section columns={2} backgroundColor="bg-Green-100"  gapClass="gap-20 xl:gap-36" justifyContent="center">
          <div className="flex flex-col justify-center items-center">
            <div className="py-[30px] mb-[17px]">
              <div className="w-[200px] h-[200px] relative overflow-hidden rounded-full">
                <ContentImage
                  imageName="150313_u-bahhof_14_c_carola-radke_mfn.jpg"
                  alt="U-Bahnhof"
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
              body="Wir freuen uns über Ihren Besuch! Das Museum für Naturkunde liegt in Berlin-Mitte. Wir empfehlen die Anreise mit öffentlichen Verkehrsmitteln oder Fahrrad, da es am Museum keine sowie im Umkreis nur begrenzte Parkmöglichkeiten gibt."
              spacing="wide"
              alignment="center"
              className="text-[#5f5f5f]"
              buttons={[
                {
                    text: "Das Museum auf Google Maps",
                    url: "https://www.google.com/maps/place/Museum+f%C3%BCr+Naturkunde+Berlin/@52.521666,13.396666,17z/data=!3m1!4b1!4m6!3m5!1s0x47a851c79659d299:0x4f8747d2187d277d!8m2!3d52.521666!4d13.399151!16s%2Fg%2F11c48yq34j",
                    variant: "plain"
                }
              ]}
            />
          </div>

          <Accordion bgColor="white" defaultOpenIndex={0}>
            <AccordionItem title="Mit Bus & Bahn">
              <div className="p-5 font-bold">
                <p>U-Naturkundemuseum (
                  <svg className="inline px-[0.1em] h-[15px] w-[24px] m-0 mt-[-3px]" aria-label="U-Bahnlinie 6">
                    <use href={withPrefix("/images/transport-icons3.svg?v=1#bvg-u6")} />
                  </svg>
                  <svg className="inline px-[0.1em] h-[15px] w-[26px] m-0 mt-[-3px]" aria-label="Tramlinie M5">
                        <use href={withPrefix("/images/transport-icons3.svg?v=1#bvg-m5")} />
                  </svg>
                  <svg className="inline px-[0.1em] h-[15px] w-[26px] m-0 mt-[-3px]" aria-label="Tramlinie M8">
                    <use href={withPrefix("/images/transport-icons3.svg?v=1#bvg-m8")} />
                  </svg>
                  <svg className="inline px-[0.1em] h-[15px] w-[33px] m-0 mt-[-3px]" aria-label="Tramlinie M10">
                    <use href={withPrefix("/images/transport-icons3.svg?v=1#bvg-m10")} />
                  </svg>
                  <svg className="inline px-[0.1em] h-[15px] w-[33px] m-0 mt-[-3px]" aria-label="Tramlinie M12">
                    <use href={withPrefix("/images/transport-icons3.svg?v=1#bvg-m12")} />
                  </svg>
                  <svg className="inline px-[0.1em] h-[24px] w-[20px] m-0 mt-[-3px]" aria-label="Buslinien">
                    <use href={withPrefix("/images/transport-icons3.svg?v=1#bvg-bus")} />
                  </svg>
                  <span className="text-xs font-normal text-Black-700"> 245 N40 </span>
                  )<span className="font-italic text-Black-500">
                    <svg className="inline px-[0.1em] h-[18px] mt-[-4px] w-[24px] opacity-50 m-0" aria-label="Person Walking">
                      <use href={withPrefix("/images/transport-icons3.svg?v=1#person-walking")} />
                    </svg>300m Fußweg</span></p>
                <br />

                <p>S-Hauptbahnhof (
                  <svg className="inline px-[0.1em] h-[15px] m-0 w-[28px] mt-[-3px]" aria-label="S-Bahnlinie 5">
                    <use href={withPrefix("/images/transport-icons3.svg?v=1#bvg-s5")} />
                  </svg>
                  <svg className="inline px-[0.1em] h-[15px] m-0 w-[28px] mt-[-3px]" aria-label="S-Bahnlinie 7">
                    <use href={withPrefix("/images/transport-icons3.svg?v=1#bvg-s7")} />
                  </svg>
                  )<span className="font-italic text-Black-500">
                    <svg className="inline px-[0.1em] h-[18px] w-[24px] mt-[-4px] opacity-50 m-0" aria-label="Person Walking">
                      <use href={withPrefix("/images/transport-icons3.svg?v=1#person-walking")} />
                    </svg>1.300m Fußweg</span></p>
                <br />

                <p>S-Nordbahnhof (
                  <svg className="inline px-[0.1em] h-[15px] w-[28px] m-0 mt-[-3px]" aria-label="S-Bahnlinie 1">
                    <use href={withPrefix("/images/transport-icons3.svg?v=1#bvg-s1")} />
                  </svg>
                  <svg className="inline px-[0.1em] h-[15px] w-[28px] m-0 mt-[-3px]" aria-label="S-Bahnlinie 2">
                    <use href={withPrefix("/images/transport-icons3.svg?v=1#bvg-s2")} />
                  </svg>
                  )<span className="font-italic text-Black-500">
                    <svg className="inline px-[0.1em] h-[18px] w-[24px] mt-[-4px] opacity-50 m-0" aria-label="Person Walking">
                      <use href={withPrefix("/images/transport-icons3.svg?v=1#person-walking")} />
                    </svg>900m Fußweg</span></p>
                <br />

                <p>Invalidenpark (
                  <svg className="inline px-[0.1em] h-[24px] w-[20px] m-0 mt-[-3px]" aria-label="Buslinien">
                    <use href={withPrefix("/images/transport-icons3.svg?v=1#bvg-bus")} />
                  </svg>
                  <span className="text-xs font-normal text-Black-700"> 120 123 142 245 N20 N40 </span>
                  )<span className="font-italic text-Black-500">
                    <svg className="inline px-[0.1em] h-[18px] w-[24px] mt-[-4px] opacity-50 m-0" aria-label="Person Walking">
                      <use href={withPrefix("/images/transport-icons3.svg?v=1#person-walking")} />
                    </svg>300m Fußweg</span></p>
                <br />
              </div>
            </AccordionItem>
            <AccordionItem title="Mit Fahrrad">
              <div className="p-5">
                <p>
                  Sie können das Museum auch bequem über die Invalidenstraße mit dem Fahrrad erreichen.<br/>
                  <br/>
                  Wir bieten ausreichend Stellplätze für Fahrräder vor Ort. So tragen Sie nicht nur zur Umwelt bei, sondern können Ihre Anreise flexibel und aktiv gestalten. Zusätzlich stehen Ihnen im Museum Garderobenfächer zur Verfügung, in denen Sie Ihre Fahrradutensilien sicher verstauen können.<br/>
                  <br/>
                  Am benachbarten Bundesministerium für Digitales und Verkehr gibt es eine elektrische Fahrradpumpe, die Sie rund um die Uhr kostenfrei nutzen können.
                </p>
              </div>
            </AccordionItem>
            <AccordionItem title="Mit Auto">
              <div className="p-5">
                <p>
                  Am Museum für Naturkunde gibt es keine Parkmöglichkeiten.<br/>
                  <br/>
                  Parkplätze und Parkhäuser im Umkreis:
                </p>
                <div className="p-5">
                  <div className="flex flex-col gap-6">
                    <ul className="flex flex-col gap-4 list-disc pl-4">
                      <li>
                        <div className="flex justify-between items-baseline">
                          <p className="flex-1 pr-8">
                            <a href="https://www.google.de/maps/place/Invalidenstra%C3%9Fe+38,+10115+Berlin/@52.5306377,13.3792736,17z/data=!3m1!4b1!4m5!3m4!1s0x47a851ecba0e90d1:0xab7167f4ea5dd8b9!8m2!3d52.5306377!4d13.3814623" className="underline">Mercure Hotel Berlin City</a>, Invalidenstraße 38, 10115 Berlin, kostenpflichtig, <span className="font-italic text-Black-500">
                              <svg className="inline px-[0.1em] h-[18px] w-[24px] mt-[-4px] opacity-50 m-0" aria-label="Person Walking">
                                <use href={withPrefix("/images/transport-icons3.svg?v=1#person-walking")} />
                              </svg>200m Fußweg</span>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="flex justify-between items-baseline">
                          <p className="flex-1 pr-8">
                            <a href="https://www.google.de/maps/place/Chausseestra%C3%9Fe+118,+10115+Berlin/@52.529593,13.3818876,17z/data=!3m1!4b1!4m5!3m4!1s0x47a851ec7dc000d7:0x506c4690a67db5eb!8m2!3d52.5295898!4d13.3840763" className="underline">H+ Hotel Berlin Mitte / Rewe</a>, Chausseestraße 118-120, 10115 Berlin, kostenpflichtig, <span className="font-italic text-Black-500">
                              <svg className="inline px-[0.1em] h-[18px] w-[24px] mt-[-4px] opacity-50 m-0" aria-label="Person Walking">
                                <use href={withPrefix("/images/transport-icons3.svg?v=1#person-walking")} />
                              </svg>350m Fußweg</span>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
               </div>
              </div>
            </AccordionItem>
            <AccordionItem title="Barrierefreier Zugang">
              <div className="p-5">
                <p>Der barrierefreie Eingang befindet sich rechts neben dem Hauptportal. Gegenüber gibt es drei Behindertenparkplätze. <br/><br/>
                <strong>Bitte beachten Sie:</strong> die Behindertenparkplätze sind aufgrund von Baumaßnahmen am Nachbargebäude zur Zeit nicht zugänglich. Wir bitten um Verständis!<br/><br/>
                Die Garderoben, das barrierefreie WC und die Ausstellungsebene sind von diesem Eingang mit einem Fahrstuhl oder Treppenlift erreichbar. <a href="https://www.museumfuernaturkunde.berlin/de/museum/besuch-planen/barrierefreiheit" className="underline">Mehr Infos</a></p>
              </div>
            </AccordionItem>
          </Accordion>
        </Section>
        <Section columns={1} backgroundColor="bg-white" padding="pb-4 pt-16">
          <CardText
            headline="Im Museum"
            headlineStyle="h1"
            body="Wir heißen alle Besuchenden herzlich willkommen! In unseren Ausstellungen erhalten Sie Einblicke in die aktuelle Forschung des Museums – anhand originaler Forschungsobjekte! Statt auf vorgegebenen Wegen erkunden Sie die gigantischen Abenteuer der Natur auf einer eigenen Forschungsreise und erleben Evolution in Aktion.
            <br/><br/>Mehr zu unserer <a href='/de/museum/besuch-planen/besuchendenordnung' className='underline'>Besuchendenordnung</a>, unserer <a href='de/ueber-uns/das-museum/gemeinsam-gegen-diskriminierung-vorurteile-und-rassismus' className='underline'>Haltung gegen Diskriminierung, Vorurteile und Rassismus</a> und unseren <a href='/de/museum/besuch-planen/fotografieren-und-filmaufnahmen' className='underline'>Regeln für Film- und Foto-Aufnahmen</a>."
            spacing="wide"
            alignment="center"
          />
          <br/><br/>

          <Slideshow imageMap={imageMap}>
            <SlideContent
              imageName="zv_1200x675_WEBSEITE_0.jpg"
              title="ZUGvögel"
              kicker="Unsere Ausstellungen"
              link="/museum/ausstellungen/zugvoegel"
              altText="Zugvögel"
            />
            <SlideContent
              imageName="zp_1200x675_WEBSEITE.jpg"
              title="Zukunftsplan"
              kicker="Unsere Ausstellungen"
              link="/museum/ausstellungen/zukunftsplan"
              altText="Zukunftsplan"
            />
            <SlideContent
              imageName="1200x800_0.jpg"
              title="Dinosaurier!"
              kicker="Unsere Ausstellungen"
              link="/museum/ausstellungen/dinosaurier-zeitalter-der-riesenechsen"
              altText="Dinosaurier! Zeitalter der Riesenechsen"
            />
            <SlideContent
              imageName="digitize_webseite_V2_1200x800_Live Science.jpg"
              title="digitize!"
              kicker="Unsere Ausstellungen"
              link="/museum/ausstellungen/digitize"
              altText="digitize! Live Science"
            />
            <SlideContent
              imageName="sauriersaal_04_c_carola-radke-mfn.jpg"
              title="Saurierwelt"
              kicker="Unsere Ausstellungen"
              link="/museum/ausstellungen/saurierwelt"
              altText="Saurierskelette im Sauriersaal"
            />
            <SlideContent
              imageName="system_erde_02_c_carola-radke_mfn.jpg"
              title="System Erde"
              kicker="Unsere Ausstellungen"
              link="/museum/ausstellungen/system-erde"
              altText="Der Multimedia-Globus im Museum für Naturkunde Berlin"
            />
            <SlideContent
              imageName="kosmos_saal_c_hwa-ja-goetz-mfn.jpg"
              title="Kosmos und Sonnensystem"
              kicker="Unsere Ausstellungen"
              link="/museum/ausstellungen/kosmos-und-sonnensystem"
              altText="Besucher schauen liegend in Projektionshimmel im Museum für Naturkunde Berlin"
            />
            <SlideContent
              imageName="biodivwand_c_carola-radke-mfn.jpg"
              title="Evolution in Aktion"
              kicker="Unsere Ausstellungen"
              link="/museum/ausstellungen/evolution-aktion"
              altText="Die Biodiversitätswand im Museum für Naturkunde Berlin"
            />
            <SlideContent
              imageName="101028_nasssammlung_02_c_carola-radke-mfn.jpg"
              title="Nass-Sammlung"
              kicker="Unsere Ausstellungen"
              link="/museum/ausstellungen/nass-sammlung"
              altText="Hohe Regale mit Tierpräparaten in der Nass-Sammlung"
            />
            <SlideContent
              imageName="130220_kellermodell_floh_c_carola-radke_mfn.jpg"
              title="Kellers Insektenmodelle"
              kicker="Unsere Ausstellungen"
              link="/museum/ausstellungen/kellers-insektenmodelle"
              altText="Modell eines Flohs"
            />
            <SlideContent
              imageName="2015_bobby_c_carola-radke_mfn_0.jpg"
              title="Highlights der Präparationskunst"
              kicker="Unsere Ausstellungen"
              link="/museum/ausstellungen/highlights-der-praeparationskunst"
              altText="Das Gesicht des Gorillas Bobby, dahinter das Präparat einer Riesen-Elanantilope"
            />
            <SlideContent
              imageName="110919_mineraliensaal_13_c_hwa-ja-goetz-mfn.jpg"
              title="Mineralien"
              kicker="Unsere Ausstellungen"
              link="/museum/ausstellungen/mineralien"
              altText="Schaukästen mit Mineralien im Mineraliensaal"
            />
            <SlideContent
              imageName="humboldt-intervention-museum-fuer-naturkunde-berlin.jpg"
              title="Humboldt-Intervention"
              kicker="Unsere Ausstellungen"
              link="/museum/ausstellungen/humboldt-intervention"
              altText="Plakate der Humboldt-Intervention zwischen und über den Schaukästen im Mineraliensaal"
            />
            <SlideContent
              imageName="100423_parasiten_03_c_hwaja-goetz_mfn_0.jpg"
              title="Wanderausstellungen"
              kicker="Unsere Ausstellungen"
              link="/museum/wanderausstellungen"
              altText="Das Foto zeigt einen präparierten Springbock mit Madenhacker"
            />
            <SlideContent
              imageName="federband_c_hwaja-goetz_mfn.jpg"
              title="Archiv: Sonderausstellungen"
              kicker="Unsere Ausstellungen"
              link="/museum/ausstellungen/archiv-sonderausstellungen"
              altText="Federband aus verschiedenfarbigen Federn"
            />
          </Slideshow>
        </Section>
        <Section backgroundColor="bg-white" padding="py-0 gap-0 pb-16">
          <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="sm:col-span-2 lg:col-span-2">
              <Card
                variant="classic"
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
                url="/de/mitmachen/veranstaltungen"
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
                  alt: "Garderobe",
                  imageMap: imageMap,
                  className: "w-full h-auto object-cover"
                }}
                textProps={{
                  headline: "Garderobe",
                  spacing: "tight",
                  headlineStyle: "h3"
                }}
                url="/de/museum/besuch-planen"
              />
            </div>

            <div className="sm:col-span-1 lg:col-span-1">
              <Card
                variant="classic"
                imageProps={{
                  imageName: "230713-Museumscafe_15_web__(c)_Hwa_Ja-Götz.jpg",
                  alt: "Cafeteria",
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
            <div className="sm:col-span-1 lg:col-span-1">
              <Card
                variant="classic"
                imageProps={{
                  imageName: "299980239_448016240677212_6197202936618778314_n.jpg",
                  alt: "Bücher füllen die Regale im Museumsshop. Credits: Humboldt-Innovation GmbH",
                  imageMap: imageMap,
                  className: "w-full h-auto object-cover"
                }}
                textProps={{
                  headline: "Museums-Shop",
                  headlineStyle: "h3",
                  spacing: "wide"
                }}
                url="https://www.naturkundemuseum-shop.de"
              />
            </div>
          </div>
        </Section>
        <Section columns={1} backgroundColor="bg-Green-100" padding="pt-16 pb-0">
          <CardText
            headline="Besondere Besuche"
            headlineStyle="h1"
            body="Wir freuen uns, wenn Sie in Gruppen und zu besonderen Anlässen zu uns kommen. Alle Bildungsangebote"
            spacing="wide"
            alignment="center"
          />
        </Section>
        <Section columns={4} backgroundColor="bg-Green-100">
          <Card
            variant="classic"
            imageProps={{
              imageName: "160222_Schueler_Fuehrung_System_Erde_07__(c)_Hwa-Ja_Goetz_MfN.jpg",
              alt: "Schülerinnen und Schüler entdecken Objekte in den Ausstellungsvitrinen. | Bildquelle: Museum für Naturkunde Berlin",
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
              alt: "Another Image",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "Gruppen",
              headlineStyle: "h3",
              spacing: "wide"
            }}
            url="/de/museum/bildung/fuehrungen"
          />
        </Section>
        <Section columns={2} backgroundColor="bg-white" gapClass="gap-36" justifyContent="center">

          <CardText
            headline="Oft gestellte Fragen"
            headlineStyle="h1"
            body="Uns erreichen viele Fragen rund um den Besuch des Museums. Hier geben wir Antworten auf die meistgestellten. Wenn Sie eine andere Frage haben, kontaktieren Sie uns gern!"
            spacing="wide"
            alignment="center"
            className="text-[#5f5f5f]"
            buttons={[
              {
                  text: "Mehr häufig gestellte Fragen",
                  url: "/de/museum/besuch-planen/faq",
                  variant: "plain"
              }
            ]}
          />


          <Accordion bgColor="green">
            <AccordionItem title="Wo erhalte ich die Tickets?">
              <div className="p-5">
                <p>
                  Sie können Online-Tickets <a href="https://ticketshop.museumfuernaturkunde.berlin" className="underline">hier</a> oder vor Ort an der Museumskasse kaufen. 
                  <br/><br/>
                  Wir empfehlen die Buchung von Online-Zeitfenstertickets im Vorfeld um 
                  Wartezeiten an der Kasse zu vermeiden. Die Tickets sind 14 Tage im Voraus 
                  buchbar.
                  <br/><br/>
                  Ein Zeitfensterticket berechtigt Sie zum Eintritt in das Museum innerhalb von 
                  einer Stunde, ab der gebuchten Uhrzeit. Danach können Sie sich im Rahmen 
                  unserer Öffnungszeiten unbegrenzt im Museum aufhalten.
                  <br/><br/>
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
                <p>Ja. Wir bieten einen kostenfreien digitalen Guide für Ihr eigenes Smartphone an. 
                Diesen gibt es in 11 Sprachen. Es gibt außerdem einen Audioguide für Kinder und
                eine Highlight-Tour für Gehörlose in deutscher Gebärdensprache (DGS).
                <br/><br/>
                Außerdem bieten wir zwei Audio Guides mit thematischen Schwerpunkten an, um
                die Ausstellung und Objekte durch eine zusätzliche Perspektive erfahrbar zu 
                machen.
                <br/><br/>
                <a href="https://www.museumfuernaturkunde.berlin/de/museum/besuch-planen/digital-guide" className="underline">Hier</a> finden Sie weitere Informationen.
                <br/><br/>
                Für die Nutzung des Audioguides empfehlen wir Ihnen eigene Kopfhörer mitzubringen.
                </p>
              </div>
            </AccordionItem>
            <AccordionItem title="Darf ich im Museum fotografieren?">
              <div className="p-5">
                <p>Das Fotografieren für private Zwecke ist im Museum erlaubt. Für kommerzielle Zwecke benötigen Sie eine Genehmigung. Mehr Infos <a href="https://www.museumfuernaturkunde.berlin/de/museum/besuch-planen/fotografieren-und-filmaufnahmen" className="underline">hier</a>.</p>
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
            <AccordionItem title="Kann ich im Museum Fotos machen?">
              <div className="p-5">
                <p>Ja, das Fotografieren für den persönlichen Gebrauch ist erlaubt, solange Sie keinen Blitz verwenden. Professionelle Foto- und Filmaufnahmen sind nur nach vorheriger Genehmigung gestattet. Bitte achten Sie darauf, die anderen Besucher nicht zu stören.</p>
              </div>
            </AccordionItem>
          </Accordion>
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
            <Button 
              text="Stellen Sie uns eine Frage" 
              variant="primary"
              url="/contact"
            />
            <Button 
              text="Rufen Sie uns an" 
              variant="primary"
              url="/phone"
            />
            <Button 
              text="Besuchen Sie uns im Museum" 
              variant="primary"
              url="/visit"
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
