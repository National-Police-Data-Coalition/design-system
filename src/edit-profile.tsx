import React, { useState } from "react";
import "./edit-profile.css"; // Add styles for this design.

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
    <div className="edit-profile">
      <div className="profile-header">
        <img
          src="https://via.placeholder.com/100" // Replace with user's profile image if available.
          alt="Profile"
          className="profile-picture"
        />
        <button className="change-photo-btn">Change Photo</button>
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
  );
};

export default EditProfile;
