import React from "react";
import logo from "../data/imgs/logotransparenttrimmed.png";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar-wrapper">
      <img className="navbar-logo" src={logo} alt="logo" />
      <ul className="navbar-ul">
        <NavLink to="/" activeClassName="active">
          <li>Forside</li>
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          <li>Om os</li>
        </NavLink>
        <NavLink to="/calendar" activeClassName="active">
          <li>Aktivitetskalender</li>
        </NavLink>
        <NavLink to="/join" activeClassName="active">
          <li>Bliv Medlem</li>
        </NavLink>
        <NavLink to="/podcast" activeClassName="active">
          <li>Podcast</li>
        </NavLink>
        <NavLink to="/contact" activeClassName="active">
          <li>Kontakt</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Navbar;
