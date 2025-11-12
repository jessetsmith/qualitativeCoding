import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-hero">
        <h1 className="home-title">Qualitative Research Archive</h1>
        <p className="home-subtitle">Exploring Ethnographic Fieldwork and Trauma-Informed Museum Practice</p>
      </div>

      <div className="home-content">
        <section className="home-intro">
          <p className="intro-text">
            Welcome to this digital research archive, a comprehensive collection of qualitative research materials 
            exploring ethnographic fieldwork and trauma-informed curatorial practices. This site brings together 
            field observations, media documentation, academic analysis, and theoretical frameworks to provide 
            insights into how spaces can be designed for healing and connection.
          </p>
        </section>

        <section className="home-sections">
          <div className="section-card">
            <h2 className="section-title">Ethnographic Research</h2>
            <p className="section-description">
              Explore field observations, images, audio recordings, and ethnographic field journals documenting 
              real-world research in transit spaces and community environments. This collection captures the 
              sensory, social, and spatial dimensions of everyday experiences.
            </p>
            <Link to="/ethnographic" className="section-link">
              View Ethnographic Content →
            </Link>
          </div>

          <div className="section-card">
            <h2 className="section-title">Literature Review</h2>
            <p className="section-description">
              Discover a comprehensive framework for trauma-informed museum practice, synthesized from 44 academic 
              articles. This data-driven infographic presents principles, theoretical foundations, spatial applications, 
              and healing outcomes for curatorial practice.
            </p>
            <Link to="/infographic" className="section-link">
              View Literature Review →
            </Link>
          </div>
        </section>

        <section className="home-navigation">
          <h2 className="nav-title">Explore by Category</h2>
          <div className="nav-grid">
            <div className="nav-item">
              <h3>Media</h3>
              <p>Audio recordings, images, and videos from field research</p>
            </div>
            <div className="nav-item">
              <h3>Journals</h3>
              <p>Ethnographic field journals and analysis documents</p>
            </div>
            <div className="nav-item">
              <h3>Resources</h3>
              <p>Full data collection and supplementary materials</p>
            </div>
            <div className="nav-item">
              <h3>References</h3>
              <p>Academic citations and bibliography</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
