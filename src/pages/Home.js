import React from "react";
import "./Home.css";
import homeData from "../data/Home.json";
function Home() {
  return (
    <div
      className="home-wrapper"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/imgs/${homeData["home-image"]})` }}
    >
      <div className="home-title-wrapper">
        <h1 className="home-title">{homeData["home-title"]}</h1>
        <h2 className="home-sub-title">{homeData["home-sub-title"]}</h2>
      </div>
      <div className="home-text-wrapper">
        <h4 className="home-text-title">{homeData["home-text-title"]}</h4>
        <p className="home-text-content">{homeData["home-text-content"]}</p>
      </div>
    </div>
  );
}

export default Home;