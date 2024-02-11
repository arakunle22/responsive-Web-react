import React from 'react';
import FeatureCard from './FeatureCard';
import './Features.css';

const Features = () => {
  return (
    <div className="features-container">
      <div className="title-container">
        <h1 className="title-head">FEATURES</h1>
        <h2 className="sub-title">Our Special Features</h2>
      </div>
      <div className="cards-container">
        <div className='cardsRow-1 cardrow'>
          <FeatureCard
            imgSrc="/2.png"
            title="Feature Name"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa nisi, efficitur."
          />


          <FeatureCard
            imgSrc="/1.png"
            title="Feature Name"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa nisi, efficitur."
          />
        
          <FeatureCard
            imgSrc="/4.png"
            title="Feature Name"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa nisi, efficitur."
          />
</div>

  <div className='cardsRow-1'>
          <FeatureCard
            imgSrc="/3.png"
            title="Feature Name"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa nisi, efficitur."
          />
        

          <FeatureCard
            imgSrc="/5.png"
            title="Feature Name"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa nisi, efficitur."
          />
      </div>
      </div>
    </div>
  );
};

export default Features;
