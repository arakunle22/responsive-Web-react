import React from 'react';
import './AppIntro.css';

const AppIntro = () => {
  return (
    <div className="product-container-app">
      <div className="product-title-app">
        On all Platforms.<br/>Built for everyone.
      </div>
      <div className="product-description-app">
        Ventura gives you both the foundation and flexibility to build and grow digital capabilities and deliver customer experiences
      </div>
      <div className="action-buttons-app">
        <div className="download-button-app">
          <div className="download-text-app">Download Now</div>
        </div>
        <div className="video-section-app">
          <button className="watch-video-app"> 
            <img src="/icons=play-circle-outline.png" alt="Video Icon" />
            Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppIntro;
