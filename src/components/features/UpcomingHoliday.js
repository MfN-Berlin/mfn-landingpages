import React, { useEffect, useState } from 'react';

const HOLIDAYS = [
  { month: 12, date: 24, duration: 3, message: "Am 24. und 25. Dezember ist das Museum geschlossen. Am 26. Dezember öffnet das Museum von 10:00 – 18:00 Uhr." },
  { month: 12, date: 31, duration: 3, message: "Placeholder message for New Year" },
  { month: 3, date: 8, duration: 1, message: "Placeholder message for International Women's Day" },
  { month: 4, date: 18, duration: 5, message: "An Karfreitag, Ostersonntag und Ostermontag öffnet das Museum von 10:00 bis 18:00 Uhr." },
  { month: 5, date: 1, duration: 1, message: "Placeholder message for Labor Day" },
  { month: 5, date: 29, duration: 1, message: "Placeholder message for Ascension Day" },
  { month: 6, date: 8, duration: 1, message: "Placeholder message for Pentecost Sunday" },
  { month: 6, date: 9, duration: 1, message: "Placeholder message for Pentecost Monday" },
  { month: 10, date: 3, duration: 1, message: "Placeholder message for German Unity Day" }
];

const UpcomingHoliday = () => {
  const [upcomingHoliday, setUpcomingHoliday] = useState(null);

  useEffect(() => {
    const findUpcomingHoliday = () => {
      const today = new Date();
      const currentYear = today.getFullYear();
      
      // Convert holidays to actual dates with years
      const holidaysWithDates = HOLIDAYS.map(holiday => {
        const holidayDate = new Date(currentYear, holiday.month - 1, holiday.date);
        const endDate = new Date(holidayDate);
        endDate.setDate(endDate.getDate() + holiday.duration - 1);
        
        // If the holiday has passed this year, add it for next year too
        if (holidayDate < today && endDate < today) {
          const nextYearDate = new Date(currentYear + 1, holiday.month - 1, holiday.date);
          return {
            ...holiday,
            date: nextYearDate,
            endDate: new Date(nextYearDate.getTime() + (holiday.duration - 1) * 24 * 60 * 60 * 1000)
          };
        }
        
        return {
          ...holiday,
          date: holidayDate,
          endDate: endDate
        };
      });

      // Find the next upcoming holiday or current holiday if we're in the middle of one
      const upcoming = holidaysWithDates.find(holiday => 
        (today <= holiday.endDate && today >= holiday.date) || // During holiday
        today < holiday.date // Before holiday
      );

      setUpcomingHoliday(upcoming);
    };

    findUpcomingHoliday();
    // Update every hour
    const interval = setInterval(findUpcomingHoliday, 3600000);
    
    return () => clearInterval(interval);
  }, []);

  if (!upcomingHoliday) return null;

  // Calculate if we're currently in the holiday period
  const today = new Date();
  const isDuringHoliday = today >= upcomingHoliday.date && today <= upcomingHoliday.endDate;

  return (
    <div className="p-0">
      <p className="text-Black-700 text-center py-4">
        {isDuringHoliday ? (
          upcomingHoliday.message
        ) : (
          `${upcomingHoliday.message}`
        )}
      </p>
    </div>
  );
};

export default UpcomingHoliday;
