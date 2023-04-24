import React from "react";
import { GoLocation } from "react-icons/go";
import { BiTime } from "react-icons/bi";
import { CiMicrophoneOn } from "react-icons/ci";
import "./EventView.css";
function EventView({ activeEvent, setActiveEvent }) {
  const resetActiveEvent = () => {
    setActiveEvent();
  };
  return (
    <div className="event-view-wrapper">
      <div className="event-view-x-button-wrapper">
        <div className="event-view-x-button" onClick={resetActiveEvent}></div>
      </div>
      <div className="event-view-header">
        <div className="event-view-title">{activeEvent.title}</div>
        <div className="event-view-desc">{activeEvent.desc}</div>
      </div>
      <div className="event-view-content">
        <div className="event-view-text">{activeEvent.text}</div>
        <div className="event-view-image">
          <img
            src={`${process.env.PUBLIC_URL}/imgs/${activeEvent.image}`}
            alt={activeEvent.title}
          />
        </div>
      </div>
      <div className="event-view-info">
        <div className="event-view-signup-button">
          <button className="signup-button">Tilmeld dig</button>
        </div>
        <div className="event-view-speaker">
          <CiMicrophoneOn />
          <span>{activeEvent.speaker}</span>
        </div>
        <div className="event-view-date">
          <BiTime />
          <span>{activeEvent.date}</span>
        </div>
        <div className="event-view-location">
          <GoLocation />
          <span>{activeEvent.location}</span>
        </div>
      </div>
    </div>
  );
}

export default EventView;
