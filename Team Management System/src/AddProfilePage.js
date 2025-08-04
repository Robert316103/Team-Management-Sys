import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddProfilePage.css';

function AddProfilePage({ profiles, setProfiles }) {
  const [form, setForm] = useState({ id: '', name: '', age: '', gender: '', bio: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.id || !form.name) return alert('ID and Name are required.');

    const newProfile = {
      ...form,
      age: parseInt(form.age, 10),
    };

    setProfiles([...profiles, newProfile]);
    navigate('/profiles');
  };

  return (
    <div className="add-profile-container">
      <h2 className="page-title">➕ Add New Profile</h2>
      <form className="add-profile-form" onSubmit={handleSubmit}>
        <input name="id" placeholder="Unique ID (e.g. john)" value={form.id} onChange={handleChange} required />
        <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
        <input name="age" placeholder="Age" type="number" value={form.age} onChange={handleChange} />
        <select name="gender">
            <option value={form.gender} onChange={handleChange}>Male</option>
            <option value={form.gender} onChange={handleChange}>Female</option>
        </select>
        <textarea name="bio" placeholder="Bio" value={form.bio} onChange={handleChange}></textarea>
        <button type="submit">✅ Add Profile</button>
      </form>
    </div>
  );
}

export default AddProfilePage;
