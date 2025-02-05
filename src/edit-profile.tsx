import React, { useState } from "react";
import ProfilePicture from "./assets/random_profile_picture.jpg";
import "./edit-profile.css";
import { Link } from "react-router-dom";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    employment: "",
    location: "",
    bio: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Profile updated:", formData);
    alert("Profile updated successfully!");
  };

  return (
    <div className="page-wrapper">
      <div className="edit-profile">
        <div className="profile-section">
          <Link to="/profile" className="back-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m7.825 13l5.6 5.6L12 20l-8-8l8-8l1.425 1.4l-5.6 5.6H20v2z"
              />
            </svg>
          </Link>
          <div className="profile-header">
            <img
              src={ProfilePicture}
              alt="Profile"
              className="profile-picture"
            />
            <button className="change-photo-btn">Change Photo</button>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="edit-profile-form">
          <h2>Edit Personal Information</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="employment">Current Employment</label>
            <input
              type="text"
              id="employment"
              name="employment"
              value={formData.employment}
              onChange={handleChange}
              placeholder="Your current employment"
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <select
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            >
              <option value="">Select a location</option>
              <option value="New York">New York</option>
              <option value="California">California</option>
              <option value="Texas">Texas</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="bio">Bio</label>
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Write a short bio about yourself (max 1000 characters)"
              maxLength={1000}
            />
          </div>
          <button type="submit" className="save-btn">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
