import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './BookingCalendar.css'

export default function BookingCalendar () {
    const isBookable =(date) => {
        return date.getDay() === 2 ||
        date.getDay() === 4 ||
        (date.getDay() === 5 && date.getDate() % 2 === 0) ||
        (date.getDay() === 6 && date.getDate() % 2 === 0);
    }

    const tileClassName = ({ date }) => {
        if (isBookable(date)) {
            return 'bookable';
        }
        return '';
    };

    return (
        <div>
            <Calendar tileClassName={tileClassName} />
        </div>
    );
};
