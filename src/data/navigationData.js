export const topNavLinks = [
  { to: "/de/museum/besuch-planen", label: "Öffnungszeiten" },
  { to: "/de/museum/besuch-planen/anfahrt", label: "Anfahrt" },
  { to: "https://ticketshop.museumfuernaturkunde.berlin", label: "Tickets", isSpecial: true },
  { to: "/de/pressemitteilungen", label: "Presse" },
  { to: "/de/museum/medien/news", label: "News" },
  { to: "https://www.naturkundemuseum-shop.de", label: "Shop" }
];

export const mainNavData = {
  besuchPlanen: {
    to: "/de/besuch-planen",
    label: "Besuch planen",
    submenuColumns: [
      {
        column: 1,
        items: [
          {
            to: "/de/besuch-planen/ausstellungen",
            label: "Ausstellungen",
            order: 1,
            submenu: [
              { to: "/de/museum/ausstellungen/zugvoegel", label: "ZUGvögel" },
              { to: "/de/museum/ausstellungen/zukunftsplan", label: "Zukunftsplan" },
              { to: "/de/museum/ausstellungen/dinosaurier-zeitalter-der-riesenechsen", label: "Dinosaurier!" },
              { to: "/de/museum/ausstellungen/digitize", label: "digitize!" },
              { to: "/de/museum/ausstellungen/saurierwelt", label: "Saurierwelt" },
              { to: "/de/museum/ausstellungen/system-erde", label: "System Erde" },
              { to: "/de/museum/ausstellungen/kosmos-und-sonnensystem", label: "Kosmos und Sonnensystem" },
              { to: "/de/museum/ausstellungen/evolution-aktion", label: "Evolution in Aktion" },
              { to: "/de/museum/ausstellungen/nass-sammlung", label: "Nass-Sammlung" },
              { to: "/de/museum/ausstellungen/kellers-insektenmodelle", label: "Kellers Insektenmodelle" },
              { to: "/de/museum/ausstellungen/highlights-der-praeparationskunst", label: "Highlights der Präparationskunst" },
              { to: "/de/museum/ausstellungen/mineralien", label: "Mineralien" },
              { to: "/de/museum/ausstellungen/humboldt-intervention", label: "Humboldt-Intervention" },
              { to: "/de/museum/wanderausstellungen", label: "Wanderausstellungen" },
              { to: "/de/museum/ausstellungen/archiv-sonderausstellungen", label: "Archiv: Sonderausstellungen" }
            ]
          }
        ]
      },
      {
        column: 2,
        items: [
          {
            to: "/de/museum/fuernatur-digital",
            label: "#fürNatur digital",
            order: 1,
            submenu: [
              { to: "/de/museum/fuernatur-digital/beats-bones-der-podcast", label: "Beats & Bones" },
              { to: "/de/museum/fuernatur-digital/queering-nature", label: "Queering Nature" },
              { to: "/de/museum/fuernatur-digital/suesses-oder-saurier", label: "Süßes oder Saurier" },
              { to: "/de/museum/fuernatur-digital/wie-gras", label: "Wie Gras" }
            ]
          }
        ]
      },
      {
        column: 3,
        items: [
          {
            to: "/de/museum/besuch-planen",
            label: "Im Museum",
            order: 1,
            submenu: [
              { to: "/de/museum/besuch-planen/anfahrt", label: "Anfahrt" },
              { to: "/de/museum/besuch-planen/barrierefreiheit", label: "Barrierefreiheit" },
              { to: "/de/museum/besuch-planen/besuchendenordnung", label: "Besucherordnung" },
              { to: "/de/museum/besuch-planen/digital-guide", label: "Digital Guide / Audioguide" },
              { to: "/de/museum/besuch-planen/fotografieren-und-filmaufnahmen", label: "Fotografieren und Filmaufnahmen" },
              { to: "/de/museum/besuch-planen/museumscafe", label: "Museumscafé" },
              { to: "https://www.naturkundemuseum-shop.de", label: "Museumsshop" },
              { to: "https://ticketshop.museumfuernaturkunde.berlin", label: "Ticketshop" }
            ]
          }
        ]
      }
    ]
  },
  mitmachen: {
    to: "/de/mitmachen",
    label: "Mitmachen",
    submenuColumns: [
      {
        column: 1,
        items: [
          {
            to: "/de/museum/mitmachen/buergerwissenschaften",
            label: "Bürgerwissenschaften",
            order: 1
          },
          {
            to: "/de/mitmachen/ehrenamtliches-engagement",
            label: "Ehrenamt",
            order: 2
          }
        ]
      },
      {
        column: 2,
        items: [
          {
            to: "/de/mitmachen/bildung",
            label: "Bildungsangebote",
            order: 1,
            submenu: [
              { to: "/de/museum/bildung/fuernatur-digital-angebote", label: "Digitale Angebote" },
              { to: "/de/museum/bildung/fuehrungen", label: "Führungen" },
              { to: "/de/museum/bildung/schule-und-kita", label: "Schule und Kita" },
              { to: "/de/museum/bildung/familien", label: "Familien" },
              { to: "/de/museum/bildung/kindergeburtstage", label: "Kindergeburtstage" },
              { to: "/de/museum/bildung/erwachsene", label: "Erwachsene" },
              { to: "/de/museum/bildung/fortbildungen", label: "Fortbildungen" }
            ]
          }
        ]
      },
      {
        column: 3,
        items: [
          {
            to: "/de/mitmachen/veranstaltungen",
            label: "Veranstaltungen",
            order: 1
          }
        ]
      }
    ]
  },
  forschung: {
    to: "/de/forschung",
    label: "Forschung",
    submenuColumns: [
      {
        column: 1,
        items: [
          {
            to: "/de/wissenschaft/forschung",
            label: "Forschung",
            order: 1,
            submenu: [
              { to: "/de/wissenschaft/forschung/dynamik-der-natur", label: "Dynamik der Natur" },
              { to: "/de/wissenschaft/forschung/zukunft-der-sammlung", label: "Zukunft der Sammlung" },
              { to: "/de/wissenschaft/forschung/gesellschaft-und-natur", label: "Gesellschaft und Natur" }
            ]
          }
        ]
      },
      {
        column: 2,
        items: [
          {
            to: "/de/wissenschaft/infrastruktur",
            label: "Infrastruktur",
            order: 1,
            submenu: [
              { to: "/de/wissenschaft/infrastruktur/sammlung", label: "Sammlung" },
              { to: "/de/wissenschaft/infrastruktur/labore", label: "Labore" },
              { to: "/de/wissenschaft/infrastruktur/it-forschungsinfrastruktur", label: "IT Forschungsinfrastruktur" },
              { to: "/de/wissenschaft/infrastruktur/forschungsdatenmanagementstruktur", label: "Forschungsdatenmanagementstruktur" }
            ]
          },
          {
            to: "/de/wissenschaft/transfer",
            label: "Transfer",
            order: 2,
            submenu: [
              { to: "/de/wissenschaft/transfer/kommunizieren", label: "Kommunizieren" },
              { to: "/de/wissenschaft/transfer/beraten", label: "Beraten" },
              { to: "/de/wissenschaft/transfer/anwenden", label: "Anwenden" }
            ]
          }
        ]
      },
      {
        column: 3,
        items: [
          {
            to: "/de/forschung/team-projekte",
            label: "Team & Projekte",
            order: 1
          },
          {
            to: "/de/forschung/publikationen",
            label: "Publikationen",
            order: 2
          }
        ]
      }
    ]
  },
  museum: {
    to: "/de/museum",
    label: "Das Museum",
    submenuColumns: [
      {
        column: 1,
        items: [
          {
            to: "/de/museum/heute",
            label: "Das Museum heute",
            order: 1,
            submenu: [
              { to: "/de/ueber-uns/das-museum", label: "Das Museum" },
              { to: "/de/ueber-uns/bau", label: "Bau" },
              { to: "/de/ueber-uns/berliner-sparkasse-ist-hauptsponsor", label: "Sponsoren" },
              { to: "/de/ueber-uns/team", label: "Team" }
            ]
          }
        ]
      },
      {
        column: 2,
        items: [
          {
            to: "/de/museum/zukunft",
            label: "Das Museum in der Zukunft",
            order: 1,
            submenu: [
              { to: "/de/museum/zukunft/zukunftsplan", label: "Zukunftsplan" },
              { to: "/de/wissenschaft/sammlungserschliessung-und-entwicklung", label: "Sammlungserschließung" },
              { to: "/de/zukunft/wissenstransfer", label: "Wissenstransfer" },
              { to: "/de/zukunft/werde-teil-unserer-museums-evolution", label: "Museums-Evolution" }
            ]
          }
        ]
      },
      {
        column: 3,
        items: [
          {
            to: "/de/museum/medien",
            label: "Medien",
            order: 1,
            submenu: [
              { to: "/de/pressemitteilungen", label: "Presse" },
              { to: "/de/museum/medien/news", label: "News" },
              { to: "/de/museum/medien/journal-fuer-natur", label: "Journal \"für Natur\"" },
              { to: "http://eepurl.com/vsVBv", label: "Newsletter" }
            ]
          },
          {
            to: "/de/museum/jobs-und-karriere",
            label: "Jobs & Karriere",
            order: 2,
            submenu: [
              { to: "/de/museum/jobs-und-karriere/arbeiten-am-museum", label: "Hier Arbeiten" },
              { to: "/de/ueber-uns/jobs-und-karriere/stellenausschreibungen", label: "Stellenausschreibungen" }
            ]
          }
        ]
      }
    ]
  }
}; 