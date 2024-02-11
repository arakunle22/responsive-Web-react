import React from 'react';
import './Choose.css';


const Choose = () => {
  return (
    <div className="choose-container">
      <div className="choose-content-container">
        <div className="choose-text-container">
          <div className="choose-title">CHOOSE US</div>
          <div className="choose-subtitle">Track your payments with no delay</div>
          <div className="choose-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa nisi, efficitur in consectetur ac, dictum sit amet massa.
          </div>
          <div className="choose-divider" />
        </div>
        <div className="choose-features-container">
          <div className="choose-feature">
            <img src="Layer 2.png" alt="House Icon" className="choose-icon" />
            <div className="choose-feature-text">Get Feature today</div>
          </div>
          <div className="choose-feature">
            <img src="Layer 2.png" alt="House Icon" className="choose-icon" />
            <div className="choose-feature-text">Get Feature today</div>
          </div>
          <div className="choose-feature">
            <img src="Layer 2.png" alt="House Icon" className="choose-icon" />
            <div className="choose-feature-text">Get Feature today</div>
          </div>
        </div>
      </div>
      <img className="choose-image" src="Pic2 1.png" alt="Feature" />
    </div>
  );
};

export default Choose;
