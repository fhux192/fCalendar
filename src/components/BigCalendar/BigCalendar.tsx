import { useState } from "react";
import EventTag from "../EventTag/EventTag";
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

const MyCalendar = () => {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [currentDate] = useState(new Date());
  const [showMonthDropdown, setShowMonthDropdown] = useState(false);

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
            <div className={`date-cell `}>
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
                <EventTag />
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

export default MyCalendar;
