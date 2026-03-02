import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkAdminCredentials, markAdminLoggedIn } from '../utils/adminAuth';
import './AdminPages.css';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!username || !password) {
      setError('Please enter your username and password.');
      return;
    }

    setLoading(true);

    const ok = checkAdminCredentials(username.trim(), password);
    if (!ok) {
      setLoading(false);
      setError('Invalid admin credentials.');
      return;
    }

    markAdminLoggedIn();
    setLoading(false);
    navigate('/admin', { replace: true });
  };

  return (
    <div className="admin-page">
      <div className="admin-card">
        <h1 className="admin-title">Admin Login</h1>
        <p className="admin-description">
          This area is for research administration only.
        </p>
        <form onSubmit={handleSubmit} className="admin-form">
          <label className="admin-label" htmlFor="admin-username">
            Username
          </label>
          <input
            id="admin-username"
            type="text"
            className="admin-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
          />

          <label className="admin-label" htmlFor="admin-password">
            Password
          </label>
          <input
            id="admin-password"
            type="password"
            className="admin-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />

          {error && <p className="admin-error">{error}</p>}

          <button type="submit" className="admin-button" disabled={loading}>
            {loading ? 'Checking…' : 'Log in'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;

