import "../../css/card.css";
import { GoDeviceCameraVideo } from "react-icons/go";

const ClientEventCard = ({ event }: { event: any }) => {
  return (
    <div
      style={{
        borderLeft: `solid 10px ${event.colors.secondary}`,
        backgroundColor: `${event.colors.primary}`,
      }}
      className="cli-card-container"
    >
      <a
        href={event.dummyURL}
        style={{ backgroundColor: `${event.colors.secondary}` }}
        className="cam-icon-container"
      >
        <GoDeviceCameraVideo style={{ color: "#fff" }} className="cam-icon" />
      </a>
      <a
        href={event.dummyURL}
        style={{ color: `${event.colors.text}`, textDecoration: "none" }}
        className="title-card"
      >
        {event.tagName}
      </a>
      <p className="date-text">{event.time}</p>
      <div className="client-container">
        <div className="cli-icon-container">
          <img alt={event.image} src={event.image} className="client-img" />
        </div>
        <a href={event.profileLink}>View Client Profile</a>
      </div>
    </div>
  );
};

export default ClientEventCard;
