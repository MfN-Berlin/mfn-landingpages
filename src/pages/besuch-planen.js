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
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen p-0 bg-Black-000">
        <Section backgroundColor="bg-Black-000" padding="pt-8 pb-0">
          <AccessibilityNav currentPage="Besuch planen" />
        </Section>
        <Section backgroundColor="bg-white" gapClass="gap-20 xl:gap-36">
          <StoryTime
            imageProps={{
              imageName: "171030_naturkunde_336_c_Thomas Rosenthal, MfN.jpg",
              alt: "Story Time Background",
              imageMap: imageMap,
              className: "w-full h-full object-cover"
            }}
            textProps={{
              kicker: "Einfach, Schnell und unkompliziert",
              headline: "Planen Sie Ihren Besuch",
              body: "Hier finden Sie alle Informationen, die Sie für Ihren Besuch im Naturkundemuseum benötigen.<br/><br/>Tickets   Anfahrt   Ausstellungen   Digitale Angebote   Bildungsangebote   Service",
              headlineStyle: "h1",
              spacing: "wide",
              alignment: "center"
            }}
            linkUrl="/stories"
            className="h-96"
            imagePosition="right"
            linkText="Zum Ticket Shop"
          />

        </Section>
        <Section columns={2} backgroundColor="bg-Green-100" gapClass="gap-20 xl:gap-36">
          <CardText
            headline="Öffnungszeiten"
            headlineStyle="h1"
            body="Das Museum öffnet täglich bis 18 Uhr. Montags ist das Museum geschlossen. Letzter Einlass ist 30 Minuten vor Schluss.<br/><br/><span className='font-bold'>Info:</span> Am 3.Oktober 2024 öffnet das Museum von 10:00 bis 18:00.<br/><br/><a href='#'>Genauer Plan mit Sonderöffnungszeiten</a>."
            spacing="wide"
            alignment="center" // Center-aligned text
          />
          <Accordion bgColor="white">

            <OpenToday />

            <AccordionSpacer>
              <div className="p-0 flex flex-col justify-center items-center gap-0">
                <div className="text-center text-Green-600 typography-kicker">
                  Dienstag, Mittwoch, Donnerstag, Freitag
                </div>
                <div className="text-center text-Black-900 typography-h1 text-[34px]">
                  09:30 <span className="font-extrabold">–</span> 18:00
                </div>
              </div>
            </AccordionSpacer>

            <AccordionSpacer>
              <div className="p-0 flex flex-col justify-center items-center gap-0">
                <div className="text-center text-Green-600 typography-kicker">
                  Samstag, Sonntag, und an <span className="underline">Feiertagen</span>
                </div>
                <div className="text-center text-Black-900 typography-h1 text-[34px]">
                  10:00 – 18:00
                </div>
              </div>
            </AccordionSpacer>

            <AccordionSpacer>
              <div className="p-0 flex flex-col justify-center items-center gap-0">
                <div className="text-center text-Green-600 typography-kicker">
                  MONTAGS
                </div>
                <div className="text-center text-Black-900 typography-h1 text-[34px]">
                  geschlossen
                </div>
              </div>
            </AccordionSpacer>

          </Accordion>

        </Section>
        <Section columns={2} backgroundColor="bg-white" gapClass="gap-20 xl:gap-36">
          <div className="flex -mt-40 flex-col justify-center items-center gap-20">
            <div className="flex items-center justify-center w-[166px] h-[166px] p-4 rotate-[7deg] bg-Yellow rounded-full shadow-lg">
              <p className="typography-p text-center text-black">
                Am ersten Sonntag des Monats ist der <strong>Eintritt frei!</strong>
              </p>
            </div>
            <CardText
              headline="Tickets & Preise"
              headlineStyle="h1"
              body="Tickets können vor Ort und im <a href='#'>Onlineshop</a> gekauft werden. Wir empfehlen die Buchung von <a href='#'> Online-Zeitfenstertickets</a> im Vorfeld um Wartezeiten an der Kasse zu vermeiden. <br/><br/><a href='#'>Sonderpreise, Vergünstigungen und Bedingungen</a>."
              spacing="wide"
              alignment="center" // Center-aligned text
            />

          </div>
          <Accordion bgColor="green" defaultOpenIndex={0}>
            <AccordionItem title="Einzeltickets" >
              <div className="flex flex-col items-end justify-start w-full px-4 pb-4 gap-2.5">
                <div className="flex justify-between items-baseline gap-2.5 w-full">
                  <div className="typography-h3 text-Black-700 flex-1">
                    Erwachsene
                  </div>
                  <div className="w-[125px] text-right typography-h2 text-Black-900">
                    11,00€
                  </div>
                </div>
                <div className="flex justify-between items-baseline gap-2.5 w-full">
                  <div className="typography-h3 text-Black-700 flex-1">
                    Kinder ab 6
                  </div>
                  <div className="w-[125px] text-right typography-h2 text-Black-900">
                    5,00€
                  </div>
                </div>
              </div>

            </AccordionItem>
            <AccordionItem title="Gruppentickets" >
              <div className="p-5">
                <ul className="flex flex-col gap-4 list-disc pl-4">
                  <li className="display-list-item">
                    <div className="flex justify-between items-baseline">
                      <div className="flex-1 font-p pr-8">
                        Familien (zwei Erwachsene mit bis zu drei Kindern unter 14 Jahre)
                      </div>
                      <div className="font-p font-bold whitespace-nowrap">
                        18,00 €
                      </div>
                    </div>
                  </li>
                  <li className="display-list-item">
                    <div className="flex justify-between items-baseline">
                      <div className="flex-1 font-p pr-8">
                        Mini-Familien (eine erwachsene Person mit bis zu zwei Kindern unter 14 Jahre)
                      </div>
                      <div className="font-p font-bold whitespace-nowrap">
                        12,00 €
                      </div>
                    </div>
                  </li>
                  <li className="display-list-item">
                    <div className="flex justify-between items-baseline">
                      <div className="flex-1 font-p pr-8">
                        Erwachsene in Gruppen ab 10 Personen
                      </div>
                      <div className="font-p font-bold whitespace-nowrap">
                        8,00 €
                      </div>
                    </div>
                  </li>
                  <li className="display-list-item">
                    <div className="flex justify-between items-baseline">
                      <div className="flex-1 font-p pr-8">
                        Ermäßigte in Gruppen ab 10 Personen
                      </div>
                      <div className="font-p font-bold whitespace-nowrap">
                        2,00 €
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </AccordionItem>
            <AccordionItem title="Jahreskarten" >
              <div className="p-5">
                <div className="flex flex-col gap-6">
                  <ul className="flex flex-col gap-4 list-disc pl-4">
                    <li className="display-list-item">
                      <div className="flex justify-between items-baseline">
                        <div className="flex-1 font-p pr-8">
                          Erwachsene
                        </div>
                        <div className="font-p font-bold whitespace-nowrap">
                          35,00 €
                        </div>
                      </div>
                    </li>
                    <li className="display-list-item">
                      <div className="flex justify-between items-baseline">
                        <div className="flex-1 font-p pr-8">
                          Ermäßigte
                        </div>
                        <div className="font-p font-bold whitespace-nowrap">
                          23,00 €
                        </div>
                      </div>
                    </li>
                    <li className="display-list-item">
                      <div className="flex justify-between items-baseline">
                        <div className="flex-1 font-p pr-8">
                          Familien (zwei Erwachsene mit bis zu drei Kindern unter 14 Jahre)
                        </div>
                        <div className="font-p font-bold whitespace-nowrap">
                          65,00 €
                        </div>
                      </div>
                    </li>
                    <li className="display-list-item">
                      <div className="flex justify-between items-baseline">
                        <div className="flex-1 font-p pr-8">
                          Mini-Familien (eine erwachsene Person mit bis zu zwei Kindern unter 14 Jahre)
                        </div>
                        <div className="font-p font-bold whitespace-nowrap">
                          38,00 €
                        </div>
                      </div>
                    </li>
                  </ul>

                  <p className="font-p">
                    Laden Sie sich das <a href="#" className="underline">Anmeldeformular</a> herunter und beantragen Sie Ihre Jahreskarte noch heute. Senden Sie das ausgefüllte Formular gerne per E-Mail an <a href="mailto:info@mfn.berlin" className="underline">info@mfn.berlin</a>.
                  </p>
                </div>
              </div>
            </AccordionItem>
            <AccordionItem title="Ermäßigungen" >
              <div className="p-5">
                <div className="flex flex-col gap-6">
                  <p className="font-p">
                    Folgende Personen erhalten, ggf. mit entsprechendem Nachweis, ermäßigten Eintritt:
                  </p>

                  <ul className="flex flex-col gap-4 list-disc pl-4">
                    <li className="display-list-item">
                      <div className="flex justify-between items-baseline">
                        <div className="flex-1 font-p pr-8">
                          Schülerinnen und Schüler ab 16 Jahre mit Schüler:innenausweis
                        </div>
                      </div>
                    </li>
                    <li className="display-list-item">
                      <div className="flex justify-between items-baseline">
                        <div className="flex-1 font-p pr-8">
                          Studierende
                        </div>
                      </div>
                    </li>
                    <li className="display-list-item">
                      <div className="flex justify-between items-baseline">
                        <div className="flex-1 font-p pr-8">
                          Auszubildende
                        </div>
                      </div>
                    </li>
                    <li className="display-list-item">
                      <div className="flex justify-between items-baseline">
                        <div className="flex-1 font-p pr-8">
                          Rentnerinnen und Rentner
                        </div>
                      </div>
                    </li>
                    <li className="display-list-item">
                      <div className="flex justify-between items-baseline">
                        <div className="flex-1 font-p pr-8">
                          Sozialhilfeempfangende
                        </div>
                      </div>
                    </li>
                    <li className="display-list-item">
                      <div className="flex justify-between items-baseline">
                        <div className="flex-1 font-p pr-8">
                          Erwerbslose
                        </div>
                      </div>
                    </li>
                    <li className="display-list-item">
                      <div className="flex justify-between items-baseline">
                        <div className="flex-1 font-p pr-8">
                          Teilnehmende an Freiwilligendiensten und bei Vorlage der Ehrenamtskarte
                        </div>
                      </div>
                    </li>
                    <li className="display-list-item">
                      <div className="flex justify-between items-baseline">
                        <div className="flex-1 font-p pr-8">
                          Schwerbehinderte (ab GdB 50) mit entsprechendem amtlichen Nachweis
                        </div>
                      </div>
                    </li>
                  </ul>

                  <p className="font-p">
                    Sie erhalten Ermäßigung mit dem Museumspass Berlin, der Welcome Card Berlin und einer Eintrittskarte des Deutschen Technikmuseums. <a href="#" className="underline">Mehr Infos zu Kooperationen</a>
                  </p>
                </div>
              </div>
            </AccordionItem>
            <AccordionItem title="Freier Eintritt" >
              <div className="p-5">
                <div className="flex flex-col gap-6">
                  <ul className="flex flex-col gap-4 list-disc pl-4">
                    <li className="display-list-item">
                      <div className="flex justify-between items-baseline">
                        <div className="flex-1 font-p pr-8">
                          Vorschulkinder, Kinder unter 6 Jahren
                        </div>
                      </div>
                    </li>
                    <li className="display-list-item">
                      <div className="flex justify-between items-baseline">
                        <div className="flex-1 font-p pr-8">
                          bis zu zwei Lehrkräfte, Erzieherinnen oder Erzieher, die eine Schulklasse, Kinder- oder Jugendgruppe begleiten
                        </div>
                      </div>
                    </li>
                    <li className="display-list-item">
                      <div className="flex justify-between items-baseline">
                        <div className="flex-1 font-p pr-8">
                          ICOM-Mitglieder und Mitgliederinnen (Internationaler Museumsrat, International Council of Museums)
                        </div>
                      </div>
                    </li>
                    <li className="display-list-item">
                      <div className="flex justify-between items-baseline">
                        <div className="flex-1 font-p pr-8">
                          Mitglieder und Mitgliederinnen der WFTGA (the World Federation of Tourist Guide Associations)
                        </div>
                      </div>
                    </li>
                    <li className="display-list-item">
                      <div className="flex justify-between items-baseline">
                        <div className="flex-1 font-p pr-8">
                          Inhabende einer Mitgliedskarte des Deutschen Museumsbundes
                        </div>
                      </div>
                    </li>
                    <li className="display-list-item">
                      <div className="flex justify-between items-baseline">
                        <div className="flex-1 font-p pr-8">
                          Angemeldete Gruppen von Studierenden der Berliner Universitäten und Hochschulen, die im Rahmen einer Lehrveranstaltung das Museum besuchen
                        </div>
                      </div>
                    </li>
                    <li className="display-list-item">
                      <div className="flex justify-between items-baseline">
                        <div className="flex-1 font-p pr-8">
                          Inhabende eines gültigen Presseausweises
                        </div>
                      </div>
                    </li>
                    <li className="display-list-item">
                      <div className="flex justify-between items-baseline">
                        <div className="flex-1 font-p pr-8">
                          Beschäftigte anderer Berliner Museen, die sich als solche ausweisen
                        </div>
                      </div>
                    </li>
                    <li className="display-list-item">
                      <div className="flex justify-between items-baseline">
                        <div className="flex-1 font-p pr-8">
                          im Schwerbehindertenausweis eingetragene Begleitpersonen von Schwerbehinderten
                        </div>
                      </div>
                    </li>
                    <li className="display-list-item">
                      <div className="flex justify-between items-baseline">
                        <div className="flex-1 font-p pr-8">
                          Geflüchtete und Willkommensklassen, die sich als solche ausweisen
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </AccordionItem>

          </Accordion>

        </Section>

        <Section columns={2} backgroundColor="bg-[#f7f9f0]" padding="py-[75px]" gapClass="gap-36">
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
              body="Schön, dass Sie vorbeikommen! Das Museum für Naturkunde liegt in Berlin-Mitte. Wir empfehlen daher die Anreise mit öffentlichen Verkehrsmitteln, da es am Museum keine und im Umkreis nur begrenzte Parkmöglichkeiten gibt.<br/><br/> <a href='#' className='underline'>Das Museum auf Google Maps</a><br/><a href='#' className='underline'>Mehr Infos zur Anfahrt</a>"
              spacing="wide"
              alignment="center"
              className="text-[#5f5f5f]"
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
                    </svg>300m</span></p>
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
                    </svg>1.300m</span></p>
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
                    </svg>900m</span></p>
                <br />

                <p>Invalidenpark (
                  <svg className="inline px-[0.1em] h-[24px] w-[20px] m-0 mt-[-3px]" aria-label="Buslinien">
                    <use href={withPrefix("/images/transport-icons3.svg?v=1#bvg-bus")} />
                  </svg>
                  <span className="text-xs font-normal text-Black-700"> 120 123 142 245 N20 N40 </span>
                  )<span className="font-italic text-Black-500">
                    <svg className="inline px-[0.1em] h-[18px] w-[24px] mt-[-4px] opacity-50 m-0" aria-label="Person Walking">
                      <use href={withPrefix("/images/transport-icons3.svg?v=1#person-walking")} />
                    </svg>300m</span></p>
                <br />
              </div>
            </AccordionItem>
            <AccordionItem title="Mit dem Fahrrad">
              <div className="p-5">
                <p>Content for Fahrrad</p>
              </div>
            </AccordionItem>
            <AccordionItem title="Mit dem Auto">
              <div className="p-5">
                <p>Content for Auto</p>
              </div>
            </AccordionItem>
            <AccordionItem title="Barrierefreier Zugang">
              <div className="p-5">
                <p>Content for Barrierefreier Zugang</p>
              </div>
            </AccordionItem>
          </Accordion>
        </Section>
        <Section columns={1} backgroundColor="bg-white" padding="pb-4 pt-16">
          <CardText
            headline="Ausstellung geöffnet – mit Online-Ticket"
            headlineStyle="h1"
            body="Durch die Digitalisierung der rund 30 Millionen Objekte des Museums für Naturkunde Berlin wird künftig jede und jeder die Chance haben, unser Wissen über Natur für eine nachhaltigere und lebenswertere Welt zu nutzen.<br><br>Mehr Informationen <a href='#'>hier</a>."
            spacing="wide"
            alignment="center"
          />

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
                  imageName: "bearb_140926_Science_Slam_077__┬®_Carola-Radke_MfN.jpg",
                  alt: "Veranstaltungen",
                  imageMap: imageMap,
                  className: "w-full h-auto object-cover"
                }}
                textProps={{
                  headline: "Veranstaltungen",
                  spacing: "regular",
                  headlineStyle: "h3"
                }}
                url="/large-card-page"
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
                url="/small-card-1-page"
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
                url="/small-card-2-page"
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
                url="/classic-card-page"
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
                url="/flat-card-page"
              />
            </div>
            <div className="sm:col-span-1 lg:col-span-1">
              <Card
                variant="classic"
                imageProps={{
                  imageName: "299980239_448016240677212_6197202936618778314_n.jpg",
                  alt: "Museums-Shop",
                  imageMap: imageMap,
                  className: "w-full h-auto object-cover"
                }}
                textProps={{
                  headline: "Museums-Shop",
                  headlineStyle: "h3",
                  spacing: "wide"
                }}
                url="/flat-card-page"
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
              imageName: "Nasssammlung (c) Thomas Rosenthal_0.jpg",
              alt: "Another Image",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "Schulklassen",
              headlineStyle: "h3",
              spacing: "wide"
            }}
            url="/flat-card-page"
          />
          <Card
            variant="classic"
            imageProps={{
              imageName: "Digitize_Museum für Naturkunde (c) Thomas Rosenthal 14_1200x800.jpg",
              alt: "Another Image",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "Fachbesuche",
              headlineStyle: "h3",
              spacing: "wide"
            }}
            url="/flat-card-page"
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
              headline: "Kinder-Geburtstage",
              headlineStyle: "h3",
              spacing: "wide"
            }}
            url="/flat-card-page"
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
            url="/flat-card-page"
          />
        </Section>
        <Section columns={2} backgroundColor="bg-white" gapClass="gap-36">

          <CardText
            headline="Oft gestellte Fragen"
            headlineStyle="h1"
            body="Uns erreichen viele Fragen rund um den Besuch des Museums. Hier geben wir Antworten auf die meistgestellten. Wenn Sie eine andere Frage haben, kontaktieren Sie uns gern! Mehr häufig gestellte Fragen"
            spacing="wide"
            alignment="center"
            className="text-[#5f5f5f]"
          />


          <Accordion bgColor="green">
            <AccordionItem title="Wie erhalte ich ein Ticket?">
              <div className="p-5">
                <p>Tickets können Sie bequem online über unsere offizielle Website kaufen. Alternativ können Sie Tickets auch direkt an der Museumskasse erwerben. Es wird empfohlen, Tickets im Voraus online zu kaufen, um Wartezeiten zu vermeiden.</p>
              </div>
            </AccordionItem>
            <AccordionItem title="Wie lange muss ich am Eingang warten?">
              <div className="p-5">
                <p>Die Wartezeit kann je nach Besucheraufkommen variieren. Wenn Sie Ihr Ticket im Voraus online gekauft haben, können Sie direkt zum Einlass gehen. Zu Stoßzeiten, wie an Wochenenden oder Feiertagen, kann es jedoch zu kürzeren Wartezeiten am Eingang kommen.</p>
              </div>
            </AccordionItem>
            <AccordionItem title="Is there english support?">
              <div className="p-5">
                <p>Yes, the museum offers support in English. Information signs throughout the exhibits are available in both German and English, and you can request audio guides in English. Our staff at the ticket counter and information desk can also assist you in English.</p>
              </div>
            </AccordionItem>
            <AccordionItem title="Kann ich meinen Hund mitbringen?">
              <div className="p-5">
                <p>Leider sind Hunde im Museum nicht erlaubt, außer es handelt sich um offizielle Assistenzhunde. Bitte lassen Sie Ihr Haustier während Ihres Besuchs zu Hause.</p>
              </div>
            </AccordionItem>
            <AccordionItem title="Ist heute offen?">
              <div className="p-5">
                <p>Die Öffnungszeiten des Museums sind in der Regel von Dienstag bis Sonntag, 10:00 bis 18:00 Uhr. Montags ist das Museum geschlossen. Für spezielle Öffnungszeiten an Feiertagen oder besondere Veranstaltungen überprüfen Sie bitte unsere Website oder kontaktieren Sie uns direkt.</p>
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
            <Button variant="primary">Stellen Sie uns eine Frage</Button>
            <Button variant="primary">Rufen Sie uns an</Button>
            <Button variant="primary">Besuchen Sie uns im Museum</Button>
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
