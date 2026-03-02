import React, { useState } from 'react';
import './AdminPages.css';

const ADMIN_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbzDn3GZ1nxxQba66jrgx1bmtW7Shf-RJltMAnVc-i0qTvP27PgatFqV_O0QROOb9EXlmw/exec';

const RESPONSE_OPTIONS = [
  'I had to face a barrier today.',
  'I found a place to rest.',
  'I moved with ease today.',
  'This space feels exclusionary.',
  "I couldn't find the elevator.",
  'The "accessible" route was longer.',
  'I am feeling "Crip Pride" today.',
  "I couldn't focus in class today.",
  'My brain needs a break.',
  'I felt like I belonged here.',
  "I'm navigating an invisible wall.",
  'I had to disclose to get help.',
  'A peer made space for me.',
  "I'm not doing so great.",
  "I'm doing great!",
];

function AdminBarriersAccess() {
  const [response, setResponse] = useState(RESPONSE_OPTIONS[0]);
  const [frequency, setFrequency] = useState('');
  const [status, setStatus] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('');

    const value = parseInt(frequency, 10);
    if (Number.isNaN(value) || value < 0) {
      setStatus('Frequency must be a non‑negative number.');
      return;
    }

    setSubmitting(true);
    setStatus('Submitting…');

    const formData = new FormData();
    formData.append('Response', response);
    formData.append('Frequency', String(value));
    // Use the unified script frequency collection route.
    formData.append('Collection', 'FrequencyCollection');

    const xhr = new XMLHttpRequest();
    xhr.open('POST', ADMIN_SCRIPT_URL);
    xhr.onreadystatechange = function onReady() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        setSubmitting(false);
        if (xhr.status === 200) {
          setStatus(xhr.responseText || 'Saved frequency.');
          setFrequency('');
        } else {
          setStatus('Error: Unable to save frequency.');
        }
      }
    };
    xhr.send(formData);
  };

  return (
    <div className="admin-page">
      <div className="admin-card">
        <h1 className="admin-title">Barriers &amp; Access – Frequency</h1>
        <p className="admin-description">
          Record frequency counts for specific Barriers &amp; Access options.
        </p>
        <form onSubmit={handleSubmit} className="admin-form">
          <label className="admin-label" htmlFor="admin-response">
            Response
          </label>
          <select
            id="admin-response"
            className="admin-input"
            value={response}
            onChange={(e) => setResponse(e.target.value)}
          >
            {RESPONSE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>

          <label className="admin-label" htmlFor="admin-frequency">
            Frequency
          </label>
          <input
            id="admin-frequency"
            type="number"
            min="0"
            className="admin-input"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
          />

          {status && <p className="admin-status">{status}</p>}

          <button type="submit" className="admin-button" disabled={submitting}>
            {submitting ? 'Submitting…' : 'Save frequency'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminBarriersAccess;

