import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import ClientEventCard from "./components/ClientEventCard/ClientEventCard";
import EventsCard from "./components/EventCard/EventCard";
import MyCalendar from "./components/BigCalendar/BigCalendar";

import "./css/App.css";

function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentDate] = useState(new Date().getDate());
  const [currentMonth] = useState(new Date().getMonth());
  const [currentWidth] = useState(window.innerWidth);

  const toggleHeight = () => {
    setIsExpanded(!isExpanded);
  };

  const isMobile = currentWidth < 1140;

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div className="container">
      <div
        className="left-side"
        style={{
          height: isExpanded ? "auto" : "92vh",
          minHeight: isMobile && isExpanded ? "auto" : "20rem",
        }}
      >
        <div className="tiny-cal">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div>
              <DateCalendar
                sx={{
                  ".MuiPickersCalendarHeader-label": {
                    fontWeight: "bold",
                  },
                  ".css-1wy8uaa-MuiButtonBase-root-MuiPickersDay-root.Mui-selected":
                    {
                      backgroundColor: "red",
                    },
                  ".css-cyfsxc-MuiPickersCalendarHeader-labelContainer": {
                    fontSize: ".9rem",
                    color: "#0F4C81",
                  },
                  ".MuiButtonBase-root-MuiPickersDay-root": {
                    fontSize: "1.8rem",
                  },
                  ".Mui-selected": { backgroundColor: "#0f4c81 !important" },
                }}
              />
            </div>
          </LocalizationProvider>
        </div>
        <p className="title-text">Upcoming Events</p>
        <div className="title-container">
          <p className="currentday">
            Today, {currentDate} {monthNames[currentMonth]}
          </p>
          <button onClick={toggleHeight}>View All</button>
        </div>
        <ClientEventCard />
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
