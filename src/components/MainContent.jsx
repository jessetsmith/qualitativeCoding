import React, { useState } from 'react';
import './MainContent.css';
import busBPHero from '../assets/images/busBPHero.jpg';
import transition from '../assets/images/1TRANSITION.png';
import awareness from '../assets/images/2AWARENESS.png';
import adaptability from '../assets/images/3ADAPTABILITY.png';
import collectiveCare from '../assets/images/4COLLECTIVECARE.png';
import meaningMaking from '../assets/images/5MEANINGMAKING.png';

function MainContent() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);

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
    </div>
  );
}

export default MainContent; 