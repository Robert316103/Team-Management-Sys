import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './ProfilePage.css'; // Import the external CSS

function ProfilePage({ profiles, setProfiles }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const profile = profiles.find((p) => p.id === id);
  if (!profile) return <p className="not-found">Profile not found.</p>;

  const handleDelete = () => {
    const confirm = window.confirm(`Are you sure you want to delete ${profile.name}?`);
    if (!confirm) return;

    const updatedProfiles = profiles.filter((p) => p.id !== id);
    setProfiles(updatedProfiles);
    navigate('/profiles');
  };

  return (
    <div className="profile-container">
      <h2 className="profile-name">{profile.name}</h2>
      <p><strong>Age:</strong> {profile.age}</p>
       <p><strong>Gender:</strong> {profile.gender}</p>
      <p><strong>Bio:</strong> {profile.bio}</p>

      <div className="profile-actions">
        <Link to="edit" className="edit-button">✏️ Edit</Link>
        <button onClick={handleDelete} className="delete-button">🗑️ Delete</button>
      </div>
    </div>
  );
}

export default ProfilePage;
