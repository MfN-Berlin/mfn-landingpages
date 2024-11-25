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
  const language = getLanguageFromPath(typeof window !== 'undefined' ? window.location.pathname : '');
  const t = featureTranslations.openToday[language];

  const getOpeningInfo = () => {
    const now = new Date();
    const day = now.getDay();
    const date = now.getDate();
    const month = now.getMonth() + 1;
    const currentHour = now.getHours();
    const isAfterClosing = currentHour >= 18;
    const isHoliday = isDateMatch(holidays, month, date);
    const isWeekend = day === 0 || day === 6;
    const openingTime = isWeekend ? "10:00" : "09:30";

    // Check closing days first
    if (isDateMatch(closingDays, month, date)) {
      return { 
        isOpen: false, 
        openingTime: null,
        isHoliday: false,
        message: t.closedMessage 
      };
    }

    // Check Monday - only close if it's NOT a holiday
    if (day === 1 && !isHoliday) {
      return { 
        isOpen: false, 
        openingTime: null,
        isHoliday: false,
        message: t.closedMessage 
      };
    }

    return { 
      isOpen: !isAfterClosing,
      openingTime,
      isHoliday,
      message: `${t.openHours} ${openingTime} ${t.until} 18:00 Uhr${isHoliday ? ` (${t.holiday})` : ''}.`
    };
  };

  const { isOpen, message } = getOpeningInfo();

  return (
    <div className="mb-4 bg-white">
      <div className="relative bg-Green-500 flex justify-between items-center p-5 px-20 text-center">
        <p className="text-white w-full">
          <strong>{t.today}</strong> {message}
        </p>
        <div className={`absolute w-30 h-[48px] right-[-8px] top-[-20px] px-[6.91px] py-[8px] ${isOpen ? 'bg-Blue-500' : 'bg-Orange'} rounded-md transform rotate-[9.82deg]`}>
          <div className="text-center text-white relative">
            <span className="block text-[10px] font-bold leading-none">
              {!isOpen && t.sorry} {t.were}
            </span>
            <span className="text-[{isOpen ? '25px' : '20px'}] font-bold leading-none">
              {isOpen ? t.open : t.closed}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenToday;
