import React, { useMemo } from 'react';

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
    // Feiertage für 2025 (bis März)
    { month: 1, date: 1 },   // Neujahr 2025
    { month: 3, date: 8 },   // Internationaler Frauentag 2025
    { month: 4, date: 18 },  // Karfreitag 2025
    { month: 4, date: 20 },  // Ostersonntag 2025
    { month: 4, date: 21 },  // Ostermontag 2025
    { month: 5, date: 1 },   // Tag der Arbeit 2025
    { month: 5, date: 29 },  // Christi Himmelfahrt 2025
    { month: 6, date: 8 },   // Pfingstsonntag 2025
    { month: 6, date: 9 },   // Pfingstmontag 2025
    { month: 10, date: 3 },  // Tag der Deutschen Einheit 2025
  ];

const OpenToday = () => {
  const getOpeningInfo = () => {
    const now = new Date();
    const day = now.getDay();
    const date = now.getDate();
    const month = now.getMonth() + 1;
    const currentHour = now.getHours();
    const isAfterClosing = currentHour >= 18;
    const timeWord = isAfterClosing ? "war" : "ist";

    if (isDateMatch(closingDays, month, date)) {
      return { isOpen: false, message: `${timeWord} das Museum geschlossen.` };
    }

    const isHoliday = isDateMatch(holidays, month, date);
    const isWeekend = day === 0 || day === 6;
    const openingTime = isWeekend ? "10:00" : "09:30";
    
    if (day === 1 && !isHoliday) {
      return { isOpen: false, message: `${timeWord} das Museum geschlossen.` };
    }

    return { 
      isOpen: !isAfterClosing, 
      message: `${timeWord} das Museum von ${openingTime} bis 18:00 Uhr geöffnet${isHoliday ? " (Feiertag)" : ""}.`
    };
  };

  const { isOpen, message } = getOpeningInfo();

  return (
    <div className="mb-4 bg-white">
      <div className="relative bg-Green-500 flex justify-between items-center p-5 px-34 text-center">
        <div className="text-white typography-p w-full">
          <span className="font-bold">Heute</span> {message}
        </div>
        <div className={`absolute w-30 h-[58px] right-[-8px] top-[-20px] px-[6.91px] py-[11.91px] ${isOpen ? 'bg-Blue-500' : 'bg-Orange'} rounded-md transform rotate-[9.82deg]`}>
          <div className="text-center text-white relative">
            <span className="block text-[10px] font-bold leading-none">{isOpen ? '' : 'SORRY, '}WE'RE</span>
            <span className="text-[25px] font-bold leading-none"> {isOpen ? 'OPEN!' : 'CLOSED'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenToday;
