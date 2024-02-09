import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="text-section">
          <h1 className="hero-title">Manage all your personal finances with ease.</h1>
          <p className="hero-subtitle">
            Ventura gives you both the foundation and flexibility to build and grow digital capabilities and deliver customer experiences.
          </p>
        </div>
        <div className="hero-buttons">
          <button className="hero-btn hero-download">Download Now</button>
          <button className="hero-btn hero-watch-video">
            <img src="/icons=play-circle-outline.png" alt="Video Icon" />
            Watch Video
          </button>
        </div>
      </div>
      <div className="hero-images">

      <img className="hero-left-image" src="/Graph 1.png" alt="Left" />
        <div className="hero-center-placeholder">
        <img className="hero-right-image" src="/Pic1 1.png" alt="Right" />
        </div>
        
      </div>
    </div>
    
    
   
  );
};

export default Hero;
