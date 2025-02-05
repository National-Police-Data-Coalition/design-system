import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavigationBar from "./navigation-bar";
import Profile from "./profile";
import EditProfile from "./edit-profile";

function Home() {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const suggestions = [
    "Incident Report 101",
    "Officer John Doe",
    "Department XYZ",
    "Case #123456",
    "Try searching for locations",
  ];
  return (
    <>
      <div className="help-container">
        <p className="help-text">How can we help you?</p>
      </div>
      <div className="search-container">
        <div className="search-box-wrapper" style={{ position: "relative" }}>
          <div className="search-icon">
            <svg className="search-svg-icon">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            className={`search-box ${searchInput ? "has-content" : ""}`} // Dynamically add "has-content" class
            placeholder="Search incident, officer, id, department or try anything"
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)} // Update the search input
          />
          {showSuggestions && (
            <div className="search-suggestions">
              {suggestions.map((suggestion, index) => (
                <p key={index}>{suggestion}</p>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="updates-text">Latest Updates</div>
      <div className="updates-boxes">
        <div className="update-box">
          <p>Incident</p>
          <p style={{ marginTop: "5px" }}>New add One</p>
          <p>New add One</p>
          <p>New add One</p>
        </div>
        <div className="update-box">
          <p>Post</p>
          <p style={{ marginTop: "5px" }}>New add One</p>
          <p>New add One</p>
          <p>New add One</p>
        </div>
        <div className="update-box">
          <p>Following</p>
          <p style={{ marginTop: "5px" }}>New add One</p>
          <p>New add One</p>
          <p>New add One</p>
        </div>
      </div>
      <div className="footer-text">
        🟢 All the resources have been updated to the latest version/dates
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
