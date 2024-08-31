import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import EventsCard from "./components/ClientEventCard/ClientEventCard";
import MyCalendar from "./components/BigCalendar/BigCalendar";

import "./css/App.css";

function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date().getDate());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());

  const toggleHeight = () => {
    setIsExpanded(!isExpanded);
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div className="container">
      <div
        className="left-side"
        style={{ height: isExpanded ? "auto" : "91vh" }}
      >
        <div className="tiny-cal">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              sx={{
                ".MuiPickersCalendarHeader-label": {
                  fontWeight: "bold",
                },
                ".css-1wy8uaa-MuiButtonBase-root-MuiPickersDay-root.Mui-selected":
                  {
                    backgroundColor: "red",
                  },
                ".Mui-selected": { backgroundColor: "#0f4c81 !important" },
              }}
            />
          </LocalizationProvider>
        </div>
        <p className="title-text">Upcoming Events</p>
        <div className="title-container">
          <p className="currentday">Today, {currentDate} {monthNames[currentMonth]}</p>
          <button onClick={toggleHeight}>View All</button>
        </div>

        <EventsCard />
        <EventsCard />
        <EventsCard />
        <EventsCard />
        <p className="date-text"></p>
      </div>
      <div className="right-side">
        <MyCalendar />
      </div>
    </div>
  );
}

export default App;
