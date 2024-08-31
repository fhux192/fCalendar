import "../../css/card.css";
import { FaUser } from "react-icons/fa";
import { GoDeviceCameraVideo } from "react-icons/go";



const EventsCard = () => {
  const event = {
    title: "First Sesson with Alex Stan",
    date: "9:00 AM - 9:30 AM GMT+8",
    time: "Event Time",
    location: "Event Location",
  };

  return (
    <div className="card-container">
      <div className="cam-icon-container">
        {" "}
        <GoDeviceCameraVideo className="cam-icon" />
      </div>
      <p className="title-card">{event.title}</p>
      <p className="date-text">{event.date}</p>
      <div className="client-container">
        <div className="cli-icon-container">
          <FaUser className="client-icon" />
        </div>
        <a href="">View Client Profile</a>
      </div>
    </div>
  );
};

export default EventsCard;
