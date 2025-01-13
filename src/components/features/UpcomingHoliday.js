import React, { useEffect, useState } from 'react';
import { getLanguageFromPath } from '../../scripts/languageManager';
import { featureTranslations } from '../../data/featureTranslations';

const UpcomingHoliday = () => {
  const language = getLanguageFromPath(typeof window !== 'undefined' ? window.location.pathname : '');
  const HOLIDAYS = featureTranslations.upcomingHoliday[language].holidays;

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

      // After creating holidaysWithDates, we should sort them
      const sortedHolidays = holidaysWithDates.sort((a, b) => a.date - b.date);

      // Then find the next upcoming holiday within 30 days
      const upcoming = sortedHolidays.find(holiday => {
        const today = new Date();
        const thirtyDaysFromNow = new Date(today.getTime() + (30 * 24 * 60 * 60 * 1000));
        
        return (
          // During holiday
          (today <= holiday.endDate && today >= holiday.date) ||
          // Before holiday but within 30 days
          (today < holiday.date && holiday.date <= thirtyDaysFromNow)
        );
      });

      setUpcomingHoliday(upcoming);
    };

    findUpcomingHoliday();
    // Update every hour
    const interval = setInterval(findUpcomingHoliday, 3600000);
    
    return () => clearInterval(interval);
  }, [HOLIDAYS]);

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
          <>
            <strong>{upcomingHoliday.headline}</strong>: {upcomingHoliday.message}
          </>
        )}
      </p>
    </div>
  );
};

export default UpcomingHoliday;
