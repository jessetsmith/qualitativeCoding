import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './BarriersAccessFlyer.css';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyCsocWJbfU5W_POf7ofFN34wC1Q7eW_4T8VN8DZ1EAbN9tq8UjH1lfgIDWA4_dSKrf2A/exec';

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

function BarriersAccessFlyer() {
  const [university, setUniversity] = useState('');
  const [selectedResponse, setSelectedResponse] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const formRef = useRef(null);

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
    showModal('Submitting...');
    setTimeout(() => {
      showModal('Thank you. Your response has been recorded.');
      setSelectedResponse(null);
      setUniversity('');
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
          action={GOOGLE_SCRIPT_URL}
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
