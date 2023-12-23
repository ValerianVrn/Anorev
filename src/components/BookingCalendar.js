import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function BookingCalendar () {
    const isEvenWeek = (date) => {
        const startOfYear = new Date(date.getFullYear(), 0, 1);
        const millisecondsInWeek = 7 * 24 * 60 * 60 * 1000;
        const weekNumber = Math.ceil(((date - startOfYear) / millisecondsInWeek) + 1);
        return weekNumber % 2 === 0;
    };

    const isBookable =(date) => {
        const today = new Date();
        const isPast = date < today;

        return !isPast && (date.getDay() === 2 ||
        date.getDay() === 4 ||
        (date.getDay() === 5 && isEvenWeek(date)) ||
        (date.getDay() === 6 && !isEvenWeek(date)));
    }

    const tileClassName = ({ date }) => {
        if (isBookable(date)) {
            return 'bookable text-success bg-success-subtle border border-success-subtle';
        }
        else {
            return '';
        }
    };

    return (
        <div>
            <Calendar tileClassName={tileClassName} />
        </div>
    );
};
