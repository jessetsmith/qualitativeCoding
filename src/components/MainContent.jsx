import React, { useState } from 'react';
import './MainContent.css';
import busBPHero from '../assets/images/busBPHero.jpg';
import busInterior from '../assets/images/busInterior.JPG';
import busStop from '../assets/images/busStop.JPG';
import curatorialInquiry from '../assets/images/Curatorial Inquiry.png';
import digitalMappingCollage from '../assets/images/Digital Mapping Collage .png';
import transitCenterMapping from '../assets/images/TransitCenterMapping.png';

function MainContent() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    busBPHero,
    busInterior,
    busStop,
    curatorialInquiry,
    digitalMappingCollage,
    transitCenterMapping
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
        // onError={(e) => {
        //   console.error('Error loading image:', e);
        //   e.target.src = './assets/images/busBPHero.jpg';
        // }}
        />
      </div>

      <button className="carousel-button next" onClick={nextImage}>
        &#8250;
      </button>
    </div>
  );
}

export default MainContent; 