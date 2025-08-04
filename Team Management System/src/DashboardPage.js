import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardPage.css';

function DashboardPage({ profiles }) {
  const totalProfiles = profiles.length;
  const lastProfile = profiles[profiles.length - 1];

  const groupByAge = (profiles) => {
    const groups = {
      '18–25': 0,
      '26–35': 0,
      '36–45': 0,
      '46+': 0,
    };

    profiles.forEach((p) => {
      if (p.age >= 18 && p.age <= 25) groups['18–25'] += 1;
      else if (p.age <= 35) groups['26–35'] += 1;
      else if (p.age <= 45) groups['36–45'] += 1;
      else groups['46+'] += 1;
    });

    return groups;
  };

  const groupByGender = (profiles) => {
    const genders = {
      Male: 0,
      Female: 0,
      Other: 0,
    };

    profiles.forEach((p) => {
      const g = p.gender?.toLowerCase();
      if (g === 'male') genders.Male += 1;
      else if (g === 'female') genders.Female += 1;
      else genders.Other += 1;
    });

    return genders;
  };

  const ageGroups = groupByAge(profiles);
  const genderGroups = groupByGender(profiles);

  return (
    <div className="dashboard-container">
      <h1>📋 Dashboard</h1>
      
      <div className="dashboard-card">
        <p>Total Profiles: <strong>{totalProfiles}</strong></p>
      </div>

      {lastProfile && (
        <div className="profile-highlight">
          <h3>🆕 Most Recently Added</h3>
          <p>Name: {lastProfile.name}</p>
          <Link to={`/profiles/${lastProfile.id}`} className="dashboard-link">
            View Profile
          </Link>
        </div>
      )}

      <div className="dashboard-card">
        <h3>👥 Age Group Breakdown</h3>
        <ul>
          {Object.entries(ageGroups).map(([range, count]) => (
            <li key={range}>
              {range}: <strong>{count}</strong> profile{count !== 1 ? 's' : ''}
            </li>
          ))}
        </ul>
      </div>

      <div className="dashboard-card">
        <h3>⚧ Gender Breakdown</h3>
        <ul>
          {Object.entries(genderGroups).map(([gender, count]) => (
            <li key={gender}>
              {gender}: <strong>{count}</strong> profile{count !== 1 ? 's' : ''}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <Link to="/profiles/new" className="dashboard-link">➕ Add New Profile</Link>
        <Link to="/profiles" className="dashboard-link">📁 View All Profiles</Link>
      </div>
    </div>
  );
}

export default DashboardPage;
