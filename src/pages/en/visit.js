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
      <Header activeNavItem="visit" />
      <main className="flex flex-col items-center justify-center min-h-screen p-0 bg-Black-000">
        <Section backgroundColor="bg-Black-000" padding="pt-8 pb-0">
          <AccessibilityNav currentPage="Plan Your Visit" />
        </Section>
        <Section backgroundColor="bg-white" gapClass="gap-20 xl:gap-36">
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
                  url: "/en/museum/visit/getting-here",
                  variant: "plain"
                },
                {
                  text: "Exhibitions",
                  url: "/en/museum/exhibitions",
                  variant: "plain"
                },
                {
                  text: "Digital Offerings",
                  url: "/en/museum/education/digital-offerings",
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
        <Section columns={2} backgroundColor="bg-Green-100" gapClass="gap-20 xl:gap-36" justifyContent="center">
          <div>
            <CardText
              headline="Opening Hours"
              headlineStyle="h1"
              body="The Museum is open daily until 18:00.<br/>Monday is closed.<br/>Last entry is 30 minutes before closing."
              spacing="wide"
              alignment="center" // Center-aligned text
            />
            <UpcomingHoliday />
            <div className="w-full">
              <Link
                to="/en/visit/special-opening-hours"
                className="w-full block text-center text-Green-500 typography-p"
              >
                Detailed Plan with Special Opening Hours
              </Link>
            </div>
          </div>
          <Accordion bgColor="white">

            <OpenToday />

            <AccordionSpacer>
              <div className="p-0 flex flex-col justify-center items-center gap-0">
                <div className="text-center text-Green-600 typography-kicker">
                  Tuesday, Wednesday, Thursday, Friday
                </div>
                <div className="text-center text-Black-900 font-bold text-[34px] py-2">
                  09:30 to 18:00
                </div>
              </div>
            </AccordionSpacer>

            <AccordionSpacer>
              <div className="p-0 flex flex-col justify-center items-center gap-0">
                <div className="text-center text-Green-600 typography-kicker">
                  Saturday, Sunday, and on <span className="underline">Holidays</span>
                </div>
                <div className="text-center text-Black-900 font-bold text-[34px] py-2">
                  10:00 to 18:00
                </div>
              </div>
            </AccordionSpacer>

            <AccordionSpacer>
              <div className="p-0 flex flex-col justify-center items-center gap-0">
                <div className="text-center text-Green-600 typography-kicker">
                  Monday
                </div>
                <div className="text-center text-Black-900 font-bold text-[34px] py-2">
                  closed
                </div>
              </div>
            </AccordionSpacer>

          </Accordion>

        </Section>
        <Section columns={2} backgroundColor="bg-white" gapClass="gap-20 xl:gap-36" justifyContent="center">
          <div className="flex -mt-40 flex-col justify-center items-center gap-20">
            <div className="flex items-center justify-center w-[166px] h-[166px] p-4 rotate-[7deg] bg-Yellow rounded-full shadow-lg">
              <p className="text-center text-black">
                On the first Sunday of the month, admission is free!
              </p>
            </div>
            <CardText
              headline="Tickets & Prices"
              headlineStyle="h1"
              body={`Tickets can be purchased at the Museum or in the <a href="/tickets/online-shop" className="underline">Online Shop</a>. 
                We recommend booking <a href="/tickets/zeitfenster" className="underline">Online-Zeitfenstertickets</a> 
              beforehand to avoid waiting at the ticket counter.`}
              spacing="wide"
              alignment="center"
              buttons={[
                {
                  text: "Ticket Cooperations",
                  url: "/en/visit/cooperations",
                  variant: "plain"
                }]}
            />

          </div>
          <Accordion bgColor="green" defaultOpenIndex={0}>
            <AccordionItem title="Single Tickets">
              <div className="flex flex-col items-end justify-start w-full px-4 pb-4 gap-2.5">
                <div className="flex justify-between items-baseline gap-2.5 w-full">
                  <h3 className="text-Black-700 flex-1 text-[21px]">
                    Adults
                  </h3>
                  <h3 className="w-[125px] text-right text-Black-900 text-[21px]">
                    11,00 €
                  </h3>
                </div>
                <div className="flex justify-between items-baseline gap-2.5 w-full">
                  <h3 className="text-Black-700 flex-1 text-[21px]">
                    Children under 6
                  </h3>
                  <h3 className="w-[125px] text-right text-Black-900 text-[21px]">
                    5,00 €
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
                        18,00 €
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-baseline">
                      <p className="flex-1 pr-8">
                        Mini-Families (one adult with up to two children under 14)
                      </p>
                      <p className="font-bold whitespace-nowrap">
                        12,00 €
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-baseline">
                      <p className="flex-1 pr-8">
                        Adults in groups of 10 or more
                      </p>
                      <p className="font-bold whitespace-nowrap">
                        8,00 €
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-baseline">
                      <p className="flex-1 pr-8">
                        Discounted in groups of 10 or more
                      </p>
                      <p className="font-bold whitespace-nowrap">
                        2,00 €
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </AccordionItem>
            <AccordionItem title="Annual Passes and Vouchers">
              <div className="p-5">
                <div className="flex flex-col gap-6">
                  <ul className="flex flex-col gap-4 list-disc pl-4">
                    <li>
                      <div className="flex justify-between items-baseline">
                        <p className="flex-1 pr-8">
                          Adults
                        </p>
                        <p className="font-bold whitespace-nowrap">
                          35,00 €
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between items-baseline">
                        <p className="flex-1 pr-8">
                          Discounted
                        </p>
                        <p className="font-bold whitespace-nowrap">
                          23,00 €
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between items-baseline">
                        <p className="flex-1 pr-8">
                          Families (two adults with up to three children under 14)
                        </p>
                        <p className="font-bold whitespace-nowrap">
                          65,00 €
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between items-baseline">
                        <p className="flex-1 pr-8">
                          Mini-Families (one adult with up to two children under 14)
                        </p>
                        <p className="font-bold whitespace-nowrap">
                          38,00 €
                        </p>
                      </div>
                    </li>
                  </ul>

                  <p>
                    Download the <a href="https://www.naturkundemuseum-shop.de" className="underline">Application Form</a> and apply for your annual pass today. Please send the completed form by email to <a href="mailto:info@mfn.berlin" className="underline">info@mfn.berlin</a>.
                  </p>
                  <h4>Vouchers</h4>
                  <p>You will receive vouchers for a visit to the Museum at the regular ticket counter times.</p>
                </div>
              </div>
            </AccordionItem>
            <AccordionItem title="Discounts">
              <div className="p-5">
                <div className="flex flex-col gap-6">
                  <p>
                    The following people are entitled to discounted admission with the appropriate proof:
                  </p>

                  <ul className="flex flex-col gap-4 list-disc pl-4">
                    <li>
                      <div className="flex justify-between items-baseline">
                        <p className="flex-1 pr-8">
                          Students and students with a student ID card
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between items-baseline">
                        <p className="flex-1 pr-8">
                          Students
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between items-baseline">
                        <p className="flex-1 pr-8">
                          Apprentices
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between items-baseline">
                        <p className="flex-1 pr-8">
                          Pensioners and pensioners
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between items-baseline">
                        <p className="flex-1 pr-8">
                          Social assistance recipients
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between items-baseline">
                        <p className="flex-1 pr-8">
                          Unemployed
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between items-baseline">
                        <p className="flex-1 pr-8">
                          Participants in voluntary services and with the Ehrenamtskarte
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between items-baseline">
                        <p className="flex-1 pr-8">
                          Disabled persons (GdB 50 and above) with the appropriate official proof
                        </p>
                      </div>
                    </li>
                  </ul>

                  <p>
                    You can get a discount with the Museum Pass Berlin, the Welcome Card Berlin, and a ticket for the Deutsches Technikmuseum. <a href="/en/visit/cooperations" className="underline">More information about cooperations</a>
                  </p>
                </div>
              </div>
            </AccordionItem>
            <AccordionItem title="Free Admission">
              <div className="p-5">
                <div className="flex flex-col gap-6">
                  <ul className="flex flex-col gap-4 list-disc pl-4">
                    <li>
                      <div className="flex justify-between items-baseline">
                        <p className="flex-1 pr-8">
                          Preschool children and children under 6
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between items-baseline">
                        <p className="flex-1 pr-8">
                          Up to two teachers, educators, or educators accompanying a class, children's or youth group
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between items-baseline">
                        <p className="flex-1 pr-8">
                          ICOM members and members (International Council of Museums, International Council of Museums)
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between items-baseline">
                        <p className="flex-1 pr-8">
                          Members of the World Federation of Tourist Guide Associations (WFTGA)
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between items-baseline">
                        <p className="flex-1 pr-8">
                          Inhabitants of a member card of the German Museum Association
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between items-baseline">
                        <p className="flex-1 pr-8">
                          Groups of students from Berlin's universities and colleges participating in a course at the museum
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between items-baseline">
                        <p className="flex-1 pr-8">
                          Inhabitants of a valid press pass
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between items-baseline">
                        <p className="flex-1 pr-8">
                          Employees of other Berlin museums who identify themselves as such
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between items-baseline">
                        <p className="flex-1 pr-8">
                          Companions of disabled persons who are registered in the disabled persons' pass
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between items-baseline">
                        <p className="flex-1 pr-8">
                          Refugees and welcome classes who identify themselves as such
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </AccordionItem>

          </Accordion>

        </Section>

        <Section columns={2} backgroundColor="bg-Green-100" gapClass="gap-20 xl:gap-36" justifyContent="center">
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
              headline="Getting Here"
              headlineStyle="h1"
              body="We're looking forward to your visit! The Museum für Naturkunde is located in Berlin-Mitte. We recommend arriving by public transport or by bike, as there are no parking spaces at the Museum and only limited parking spaces in the vicinity."
              spacing="wide"
              alignment="center"
              className="text-[#5f5f5f]"
              buttons={[
                {
                  text: "Museum on Google Maps",
                  url: "https://www.google.com/maps/place/Museum+f%C3%BCr+Naturkunde+Berlin/@52.521666,13.396666,17z/data=!3m1!4b1!4m6!3m5!1s0x47a851c79659d299:0x4f8747d2187d277d!8m2!3d52.521666!4d13.399151!16s%2Fg%2F11c48yq34j",
                  variant: "plain"
                }
              ]}
            />
          </div>

          <Accordion bgColor="white" defaultOpenIndex={0}>
            <AccordionItem title="By Bus & Train">
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
                    </svg>300m Footpath</span></p>
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
                    </svg>1.300m Footpath</span></p>
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
                    </svg>900m Footpath</span></p>
                <br />

                <p>Invalidenpark (
                  <svg className="inline px-[0.1em] h-[24px] w-[20px] m-0 mt-[-3px]" aria-label="Buslinien">
                    <use href={withPrefix("/images/transport-icons3.svg?v=1#bvg-bus")} />
                  </svg>
                  <span className="text-xs font-normal text-Black-700"> 120 123 142 245 N20 N40 </span>
                  )<span className="font-italic text-Black-500">
                    <svg className="inline px-[0.1em] h-[18px] w-[24px] mt-[-4px] opacity-50 m-0" aria-label="Person Walking">
                      <use href={withPrefix("/images/transport-icons3.svg?v=1#person-walking")} />
                    </svg>300m Footpath</span></p>
                <br />
              </div>
            </AccordionItem>
            <AccordionItem title="By Bike">
              <div className="p-5">
                <p>
                  You can also reach the Museum conveniently via the Invalidenstraße with your bike.<br />
                  <br />
                  We have ample bike parking spaces available. This way, you not only contribute to the environment, but you can also flexibly and actively plan your visit. Additionally, we offer you lockers in the cloakroom where you can securely store your bike accessories.<br />
                  <br />
                  There is an electric bike pump at the adjacent Federal Ministry for Digital and Transport, which you can use free of charge at any time.
                </p>
              </div>
            </AccordionItem>
            <AccordionItem title="By Car">
              <div className="p-5">
                <p>
                  There are no parking spaces at the Museum für Naturkunde.<br />
                  <br />
                  Parking lots and car parks in the vicinity:
                </p>
                <div className="p-5">
                  <div className="flex flex-col gap-6">
                    <ul className="flex flex-col gap-4 list-disc pl-4">
                      <li>
                        <div className="flex justify-between items-baseline">
                          <p className="flex-1 pr-8">
                            <a href="https://www.google.de/maps/place/Invalidenstra%C3%9Fe+38,+10115+Berlin/@52.5306377,13.3792736,17z/data=!3m1!4b1!4m5!3m4!1s0x47a851ecba0e90d1:0xab7167f4ea5dd8b9!8m2!3d52.5306377!4d13.3814623" className="underline">Mercure Hotel Berlin City</a>, Invalidenstraße 38, 10115 Berlin, paid, <span className="font-italic text-Black-500">
                              <svg className="inline px-[0.1em] h-[18px] w-[24px] mt-[-4px] opacity-50 m-0" aria-label="Person Walking">
                                <use href={withPrefix("/images/transport-icons3.svg?v=1#person-walking")} />
                              </svg>200m Footpath</span>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="flex justify-between items-baseline">
                          <p className="flex-1 pr-8">
                            <a href="https://www.google.de/maps/place/Chausseestra%C3%9Fe+118,+10115+Berlin/@52.529593,13.3818876,17z/data=!3m1!4b1!4m5!3m4!1s0x47a851ec7dc000d7:0x506c4690a67db5eb!8m2!3d52.5295898!4d13.3840763" className="underline">H+ Hotel Berlin Mitte / Rewe</a>, Chausseestraße 118-120, 10115 Berlin, paid, <span className="font-italic text-Black-500">
                              <svg className="inline px-[0.1em] h-[18px] w-[24px] mt-[-4px] opacity-50 m-0" aria-label="Person Walking">
                                <use href={withPrefix("/images/transport-icons3.svg?v=1#person-walking")} />
                              </svg>350m Footpath</span>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </AccordionItem>
            <AccordionItem title="Accessibility">
              <div className="p-5">
                <p>The accessible entrance is located to the right of the main entrance. Opposite, there are three disabled parking spaces. <br /><br />
                  <strong>Please note:</strong> the disabled parking spaces are currently not accessible due to construction work at the neighboring building. We ask for your understanding!<br /><br />
                  The cloakroom, the accessible WC, and the exhibition floor are accessible from this entrance with a lift or wheelchair ramp. <a href="https://www.museumfuernaturkunde.berlin/en/museum/visit/accessibility" className="underline">More information</a></p>
              </div>
            </AccordionItem>
          </Accordion>
        </Section>
        <Section columns={1} backgroundColor="bg-white" padding="pb-4 pt-16">
          <CardText
            headline="At the Museum"
            headlineStyle="h1"
            body="We warmly welcome all visitors! In our exhibitions, you'll gain insights into the museum's current research through original research objects! Instead of following predetermined paths, you'll explore the gigantic adventures of nature on your own research journey and experience evolution in action.
    <br/><br/>More about our <a href='/en/museum/visit/visitor-regulations' className='underline'>visitor regulations</a>, our <a href='en/about-us/museum/together-against-discrimination-prejudice-and-racism' className='underline'>stance against discrimination, prejudice and racism</a> and our <a href='/en/museum/visit/photography-and-filming' className='underline'>rules for film and photo recordings</a>."
            spacing="wide"
            alignment="center"
          />
          <br /><br />

          <Slideshow imageMap={imageMap}>
            <SlideContent
              imageName="zv_1200x675_WEBSEITE_0.jpg"
              title="Migratory Birds"
              kicker="Our Exhibitions"
              link="/museum/exhibitions/migratory-birds"
              altText="Migratory Birds"
            />
            <SlideContent
              imageName="zp_1200x675_WEBSEITE.jpg"
              title="Future Plan"
              kicker="Our Exhibitions"
              link="/museum/exhibitions/future-plan"
              altText="Future Plan"
            />
            <SlideContent
              imageName="1200x800_0.jpg"
              title="Dinosaurs!"
              kicker="Our Exhibitions"
              link="/museum/exhibitions/dinosaurs-age-of-giant-reptiles"
              altText="Dinosaurs! Age of Giant Reptiles"
            />
            <SlideContent
              imageName="digitize_webseite_V2_1200x800_Live Science.jpg"
              title="digitize!"
              kicker="Our Exhibitions"
              link="/museum/exhibitions/digitize"
              altText="digitize! Live Science"
            />
            <SlideContent
              imageName="sauriersaal_04_c_carola-radke-mfn.jpg"
              title="World of Dinosaurs"
              kicker="Our Exhibitions"
              link="/museum/exhibitions/world-of-dinosaurs"
              altText="Dinosaur skeletons in the Dinosaur Hall"
            />
            <SlideContent
              imageName="system_erde_02_c_carola-radke_mfn.jpg"
              title="System Earth"
              kicker="Our Exhibitions"
              link="/museum/exhibitions/system-earth"
              altText="The multimedia globe at the Museum für Naturkunde Berlin"
            />
            <SlideContent
              imageName="kosmos_saal_c_hwa-ja-goetz-mfn.jpg"
              title="Cosmos and Solar System"
              kicker="Our Exhibitions"
              link="/museum/exhibitions/cosmos-and-solar-system"
              altText="Visitors looking up at projection sky at Museum für Naturkunde Berlin"
            />
            <SlideContent
              imageName="biodivwand_c_carola-radke-mfn.jpg"
              title="Evolution in Action"
              kicker="Our Exhibitions"
              link="/museum/exhibitions/evolution-action"
              altText="The biodiversity wall at Museum für Naturkunde Berlin"
            />
            <SlideContent
              imageName="101028_nasssammlung_02_c_carola-radke-mfn.jpg"
              title="Wet Collection"
              kicker="Our Exhibitions"
              link="/museum/exhibitions/wet-collection"
              altText="Tall shelves with animal specimens in the Wet Collection"
            />
            <SlideContent
              imageName="130220_kellermodell_floh_c_carola-radke_mfn.jpg"
              title="Keller's Insect Models"
              kicker="Our Exhibitions"
              link="/museum/exhibitions/kellers-insect-models"
              altText="Model of a flea"
            />
            <SlideContent
              imageName="2015_bobby_c_carola-radke_mfn_0.jpg"
              title="Highlights of Taxidermy"
              kicker="Our Exhibitions"
              link="/museum/exhibitions/highlights-of-taxidermy"
              altText="The face of the gorilla Bobby, behind it the specimen of a giant eland antelope"
            />
            <SlideContent
              imageName="110919_mineraliensaal_13_c_hwa-ja-goetz-mfn.jpg"
              title="Minerals"
              kicker="Our Exhibitions"
              link="/museum/exhibitions/minerals"
              altText="Display cases with minerals in the Minerals Hall"
            />
            <SlideContent
              imageName="humboldt-intervention-museum-fuer-naturkunde-berlin.jpg"
              title="Humboldt Intervention"
              kicker="Our Exhibitions"
              link="/museum/exhibitions/humboldt-intervention"
              altText="Posters of the Humboldt Intervention between and above the display cases in the Minerals Hall"
            />
            <SlideContent
              imageName="100423_parasiten_03_c_hwaja-goetz_mfn_0.jpg"
              title="Traveling Exhibitions"
              kicker="Our Exhibitions"
              link="/museum/traveling-exhibitions"
              altText="The photo shows a prepared springbok with oxpeckers"
            />
            <SlideContent
              imageName="federband_c_hwaja-goetz_mfn.jpg"
              title="Archive: Special Exhibitions"
              kicker="Our Exhibitions"
              link="/museum/exhibitions/archive-special-exhibitions"
              altText="Feather band made of different colored feathers"
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
                url="/en/museum/visit/accessibility"
              />
              <Card
                variant="classic"
                imageProps={{
                  imageName: "151216_saal_1_picnic-area_28_c_hwaja-goetz-mfn.jpg",
                  alt: "Cloakroom",
                  imageMap: imageMap,
                  className: "w-full h-auto object-cover"
                }}
                textProps={{
                  headline: "Cloakroom",
                  spacing: "tight",
                  headlineStyle: "h3"
                }}
                url="/en/museum/visit"
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
                url="/en/museum/visit/museum-cafe"
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
                url="/en/museum/visit/digital-guide"
              />
            </div>
            <div className="sm:col-span-1 lg:col-span-1">
              <Card
                variant="classic"
                imageProps={{
                  imageName: "299980239_448016240677212_6197202936618778314_n.jpg",
                  alt: "Books filling the shelves in the museum shop. Credits: Humboldt-Innovation GmbH",
                  imageMap: imageMap,
                  className: "w-full h-auto object-cover"
                }}
                textProps={{
                  headline: "Museum Shop",
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
            headline="Special Visits"
            headlineStyle="h1"
            body="We look forward to welcoming groups and special occasions. All educational programs"
            spacing="wide"
            alignment="center"
          />
        </Section>

        <Section columns={4} backgroundColor="bg-Green-100">
          <Card
            variant="classic"
            imageProps={{
              imageName: "160222_Schueler_Fuehrung_System_Erde_07__(c)_Hwa-Ja_Goetz_MfN.jpg",
              alt: "Students discovering objects in the exhibition cases. | Image source: Museum für Naturkunde Berlin",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "School Classes",
              headlineStyle: "h3",
              spacing: "wide"
            }}
            url="/en/museum/education/school-and-kindergarten"
          />
          <Card
            variant="classic"
            imageProps={{
              imageName: "111123_Zeichenkurs_Exploratorium_15_2.jpg",
              alt: "A woman sits at the microscope and draws the magnified view on paper. | Image source: Museum für Naturkunde Berlin",
              imageMap: imageMap,
              className: "w-full h-auto object-cover"
            }}
            textProps={{
              headline: "Adults",
              headlineStyle: "h3",
              spacing: "wide"
            }}
            url="/en/museum/education/adults"
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
              headline: "Children's Birthday Parties",
              headlineStyle: "h3",
              spacing: "wide"
            }}
            url="/en/museum/education/birthday-parties"
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
              headline: "Groups",
              headlineStyle: "h3",
              spacing: "wide"
            }}
            url="/en/museum/education/guided-tours"
          />
        </Section>
        <Section columns={2} backgroundColor="bg-white" gapClass="gap-36" justifyContent="center">
          <CardText
            headline="Frequently Asked Questions"
            headlineStyle="h1"
            body="We receive many questions about visiting the Museum. Here we answer the most frequently asked questions. If you have any other questions, please feel free to contact us!"
            spacing="wide"
            alignment="center"
            className="text-[#5f5f5f]"
            buttons={[
              {
                text: "More FAQs",
                url: "/en/museum/visit/faq",
                variant: "plain"
              }
            ]}
          />

          <Accordion bgColor="green">
            <AccordionItem title="Where can I get tickets?">
              <div className="p-5">
                <p>
                  You can buy online tickets <a href="https://ticketshop.museumfuernaturkunde.berlin" className="underline">here</a> or at the museum ticket counter.
                  <br /><br />
                  We recommend booking online time-slot tickets in advance to avoid waiting times. Tickets can be booked 14 days in advance.
                  <br /><br />
                  A time-slot ticket allows you to enter the museum within one hour of your booked time. After that, you can stay in the museum as long as you like during our opening hours.
                  <br /><br />
                  Note: Your admission ticket is valid for all current exhibitions in the Museum für Naturkunde on the same day.
                </p>
              </div>
            </AccordionItem>

            <AccordionItem title="How do I best get to the museum?">
              <div className="p-5">
                <p>We recommend using public transportation or cycling to reach the museum.</p>
              </div>
            </AccordionItem>

            <AccordionItem title="Is there an audio guide?">
              <div className="p-5">
                <p>Yes. We offer a free digital guide for your own smartphone in 11 languages. There is also an audio guide for children and a highlights tour for the deaf in German Sign Language (DGS).
                  <br /><br />
                  We also offer two themed audio guides to experience the exhibition and objects from additional perspectives.
                  <br /><br />
                  <a href="https://www.museumfuernaturkunde.berlin/en/museum/visit/digital-guide" className="underline">Here</a> you can find more information.
                  <br /><br />
                  We recommend bringing your own headphones to use the audio guide.</p>
              </div>
            </AccordionItem>

            <AccordionItem title="Can I take photos in the museum?">
              <div className="p-5">
                <p>Photography for personal use is allowed in the museum. Commercial photography requires permission. More information <a href="https://www.museumfuernaturkunde.berlin/en/museum/visit/photography-and-filming" className="underline">here</a>.</p>
              </div>
            </AccordionItem>

            <AccordionItem title="Can I bring a stroller into the museum?">
              <div className="p-5">
                <p>Yes, you can visit the museum with a stroller.</p>
              </div>
            </AccordionItem>

            <AccordionItem title="Can I bring animals into the museum?">
              <div className="p-5">
                <p>No. Exceptions apply for assistance and guide dogs with appropriate documentation.</p>
              </div>
            </AccordionItem>

            <AccordionItem title="Accessible entrance">
              <div className="p-5">
                <p>The accessible entrance is located to the right of the main portal. There are three disabled parking spaces opposite.
                  <br /><br />
                  <strong>Please note:</strong> the disabled parking spaces are currently not accessible due to construction work on the neighboring building. We ask for your understanding!
                  <br /><br />
                  The cloakrooms, accessible toilet and exhibition level can be reached from this entrance by elevator or stair lift. <a href="https://www.museumfuernaturkunde.berlin/en/museum/visit/accessibility" className="underline">More information</a></p>
              </div>
            </AccordionItem>
          </Accordion>
        </Section>
        <Section columns={1} backgroundColor="bg-Black-100">
          <CardText
            headline="Contact"
            headlineStyle="h1"
            body="Do you need anything else for your visit?"
            spacing="wide"
            alignment="center"
          />
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
            <Button
              text="Ask Us a Question"
              variant="primary"
              url="/en/contact"
            />
            <Button
              text="Call Us"
              variant="primary"
              url="/en/phone"
            />
            <Button
              text="Visit Us at the Museum"
              variant="primary"
              url="/en/visit"
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
    title="Visit"
    description="Plan Your Visit to the Museum für Naturkunde Berlin"
    pathname="/visit"
  />
)
