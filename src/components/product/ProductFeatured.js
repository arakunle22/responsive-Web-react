import React from 'react';
import './ProductFeatured.css';

const ProductFeatured = () => {
  return (
    <div className="featured-container">
      <img className="featured-image" src="./product 1.png" alt="Featured Product" />
      <div className="featured-content">
        <div className="featured-section">
          <div className="section-title">CHOOSE US</div>
          <div className="section-subtitle">Placeholder title goes here</div>
          <div className="section-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa nisi, efficitur in consectetur ac, dictum sit amet massa.
          </div>
          <div className="section-divider" />
        </div>
        <div className="featured-section">
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
    </div>
  );
};

export default ProductFeatured;
