import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { clearAdminLogin } from '../utils/adminAuth';
import './AdminPages.css';

function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearAdminLogin();
    navigate('/', { replace: true });
  };

  return (
    <div className="admin-page">
      <div className="admin-card">
        <h1 className="admin-title">Admin Area</h1>
        <p className="admin-description">
          Use these tools to work with Barriers &amp; Access responses.
        </p>
        <div className="admin-links">
          <Link to="/admin/locations" className="admin-link-button">
            Locations
          </Link>
        </div>
        <button type="button" className="admin-secondary-button" onClick={handleLogout}>
          Log out
        </button>
      </div>
    </div>
  );
}

export default AdminDashboard;

