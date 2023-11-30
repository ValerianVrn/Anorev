import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function BookingCalendar () {
    const isBookable =(date) => {
        const today = new Date();
        const isPast = date < today;

        return !isPast && (date.getDay() === 2 ||
        date.getDay() === 4 ||
        (date.getDay() === 5 && date.getDate() % 2 === 1) ||
        (date.getDay() === 6 && date.getDate() % 2 === 1));
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
