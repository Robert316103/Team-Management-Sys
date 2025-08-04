import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditProfilePage.css';

function EditProfilePage({ profiles, setProfiles }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const profile = profiles.find((p) => p.id === id);
  const [form, setForm] = useState({ id: '', name: '', age: '', gender:'', bio: '' });

  useEffect(() => {
    if (profile) {
      setForm({
        id: profile.id,
        name: profile.name,
        age: profile.age,
        bio: profile.bio,
      });
    }
  }, [profile]);

  if (!profile) return <p className="not-found-msg">⚠️ Profile not found.</p>;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedProfiles = profiles.map((p) =>
      p.id === id ? { ...p, ...form, age: parseInt(form.age, 10) } : p
    );

    setProfiles(updatedProfiles);
    navigate(`/profiles/${id}`);
  };

  return (
    <div className="edit-profile-container">
      <h2 className="page-title">✏️ Edit Profile</h2>
      <form className="edit-profile-form" onSubmit={handleSubmit}>
        <input name="id" value={form.id} readOnly disabled />
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <input name="age" placeholder="Age" type="number" value={form.age} onChange={handleChange} />
        <select name="gender" placeholder="Gender" value={form.gender} onChange={handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
        <textarea name="bio" placeholder="Bio" value={form.bio} onChange={handleChange} />
        <button type="submit">💾 Save Changes</button>
      </form>
    </div>
  );
}

export default EditProfilePage;
