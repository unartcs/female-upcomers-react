import React, { useEffect, useState } from "react";
import logo from "../data/imgs/logotransparenttrimmed.png";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [activeBurger, setActiveBurger] = useState(false);
  const burgerHandler = () => {
    setActiveBurger(!activeBurger);
  };
  const closeBurger = () => {
    if (activeBurger) {
      setActiveBurger(false);
    }
  };
  return (
    <div className="navbar-wrapper">
      <NavLink to="/" activeClassName="active" onClick={closeBurger}>
        <img className="navbar-logo" src={logo} alt="logo" />
      </NavLink>
      <ul className="navbar-ul">
        <NavLink to="/" activeClassName="active" onClick={closeBurger}>
          <li>Forside</li>
        </NavLink>
        <NavLink to="/about" activeClassName="active" onClick={closeBurger}>
          <li>Om os</li>
        </NavLink>
        <NavLink to="/calendar" activeClassName="active" onClick={closeBurger}>
          <li>Aktivitetskalender</li>
        </NavLink>
        <NavLink to="/join" activeClassName="active" onClick={closeBurger}>
          <li>Bliv Medlem</li>
        </NavLink>
        <NavLink to="/podcast" activeClassName="active" onClick={closeBurger}>
          <li>Podcast</li>
        </NavLink>
        <NavLink to="/contact" activeClassName="active" onClick={closeBurger}>
          <li>Kontakt</li>
        </NavLink>
      </ul>
      <h1 className="burger-text">Female Upcomers</h1>
      {activeBurger ? (
        <div className="hamburger-menu-ul-wrapper">
          <ul className="hamburger-menu-ul">
            <NavLink to="/" activeClassName="active" onClick={closeBurger}>
              <li>Forside</li>
            </NavLink>
            <NavLink to="/about" activeClassName="active" onClick={closeBurger}>
              <li>Om os</li>
            </NavLink>
            <NavLink
              to="/calendar"
              activeClassName="active"
              onClick={closeBurger}
            >
              <li>Aktivitetskalender</li>
            </NavLink>
            <NavLink to="/join" activeClassName="active" onClick={closeBurger}>
              <li>Bliv Medlem</li>
            </NavLink>
            <NavLink
              to="/podcast"
              activeClassName="active"
              onClick={closeBurger}
            >
              <li>Podcast</li>
            </NavLink>
            <NavLink
              to="/contact"
              activeClassName="active"
              onClick={closeBurger}
            >
              <li>Kontakt</li>
            </NavLink>
          </ul>
        </div>
      ) : (
        ""
      )}
      <div
        className={activeBurger ? "hamburger-menu active" : "hamburger-menu"}
        onClick={burgerHandler}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
}
export default Navbar;
