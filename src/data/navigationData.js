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
              { to: "/de/besuch-planen/ausstellungen/zugvoegel-eine-sammlung-bewegung", label: "ZUGvögel" },
              { to: "/de/museum/ausstellungen/zukunftsplan", label: "Zukunftsplan" },
              { to: "/de/besuch-planen/ausstellungen/dinosaurier-zeitalter-der-riesenechsen", label: "Dinosaurier!" },
              { to: "/de/museum/ausstellungen/digitize", label: "digitize!" },
              { to: "/de/besuch-planen/ausstellungen/saurierwelt", label: "Saurierwelt" },
              { to: "/de/besuch-planen/ausstellungen/system-erde", label: "System Erde" },
              { to: "/de/besuch-planen/ausstellungen/kosmos-und-sonnensystem", label: "Kosmos und Sonnensystem" },
              { to: "/de/besuch-planen/ausstellungen/evolution-aktion", label: "Evolution in Aktion" },
              { to: "/de/besuch-planen/ausstellungen/nass-sammlung", label: "Nass-Sammlung" },
              { to: "/de/besuch-planen/ausstellungen/kellers-insektenmodelle", label: "Kellers Insektenmodelle" },
              { to: "/de/besuch-planen/ausstellungen/highlights-der-praeparationskunst", label: "Highlights der Präparationskunst" },
              { to: "/de/besuch-planen/ausstellungen/mineralien", label: "Mineralien" },
              { to: "/de/besuch-planen/ausstellungen/humboldt-intervention", label: "Humboldt-Intervention" },
              { to: "/de/museum/wanderausstellungen", label: "Wanderausstellungen" },
              { to: "/de/besuch-planen/ausstellungen/archiv-sonderausstellungen", label: "Archiv: Sonderausstellungen" }
            ]
          }
        ]
      },
      {
        column: 2,
        items: [
          {
            to: "/de/besuch-planen/fuernatur-digital",
            label: "#fürNatur digital",
            order: 1,
            submenu: [
              { to: "/de/besuch-planen/fuernatur-digital/beats-bones-der-podcast-aus-dem-museum-fuer-naturkunde-berlin", label: "Beats & Bones" },
              { to: "/de/besuch-planen/fuernatur-digital/queering-nature", label: "Queering Nature" },
              { to: "/de/besuch-planen/fuernatur-digital/suesses-oder-saurier-der-wissenspodcast-fuer-kinder", label: "Süßes oder Saurier" },
              { to: "/de/besuch-planen/fuernatur-digital/wie-gras.-ein-literarischer-audioguide-zum-anthropozaen", label: "Wie Gras" }
            ]
          }
        ]
      },
      {
        column: 3,
        items: [
          {
            to: "/de/besuch-planen/im-museum",
            label: "Im Museum",
            order: 1,
            submenu: [
              { to: "/de/besuch-planen/im-museum/anfahrt", label: "Anfahrt" },
              { to: "/de/besuch-planen/im-museum/barrierefreiheit", label: "Barrierefreiheit" },
              { to: "/de/besuch-planen/im-museum/besuchendenordnung", label: "Besucherordnung" },
              { to: "/de/besuch-planen/im-museum/digital-guide", label: "Digital Guide / Audioguide" },
              { to: "/de/besuch-planen/im-museum/fotografieren-und-filmaufnahmen", label: "Fotografieren und Filmaufnahmen" },
              { to: "/de/besuch-planen/im-museum/museumscafe", label: "Museumscafé" },
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
            to: "/de/mitmachen/buergerwissenschaften",
            label: "Bürgerwissenschaften",
            order: 1
          },
          {
            to: "/de/mitmachen/ehrenamt",
            label: "Ehrenamt",
            order: 2
          }
        ]
      },
      {
        column: 2,
        items: [
          {
            to: "/de/mitmachen/bildungsangebote",
            label: "Bildungsangebote",
            order: 1,
            submenu: [
              { to: "/de/mitmachen/bildungsangebote/fuernatur-digital-angebote-fuer-familien-und-kinder", label: "Digitale Angebote" },
              { to: "/de/mitmachen/bildungsangebote/fuehrungen", label: "Führungen" },
              { to: "/de/mitmachen/bildungsangebote/schule-und-kita", label: "Schule und Kita" },
              { to: "/de/mitmachen/bildungsangebote/familien", label: "Familien" },
              { to: "/de/mitmachen/bildungsangebote/kindergeburtstage", label: "Kindergeburtstage" },
              { to: "/de/mitmachen/bildungsangebote/erwachsene", label: "Erwachsene" },
              { to: "/de/mitmachen/bildungsangebote/fortbildungen", label: "Fortbildungen" }
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
            to: "/de/forschung/forschung",
            label: "Forschung",
            order: 1,
            submenu: [
              { to: "/de/forschung/forschung/dynamik-der-natur", label: "Dynamik der Natur" },
              { to: "/de/forschung/forschung/zukunft-der-sammlung", label: "Zukunft der Sammlung" },
              { to: "/de/forschung/forschung/gesellschaft-und-natur", label: "Gesellschaft und Natur" }
            ]
          }
        ]
      },
      {
        column: 2,
        items: [
          {
            to: "/de/forschung/infrastruktur",
            label: "Infrastruktur",
            order: 1,
            submenu: [
              { to: "/de/forschung/infrastruktur/sammlung", label: "Sammlung" },
              { to: "/de/forschung/infrastruktur/labore", label: "Labore" },
              { to: "/de/forschung/infrastruktur/it-forschungsinfrastruktur", label: "IT Forschungsinfrastruktur" },
              { to: "/de/forschung/infrastruktur/forschungsdaten-infrastruktur", label: "Forschungsdatenmanagementstruktur" }
            ]
          },
          {
            to: "/de/forschung/transfer",
            label: "Transfer",
            order: 2,
            submenu: [
              { to: "/de/forschung/transfer/kommunizieren", label: "Kommunizieren" },
              { to: "/de/forschung/transfer/beraten", label: "Beraten" },
              { to: "/de/forschung/transfer/anwenden", label: "Anwenden" }
            ]
          }
        ]
      },
      {
        column: 3,
        items: [
          {
            to: "/de/forschung/personensuche",
            label: "Personensuche",
            order: 1
          },
          // {
          //   to: "/de/forschung/publikationen",
          //   label: "Publikationen",
          //   order: 2
          // }
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
              { to: "/de/museum/heute/das-museum", label: "Das Museum" },
              { to: "/de/museum/heute/bau", label: "Bau" },
              { to: "/de/museum/heute/berliner-sparkasse-ist-hauptsponsor-des-museums-fuer-naturkunde-berlin", label: "Sponsoren" },
              { to: "/de/museum/heute/team", label: "Team" }
            ]
          }
        ]
      },
      {
        column: 2,
        items: [
          {
            to: "/de/museum/zukunft",
            label: "Das Museum in Zukunft",
            order: 1,
            submenu: [
              { to: "/de/museum/zukunft/zukunftsplan", label: "Zukunftsplan" },
              { to: "/de/wissenschaft/sammlungserschliessung", label: "Sammlungserschließung" },
              { to: "/de/museum/zukunft/wissenstransfer", label: "Wissenstransfer" },
              // { to: "/de/zukunft/werde-teil-unserer-museums-evolution", label: "Museums-Evolution" }
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
              { to: "/de/museum/medien/presse", label: "Presse" },
              { to: "/de/museum/medien/news", label: "News" },
              { to: "/de/museum/medien/journal-fuer-natur", label: "Journal „Für Natur“" },
              { to: "http://eepurl.com/vsVBv", label: "Newsletter" }
            ]
          },
          {
            to: "/de/museum/jobs-und-karriere",
            label: "Jobs & Karriere",
            order: 2,
            submenu: [
              { to: "/de/museum/jobs-und-karriere/hier-arbeiten", label: "Hier Arbeiten" },
              { to: "/de/museum/jobs-und-karriere/stellenausschreibungen", label: "Stellenausschreibungen" }
            ]
          }
        ]
      }
    ]
  }
}; 