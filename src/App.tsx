import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Dayjs } from "dayjs";
import ClientEventCard from "./components/ClientEventCard/ClientEventCard";
import EventsCard from "./components/EventCard/EventCard";
import BigCalendar from "./components/BigCalendar/BigCalendar";
import EventInfoData from "./data/EventInfoData";
import "./css/App.css";

function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentDate] = useState(new Date().getDate());
  const [currentMonth] = useState(new Date().getMonth());
  const [isToday] = useState(new Date());

  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  const events = EventInfoData;
  const toggleHeight = () => {
    setIsExpanded(!isExpanded);
  };

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

  const filteredEvents = events.filter(
    (event) =>
      (!selectedDate &&
        event.date === isToday.getDate() &&
        event.month === isToday.getMonth() + 1 &&
        event.year === isToday.getFullYear()) ||
      (selectedDate &&
        event.date === selectedDate.date() &&
        event.month === selectedDate.month() + 1 &&
        event.year === selectedDate.year())
  );

  return (
    <div className="container">
      <div
        className="left-side"
        style={{
          height: filteredEvents.length <= 0 || isExpanded ? "auto" : "92vh",
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
                  "&.MuiDateCalendar-root": {
                    height: "25rem",
                    maxHeight: "18rem",
                  },
                }}
                onChange={(newDate) => setSelectedDate(newDate)} // Cập nhật ngày được chọn
              />
            </div>
          </LocalizationProvider>
        </div>
        <p className="title-text">Upcoming Events</p>
        <div className="title-container">
          <p className="currentday">
            {selectedDate &&
            isToday.getDate() === selectedDate.date() &&
            isToday.getMonth() === selectedDate.month() &&
            isToday.getFullYear() === selectedDate.year() ? (
              <>
                <span>
                  Today, {selectedDate.date()}{" "}
                  {monthNames[selectedDate.month()]}
                </span>
              </>
            ) : (
              selectedDate && (
                <span>
                  Current date, {selectedDate.date()}{" "}
                  {monthNames[selectedDate.month()]}
                </span>
              )
            )}

            {!selectedDate && (
              <span>
                Today, {currentDate} {monthNames[currentMonth]}
              </span>
            )}
          </p>
          <button onClick={toggleHeight}>View All</button>
        </div>

        {/* {events
          .filter(
            (event) =>
              (!selectedDate &&
                event.date === isToday.getDate() &&
                event.month === isToday.getMonth() + 1 &&
                event.year === isToday.getFullYear()) ||
              (selectedDate &&
                event.date === selectedDate.date() &&
                event.month === selectedDate.month() + 1 &&
                event.year === selectedDate.year())
          )
          .map((event, index) =>
            event.type === "appointment" ? (
              <ClientEventCard key={index} event={event} />
            ) : event.type === "event" ? (
              <EventsCard key={index} event={event} />
            ) : null
          )} */}

        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) =>
            event.type === "appointment" ? (
              <ClientEventCard key={index} event={event} />
            ) : event.type === "event" ? (
              <EventsCard key={index} event={event} />
            ) : null
          )
        ) : (
          <div className="message-container">
            <p className="message-text">
              No events scheduled for the current date
            </p>
          </div>
        )}

        <p className="date-text"></p>
      </div>
      <div className="right-side">
        <BigCalendar />
      </div>
    </div>
  );
}

export default App;
