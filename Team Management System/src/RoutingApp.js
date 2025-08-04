import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './HomePage';
import ProfilesPage from './ProfilesPage';
import ProfilePage from './ProfilePage';
import NoProfileSelected from './NoProfileSelected';
import AddProfilePage from './AddProfilePage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import EditProfilePage from './EditProfilePage';
import DashboardPage from './DashboardPage';
import './RoutingApp.css';

function RoutingApp() {

	 const [profiles, setProfiles] = useState(() => {
  const saved = localStorage.getItem('profiles');
  return saved ? JSON.parse(saved) : [];
});


useEffect(() => {
  localStorage.setItem('profiles', JSON.stringify(profiles));
}, [profiles]);



  return (
   				<Router>
				   				<nav className="navbar">
				      			<div className="nav-left">
								        <Link to="/" className="nav-link">🏠 Home</Link>
								        <Link to="/profiles" className="nav-link">👥 Profiles</Link>
								        <Link to="/dashboard" className="nav-link">📊 Dashboard</Link>
								        <Link to="/profiles/new" className="nav-link">➕ Add Profile</Link>
				      			</div>
				    		</nav>

				   					<Routes>
				        <Route path="/" element={<HomePage />} />
				     

				  <Route path="/profiles" element={<ProfilesPage profiles={profiles} setProfiles={setProfiles} />}>
				          //Dashboard as the default page (index) 
				          <Route index element={<DashboardPage profiles={profiles} />} />
				          <Route index element={<NoProfileSelected />} />
				          <Route path="new" element={<AddProfilePage profiles={profiles} setProfiles={setProfiles} />} />
				          <Route path=":id" element={<ProfilePage profiles={profiles} setProfiles={setProfiles} />} />
				          <Route path=":id/edit" element={<EditProfilePage profiles={profiles} setProfiles={setProfiles} />} />
				        </Route>
				      </Routes>
   				</Router>
  );
}

export default RoutingApp;
