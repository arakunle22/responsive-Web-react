import React from 'react';
import './ProductIntro.css';

const ProductIntro = () => {
  return (
    <div className="product-container">
      <div className="product-title">
        Easy and free.<br/>And built for everyone
      </div>
      <div className="product-description">
        Ventura gives you both the foundation and flexibility to build and grow digital capabilities and deliver customer experiences
      </div>
      <div className="action-buttons">
        <div className="download-button">
          <div className="download-text">Download Now</div>
        </div>
        <div className="video-section">
        <button className="watch-video"> 
        <img src="/icons=play-circle-outline.png" alt="Video Icon" />
        Watch Video</button>
      </div>
      </div>
    </div>
  );
};

export default ProductIntro;
