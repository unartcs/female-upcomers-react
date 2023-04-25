import React, { useEffect, useState, useRef } from "react";
import podcastSpotifyData from "../data/PodcastData";

function SpotifyList() {
  const [accessToken, setAccessToken] = useState("");
  const [episodeList, setEpisodeList] = useState({});
  const [enableView, setEnableView] = useState(false)
  const didMount = useRef(false);
  const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
  const PODCAST_ID = "6iqBa4nNBqoinj5y44yrlE";
  useEffect(() => {
    setEpisodeList(['']);
    updateStuff();
  }, []);
  useEffect(() => {
    setTimeout(() => {
      searchShows();
      setTimeout(() => {
        setEnableView(true)
      }, 1000)
    }, 2000);
  }, [accessToken]);
  async function updateStuff() {
    var authParemeters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    };
    await fetch("https://accounts.spotify.com/api/token", authParemeters)
      .then((result) => result.json())
      .then((data) => setAccessToken(data.access_token));
  }
  async function searchShows() {
    var auth = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    };
    // let show = await fetch(
    //   `https://api.spotify.com/v1/shows/6iqBa4nNBqoinj5y44yrlE/episodes?offset=0&limit=20`,
    //   authParemeters
    // );
    let show = await fetch(
      "https://api.spotify.com/v1/shows/6iqBa4nNBqoinj5y44yrlE?market=US",
      auth
    )
      .then((response) => response.json())
      .then((data) => setEpisodeList(data));
  }
  return (
    <div className="spotify-list-wrapper">
      {enableView ? (
        <div className={enableView ? "podcast-grid-container" : 'podcast-grid-container hide'}>
          {episodeList.episodes.items.map((x) => {
            return (
              <iframe
                style={{ borderRadius: "15px" }}
                src={`https://open.spotify.com/embed/episode/${x.id}?utm_source=generator&theme=0`}
                width="100%"
                height="152"
                frameBorder="0"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                loading="lazy"
                key={x.id}
              ></iframe>
            );
          })}
        </div>
      ) : (
        <div key={Math.random()} className={enableView ? "podcast-grid-container hide" : 'podcast-grid-container'}>
        {podcastSpotifyData.map((item) => {
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
        })}
        </div>
      )}
    </div>
  );
}

export default SpotifyList;
