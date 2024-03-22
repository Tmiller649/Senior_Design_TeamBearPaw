import React, { useState } from 'react';

const Calendar = () => {
  // State variables
  const [date, setDate] = useState(new Date());
  const [currYear, setCurrYear] = useState(date.getFullYear());
  const [currMonth, setCurrMonth] = useState(date.getMonth());

  // Array to hold month names
  const months = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ];

  // Function to render calendar
  const renderCalendar = () => {
    const firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
    const lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
    const lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay();
    const lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();
    const daysTag = [];

    // Pushing previous month's days
    for (let i = firstDayOfMonth; i > 0; i--) {
      daysTag.push(<li key={`prev-${i}`} className="inactive">{lastDateOfLastMonth - i + 1}</li>);
    }

    // Pushing current month's days
    for (let i = 1; i <= lastDateOfMonth; i++) {
      const isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear();
      daysTag.push(<li key={`curr-${i}`} className={isToday ? "active" : ""}>{i}</li>);
    }

    // Pushing next month's days
    for (let i = lastDayOfMonth; i < 6; i++) {
      daysTag.push(<li key={`next-${i}`} className="inactive">{i - lastDayOfMonth + 1}</li>);
    }

    return daysTag;
  }

  // Function to handle click on previous/next icons
  const handleIconClick = (isPrev) => {
    if (isPrev) {
      setCurrMonth(currMonth - 1);
    } else {
      setCurrMonth(currMonth + 1);
    }

    if (currMonth < 0 || currMonth > 11) {
      const newDate = new Date(currYear, currMonth, new Date().getDate());
      setCurrYear(newDate.getFullYear());
      setCurrMonth(newDate.getMonth());
    } else {
      setDate(new Date());
    }
  }

  return (
    <div className="wrapper">
      <header>
        <p className="current-date">{months[currMonth]} {currYear}</p>
        <div className="icons">
          <span id="prev" className="material-symbols-rounded" onClick={() => handleIconClick(true)}>chevron_left</span>
          <span id="next" className="material-symbols-rounded" onClick={() => handleIconClick(false)}>chevron_right</span>
        </div>
      </header>
      <div className="calendar">
        <ul className="weeks">
          <li>Sun</li>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
        </ul>
        <ul className="days">
          {renderCalendar()}
        </ul>
      </div>
    </div>
  );
};

export default Calendar;