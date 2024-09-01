import "../../css/card.css";

const EventCard = () => {
  const event = {
    title: "Webinar: How to cope with trauma in professional life",
    time: "9:00 AM - 9:30 AM GMT+8",
  };

  return (
    <div className="card-container">
        <p className="title-card" style={{maxWidth:'12rem'}}>{event.title}</p>
      <p className="date-text">{event.time}</p>
    </div>
  );
};

export default EventCard;
