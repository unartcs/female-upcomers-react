import React, { useEffect, useState } from "react";
import logo from "../data/imgs/logotransparenttrimmed.png";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [activeBurger, setActiveBurger] = useState(false);
  const burgerHandler = () => {
    setActiveBurger(!activeBurger);
  };
  useEffect(()=> {
    setActiveBurger(false)
  },[])
  return (
    <div className="navbar-wrapper">
      <NavLink to="/" activeClassName="active">
        <img className="navbar-logo" src={logo} alt="logo" />
      </NavLink>
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
      {activeBurger ? (
        <div className="hamburger-menu-ul-wrapper">
          <ul className="hamburger-menu-ul">
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
