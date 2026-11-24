import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import titleSlide from '../assets/images/philosophy/title-slide.jpg';

function Home() {
  return (
    <div className="home-container">
      <div className="home-hero">
        <div className="home-hero-inner">
          <p className="home-kicker">Research Archive</p>
          <h1 className="home-title">Research Archive</h1>
          <p className="home-subtitle">Exploring qualitative research and trauma-informed museum practice</p>
        </div>
      </div>

      <div className="home-content">
        <section className="home-intro">
          <p className="intro-text">
            Welcome to this digital archive, a collection of field observations, media,
            academic analysis, and theoretical frameworks for designing spaces of healing
            and connection.
          </p>
        </section>

        <section className="home-highlight" aria-labelledby="home-philosophy">
          <Link to="/professional-philosophy" className="highlight-link">
            <div className="highlight-kicker">
              <p>
                <span className="kicker-mark" aria-hidden="true"></span>
                <span>Professional Philosophy</span>
                <span className="kicker-dot">·</span>
                <span className="kicker-highlight">Highlight</span>
              </p>
              <span className="highlight-year">2026</span>
            </div>
            <h2 className="highlight-title" id="home-philosophy">Expressions of Corporeality</h2>
            <p className="highlight-dek">
              Navigating ethical safeguards and relational containers in sensory art education
            </p>
            <p className="highlight-body">
              A philosophy of care in the studio: voluntary consent, pacing, and shared
              standards of care across art education and counseling.
            </p>
            <span className="highlight-open">Read more</span>
            <img
              className="highlight-image"
              src={titleSlide}
              alt="Title slide for Expressions of Corporeality, with counselor and student survey codes."
            />
          </Link>
        </section>

        <section className="home-sections">
          <div className="section-card">
            <h2 className="section-title">Qualitative Research</h2>
            <p className="section-description">
              Field observations, images, audio recordings, and qualitative field journals
              from transit spaces and community environments.
            </p>
            <Link to="/ethnographic" className="section-link">
              Read more
            </Link>
          </div>

          <div className="section-card">
            <h2 className="section-title">Literature Review</h2>
            <p className="section-description">
              A framework for trauma-informed museum practice, synthesized from 70 academic
              articles, with principles, spatial applications, and healing outcomes.
            </p>
            <Link to="/infographic" className="section-link">
              Read more
            </Link>
          </div>
        </section>

        <section className="home-navigation">
          <h2 className="nav-title">Explore by Category</h2>
          <div className="nav-grid">
            <a
              href="https://drive.google.com/drive/folders/1WWa0w394ScHErY20fUzhmomYHa_QMxPe?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-item-link"
            >
              <div className="nav-item">
                <h3>Media</h3>
                <p>Audio recordings, images, and videos from field research</p>
              </div>
            </a>
            <Link to="/ethnographic" className="nav-item-link">
              <div className="nav-item">
                <h3>Journals</h3>
                <p>Qualitative field journals and analysis documents</p>
              </div>
            </Link>
            <a
              href="https://drive.google.com/drive/folders/1wtnqNGUr3rHDH9ceps5NiSnmHhRTbNQ7?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-item-link"
            >
              <div className="nav-item">
                <h3>Resources</h3>
                <p>Full data collection and supplementary materials</p>
              </div>
            </a>
            <Link to="/references" className="nav-item-link">
              <div className="nav-item">
                <h3>References</h3>
                <p>Academic citations and bibliography</p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
