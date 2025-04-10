import React, { useState } from 'react';
import './MainContent.css';
import busBPHero from '../assets/images/busBPHero.jpg';
import transition from '../assets/images/1TRANSITION.png';
import awareness from '../assets/images/2AWARENESS.png';
import adaptability from '../assets/images/3ADAPTABILITY.png';
import collectiveCare from '../assets/images/4COLLECTIVECARE.png';
import meaningMaking from '../assets/images/5MEANINGMAKING.png';
import introText from '../assets/images/IntroTextVector.png';

function MainContent() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showIntroOverlay, setShowIntroOverlay] = useState(true);

  const images = [
    busBPHero,
    transition,
    awareness,
    adaptability,
    collectiveCare,
    meaningMaking
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleImageClick = (e) => {
    e.stopPropagation();
    setShowOverlay(true);
  };

  const handleOverlayClick = () => {
    setShowOverlay(false);
  };

  const handleOverlayImageClick = (e) => {
    e.stopPropagation(); // Prevent the overlay from closing when clicking the image
  };

  return (
    <>
      {/* Intro Overlay */}
      {showIntroOverlay && (
        <div className="intro-overlay">
          <div className="intro-content">
            <img
              src={introText}
              alt="Introduction Text"
              className="intro-image"
            />
            <button
              className="enter-button"
              onClick={() => setShowIntroOverlay(false)}
            >
              Enter
            </button>
          </div>
        </div>
      )}

      {/* Info Button */}
      {!showIntroOverlay && (
        <button
          className="info-button"
          onClick={() => setShowIntroOverlay(true)}
        >
          <span>i</span>
        </button>
      )}

      <div className="main-content">
        <button className="carousel-button prev" onClick={previousImage}>
          &#8249;
        </button>

        <div className="image-container">
          <img
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
            className="hero-image"
            onClick={handleImageClick}
            style={{ cursor: 'pointer' }}
          />
        </div>

        <button className="carousel-button next" onClick={nextImage}>
          &#8250;
        </button>
      </div>

      {showOverlay && (
        <div className="overlay" onClick={handleOverlayClick}>
          <div className="overlay-image-container" onClick={handleOverlayImageClick}>
            <img
              src={images[currentImageIndex]}
              alt={`Slide ${currentImageIndex + 1}`}
              className="overlay-image"
            />
            <button
              className="close-button"
              onClick={handleOverlayClick}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default MainContent; 