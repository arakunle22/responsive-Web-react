
// AppsFeatures.js
import React from 'react';
import './AppsFeatures.css';

const AppProductFeatures = () => {
  return (
    <div className="app-product-features-container">
      <img className="app-product-feature-image" src="./apps 1.png" alt="Feature" />
      <div className="app-product-feature-details">
        <div className="app-product-feature-header">CHOOSE US</div>
        <div className="app-product-feature-title">Placeholder title goes here</div>
        <div className="app-product-feature-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa nisi, efficitur in consectetur ac,
          dictum sit amet massa.
        </div>
        <div className="app-product-download-button">
          <div className="app-product-button-text">Download for PC</div>
        </div>
        <div className="app-product-separator" />
      </div>
    </div>
  );
};

export default AppProductFeatures;