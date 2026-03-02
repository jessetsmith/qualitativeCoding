import React, { useState } from 'react';
import './AdminPages.css';

const ADMIN_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbzDn3GZ1nxxQba66jrgx1bmtW7Shf-RJltMAnVc-i0qTvP27PgatFqV_O0QROOb9EXlmw/exec';

function AdminLocations() {
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');
  const [status, setStatus] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('');

    const trimmed = location.trim();
    if (!trimmed) {
      setStatus('Please enter a location.');
      return;
    }

    setSubmitting(true);
    setStatus('Submitting…');

    const formData = new FormData();
    formData.append('Location', trimmed);
    if (notes.trim()) {
      formData.append('Notes', notes.trim());
    }
    // Tell the unified script this is a LocationCollection entry.
    formData.append('Collection', 'LocationCollection');

    const xhr = new XMLHttpRequest();
    xhr.open('POST', ADMIN_SCRIPT_URL);
    xhr.onreadystatechange = function onReady() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        setSubmitting(false);
        if (xhr.status === 200) {
          setStatus(xhr.responseText || 'Saved location.');
          setLocation('');
          setNotes('');
        } else {
          setStatus('Error: Unable to save location.');
        }
      }
    };
    xhr.send(formData);
  };

  return (
    <div className="admin-page">
      <div className="admin-card">
        <h1 className="admin-title">Locations</h1>
        <p className="admin-description">
          Record locations where Barriers &amp; Access data is being collected.
        </p>
        <form onSubmit={handleSubmit} className="admin-form">
          <label className="admin-label" htmlFor="admin-location">
            Location
          </label>
          <input
            id="admin-location"
            type="text"
            className="admin-input"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <label className="admin-label" htmlFor="admin-notes">
            Notes (optional)
          </label>
          <textarea
            id="admin-notes"
            className="admin-input admin-textarea"
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />

          {status && <p className="admin-status">{status}</p>}

          <button type="submit" className="admin-button" disabled={submitting}>
            {submitting ? 'Submitting…' : 'Save location'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLocations;

