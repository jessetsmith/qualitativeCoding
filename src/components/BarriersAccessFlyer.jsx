import React, { useState, useRef } from 'react';
import './BarriersAccessFlyer.css';
import { isAdminLoggedIn } from '../utils/adminAuth';

const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbz4UXrGj7Fs6x4sI9_w-cbTMUj37fUo6FcUUGRW-9ZuGOWfd5qpSONpRvNnrGVUe-5yXw/exec';

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

const UNIVERSITY_BLOCKED_TERMS = [
  'fuck',
  'fucking',
  'fucked',
  'fucker',
  'motherfucker',
  'motherfuckers',
  'motherfucking',
  'motherfucked',
  'shit',
  'shitty',
  'cunt',
  'cunts',
  'pussy',
  'pussies',
  'whore',
  'whores',
  'slut',
  'sluts',
  'faggot',
  'faggots',
  'bitches',
  'bitch',
  'nigger',
  'nigga',
  'niggers',
];

function validateUniversity(value) {
  const trimmed = value.trim();

  if (!trimmed) {
    return { ok: true, message: '' };
  }

  if (trimmed.length > 120) {
    return {
      ok: false,
      message: 'Please keep the university or institution under 120 characters.',
    };
  }

  const lower = trimmed.toLowerCase();
  if (UNIVERSITY_BLOCKED_TERMS.some((term) => lower.includes(term))) {
    return {
      ok: false,
      message:
        'The university or institution field contains language that cannot be submitted. Please rephrase.',
    };
  }

  return { ok: true, message: '' };
}

function BarriersAccessFlyer() {
  const [university, setUniversity] = useState('');
  const [frequency, setFrequency] = useState('');
  const [selectedResponse, setSelectedResponse] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const formRef = useRef(null);
  const adminActive = isAdminLoggedIn();

  const showModal = (message) => {
    setModalMessage(message);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const handleSubmit = (e) => {
    if (!selectedResponse) {
      e.preventDefault();
      showModal('Please choose one experience that resonates with you.');
      return;
    }

    const uniCheck = validateUniversity(university);
    if (!uniCheck.ok) {
      e.preventDefault();
      showModal(uniCheck.message);
      return;
    }

    let parsedFrequency = null;
    const trimmedFreq = frequency.trim();
    if (adminActive && trimmedFreq) {
      const value = parseInt(trimmedFreq, 10);
      if (Number.isNaN(value) || value < 0) {
        e.preventDefault();
        showModal('Frequency must be a non‑negative number.');
        return;
      }
      parsedFrequency = value;
    }

    if (adminActive && parsedFrequency !== null) {
      const formData = new FormData();
      formData.append('Response', selectedResponse);
      formData.append('Frequency', String(parsedFrequency));
       // Use the unified script: mark this as an admin frequency collection.
      formData.append('Collection', 'FrequencyCollection');
      if (university.trim()) {
        formData.append('Institution', university.trim());
      }
      formData.append('Type', 'barriers-frequency');

      if (navigator.sendBeacon) {
        const blob = new Blob([new URLSearchParams(formData)], {
          type: 'application/x-www-form-urlencoded',
        });
        navigator.sendBeacon(SCRIPT_URL, blob);
      } else {
        // Fire-and-forget; we don't read the response to avoid CORS issues.
        fetch(SCRIPT_URL, { method: 'POST', body: formData, mode: 'no-cors' }).catch(() => {});
      }
    }

    // For admins, we only want the frequency collection request to be saved.
    // Prevent the main DataCollection form POST from firing.
    if (adminActive) {
      e.preventDefault();
    }

    showModal('Submitting...');
    setTimeout(() => {
      showModal('Thank you. Your response has been recorded.');
      setSelectedResponse(null);
      setUniversity('');
      if (adminActive) {
        setFrequency('');
      }
    }, 2000);
  };

  return (
    <div className="flyer-page">
      <div className="flyer-top-bar">
        <span className="flyer-top-bar-text">How can we begin to understand the world through your life?</span>
      </div>

      <div className="flyer-content">
        <div className="flyer-intro">
          <p className="flyer-tagline">This is a student-led inquiry into campus ease and barriers.</p>
          <h1 className="flyer-title">How are you navigating today?</h1>
          <p className="flyer-instruction">
            If one of the options below resonates with your experience right now, select it and submit.<br/> Your response tells a story about what it's like to be here today.
          </p>
          <p className="flyer-contact">
            Contact: Amanda Smith, PhD Student, Art and Visual Culture Education — amandajsmith@arizona.edu
          </p>
        </div>

        <form
          id="barriersAccessForm"
          ref={formRef}
          action={SCRIPT_URL}
          method="post"
          target="flyer-submit-frame"
          onSubmit={handleSubmit}
          className="flyer-form"
        >
          <div className="flyer-field flyer-field-university">
            <label htmlFor="university">University or institution (optional)</label>
            <input
              type="text"
              id="university"
              name="University"
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
              placeholder="e.g. University of Arizona"
              className="flyer-input"
            />
          </div>

          {adminActive && (
            <div className="flyer-field flyer-field-frequency">
              <label htmlFor="frequency">Admin only: frequency (optional)</label>
              <input
                type="number"
                id="frequency"
                min="0"
                className="flyer-input"
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
              />
            </div>
          )}

          <div className="flyer-response-section">
            <div className="flyer-response-banner">
              <span className="flyer-response-banner-text">Choose one that resonates with you</span>
            </div>
            <div className="flyer-tabs">
              {RESPONSE_OPTIONS.map((text) => (
                <button
                  key={text}
                  type="button"
                  className={`flyer-tab ${selectedResponse === text ? 'selected' : ''}`}
                  onClick={() => setSelectedResponse(text)}
                >
                  {text}
                </button>
              ))}
            </div>
          </div>

          <input type="hidden" name="Response" value={selectedResponse || ''} />
          <input type="hidden" name="Collection" value="DataCollection" />
          <input
            type="hidden"
            name="ReturnUrl"
            value={typeof window !== 'undefined' ? `${window.location.origin}/barriers-access` : ''}
          />
          <button type="submit" className="flyer-submit">Submit response</button>
        </form>

        <iframe
          name="flyer-submit-frame"
          title="Form submission"
          className="flyer-submit-iframe"
        />
      </div>

      <div className="flyer-bottom-bar">
        <span className="flyer-bottom-bar-text">ADR DRC — Barriers &amp; Access</span>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="flyer-modal-overlay" onClick={closeModal}>
          <div className="flyer-modal" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="flyer-modal-close" onClick={closeModal} aria-label="Close">&times;</button>
            <p className="flyer-modal-message">{modalMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default BarriersAccessFlyer;
