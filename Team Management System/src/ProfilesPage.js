import React, { useState } from 'react';
import { Link, Outlet, NavLink } from 'react-router-dom';
import './ProfilesPage.css';

function ProfilesPage({ profiles }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProfiles = profiles.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="profiles-container">
      <div className="sidebar">
        <h2>Profiles</h2>

        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <ul className="profile-list">
          {filteredProfiles.map((p) => (
            <li key={p.id}>
              <NavLink
                to={p.id}
                className={({ isActive }) =>
                  isActive ? 'profile-link active' : 'profile-link'
                }
              >
                {p.name}
              </NavLink>
            </li>
          ))}
          {filteredProfiles.length === 0 && <li>No profiles found.</li>}
        </ul>

        <Link to="new" className="add-profile-link">➕ Add New Profile</Link>
      </div>

      <div className="profile-details">
        <Outlet />
      </div>
    </div>
  );
}

export default ProfilesPage;
