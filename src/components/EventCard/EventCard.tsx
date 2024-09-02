import "../../css/card.css";

const EventCard = ({ event }: { event: any }) => {
  return (
    <div
      style={{
        borderLeft: `solid 10px ${event.colors.secondary}`,
        backgroundColor: `${event.colors.primary}`,
      }}
      className="card-container"
    >
      <a href={event.dummyURL} 
        className="title-card"
        style={{ maxWidth: "14rem", color: `${event.colors.text}` ,textDecoration: "none" }}
      >
        {event.tagName}
      </a>
      <p className="date-text">{event.time}</p>
    </div>
  );
};

export default EventCard;
