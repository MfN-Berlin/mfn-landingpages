import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Header from "../components/layouts/Header"
import Button from "../components/elements/Button"
import CardText from '../components/elements/CardText'
import ContentImage from '../components/elements/ContentImage'
import Section from '../components/elements/Section'
import Card from '../components/elements/Card'
import StoryTime from '../components/layouts/StoryTime'
import Footer from '../components/layouts/Footer'
import Teaser from '../components/layouts/Teaser'
import { Accordion, AccordionItem, AccordionSpacer } from '../components/layouts/Accordion'
import BlockQuote from '../components/layouts/Blockquote'
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
      <main className="min-h-screen bg-white flex flex-col items-center justify-center p-0">
        <Section backgroundColor="bg-white" padding="pt-8 pb-0">
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
              headline: "Plane deinen Besuch",
              body: "Hier findest du alle Informationen, die du für deinen Besuch im Naturkundemuseum benötigst.<br/><br/>Tickets   Anfahrt   Ausstellungen   Digitale Angebote   Bildungsangebote   Service",
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
        <Section columns={2} backgroundColor="bg-Green-100" gapClass="gap-24 xl:gap-36">
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
              <div className="p-5 flex flex-col justify-center items-center gap-0">
                <div className="text-center text-[#587208] text-xs font-bold font-['Trade Gothic Next LT Pro'] uppercase tracking-[2.88px]">
                  Dienstag, Mittwoch, Donnerstag, Freitag
                </div>
                <div className="text-center text-[#1a1a1a] text-[34px] font-bold font-['Trade Gothic Next LT Pro']">
                  09:30 <span className="font-extrabold">–</span> 18:00
                </div>
              </div>
            </AccordionSpacer>

            <AccordionSpacer>
              <div className="p-5 flex flex-col justify-center items-center gap-0">
                <div className="text-center text-[#587208] text-xs font-bold font-['Trade Gothic Next LT Pro'] uppercase tracking-[2.88px]">
                  Samstag, Sonntag, und an <span className="underline">Feiertagen</span>
                </div>
                <div className="text-center text-[#1a1a1a] text-[34px] font-bold font-['Trade Gothic Next LT Pro']">
                  10:00 – 18:00
                </div>
              </div>
            </AccordionSpacer>

            <AccordionSpacer>
              <div className="p-5 flex flex-col justify-center items-center gap-0">
                <div className="text-center text-[#587208] text-xs font-bold font-['Trade Gothic Next LT Pro'] uppercase tracking-[2.88px]">
                  MONTAGS
                </div>
                <div className="text-center text-[#1a1a1a] text-[34px] font-bold font-['Trade Gothic Next LT Pro']">
                  geschlossen
                </div>
              </div>
            </AccordionSpacer>

          </Accordion>

        </Section>
        <Section columns={2} backgroundColor="bg-white" className="relative" gapClass="gap-36">
          <div className="flex mt-[-150px] flex-col justify-center items-center gap-20">
            <div className="rotate-[7deg] w-[166px] h-[166px] bg-Yellow rounded-full flex items-center justify-center p-4 shadow-lg">
              <p className="typography-p text-center text-black">
                Am ersten Sonntag des Monats ist der <strong>Eintritt frei!</strong>
              </p>
            </div>
            <CardText
              headline="Tickets & Preise"
              headlineStyle="h1"
              body="Tickets können vor Ort und im Onlineshop gekauft werden. Wir empfehlen die Buchung von Online-Zeitfenstertickets im Vorfeld um Wartezeiten an der Kasse zu vermeiden. <br/><br/><a href='#'>Sonderpreise, Vergünstigungen und Bedingungen</a>."
              spacing="wide"
              alignment="center" // Center-aligned text
            />

          </div>
          <Accordion bgColor="green">
            <AccordionSpacer>
              <div className="h-[136px] bg-[#f7f9f0] flex items-start">
                <div className="grow shrink basis-0 h-full p-5 flex justify-between items-start gap-2.5">
                  <div className="text-[#1a1a1a] text-[21px] font-bold font-['Trade Gothic Next LT Pro']">
                    Einzeltickets
                  </div>
                  <div className="flex flex-col justify-start items-end gap-2.5">
                    <div className="flex justify-end items-center gap-2.5">
                      <div className="text-[#8c8c8c] text-lg font-bold font-['Trade Gothic Next LT Pro'] leading-normal">
                        Erwachsene
                      </div>
                      <div className="w-[125px] text-right text-[#1a1a1a] text-[34px] font-bold font-['Trade Gothic Next LT Pro']">
                        11,00€
                      </div>
                    </div>
                    <div className="flex justify-end items-center gap-2.5">
                      <div className="text-[#8c8c8c] text-lg font-bold font-['Trade Gothic Next LT Pro'] leading-normal">
                        Kinder ab 6
                      </div>
                      <div className="w-[125px] text-right text-[#1a1a1a] text-[34px] font-bold font-['Trade Gothic Next LT Pro']">
                        5,00€
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionSpacer>
            <AccordionItem title="Gruppentickets" >
              <div className="p-5">
                <p>Erwachsene</p>
              </div>
            </AccordionItem>
            <AccordionItem title="Jahreskarten" >
              <div className="p-5">
                <p>Erwachsene</p>
              </div>
            </AccordionItem>
            <AccordionItem title="Ermäßigungen und freier Eintritt" >
              <div className="p-5">
                <p>Erwachsene</p>
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
              body="Schön, dass du vorbeikommst! Das Museum für Naturkunde liegt in Berlin-Mitte. Wir empfehlen daher die Anreise mit öffentlichen Verkehrsmitteln, da es am Museum keine und im Umkreis nur begrenzte Parkmöglichkeiten gibt. <a href='#' className='underline'>Das Museum auf Google Maps</a><br/><a href='#' className='underline'>Mehr Infos zur Anfahrt</a>"
              spacing="wide"
              alignment="center"
              className="text-[#5f5f5f]"
            />
          </div>

          <Accordion bgColor="white" defaultOpenIndex={0}>
            <AccordionItem title="Mit Bus & Bahn">
              <div className="p-5 font-bold">
                <p>hey</p>
                <p>U-Naturkundemuseum (
                  <img src="/images/BVG-U6.svg" alt="U-Bahnlinie 6" className="inline px-[0.1em] h-[15px] m-0 mt-[-3px]" />
                  <img src="/images/BVG-M5.svg" alt="Tramlinie M5" className="inline px-[0.1em] h-[15px] m-0 mt-[-3px]  " />
                  <img src="/images/BVG-M8.svg" alt="Tramlinie M8" className="inline px-[0.1em] h-[15px] m-0 mt-[-3px] " />
                  <img src="/images/BVG-M10.svg" alt="Tramlinie M10" className="inline px-[0.1em] h-[15px] m-0 mt-[-3px] " />
                  <img src="/images/BVG-M12.svg" alt="Tramlinie M12" className="inline px-[0.1em] h-[15px] m-0 mt-[-3px] " />
                  <img src="/images/BVG-BUS.svg" alt="Buslinien" className="inline px-[0.1em] h-[24px] m-0 mt-[-3px] " /><span className="text-xs font-normal text-Black-700"> 245 N40 </span>)<span className="font-italic text-Black-500"><img src="/images/Person-Walking.svg" alt="Person Walking" className="inline px-[0.1em] h-[18px] mt-[-4px] opacity-50 m-0 " />300m</span></p><br/>
                <p>S-Hauptbahnhof  (
                <img src="/images/BVG-S5.svg" alt="S-Bahnlinie 5" className="inline px-[0.1em] h-[15px] m-0 mt-[-3px]" />
                <img src="/images/BVG-S7.svg" alt="S-Bahnlinie 7" className="inline px-[0.1em] h-[15px] m-0 mt-[-3px]" />)<span className="font-italic text-Black-500"><img src="/images/Person-Walking.svg" alt="Person Walking" className="inline px-[0.1em] h-[18px] mt-[-4px] opacity-50 m-0 " />1.300m</span></p><br/>
                <p>S-Nordbahnhof (
                <img src="/images/BVG-S1.svg" alt="S-Bahnlinie 1" className="inline px-[0.1em] h-[15px] m-0  mt-[-3px]" />
                <img src="/images/BVG-S2.svg" alt="S-Bahnlinie 2" className="inline px-[0.1em] h-[15px] m-0  mt-[-3px]" />) <span className="font-italic text-Black-500"><img src="/images/Person-Walking.svg" alt="Person Walking" className="inline px-[0.1em] h-[18px] mt-[-4px] opacity-50 m-0 " />900m</span></p><br/>
                <p>Invalidenpark (
                <img src="/images/BVG-BUS.svg" alt="Buslinien" className="inline px-[0.1em] h-[24px] m-0 mt-[-3px]" /><span className="text-xs font-normal text-Black-700"> 120 123 142 245 N20 N40 </span> )<span className="font-italic text-Black-500"><img src="/images/Person-Walking.svg" alt="Person Walking" className="inline px-[0.1em] h-[18px] mt-[-4px] opacity-50 m-0 " />300m</span></p><br/>
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
        <Section columns={1} backgroundColor="bg-white" padding="pb-0 pt-16">
          <CardText
            headline="Ausstellung geöffnet – mit Online-Ticket"
            headlineStyle="h1"
            body="Durch die Digitalisierung der rund 30 Millionen Objekte des Museums für Naturkunde Berlin wird künftig jede und jeder die Chance haben, unser Wissen über Natur für eine nachhaltigere und lebenswertere Welt zu nutzen.<br><br>Mehr Informationen <a href='#'>hier</a>."
            spacing="wide"
            alignment="center"
          />

          <Slideshow imageMap={imageMap}>
            <SlideContent
              imageName="1200x800_0.jpg"
              title="Dinosaurier"
              kicker="Unsere Ausstellungen"
              link="/link-to-page-1"
            />
            <SlideContent
              imageName="101028_nasssammlung_02_c_carola-radke-mfn.jpg"
              title="Nass-Sammlung"
              kicker="Unsere Ausstellungen"
              link="/link-to-page-2"
            />
            <SlideContent
              imageName="biodivwand_c_carola-radke-mfn.jpg"
              title="Biodiversität"
              kicker="Unsere Ausstellungen"
              link="/link-to-page-3"
            />
          </Slideshow>
        </Section>
        <Section layout="custom" backgroundColor="bg-white" padding="py-0">
          {/* Large card taking up 2/3 of the space */}
          <div className="col-span-8 w-full">
            <Card
              variant="classic"
              imageProps={{
                imageName: "bearb_140926_Science_Slam_077__┬®_Carola-Radke_MfN.jpg",
                alt: "Veranstaltungen",
                imageMap: imageMap,
                className: "w-full h-auto"
              }}
              textProps={{
                headline: "Veranstaltungen",
                spacing: "regular",
                headlineStyle: "h3"
              }}
              url="/large-card-page"
            />
          </div>

          {/* Container for two smaller cards */}
          <div className="col-span-4 grid grid-rows-2 gap-4 w-full">
            {/* First small card */}
            <Card
              variant="classic"
              imageProps={{
                imageName: "23_0929_Ausstellung_Beschilderung_Rundgang_A5-1.jpg",
                alt: "Lageplan & Barrierefreiheit",
                imageMap: imageMap,
                className: "w-full h-auto"
              }}
              textProps={{
                headline: "Lageplan & Barrierefreiheit",
                spacing: "tight",
                headlineStyle: "h3"
              }}
              url="/small-card-1-page"
            />

            {/* Second small card */}
            <Card
              variant="classic"
              imageProps={{
                imageName: "151216_saal_1_picnic-area_28_c_hwaja-goetz-mfn.jpg",
                alt: "Garderobe",
                imageMap: imageMap,
                className: "w-full h-auto"
              }}
              textProps={{
                headline: "Garderobe",
                spacing: "tight",
                headlineStyle: "h3"
              }}
              url="/small-card-2-page"
            />
          </div>
        </Section>
        <Section columns={3} backgroundColor="bg-white" padding="pt-0 pb-16">

          <Card
            variant="classic"
            imageProps={{
              imageName: "230713-Museumscafe_15_web__(c)_Hwa Ja-Götz.jpg",
              alt: "Example Image",
              imageMap: imageMap,
              className: "w-full h-auto"
            }}
            textProps={{
              headline: "Cafeteria",
              headlineStyle: "h3",
              spacing: "regular"
            }}
            url="/classic-card-page"
          />

          <Card
            variant="classic"
            imageProps={{
              imageName: "app_foto_(c) Sonja Kreft.jpg",
              alt: "Another Image",
              imageMap: imageMap,
              className: "w-full h-auto"
            }}
            textProps={{
              headline: "Führungen & Audioguides",
              headlineStyle: "h3",
              spacing: "wide"
            }}
            url="/flat-card-page"
          />

          <Card
            variant="classic"
            imageProps={{
              imageName: "299980239_448016240677212_6197202936618778314_n.jpg",
              alt: "Another Image",
              imageMap: imageMap,
              className: "w-full h-auto"
            }}
            textProps={{
              headline: "Museums-Shop",
              headlineStyle: "h3",
              spacing: "wide"
            }}
            url="/flat-card-page"
          />

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
              className: "w-full h-auto"
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
              className: "w-full h-auto"
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
              className: "w-full h-auto"
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
              className: "w-full h-auto"
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
            body="Uns erreichen viele Fragen rund um den Besuch des Museums. Hier geben wir Antworten auf die meistgestellten. Wenn du eine andere Frage hast, kontaktiere uns gern! Mehr häufig gestellte Fragen"
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
            body="Brauchst du noch etwas anderes bei uns mitzumachen?"
            spacing="wide"
            alignment="center"
          />
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
            <Button variant="primary">Stelle uns eine Frage</Button>
            <Button variant="primary">Rufe uns an</Button>
            <Button variant="primary">Besuche uns im Museum</Button>
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
