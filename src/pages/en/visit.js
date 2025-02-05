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
import TransportIcon from '../../components/elements/TransportIcon';


// ... existing imports ...

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
      <Header activeNavItem="visit" />
      <main className="flex flex-col items-center justify-center min-h-screen p-0 bg-Black-000">
        <AccessibilityNav currentPage="Plan Your Visit" />
        <Section backgroundColor="bg-white" gapClass="gap-10 md:gap-20 xl:gap-36">
          <StoryTime
            imageProps={{
              imageName: "171030_naturkunde_156_c_thomas_rosenthal_0.jpg",
              alt: "Visitors in the Wet Collection (c) Thomas Rosenthal_0",
              imageMap: imageMap,
              className: "w-full h-full object-cover"
            }}
            textProps={{
              kicker: "At a Glance",
              headline: "Plan Your Visit",
              body: "Here you'll find all the information you need for your visit to the Museum für Naturkunde Berlin.",
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
                  text: "Getting Here",
                  url: "#getting-here",
                  variant: "plain"
                },
                {
                  text: "Exhibitions",
                  url: "#in-the-museum",
                  variant: "plain"
                },
                {
                  text: "Digital Offerings",
                  url: "/en/visit/furnatur-digital",
                  variant: "plain"
                },
                {
                  text: "Educational Programs",
                  url: "/en/participate/education",
                  variant: "plain"
                }]
            }}
            linkUrl="https://ticketshop.museumfuernaturkunde.berlin"
            className="h-96"
            imagePosition="right"
            linkText="To Ticket Shop"
          />
        </Section>
        <Section columns={2} backgroundColor="bg-Green-100" gapClass="gap-10 md:gap-20 xl:gap-36" justifyContent="center">
          <div className="py-10 md:py-20">
            <CardText
              headline="Opening Times"
              headlineStyle="h1"
              body="The museum is open daily until 6:00pm.<br/>The museum is closed on Mondays.<br/>Last entry is 30 minutes before closing time."
              spacing="wide"
              alignment="center"
            />
            <UpcomingHoliday />
            <div className="w-full">
              <Link
                to="/en/special-opening-times"
                className="w-full block text-center text-Green-500 typography-p"
              >
                Detailed schedule with special opening times
              </Link>
            </div>
          </div>
          <Accordion bgColor="white" id="opening-times">
            <OpenToday />

            <AccordionSpacer>
              <div className="p-0 flex flex-col justify-center items-center gap-0">
                <div className="text-center text-Green-600 typography-kicker">
                  Tuesday, Wednesday, Thursday, Friday
                </div>
                <div className="text-center text-Black-900 font-bold text-[34px] py-2">
                  09:30am to 6:00pm
                </div>
              </div>
            </AccordionSpacer>

            <AccordionSpacer>
              <div className="p-0 flex flex-col justify-center items-center gap-0">
                <div className="text-center text-Green-600 typography-kicker">
                  Saturday, Sunday, and on public holidays
                </div>
                <div className="text-center text-Black-900 font-bold text-[34px] py-2">
                  10:00am to 6:00pm
                </div>
              </div>
            </AccordionSpacer>

            <AccordionSpacer>
              <div className="p-0 flex flex-col justify-center items-center gap-0">
                <div className="text-center text-Green-600 typography-kicker">
                  Monday
                </div>
                <div className="text-center text-Black-500 font-bold text-[34px] py-2">
                  closed
                </div>
              </div>
            </AccordionSpacer>
          </Accordion>
        </Section>
        <Section columns={2} backgroundColor="bg-white" gapClass="gap-10 md:gap-20 xl:gap-36" justifyContent="center">
          <div className="flex -mt-20 md:-mt-40 flex-col justify-center items-center gap-10 md:gap-20">
            <CardText
              headline="Tickets & Prices"
              headlineStyle="h1"
              body={`Tickets can be purchased on arrival or in the <a href="https://ticketshop.museumfuernaturkunde.berlin" className="underline" target="_blank" rel="noopener noreferrer">online shop</a>. 
        We recommend booking tickets online in advance to avoid queuing at the museum.`}
              spacing="wide"
              alignment="center"
              buttons={[
                {
                  text: "CombiTickets",
                  url: "/en/combitickets",
                  variant: "plain"
                }
              ]}
            />
          </div>

          <Accordion bgColor="green" defaultOpenIndex={0} id="tickets-prices">
            <AccordionItem title="Single Tickets">
              <div className="flex flex-col items-end justify-start w-full px-4 pb-4 gap-2.5">
                <div className="flex justify-between items-baseline gap-2.5 w-full">
                  <h3 className="text-Black-700 flex-1 text-[21px]">
                    Adults
                  </h3>
                  <h3 className="w-[125px] text-right text-Black-900 text-[21px]">
                    €11.00
                  </h3>
                </div>
                <div className="flex justify-between items-baseline gap-2.5 w-full">
                  <h3 className="text-Black-700 flex-1 text-[21px]">
                    Children aged 6 and over
                  </h3>
                  <h3 className="w-[125px] text-right text-Black-900 text-[21px]">
                    €5.00
                  </h3>
                </div>
              </div>
            </AccordionItem>

            <AccordionItem title="Group Tickets">
              <div className="p-5">
                <ul className="flex flex-col gap-4 list-disc pl-4">
                  <li>
                    <div className="flex justify-between items-baseline">
                      <p className="flex-1 pr-8">
                        Families (two adults with up to three children under 14)
                      </p>
                      <p className="font-bold whitespace-nowrap">
                        €18.00
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-baseline">
                      <p className="flex-1 pr-8">
                        Mini Families (one adult with up to two children under 14)
                      </p>
                      <p className="font-bold whitespace-nowrap">
                        €12.00
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-baseline">
                      <p className="flex-1 pr-8">
                        Adults in groups of 10 or more
                      </p>
                      <p className="font-bold whitespace-nowrap">
                        €8.00
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-baseline">
                      <p className="flex-1 pr-8">
                        Concessions in groups of 10 or more
                      </p>
                      <p className="font-bold whitespace-nowrap">
                        €2.00
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </AccordionItem>

            <AccordionItem title="Annual Passes and Gift Vouchers">
              <div className="p-5">
                <div className="flex flex-col gap-6">
                  <ul className="flex flex-col gap-4 list-disc pl-4">
                    <li>
                      <div className="flex justify-between items-baseline">
                        <p className="flex-1 pr-8">Adults</p>
                        <p className="font-bold whitespace-nowrap">€35.00</p>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between items-baseline">
                        <p className="flex-1 pr-8">Concessions</p>
                        <p className="font-bold whitespace-nowrap">€23.00</p>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between items-baseline">
                        <p className="flex-1 pr-8">
                          Families (two adults with up to three children under 14)
                        </p>
                        <p className="font-bold whitespace-nowrap">€65.00</p>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between items-baseline">
                        <p className="flex-1 pr-8">
                          Mini Families (one adult with up to two children under 14)
                        </p>
                        <p className="font-bold whitespace-nowrap">€38.00</p>
                      </div>
                    </li>
                  </ul>
                  <p>
                    Download the <a href="https://www.museumfuernaturkunde.berlin/sites/default/files/23_0704_Antrag_Jahreskarten_EN.pdf" className="underline" target="_blank" rel="noopener noreferrer">Application Form</a> today to apply for your Annual Pass. E-mail your completed application form to <a href="mailto:info@mfn.berlin" className="underline">info@mfn.berlin</a>.
                  </p>
                  <h4>Gift Vouchers</h4>
                  <p>Gift Vouchers for tickets to the museum are available from the ticket desk during our regular opening times.</p>
                </div>
              </div>
            </AccordionItem>

            <AccordionItem title="Concessions">
              <div className="p-5">
                <div className="flex flex-col gap-6">
                  <p>
                    The following persons are eligible for discounted entry, subject to presenting proof or a valid ID:
                  </p>
                  <ul className="flex flex-col gap-4 list-disc pl-4">
                    <li>Schoolchildren aged 16 and over with a school ID</li>
                    <li>Students</li>
                    <li>Trainees/Apprentices</li>
                    <li>Pensioners</li>
                    <li>Visitors on social welfare</li>
                    <li>Unemployed visitors</li>
                    <li>Volunteers, subject to presentation of a volunteer's card</li>
                    <li>Visitors with disabilities (degree of disability of 50 or more), subject to presenting official documentation</li>
                  </ul>
                  <p>
                    Discounted tickets are available to holders of a Museum Pass Berlin, a Berlin WelcomeCard or a ticket to the German Museum of Technology. <a href="/en/combitickets" className="underline">More info on CombiTickets</a>
                  </p>
                </div>
              </div>
            </AccordionItem>

            <AccordionItem title="Free Entry">
              <div className="p-5">
                <ul className="flex flex-col gap-4 list-disc pl-4">
                  <li>Pre-school children, children under 6</li>
                  <li>Up to two teachers or school staff, when accompanying a school trip or group of children/young people</li>
                  <li>Members of ICOM (International Council of Museums)</li>
                  <li>Members of WFTGA (World Federation of Tourist Guide Associations)</li>
                  <li>Holders of a Deutscher Museumsbund member's card</li>
                  <li>Registered groups of students attending a university or college in Berlin who are visiting the museum as part of their studies</li>
                  <li>Holders of a valid press pass</li>
                  <li>Employees of other Berlin museums, subject to proof</li>
                  <li>Companions of disabled visitors who are named on the disabled visitor's pass</li>
                  <li>Refugees and "Willkommensklassen", subject to proof</li>
                </ul>
              </div>
            </AccordionItem>
          </Accordion>
        </Section>

        <Section id="getting-here" columns={2} backgroundColor="bg-Green-100" gapClass="gap-20 xl:gap-36" justifyContent="center">
          <div className="flex flex-col justify-center items-center">
            <div className="py-[30px] mb-[17px]">
              <div className="w-[200px] h-[200px] relative overflow-hidden rounded-full">
                <ContentImage
                  imageName="150313_u-bahhof_14_c_carola-radke_mfn.jpg"
                  alt="Naturkundemuseum subway station - Main entrance to U6 line"
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
              headline="Getting Here"
              headlineStyle="h1"
              body="We look forward to welcoming you! The Museum für Naturkunde is located in the Mitte district of Berlin. We recommend travelling to the museum by bike or public transport, as there is limited parking at and around the museum."
              spacing="wide"
              alignment="center"
              className="text-[#5f5f5f]"
              buttons={[
                {
                  text: "Museum on Google Maps",
                  url: "https://maps.app.goo.gl/4orDoD9aBkAnS8zy9",
                  variant: "plain"
                }
              ]}
            />
          </div>

          <Accordion bgColor="white" id="visit-transport" defaultOpenIndex={0}>
            <AccordionItem title="By Bus & Train">
              <div className="p-5 font-bold">
                <p>U-Naturkundemuseum (
                  <TransportIcon iconId="bvg-u6" ariaLabel="Subway symbol U6" />
                  <TransportIcon iconId="bvg-m5" ariaLabel="Tram symbol M5" className="w-[26px]" />
                  <TransportIcon iconId="bvg-m8" ariaLabel="Tram symbol M8" className="w-[26px]" />
                  <TransportIcon iconId="bvg-m10" ariaLabel="Tram symbol M10" className="w-[33px]" />
                  <TransportIcon iconId="bvg-m12" ariaLabel="Tram symbol M12" className="w-[33px]" />
                  <TransportIcon iconId="bvg-bus" ariaLabel="Bus symbol for lines 245 and N40" className="h-[24px] w-[20px]" />
                  <span className="text-xs font-normal text-Black-700"> 245 N40 </span>
                  )<span className="font-italic text-Black-500">
                    <TransportIcon iconId="person-walking" ariaLabel="Walking distance symbol" className="h-[18px] mt-[-4px] opacity-50" />300m on foot</span></p>
                <br />

                <p>S-Hauptbahnhof (
                  <TransportIcon iconId="bvg-s5" ariaLabel="S-Bahn symbol S5" className="w-[28px]" />
                  <TransportIcon iconId="bvg-s7" ariaLabel="S-Bahn symbol S7" className="w-[28px]" />
                  )<span className="font-italic text-Black-500">
                    <TransportIcon iconId="person-walking" ariaLabel="Walking distance symbol" className="h-[18px] mt-[-4px] opacity-50" />1,300m on foot</span></p>
                <br />

                <p>S-Nordbahnhof (
                  <TransportIcon iconId="bvg-s1" ariaLabel="S-Bahn symbol S1" className="w-[28px]" />
                  <TransportIcon iconId="bvg-s2" ariaLabel="S-Bahn symbol S2" className="w-[28px]" />
                  )<span className="font-italic text-Black-500">
                    <TransportIcon iconId="person-walking" ariaLabel="Walking distance symbol" className="h-[18px] mt-[-4px] opacity-50" />900m on foot</span></p>
                <br />

                <p>Invalidenpark (
                  <TransportIcon iconId="bvg-bus" ariaLabel="Bus symbol for lines 120, 123, 142, 245, N20 and N40" className="h-[24px] w-[20px]" />
                  <span className="text-xs font-normal text-Black-700"> 120 123 142 245 N20 N40 </span>
                  )<span className="font-italic text-Black-500">
                    <TransportIcon iconId="person-walking" ariaLabel="Walking distance symbol" className="h-[18px] mt-[-4px] opacity-50" />300m on foot</span></p>
              </div>
            </AccordionItem>

            <AccordionItem title="By Bike">
              <div className="p-5">
                <p>
                  The museum is also very easy to reach by bike, via Invalidenstraße.<br />
                  <br />
                  There are plenty of bike racks available at the museum. Not only cycling good for the environment, it also allows you to actively plan your journey and gives you flexibility. There are also lockers available in the museum for storing your bike equipment.<br />
                  <br />
                  At the neighbouring Federal Ministry of Transport and Digital Infrastructure, you will find an electric bike pump which is available to use for free 24 hours a day.
                </p>
              </div>
            </AccordionItem>

            <AccordionItem title="By Car">
              <div className="p-5">
                <p>
                  There is no parking at the Museum für Naturkunde.<br />
                  <br />
                  Parking options nearby:
                </p>
                <div className="p-5">
                  <ul className="flex flex-col gap-4 list-disc pl-4">
                    <li>
                      <div className="flex justify-between items-baseline">
                        <p className="flex-1 pr-8">
                          <a href="https://www.google.de/maps/place/Invalidenstra%C3%9Fe+38,+10115+Berlin/@52.5306377,13.3792736,17z/" className="underline" target="_blank" rel="noopener noreferrer">Mercure Hotel Berlin City</a>, Invalidenstraße 38, 10115 Berlin, subject to a fee, <span className="font-italic text-Black-500">
                            <TransportIcon iconId="person-walking" ariaLabel="Walking distance symbol" className="h-[18px] mt-[-4px] opacity-50" />200m on foot</span>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between items-baseline">
                        <p className="flex-1 pr-8">
                          <a href="https://www.google.de/maps/place/Chausseestra%C3%9Fe+118,+10115+Berlin/@52.529593,13.3818876,17z/" className="underline" target="_blank" rel="noopener noreferrer">H+ Hotel Berlin Mitte / Rewe</a>, Chausseestraße 118-120, 10115 Berlin, subject to a fee, <span className="font-italic text-Black-500">
                            <TransportIcon iconId="person-walking" ariaLabel="Walking distance symbol" className="h-[18px] mt-[-4px] opacity-50" />350m on foot</span>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </AccordionItem>

            <AccordionItem title="Accessibility">
              <div className="p-5">
                <p>The disabled entrance is located to the right of the main entrance. There are three disabled parking spaces located opposite the disabled entrance.<br /><br />
                  <strong>Please note:</strong> The disabled parking spaces by the neighbouring building are currently not in operation due to building works. Thank you for your understanding!<br /><br />
                  You can access the cloakroom, disabled toilets and exhibition floor from this entrance via a lift or stair lift. <a href="/en/visit/plan-your-visit/accessibility" className="underline">More info</a></p>
              </div>
            </AccordionItem>
          </Accordion>
        </Section>
        <Section id="in-the-museum" columns={1} backgroundColor="bg-white" padding="pb-4 pt-16">
          <CardText
            headline="In the Museum"
            headlineStyle="h1"
            body={`Our exhibitions will give you insights into amazing natural adventures – through original exhibits!
      <br/><br/>
      More info on our <a href="/en/visit/plan-your-visit/visitors-regulations" style="text-decoration: underline;" target="_blank" rel="noopener noreferrer">visitor rules</a> and 
      our <a href="/en/visit/plan-your-visit/film-and-photography" style="text-decoration: underline;" target="_blank" rel="noopener noreferrer">rules for photography and video recording</a>.`}
            spacing="wide"
            alignment="center"
          />
          <br /><br />

          <Slideshow imageMap={imageMap}>
            <SlideContent
              imageName="zv_1200x675_WEBSEITE_0.jpg"
              title="ZUGvögel – Collection in Motion"
              kicker="Special exhibition from 11 June 2024 to the end of June 2027"
              link="/en/visit/exhibitions/zugvogel-collection-motion"
              altText="Migratory Birds"
            />
            <SlideContent
              imageName="zp_1200x675_WEBSEITE.jpg"
              title="Zukunftsplan – The Museum in Motion"
              kicker="Installation in the museum from 11 June 2024 to the end of June 2027"
              link="/en/museum/exhibitions/zukunftsplan"
              altText="Visualization of the future plan for the Museum für Naturkunde Berlin"
            />
            <SlideContent
              imageName="Ribbeck-Meteorit_im_Museum_fuer_Naturkunde_Berlin_c_Pablo_Castagnola.jpg"
              title="Ribbet Meteorite in the Mineral Hall"
              kicker="Pieces fell in January 2024 in the Havelland from the sky"
              link="/en/visit-a-distant-relative"
              altText="Ribbeck Meteorite in the Mineral Hall (c) Pablo Castagnola"
            />
            <SlideContent
              imageName="1200x800_0.jpg"
              title="Dinosaurs!"
              kicker="Our Exhibitions"
              link="/en/visit/exhibitions/dinosaurs-age-giant-lizards"
              altText="Dinosaurs! Age of Giant Reptiles"
            />
            <SlideContent
              imageName="digitize_webseite_V2_1200x800_Live Science.jpg"
              title="digitize!"
              kicker="Our Exhibitions"
              link="/en/museum/exhibitions/digitize"
              altText="digitize! Live Science"
            />
            <SlideContent
              imageName="sauriersaal_04_c_carola-radke-mfn.jpg"
              title="World of Dinosaurs"
              kicker="Our Exhibitions"
              link="/en/visit/exhibitions/world-dinosaurs"
              altText="Dinosaur skeletons in the Dinosaur Hall"
            />
            <SlideContent
              imageName="system_erde_02_c_carola-radke_mfn.jpg"
              title="System Earth"
              kicker="Our Exhibitions"
              link="/en/museum/exhibitions/system-earth"
              altText="The multimedia globe at the Museum für Naturkunde Berlin"
            />
            <SlideContent
              imageName="kosmos_saal_c_hwa-ja-goetz-mfn.jpg"
              title="Cosmos and Solar System"
              kicker="Our Exhibitions"
              link="/en/museum/exhibitions/cosmos-and-solar-system"
              altText="Visitors looking up at projection sky at Museum für Naturkunde Berlin"
            />
            <SlideContent
              imageName="biodivwand_c_carola-radke-mfn.jpg"
              title="Evolution in Action"
              kicker="Our Exhibitions"
              link="/en/museum/exhibitions/evolution-action"
              altText="The biodiversity wall at Museum für Naturkunde Berlin"
            />
            <SlideContent
              imageName="101028_nasssammlung_02_c_carola-radke-mfn.jpg"
              title="Wet Collection"
              kicker="Our Exhibitions"
              link="/en/museum/exhibitions/wet-collection"
              altText="Tall shelves with animal specimens in the Wet Collection"
            />
            <SlideContent
              imageName="130220_kellermodell_floh_c_carola-radke_mfn.jpg"
              title="Keller's Insect Models"
              kicker="Our Exhibitions"
              link="/en/museum/exhibitions/kellers-insect-models"
              altText="Model of a flea"
            />
            <SlideContent
              imageName="2015_bobby_c_carola-radke_mfn_0.jpg"
              title="Highlights of Taxidermy"
              kicker="Our Exhibitions"
              link="/en/visit/exhibitions/highlights-taxidermy"
              altText="The face of the gorilla Bobby, behind it the specimen of a giant eland antelope"
            />
            <SlideContent
              imageName="110919_mineraliensaal_13_c_hwa-ja-goetz-mfn.jpg"
              title="Minerals"
              kicker="Our Exhibitions"
              link="/en/museum/exhibitions/minerals"
              altText="Display cases with minerals in the Minerals Hall"
            />
            <SlideContent
              imageName="humboldt-intervention-museum-fuer-naturkunde-berlin.jpg"
              title="Humboldt Intervention"
              kicker="Our Exhibitions"
              link="/en/museum/exhibitions/humboldt-intervention"
              altText="Posters of the Humboldt Intervention between and above the display cases in the Minerals Hall"
            />
            <SlideContent
              imageName="100423_parasiten_03_c_hwaja-goetz_mfn_0.jpg"
              title="Traveling Exhibitions"
              kicker="Our Exhibitions"
              link="/en/museum/touring-exhibitions"
              altText="The photo shows a prepared springbok with oxpeckers"
            />
            <SlideContent
              imageName="federband_c_hwaja-goetz_mfn.jpg"
              title="Archive: Special Exhibitions"
              kicker="Our Exhibitions"
              link="/en/visit/exhibitions/archive-special-exhibition"
              altText="Feather band made of different colored feathers"
            />
          </Slideshow>
        </Section>
        <Section backgroundColor="bg-white" padding="py-0 gap-0 pb-16">
          <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="sm:col-span-2 lg:col-span-2">
              <Card
                variant="classic"
                imageRatio="75"
                imageProps={{
                  imageName: "veranstaltungen-museum-fuer-naturkunde-berlin (1).jpg",
                  alt: "Event visitors in the dinosaur hall of the Museum für Naturkunde Berlin",
                  imageMap: imageMap,
                  className: "w-full h-auto object-cover"
                }}
                textProps={{
                  headline: "Events",
                  spacing: "regular",
                  headlineStyle: "h3"
                }}
                url="/en/participate/events"
              />
            </div>

            <div className="sm:col-span-2 lg:col-span-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <Card
                variant="classic"
                imageProps={{
                  imageName: "23_0929_Ausstellung_Beschilderung_Rundgang_A5-1.jpg",
                  alt: "Floor Plan & Accessibility",
                  imageMap: imageMap,
                  className: "w-full h-auto object-cover"
                }}
                textProps={{
                  headline: "Floor Plan & Accessibility",
                  spacing: "tight",
                  headlineStyle: "h3"
                }}
                url="/en/visit/plan-your-visit/accessibility"
              />
              <Card
                variant="classic"
                imageProps={{
                  imageName: "151216_saal_1_picnic-area_28_c_hwaja-goetz-mfn.jpg",
                  alt: "Cloakroom and picnic area in Hall 1 of the museum",
                  imageMap: imageMap,
                  className: "w-full h-auto object-cover"
                }}
                textProps={{
                  headline: "Cloakroom",
                  spacing: "tight",
                  headlineStyle: "h3"
                }}
                url="/en/visit/plan-your-visit/cloakroom"
              />
            </div>

            <div className="sm:col-span-1 lg:col-span-1">
              <Card
                variant="classic"
                imageProps={{
                  imageName: "230713-Museumscafe_15_web__(c)_Hwa_Ja-Götz.jpg",
                  alt: "Interior view of the museum café with seating area",
                  imageMap: imageMap,
                  className: "w-full h-auto object-cover"
                }}
                textProps={{
                  headline: "Cafeteria",
                  headlineStyle: "h3",
                  spacing: "regular"
                }}
                url="/en/visit/plan-your-visit/museum-cafe"
              />
            </div>
            <div className="sm:col-span-1 lg:col-span-1">
              <Card
                variant="classic"
                imageProps={{
                  imageName: "app_foto_(c) Sonja Kreft.jpg",
                  alt: "Tours & Audio Guides",
                  imageMap: imageMap,
                  className: "w-full h-auto object-cover"
                }}
                textProps={{
                  headline: "Tours & Audio Guides",
                  headlineStyle: "h3",
                  spacing: "wide"
                }}
                url="/en/visit/plan-your-visit/digital-guide"
              />
            </div>
          </div>
        </Section>

        <Section columns={1} backgroundColor="bg-Green-100" padding="pt-16 pb-0">
          <CardText
            headline="Special Visits"
            headlineStyle="h1"
            body="We are more than happy to host group visits and special events."
            spacing="wide"
            alignment="center"
            buttons={[
              {
                text: "All Education Offers",
                url: "/en/participate/education",
                variant: "plain"
              }
            ]}
          />
        </Section>

        <Section columns={4} backgroundColor="bg-Green-100">
          <Card
            variant="classic"
            imageProps={{
              imageName: "160222_Schueler_Fuehrung_System_Erde_07__(c)_Hwa-Ja_Goetz_MfN.jpg",
              alt: "School class during a guided tour with the excavation box",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "School Trips",
              headlineStyle: "h3",
              spacing: "wide"
            }}
            url="/en/participate/education/school-and-kindergarten"
          />
          <Card
            variant="classic"
            imageProps={{
              imageName: "111123_Zeichenkurs_Exploratorium_15_2.jpg",
              alt: "A woman sits at the microscope and draws the magnified view on paper",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "Adults",
              headlineStyle: "h3",
              spacing: "wide"
            }}
            url="/en/participate/education/adults"
          />
          <Card
            variant="classic"
            imageProps={{
              imageName: "160222_Schueler_Fuehrung_Grabungskiste_28.jpg",
              alt: "Children celebrating a birthday party at the museum",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "Kids' Birthdays",
              headlineStyle: "h3",
              spacing: "wide"
            }}
            url="/en/participate/education/childrens-birthday-parties"
          />
          <Card
            variant="classic"
            imageProps={{
              imageName: "171030_naturkunde_356_(c)_Thomas_Rosenthal.jpg",
              alt: "Group of visitors in the exhibition area",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "Groups",
              headlineStyle: "h3",
              spacing: "wide"
            }}
            url="/en/participate/education/guided-tours"
          />
        </Section>
        <Section columns={2} backgroundColor="bg-white" gapClass="gap-10 md:gap-36" justifyContent="center">
          <CardText
            headline="Frequently Asked Questions"
            headlineStyle="h1"
            body="We get asked lots of questions about visiting the museum. On this page, you will find answers to the questions we hear most often. Please don't hesitate to get in touch if you can't find the answer to your question here!"
            spacing="wide"
            alignment="center"
            className="text-[#5f5f5f]"
            buttons={[
              {
                text: "More FAQs",
                url: "/en/visitor-faqs",
                variant: "plain"
              }
            ]}
          />

          <Accordion bgColor="green" id="faq">
            <AccordionItem title="Where can I get tickets?">
              <div className="p-5">
                <p>
                  You can buy tickets <a href="https://ticketshop.museumfuernaturkunde.berlin" className="underline" target="_blank" rel="noopener noreferrer">online</a> or at the museum ticket desk.
                  <br /><br />
                  We recommend booking tickets online in advance to avoid queuing at the museum. Tickets can be purchased up to 14 days in advance.
                  <br /><br />
                  A timeslot ticket entitles you to entry to the museum within one hour of your selected entry time. You can then spend as long as you like in the museum until closing time.
                  <br /><br />
                  Info: Your ticket is valid for all current exhibitions at the Museum für Naturkunde on the day of entry.
                </p>
              </div>
            </AccordionItem>

            <AccordionItem title="What is the best way to get to the museum?">
              <div className="p-5">
                <p>We recommend travelling to the museum by bike or public transport.</p>
              </div>
            </AccordionItem>

            <AccordionItem title="Do you have an audio guide?">
              <div className="p-5">
                <p>Yes. We have a free digital guide that you can access using your smartphone. This guide is available in 11 languages. We also have an audio guide for kids and a highlights tour in German Sign Language for visitors with hearing loss.
                  <br /><br />
                  We also offer two themed audio guides which add an additional perspective to the exhibition and the exhibits.
                  <br /><br />
                  <a href="/en/visit/plan-your-visit/digital-guide" className="underline">More information is available here</a>.
                  <br /><br />
                  We recommend bringing your own headphones to enjoy the audio guide.</p>
              </div>
            </AccordionItem>

            <AccordionItem title="Can I take photos in the museum?">
              <div className="p-5">
                <p>You may take photos in the museum for personal use. Taking photos for commercial purposes requires a permit. <a href="/en/visit/plan-your-visit/film-and-photography" className="underline">More info here</a>.</p>
              </div>
            </AccordionItem>

            <AccordionItem title="Can I bring my buggy into the museum?">
              <div className="p-5">
                <p>Yes, you can visit the museum with a buggy.</p>
              </div>
            </AccordionItem>

            <AccordionItem title="Can I bring pets into the museum?">
              <div className="p-5">
                <p>No. We only allow guide dogs and assistance dogs, subject to proof.</p>
              </div>
            </AccordionItem>
          </Accordion>
        </Section>
        <Section columns={1} backgroundColor="bg-Black-100">
          <CardText
            headline="Contact"
            headlineStyle="h1"
            body="Got questions or want to get in touch? We'd love to hear from you!"
            spacing="wide"
            alignment="center"
          />
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-2">
            <Button
              text="Ask us a question"
              variant="primary"
              url="/en/contact"
            />
            <Button
              text="Give us a call"
              variant="primary"
              url="tel:+4930889140-8591"
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
    title="Plan Your Visit"
    description="Plan your visit to the Museum für Naturkunde Berlin"
    pathname="/en/visit"
  />
)