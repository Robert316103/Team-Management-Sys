import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // ⬅️ Import the CSS file

function HomePage() {
  return (
    <div style={{
      padding: '2rem',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      backgroundColor: '#f8f9fa',
      minHeight: '100vh',
    }}>
      {/* Hero Section */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '2rem',
        flexWrap: 'wrap',
        marginBottom: '2rem',
      }}>
        <div style={{ flex: '1 1 300px' }}>
          <h1 style={{ fontSize: '2.5rem', color: '#0d6efd' }}>
            👋 Welcome to Employee Profile Manager
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#333' }}>
            Effortlessly create, view, and analyze user profiles in one place.
          </p>
          
           <Link to="/dashboard" className="get-started-btn">
    🚀 Get Started
        </Link>

        </div>
        <img
          src="team.png"
          alt="Teamwork illustration"
          style={{ width: '350px', borderRadius: '1rem', flexShrink: 0 }}
        />
      </div>

      {/* Grid Layout for Features & Quick Links */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        marginBottom: '2rem'
      }}>
        {/* Features Section */}
        <div style={{
          backgroundColor: '#fff',
          padding: '2rem',
          borderRadius: '1rem',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        }}>
          <h2 style={{ color: '#343a40' }}>🚀 What You Can Do</h2>
          <ul style={{ lineHeight: '2rem', fontSize: '1.05rem', paddingLeft: '1rem' }}>
            <li>➕ <strong>Add</strong> new user profiles</li>
            <li>📋 <strong>View</strong> and search all profiles</li>
            <li>📊 <strong>Analyze</strong> age and gender breakdown</li>
            <li>🛠️ <strong>Edit</strong> or delete profiles</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div style={{
          backgroundColor: '#e9f2ff',
          padding: '2rem',
          borderRadius: '1rem',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}>
          <h2>📍 Quick Links</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem' }}>
            <Link to="/dashboard" style={linkStyle}>📊 Go to Dashboard</Link>
            <Link to="/profiles" style={linkStyle}>📁 View All Profiles</Link>
            <Link to="/profiles/new" style={linkStyle}>➕ Add New Profile</Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ fontSize: '0.85rem', color: '#888', textAlign: 'center', marginTop: '3rem' }}>
        <p>© {new Date().getFullYear()} Profile Manager App. Built with ❤️ using React.</p>
      </footer>
    </div>
  );
}

const linkStyle = {
  textDecoration: 'none',
  padding: '0.6rem 1rem',
  backgroundColor: '#0d6efd',
  color: 'white',
  borderRadius: '8px',
  fontWeight: 'bold',
  width: 'fit-content',
};

export default HomePage;
