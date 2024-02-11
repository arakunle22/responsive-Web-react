import React from 'react';
// import './Features.css';


const FeatureCard = ({ imgSrc, title, description }) => {
  return (
    <div className="feature-card">
      <div className="image-container">
        <img src={imgSrc} alt="Feature" />
      </div>
      <div className="text-containerCard">
        <div className="title-card">{title}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default FeatureCard;
