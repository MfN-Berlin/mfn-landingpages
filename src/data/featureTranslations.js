export const featureTranslations = {
  feedback: {
    de: {
      pageHelpful: "Finden Sie diese Seite hilfreich?",
      helpImprove: "Mit Ihrer Bewertung helfen Sie uns, dieses Angebot für Sie zu verbessern.",
      privacyNote: "Für diese Befragung erheben wir keine persönlichen Daten.",
      privacyLink: "Hinweise zum Datenschutz",
      ratingMessages: {
        1: "Das tut uns sehr leid! Ihre Erfahrung ist wichtig für uns - was können wir verbessern?",
        2: "Das können wir besser! Wir würden gerne verstehen, was Sie enttäuscht hat.",
        3: "Danke für Ihre ausgewogene Bewertung! Was hat Ihnen gefallen und wo sehen Sie Verbesserungspotenzial?",
        4: "Schön, dass Ihnen die Seite gefällt! Wir sind neugierig zu erfahren, was Sie überzeugt hat.",
        5: "Wow, das freut uns sehr! Mögen Sie uns erzählen, was Ihnen besonders gut gefallen hat?"
      },
      star: "Stern",
      stars: "Sterne",
      feedbackPlaceholder: "Ihr Feedback (optional)",
      sendComment: "Kommentar senden"
    },
    en: {
      pageHelpful: "Do you find this page helpful?",
      helpImprove: "Your feedback can help us improve this website for you. We will not collect any personal data for this survey.",
      privacyNote: "We do not collect any personal data for this survey.",
      privacyLink: "Privacy Policy",
      ratingMessages: {
        1: "We're very sorry! Your experience is important to us - how can we improve?",
        2: "We can do better! We'd like to understand what disappointed you.",
        3: "Thank you for your balanced rating! What did you like and where do you see room for improvement?",
        4: "We're glad you like the page! We're curious to know what convinced you.",
        5: "Wow, that's great to hear! Would you like to tell us what you particularly enjoyed?"
      },
      star: "star",
      stars: "stars",
      feedbackPlaceholder: "Your feedback (optional)",
      sendComment: "Send Comment"
    },
    'de-x-ls': {
      title: 'Ihre Meinung ist uns wichtig',
      subtitle: 'Wie gefällt Ihnen unser Museum?',
      ratingLabels: {
        1: 'Nicht gut',
        2: 'Weniger gut',
        3: 'Okay',
        4: 'Gut',
        5: 'Sehr gut'
      },
      submitButton: 'Absenden',
      thankYouMessage: 'Vielen Dank für Ihre Bewertung!',
      errorMessage: 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später noch einmal.'
    }
  },
  openToday: {
    de: {
      today: "Heute",
      tomorrow: "Morgen",
      isMuseum1: "öffnet das Museum von",
      isMuseum2: "ist das Museum",
      closedMessage: "geschlossen",
      until: "bis",
      holiday: "Feiertag",
      clock: "Uhr"
    },
    en: {
      today: "Today",
      tomorrow: "Tomorrow",
      isMuseum1: "we are open from",
      isMuseum2: "the museum is",
      closedMessage: "closed",
      until: "to",
      holiday: "holiday",
      clock: "hrs"
    },
    'de-x-ls': {
      title: 'Öffnungszeiten',
      subtitle: 'Heute geöffnet',
      closed: 'Heute geschlossen',
      specialHours: 'Besondere Öffnungszeiten',
      regularHours: 'Reguläre Öffnungszeiten',
      monday: 'Montag',
      tuesday: 'Dienstag',
      wednesday: 'Mittwoch',
      thursday: 'Donnerstag',
      friday: 'Freitag',
      saturday: 'Samstag',
      sunday: 'Sonntag',
      closedText: 'geschlossen',
      openText: 'geöffnet',
      until: 'bis',
      from: 'von',
      to: 'bis'
    }
  },
  upcomingHoliday: {
    de: {
      title: 'Feiertage',
      holidays: [
          { month: 12, date: 24, duration: 3, headline: "Weihnachten 2024", message: "Am 24. und 25. Dezember bleibt das Museum geschlossen. Am 26. Dezember öffnet das Museum von 10:00 bis 18:00 Uhr." },
          { month: 12, date: 31, duration: 3, headline: "Neujahr 2025", message: "am 31. Dezember bleibt das Museum geschlossen, an Neujahr öffnet das Museum wieder, von 10:00 bis 18:00 Uhr." },
          { month: 3, date: 8, duration: 1, headline: "Internationaler Frauentag", message: "Am 8. März öffnet das Museum von 10:00 bis 18:00 Uhr." },
          { month: 4, date: 18, duration: 5, headline: "Karfreitag, Ostersonntag und Ostermontag", message: "an Karfreitag, Ostersonntag und Ostermontag öffnet das Museum von 10:00 bis 18:00 Uhr." },
          { month: 5, date: 1, duration: 1, headline: "Tag der Arbeit", message: "Am 1. Mai öffnet das Museum von 10:00 bis 18:00 Uhr." },
          { month: 5, date: 8, duration: 1, headline: "80. Jahrestag der Befreiung vom Nationalsozialismus", message: "Am 8. Mai öffnet das Museum von 10:00 bis 18:00 Uhr." },
          { month: 5, date: 29, duration: 1, headline: "Christi Himmelfahrt", message: "Am 29. Mai hat das Museum von 10:00 bis 18:00 Uhr geöffnet" },
          { month: 6, date: 8, duration: 2, headline: "Pfingsten", message: "An Pfingstsonntag und Pfingstmontag öffnet das Museum von 10:00 bis 18:00 Uhr." },
          { month: 10, date: 3, duration: 1, headline: "Tag der Deutschen Einheit", message: "Am 3. Oktober öffnet das Museum von 10:00 bis 18:00 Uhr." }
      ]
    },
    en: {
      title: 'Holidays',
      holidays: [
        { month: 12, date: 24, duration: 3, headline: "Christmas 2024", message: "On December 24 and 25, the museum will be closed. On December 26, the museum will open from 10:00 AM to 6:00 PM." },
        { month: 12, date: 31, duration: 3, headline: "New Year 2025", message: "On December 31, the museum will be closed. On New Year's Day, the museum will reopen from 10:00 AM to 6:00 PM." },
        { month: 3, date: 8, duration: 1, headline: "International Women's Day", message: "On March 8, the museum will be open from 10:00 AM to 6:00 PM." },
        { month: 4, date: 18, duration: 5, headline: "Good Friday, Easter Sunday, and Easter Monday", message: "On Good Friday, Easter Sunday, and Easter Monday, the museum will be open from 10:00 AM to 6:00 PM." },
        { month: 5, date: 1, duration: 1, headline: "Labor Day", message: "On May 1, the museum will be open from 10:00 AM to 6:00 PM." },
        { month: 5, date: 8, duration: 1, headline: "80. Jahrestag der Befreiung vom Nationalsozialismus", message: "On May 8, the museum will be open from 10:00 AM to 6:00 PM." },
        { month: 5, date: 29, duration: 1, headline: "Ascension Day", message: "On May 29, the museum will be open from 10:00 AM to 6:00 PM." },
        { month: 6, date: 8, duration: 2, headline: "Pentecost", message: "On Pentecost Sunday and Monday, the museum will be open from 10:00 AM to 6:00 PM." },
        { month: 10, date: 3, duration: 1, headline: "German Unity Day", message: "On October 3, the museum will be open from 10:00 AM to 6:00 PM." }
    ]
    },
    'de-x-ls': {
      title: 'Feiertage',
      holidays: [
        { month: 12, date: 24, duration: 3, headline: "Weihnachten 2024", message: "Am 24. und 25. Dezember bleibt das Museum geschlossen. Am 26. Dezember öffnet das Museum von 10:00 bis 18:00 Uhr." },
        { month: 12, date: 31, duration: 3, headline: "Neujahr 2025", message: "am 31. Dezember bleibt das Museum geschlossen, an Neujahr öffnet das Museum wieder, von 10:00 bis 18:00 Uhr." },
        { month: 3, date: 8, duration: 1, headline: "Internationaler Frauentag", message: "Am 8. März öffnet das Museum von 10:00 bis 18:00 Uhr." },
        { month: 4, date: 18, duration: 5, headline: "Karfreitag, Ostersonntag und Ostermontag", message: "an Karfreitag, Ostersonntag und Ostermontag öffnet das Museum von 10:00 bis 18:00 Uhr." },
        { month: 5, date: 1, duration: 1, headline: "Tag der Arbeit", message: "Am 1. Mai öffnet das Museum von 10:00 bis 18:00 Uhr." },
        { month: 5, date: 8, duration: 1, headline: "80. Jahrestag der Befreiung vom Nationalsozialismus", message: "Am 8. Mai öffnet das Museum von 10:00 bis 18:00 Uhr." },
        { month: 5, date: 29, duration: 1, headline: "Christi Himmelfahrt", message: "Am 29. Mai hat das Museum von 10:00 bis 18:00 Uhr geöffnet" },
        { month: 6, date: 8, duration: 2, headline: "Pfingsten", message: "An Pfingstsonntag und Pfingstmontag öffnet das Museum von 10:00 bis 18:00 Uhr." },
        { month: 10, date: 3, duration: 1, headline: "Tag der Deutschen Einheit", message: "Am 3. Oktober öffnet das Museum von 10:00 bis 18:00 Uhr." }
      ]
    }
  },
  accessibilityNav: {
    de: {
      homepage: "Startseite",
      signLanguage: "Gebärdensprache",
      easyLanguage: "Leichte Sprache",
      accessibility: "Barrierefreiheit",
      urls: {
        signLanguage: "/de/gebaerdensprache",
        easyLanguage: "/leichte-sprache",
        accessibility: "/de/museum/besuch-planen/barrierefreiheit"
      }
    },
    en: {
      homepage: "Homepage",
      signLanguage: "Sign Language",
      easyLanguage: "Simple Language",
      accessibility: "Accessibility",
      urls: {
        signLanguage: "/en/sign-language",
        easyLanguage: "/leichte-sprache",
        accessibility: "/en/museum/plan-your-visit/accessibility"
      }
    },
    'leichte-sprache': {
      homepage: "Startseite",
      signLanguage: "Gebärdensprache",
      easyLanguage: "Leichte Sprache",
      accessibility: "Barrierefreiheit",
      urls: {
        signLanguage: "/leichte-sprache/gebaerdensprache",
        easyLanguage: "/leichte-sprache",
        accessibility: "/leichte-sprache/barrierefreiheit"
      }
    }
  },
  footer: {
    de: {
      socialLinks: {
        instagram: "Instagram",
        twitter: "Twitter",
        tiktok: "TikTok",
        facebook: "Facebook",
        linkedin: "LinkedIn",
        youtube: "YouTube"
      },
      address: {
        title: "Adresse",
        phone: "Tel",
        fax: "Fax",
        email: "E-Mail",
        website: "museumfuernaturkunde.berlin"
      },
      prices: {
        title: "Eintrittspreise",
        adult: "Erwachsene",
        reduced: "Ermäßigt",
        groupPrices: "Gruppenpreise und Weiteres"
      },
      openingHours: {
        title: "Öffnungszeiten",
        weekdays: "Dienstag – Freitag",
        weekend: "Wochenende und Feiertage",
        weekdayTimes: "9.30 – 18.00 Uhr",
        weekendTimes: "10.00 – 18.00 Uhr"
      },
      newsletter: {
        title: "Newsletter",
        emailPlaceholder: "E-Mail-Adresse",
        subscribe: "Anmelden",
        privacyNote: "Mit Klick auf \"Anmelden\" bestätigen Sie unsere",
        privacyLink: "Datenschutzerklärung"
      },
      links: {
        press: "Presse",
        news: "News",
        shop: "Shop",
        privacyPolicy: "Datenschutzerklärung",
        privacySettings: "Datenschutzeinstellungen",
        accessibility: "Digitale Barrierefreiheit",
        imprint: "Impressum",
        newsletter: "Newsletter",
        jobsAndCareer: "Jobs & Karriere"
      },
      instituteName: "Museum für Naturkunde Leibniz-Institut für Evolutions- und Biodiversitätsforschung"
    },
    en: {
      socialLinks: {
        instagram: "Instagram",
        twitter: "Twitter",
        tiktok: "TikTok",
        facebook: "Facebook",
        linkedin: "LinkedIn",
        youtube: "YouTube"
      },
      address: {
        title: "Address",
        phone: "Phone",
        fax: "Fax",
        email: "Email",
        website: "museumfuernaturkunde.berlin"
      },
      prices: {
        title: "Prices",
        adult: "Adults",
        reduced: "Reduced",
        groupPrices: "Groups and specials"
      },
      openingHours: {
        title: "Opening Hours",
        weekdays: "Tuesday – Friday",
        weekend: "Weekend and Public Holiday",
        weekdayTimes: "9.30 – 18.00 hrs",
        weekendTimes: "10.00 – 18.00 hrs"
      },
      newsletter: {
        title: "Newsletter",
        emailPlaceholder: "Email address",
        subscribe: "Subscribe",
        privacyNote: "By clicking \"Subscribe\" you accept our",
        privacyLink: "General Privacy Notice"
      },
      links: {
        press: "Press",
        news: "News",
        shop: "Shop",
        privacyPolicy: "General Privacy Notice",
        privacySettings: "Privacy Settings",
        accessibility: "Web Accessibility",
        imprint: "Imprint",
        newsletter: "Newsletter",
        jobsAndCareer: "Jobs & Career"
      },
      instituteName: "Museum für Naturkunde Leibniz Institute for Evolution and Biodiversity Research"
    },
    'leichte-sprache': {
      socialLinks: {
        instagram: "Instagram",
        twitter: "Twitter",
        tiktok: "TikTok",
        facebook: "Facebook",
        linkedin: "LinkedIn",
        youtube: "YouTube"
      },
      address: {
        title: "Adresse",
        phone: "Tel",
        fax: "Fax",
        email: "E-Mail",
        website: "museumfuernaturkunde.berlin"
      },
      prices: {
        title: "Eintrittspreise",
        adult: "Erwachsene",
        reduced: "Ermäßigt",
        groupPrices: "Gruppenpreise und Weiteres"
      },
      openingHours: {
        title: "Öffnungszeiten",
        weekdays: "Dienstag – Freitag",
        weekend: "Wochenende und Feiertage",
        weekdayTimes: "9.30 – 18.00 Uhr",
        weekendTimes: "10.00 – 18.00 Uhr"
      },
      newsletter: {
        title: "Newsletter",
        emailPlaceholder: "E-Mail-Adresse",
        subscribe: "Anmelden",
        privacyNote: "Mit Klick auf \"Anmelden\" bestätigen Sie unsere",
        privacyLink: "Datenschutzerklärung"
      },
      links: {
        press: "Presse",
        news: "News",
        shop: "Shop",
        privacyPolicy: "Datenschutzerklärung",
        privacySettings: "Datenschutzeinstellungen",
        accessibility: "Barrierefreiheit",
        imprint: "Impressum",
        newsletter: "Newsletter",
        jobsAndCareer: "Jobs & Karriere"
      },
      instituteName: "Museum für Naturkunde Leibniz-Institut für Evolutions- und Biodiversitätsforschung"
    }
  },
  cookieConsent: {
    de: {
      title: "Datenschutzeinstellungen",
      intro: "Wir verwenden Cookies und ähnliche Technologien, um Ihnen ein optimales Nutzungserlebnis zu bieten. Einige sind technisch notwendig, andere helfen uns, unser Angebot zu verbessern.",
      settings: "Einstellungen anpassen",
      acceptEssential: "Nur notwendige akzeptieren",
      acceptAll: "Alle akzeptieren",
      back: "Zurück",
      accepted: "AN",
      rejected: "AUS",
      saveSettings: "Einstellungen speichern",
      categories: {
        essential: {
          title: "Technisch notwendige Cookies",
          description: "Diese Cookies sind für den Betrieb der Website erforderlich und können nicht deaktiviert werden."
        },
        youtube: {
          title: "YouTube",
          description: "Ermöglicht das Einbetten von YouTube-Videos."
        },
        podigee: {
          title: "Podigee",
          description: "Ermöglicht das Einbetten von Podigee-Podcasts."
        },
        misc: {
          title: "Sonstige externe Medien",
          description: "Ermöglicht das Einbetten von externen Medien wie Karten oder Social Media."
        }
      }
    },
    en: {
      title: "Privacy Settings",
      intro: "We use cookies and similar technologies to provide you with an optimal user experience. Some are technically necessary, others help us improve our service.",
      settings: "Adjust settings",
      acceptEssential: "Accept only necessary",
      acceptAll: "Accept all",
      back: "Back",
      accepted: "ON",
      rejected: "OFF",
      saveSettings: "Save settings",
      categories: {
        essential: {
          title: "Technically necessary cookies",
          description: "These cookies are required for the operation of the website and cannot be deactivated."
        },
        youtube: {
          title: "YouTube",
          description: "Enables the embedding of YouTube videos."
        },
        podigee: {
          title: "Podigee",
          description: "Enables the embedding of Podigee podcasts."
        },
        misc: {
          title: "Other external media",
          description: "Enables the embedding of external media such as maps or social media."
        }
      }
    }
  }
}; 