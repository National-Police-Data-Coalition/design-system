import "./profile.css";
import ProfilePicture from "./assets/random_profile_picture.jpg";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="Profile">
      <div className="content-wrapper">
        <div className="main-content">
          {/* Profile Card */}
          <div className="profile-card">
            <div className="profile-header">
              <img className="profile-image" src={ProfilePicture} />
              <div className="profile-details">
                <h2>John Anderson</h2>
                <p className="title">Legal Advisor</p>
                <p className="company">NYC Law Firm</p>
                <p className="location">Manhattan, New York City</p>
              </div>
            </div>
            <div className="profile-bio-actions">
              <p className="bio">
                This is a space for the user to write a short bio about
                themselves. Bios will be limited to a certain number of
                characters, about enough room to write three sentences.
              </p>
              <div className="action-buttons">
                <button className="follow-button">FOLLOW</button>
                <button className="message-button">MESSAGE</button>
              </div>
              <span>50 followers</span>
              <span> • </span>
              <span>30 following</span>
            </div>
            <Link to="/edit-profile" className="edit-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M22 7.24a1 1 0 0 0-.29-.71l-4.24-4.24a1 1 0 0 0-.71-.29a1 1 0 0 0-.71.29l-2.83 2.83L2.29 16.05a1 1 0 0 0-.29.71V21a1 1 0 0 0 1 1h4.24a1 1 0 0 0 .76-.29l10.87-10.93L21.71 8a1.2 1.2 0 0 0 .22-.33a1 1 0 0 0 0-.24a.7.7 0 0 0 0-.14ZM6.83 20H4v-2.83l9.93-9.93l2.83 2.83ZM18.17 8.66l-2.83-2.83l1.42-1.41l2.82 2.82Z"
                />
              </svg>
            </Link>
          </div>

          {/* Organization Card */}
          <div className="organization-card">
            <h3>Organization Affiliation</h3>
            <div className="organization-entry">
              <h4>Law Firm Name</h4>
              <p className="date-added">Added Oct 18, 2024</p>
              <p className="org-bio">Bio from the law firm’s profile.</p>
            </div>
            <div className="organization-entry">
              <h4>Law Firm Name</h4>
              <p className="date-added">Added Oct 18, 2024</p>
              <p className="org-bio">Bio from the law firm’s profile.</p>
            </div>
          </div>

          <div className="contact-card">
            <Link to="/edit-profile" className="edit-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M22 7.24a1 1 0 0 0-.29-.71l-4.24-4.24a1 1 0 0 0-.71-.29a1 1 0 0 0-.71.29l-2.83 2.83L2.29 16.05a1 1 0 0 0-.29.71V21a1 1 0 0 0 1 1h4.24a1 1 0 0 0 .76-.29l10.87-10.93L21.71 8a1.2 1.2 0 0 0 .22-.33a1 1 0 0 0 0-.24a.7.7 0 0 0 0-.14ZM6.83 20H4v-2.83l9.93-9.93l2.83 2.83ZM18.17 8.66l-2.83-2.83l1.42-1.41l2.82 2.82Z"
                />
              </svg>
            </Link>
            <h3>Contact</h3>
            <div className="contact-details">
              <div className="contact-item">
                <strong>
                  <span className="material-icons" aria-label="Email Icon">
                    email
                  </span>{" "}
                  Email:
                </strong>
                <p>example@email.com</p>
              </div>
              <div className="contact-item">
                <strong>
                  <span className="material-icons" aria-label="Email Icon">
                    email
                  </span>{" "}
                  Email:
                </strong>
                <p>example2@email.com</p>
              </div>
              <div className="contact-item">
                <strong>
                  <span className="material-icons" aria-label="Phone Icon">
                    phone
                  </span>{" "}
                  Phone Number:
                </strong>
                <p>888-888-8888</p>
              </div>
              <div className="contact-item">
                <strong>
                  <span className="material-icons" aria-label="Phone Icon">
                    phone
                  </span>{" "}
                  Phone Number:
                </strong>
                <p>888-888-8888</p>
              </div>
              <div className="contact-item">
                <strong>
                  <span role="img" aria-label="Website Icon">
                    🌐
                  </span>{" "}
                  Website:
                </strong>
                <p>exampleurl.com</p>
              </div>
            </div>
            <h3>Socials</h3>
            <div className="social-icons">
              <span role="img" aria-label="LinkedIn Icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"
                  />
                </svg>
              </span>
              <span role="img" aria-label="Facebook Icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
                  />
                </svg>
              </span>
              <span role="img" aria-label="LinkedIn Icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                  />
                </svg>
              </span>
              <span role="img" aria-label="Twitter Icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m17.687 3.063l-4.996 5.711l-4.32-5.711H2.112l7.477 9.776l-7.086 8.099h3.034l5.469-6.25l4.78 6.25h6.102l-7.794-10.304l6.625-7.571zm-1.064 16.06L5.654 4.782h1.803l10.846 14.34z"
                  />
                </svg>
              </span>
              <span role="img" aria-label="YouTube Icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>

        {/* Sidebar Container to Stack Both Sidebars */}
        <div className="sidebar-container">
          {/* First Sidebar */}
          <div className="sidebar">
            <section className="connections">
              <h3>People you may know</h3>
              <div className="connection-list">
                {[
                  {
                    name: "Samuel Smith",
                    title: "Title",
                    image: ProfilePicture,
                  },
                  {
                    name: "Marian Linehan",
                    title: "Title",
                    image: ProfilePicture,
                  },
                  {
                    name: "June MacCabe",
                    title: "Title",
                    image: ProfilePicture,
                  },
                  {
                    name: "Joseph Vanasse",
                    title: "Title",
                    image: ProfilePicture,
                  },
                ].map((person) => (
                  <div className="connection-item" key={person.name}>
                    <img src={person.image} alt={person.name} />
                    <div className="connection-info">
                      <p>{person.name}</p>
                      <p className="title">{person.title}</p>
                      <button className="follow-button-small">FOLLOW</button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Second Sidebar - Organizations You May Know */}
          <div className="sidebar">
            <section className="organizations">
              <h3>Organizations you may know</h3>
              <div className="organization-list">
                {[
                  {
                    name: "Law Firm Name",
                    title: "Title",
                    image: ProfilePicture,
                  },
                  {
                    name: "Law Firm Name",
                    title: "Title",
                    image: ProfilePicture,
                  },
                  {
                    name: "Law Firm Name",
                    title: "Title",
                    image: ProfilePicture,
                  },
                ].map((org) => (
                  <div className="organization-item" key={org.name}>
                    <img src={org.image} alt={org.name} />
                    <div className="organization-info">
                      <p>{org.name}</p>
                      <p className="title">{org.title}</p>
                      <button className="follow-button-small">FOLLOW</button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
