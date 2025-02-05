import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./assets/npdc.png";

const NavigationBar: React.FC = () => {
  const location = useLocation();
  return (
    <>
      <div className="blue-bar">
        <a href="#feedback" className="feedback-link">
          Feedback
        </a>
      </div>
      <div className="header-container">
        <div className="logo-container">
          <img src={logo} alt="Company Logo" className="logo" loading="lazy" />
          <div className="company-text">
            <h1>National Police Data Coalition</h1>
            <p>The national index of police incidents</p>
          </div>
        </div>
        <div className="center-buttons">
          <Link
            to="/"
            className={`nav-button ${
              location.pathname === "/" ? "active" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/data-explorer"
            className={`nav-button ${
              location.pathname === "/data-explorer" ? "active" : ""
            }`}
          >
            Data Explorer
          </Link>
          <Link
            to="/community"
            className={`nav-button ${
              location.pathname === "/community" ? "active" : ""
            }`}
          >
            Community
          </Link>
          <Link
            to="/collection"
            className={`nav-button ${
              location.pathname === "/collection" ? "active" : ""
            }`}
          >
            Collection
          </Link>
        </div>
        <div className="right-buttons">
          <button className="icon-button" aria-label="Add">
            <span className="material-icons">add</span>
          </button>
          <button className="icon-button">
            <span className="material-icons">chat</span>
          </button>
          <button className="icon-button">
            <span className="material-icons">notifications</span>
          </button>
          <Link to="/profile" className="icon-button">
            <span className="material-icons">person</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
