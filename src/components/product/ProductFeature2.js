import React from 'react';
import './ProductFeature2.css';

const ProductFeature2 = () => {
  return (
    <div className="feature2-container">
      <div className="feature2-content">
        <div className="feature2-section">
          <div className="section-title">CHOOSE US</div>
          <div className="section-subtitle">Placeholder title goes here</div>
          <div className="section-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa nisi, efficitur in consectetur ac, dictum sit amet massa.
          </div>
          <div className="section-divider" />
        </div>
        <div className="feature2-section">
          <div className="feature-item">
          
          <img src="Layer 2.png" alt="House Icon" className="choose-icon" />

            <div className="feature-text">Get Feature today</div>
          </div>
          <div className="feature-item">
           
          <img src="Layer 2.png" alt="House Icon" className="choose-icon" />

            <div className="feature-text">Get Feature today</div>
          </div>
          <div className="feature-item">
          
          <img src="Layer 2.png" alt="House Icon" className="choose-icon" />

            <div className="feature-text">Get Feature today</div>
          </div>
        </div>
      </div>
      <img className="feature2-image" src="./product 2.png" alt="Featured Product" />
    </div>
  );
};

export default ProductFeature2;
