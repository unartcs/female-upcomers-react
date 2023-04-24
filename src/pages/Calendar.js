import React, { useState } from "react";
import "./Calendar.css";
import calendarData from "../data/CalendarData";
import EventView from "../components/EventView";
import { GoLocation } from "react-icons/go";
import { BiTime } from "react-icons/bi";
import { CiMicrophoneOn } from "react-icons/ci";
function Calendar() {
  const [activeEvent, setActiveEvent] = useState();
  const setEventHandler = (event) => {
    setActiveEvent(event);
  };
  return (
    <div className="calendar-container">
      <div
        className={
          activeEvent
            ? "calendar-content-wrapper hide"
            : `calendar-content-wrapper`
        }
      >
        <div className="calendar-content-title">Aktivitetskalender</div>
        <div className="calendar-content-text">Se vores kommende events</div>
        <div className="calendar-grid-wrapper">
          {calendarData.map((event) => {
            return (
              <div
                className="calendar-grid-box"
                onClick={() => setEventHandler(event)}
              >
                <div className="calendar-grid-box-image">
                  <img
                    src={`${process.env.PUBLIC_URL}/imgs/${event.image}`}
                    alt={event.title}
                  />
                </div>
                <div className="calendar-grid-box-title">{event.title}</div>
                <div className="calendar-grid-box-desc">{event.desc}</div>
                <div className="calender-grid-box-info">
                  <div className="calendar-grid-box-info-date">
                    <BiTime />
                    <span>{event.date}</span>
                  </div>
                  <div className="calendar-grid-box-info-location">
                    <GoLocation />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {activeEvent ?
      <EventView activeEvent={activeEvent} setActiveEvent={setActiveEvent} />
      : ''}
    </div>
  );
}

export default Calendar;
