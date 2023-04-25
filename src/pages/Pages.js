import React, {useEffect} from "react";
import Navbar from "../components/Navbar";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Join from "./Join";
import { Routes, Route } from "react-router-dom";
import Calendar from "./Calendar";
import Podcast from "./Podcast";
function Pages() {
  return (
    <div className="pages-wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/join" element={<Join />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Pages;
