import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import nowhereLogo from '../assets/images/NOWHERE.png';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-links">
          <div className="footer-section">
            <h3 className="footer-title">Site Navigation</h3>
            <ul className="footer-link-list">
              <li>
                <Link to="/" className="footer-link">Home</Link>
              </li>
              <li>
                <Link to="/ethnographic" className="footer-link">Qualitative Research</Link>
              </li>
              <li>
                <Link to="/infographic" className="footer-link">Literature Review</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Resources</h3>
            <ul className="footer-link-list">
              <li>
                <a href="https://drive.google.com/drive/folders/1wtnqNGUr3rHDH9ceps5NiSnmHhRTbNQ7?usp=sharing" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="footer-link">
                  Full Data Collection
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1WWa0w394ScHErY20fUzhmomYHa_QMxPe?usp=drive_link" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="footer-link">
                  Media Gallery
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Creative Writing</h3>
            <ul className="footer-link-list">
              <li>
                <a href="https://bittersweetwoman.com" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="footer-link">
                  Bittersweet Woman
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-credit">
          <div className="credit-content">
            <span className="credit-text">Site made by</span>
            <a href="https://nowheremaps.digital" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="credit-link">
              <img src={nowhereLogo} alt="NowhereMaps Digital" className="credit-logo" />
              <span className="credit-name">NowhereMaps Digital</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

