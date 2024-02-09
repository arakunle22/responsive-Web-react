// AppFeatures2.js
import React from 'react';
import './AppFeatures2.css'; // Assuming styles.css is in the same directory

const AppFeatures2 = () => {
  return (
    <div className="app-container">
      <div className="app-column-container">
        <div className="app-inner-column-container">
          <div className="app-title">CHOOSE US</div>
          <div className="app-main-title">Placeholder title goes here</div>
          <div className="app-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa nisi, efficitur in consectetur ac, dictum sit amet massa.
          </div>
          <div className="app-download-button">
            <div className="app-button-text">Download for Web</div>
          </div>
          <div className="app-horizontal-rule" />
        </div>
      </div>
      <img className="app-image" src="./App2.png" alt="Placeholder" />
    </div>
  );
};

export default AppFeatures2;
