import { useState } from "react";
import EventTag from "../EventTag/EventTag";
import EventInfoData from "../../data/EventInfoData";

import "../../css/calendar.css";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosArrowDown,
} from "react-icons/io";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const BigCalendar = () => {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [currentDate] = useState(new Date());
  const [showMonthDropdown, setShowMonthDropdown] = useState(false);
  const events = EventInfoData;
  const isMobile = window.innerWidth < 1140;

  const getDaysInMonth = (year: number, month: number) => {
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  };

  const days = getDaysInMonth(year, month);

  const firstDayOfMonth = new Date(year, month, 1);
  const startDay = firstDayOfMonth.getDay();

  const lastDayOfMonth = new Date(year, month + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();

  const prevMonthDays = new Array(startDay).fill(null);
  const totalDays = prevMonthDays.length + daysInMonth;
  const nextMonthDaysCount = 42 - totalDays;
  const nextMonthDays = new Array(nextMonthDaysCount)
    .fill(null)
    .map((_, i) => i + 1);

  const handlePrevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const handleToday = () => {
    const today = new Date();
    setMonth(today.getMonth());
    setYear(today.getFullYear());
  };

  const toggleMonthDropdown = () => {
    setShowMonthDropdown(!showMonthDropdown);
  };

  const selectMonth = (selectedMonth: number) => {
    setMonth(selectedMonth);
    setShowMonthDropdown(false);
  };

  const handleRemainingEvents = (date: Date) => {
    let count = 0;
    events
      .filter(
        (event) =>
          event.date === date.getDate() &&
          event.month === date.getMonth() + 1 &&
          event.year === date.getFullYear()
      )
      .map((current, index) => {
        if (
          current.date === date.getDate() &&
          current.month === date.getMonth() + 1 &&
          current.year === date.getFullYear() &&
          index >= 2
        ) {
          count += 1;
        }
      });
    if (count > 0) {
      return `${count} more`;
    }
  };

  return (
    <div className="calendar">
      <div className="header">
        <div className="tool-container">
          <button
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
            onClick={handleToday}
          >
            <p>Today</p>
          </button>
          <IoIosArrowBack className="arrow-icon" onClick={handlePrevMonth} />
          <IoIosArrowForward className="arrow-icon" onClick={handleNextMonth} />
          <h2 style={{ color: "#0f4c81", marginLeft: "1rem" }}>
            {months[month]} {year}
          </h2>
        </div>
        <button
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
          onClick={toggleMonthDropdown}
        >
          <p>Month</p>
          <IoIosArrowDown />
        </button>
        {showMonthDropdown && (
          <div className="month-dropdown">
            {months.map((monthName, index) => (
              <div
                key={index}
                className="month-option"
                onClick={() => selectMonth(index)}
              >
                {monthName}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="days-of-week">
        {daysOfWeek.map((day) => (
          <div key={day} className="day">
            {day}
          </div>
        ))}
      </div>
      <div className="dates-grid">
        {prevMonthDays.map((_, index) => (
          <div key={`prev-${index}`} className="date-cell empty-cell"></div>
        ))}
        {days.map((date) => (
          <div
            key={date.toDateString()}
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <div
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "center",
              }}
              className={`date-cell `}
            >
              <div
                className={`${
                  date.getDate() === currentDate.getDate() &&
                  date.getMonth() === currentDate.getMonth() &&
                  date.getFullYear() === currentDate.getFullYear()
                    ? "current-day"
                    : ""
                }`}
              >
                <div className="date-number">{date.getDate()}</div>
              </div>
              {events
                .filter(
                  (event) =>
                    event.date === date.getDate() &&
                    event.month === date.getMonth() + 1 &&
                    event.year === date.getFullYear()
                )
                .map((event, index) => {
                  if (index < 2) {
                    return (
                      <EventTag
                        primaryColor={event.colors.primary}
                        secondaryColor={event.colors.secondary}
                        textColor={event.colors.text}
                        dummyURL={event.dummyURL}
                        key={index}
                        tagName={event.tagName}
                        index={index}
                      />
                    );
                  }
                })}
              <div
                style={{
                  position: "absolute",
                  bottom: `${isMobile ? "0.6rem" : "0rem"}`,
                  left: "0",
                  fontWeight: "bold",
                  fontSize: `${isMobile ? "0.5rem" : "0.7rem"}`,
                  color: "#0f4c81",
                }}
              >
                {/* {events.map((current, index) => {
                  if (
                    current.date === date.getDate() &&
                    current.month === date.getMonth() + 1 &&
                    current.year === date.getFullYear() &&
                    index < 1
                  ) {
                    const count = events
                      .filter(
                        (event) =>
                          event.date === date.getDate() &&
                          event.month === date.getMonth() + 1 &&
                          event.year === date.getFullYear()
                      )
                      .reduce((acc: any, curr: any, i: any) => {
                        if (
                          curr.date === date.getDate() &&
                          curr.month === date.getMonth() + 1 &&
                          curr.year === date.getFullYear() &&
                          i >= 2
                        ) {
                          acc += 1;
                        }
                        return acc;
                      }, 0);

                    if (count > 0) {
                      return `${count} more`;
                    }
                  }
                  return null;
                })} */}

                {handleRemainingEvents(date)}
              </div>
            </div>
          </div>
        ))}
        {nextMonthDays.map((day, index) => (
          <div
            key={`next-${index}`}
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <div className="date-cell next-month-day">
              <div className="date-number">{day}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BigCalendar;
