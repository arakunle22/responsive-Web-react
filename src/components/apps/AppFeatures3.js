// AppFeatures3.js
import React from 'react';
import './AppFeatures3.css';

const AppFeatures3 = () => {
  return (
    <div className="app-features-container">
      <img className="app-feature-image" src="./Apps3.png" alt="Feature" />
      <div className="app-feature-details">
        <div className="app-feature-header">CHOOSE US</div>
        <div className="app-feature-title">Placeholder title goes here</div>
        <div className="app-feature-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa nisi, efficitur in consectetur ac,
          dictum sit amet massa.
        </div>
        <div className="app-download-button">
          <div className="app-button-text">Download for Phone</div>
        </div>
        <div className="app-separator" />
      </div>
    </div>
  );
};

export default AppFeatures3;
