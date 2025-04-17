import React from 'react';
import { getLanguageFromPath } from '../../scripts/languageManager';
import { featureTranslations } from '../../data/featureTranslations';


// Move pure functions outside component
const isDateMatch = (dateList, currentMonth, currentDate) => 
  dateList.some(d => d.month === currentMonth && d.date === currentDate);

// Move static data outside component
const closingDays = [
  { month: 10, date: 31 },
  { month: 12, date: 24 },
  { month: 12, date: 25 },
  { month: 12, date: 31 },
];

const holidays = [
  { month: 10, date: 3 },  // Tag der Deutschen Einheit
  { month: 12, date: 26 }, // 2. Weihnachtsfeiertag
  { month: 1, date: 1 },   // Neujahr
  { month: 3, date: 8 },   // Internationaler Frauentag
  // ... other holidays
];

const OpenToday = () => {
  const getOpeningInfo = () => {
    const language = getLanguageFromPath(typeof window !== 'undefined' ? window.location.pathname : '');
    const translations = featureTranslations.openToday[language] || featureTranslations.openToday.de;
    
    // const now = new Date();
    // const xdate = new Date('2024-12-25T22:00:00');  
    const now = new Date();
    const currentHour = now.getHours();
    const isAfterClosing = currentHour >= 18;

    // Wenn nach Schließzeit, dann Infos für morgen anzeigen
    // const targetDate = new Date();
    const targetDate = now;
    if (isAfterClosing) {
      targetDate.setDate(targetDate.getDate() + 1);
    }

    const day = targetDate.getDay();
    const date = targetDate.getDate();
    const month = targetDate.getMonth() + 1;
    const isHoliday = isDateMatch(holidays, month, date);
    const isWeekend = day === 0 || day === 6;
    const openingTime = isWeekend ? "10:00" : "09:30";
    const timePrefix = isAfterClosing ? translations.tomorrow : translations.today;

    // Prüfe ob der Zieltag geschlossen ist
    const isTargetDayClosed = isDateMatch(closingDays, month, date) || 
                             (day === 1 && !isHoliday); // Montag und kein Feiertag

    // Check closing days first
    if (isTargetDayClosed) {
      return { 
        isOpen: false,
        openingTime: null,
        isHoliday: false,
        message1: `${timePrefix} ${translations.isMuseum2}`,
        message2: translations.closedMessage
      };
    }

    // Wenn wir hier sind, ist der Zieltag ein Öffnungstag
    return { 
      isOpen: !isAfterClosing || isTargetDayClosed === false,
      openingTime,
      isHoliday,
      message1: `${timePrefix} ${isHoliday ? ` (${translations.holiday})` : ''} ${translations.isMuseum1}`,
      message2: `${openingTime} ${translations.until} 18:00 `
    };
  };

  const { isOpen, message1, message2 } = getOpeningInfo();

  return (
    <div className="mb-4 p-4 bg-Green-500">
    <div className="p-0  flex flex-col justify-center items-center gap-0">
      <div className="text-center text-White-White typography-kicker">
        {message1}
      </div>
      <div className="text-center text-White-White font-bold text-[34px] py-2  leading-none">
        {message2}
      </div>
    </div>
  </div>
  );
};

export default OpenToday;
