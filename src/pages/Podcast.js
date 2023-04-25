import React from "react";
import podcastData from "../data/Podcast.json";
import "./Podcast.css";
import podcastSpotifyData from "../data/PodcastData";
import SpotifyList from '../components/SpotifyList'
function Podcast() {
  return (
    <div className="podcast-wrapper">
      <div className="podcast-header">
        <div className="podcast-title-wrapper">
          <div className="podcast-title">{podcastData.title}</div>
          <div className="podcast-desc">{podcastData.description}</div>
        </div>
        <div className="podcast-image">
          <img
            src={`${process.env.PUBLIC_URL}/imgs/headset.png`}
            alt={"podcast"}
          />
        </div>
      </div>

      <div className="podcast-grid-title">Episoder</div>
        <SpotifyList/>
        {/* {podcastSpotifyData.map((item) => {
          return (
            <iframe
              style={{ borderRadius: "15px" }}
              src={item.link}
              width="100%"
              height="152"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
              loading="lazy"
              key={`${Math.floor(Math.random())}`}
            ></iframe>
          );
        })} */}
      </div>

  );
}

export default Podcast;
