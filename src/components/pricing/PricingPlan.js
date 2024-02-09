import React from 'react';
import './PricingPlan.css';

const PricingPlan = () => {
  return (
    <div className="pricing-plan-container">
      <div className="pricing-plan">
        <div className="plan-header">
          <div className="plan-type">PERSONAL</div>
        </div>
        <div className="plan-details">
          <div className="price">
            <div className="currency">$8</div>
            <div className="period">/month</div>
          </div>
          <div className="plan-description">
            <div className="title">Perfect plan for starters</div>
            <div className="subtitle">
              A free account forever grants you access to exclusive Polka features and project management tools. Sign up
              now
            </div>
          </div>
        </div>
        <div className="tick-values">
          <div className="tick-item">
            <div className="tick-icon">
                <img src='./Tick-Icon.png' alt='tick-icon' />
                 </div>
            <div className="tick-text">Tick values goes here</div>
          </div>
          {/* Repeat tick-items as needed */}
          <div className="tick-item">
            <div className="tick-icon">
                <img src='./Tick-Icon.png' alt='tick-icon' />
                 </div>
            <div className="tick-text">Tick values goes here</div>
          </div>
          <div className="tick-item">
            <div className="tick-icon">
                <img src='./Tick-Icon.png' alt='tick-icon' />
                 </div>
            <div className="tick-text">Tick values goes here</div>
          </div>
          <div className="tick-item">
            <div className="tick-icon">
                <img src='./X.png' alt='tick-icon' />
                 </div>
            <div className="tick-text" style={{ color: '#B5B6BA' }}>Tick values goes here</div>
          </div>
          <div className="tick-item">
            <div className="tick-icon">
                <img src='./X.png' alt='tick-icon' />
                 </div>
            <div className="tick-text" style={{ color: '#B5B6BA' }}>Tick values goes here</div>
          </div>
          <div className="tick-item">
            <div className="tick-icon">
                <img src='./X.png' alt='tick-icon' />
                 </div>
            <div className="tick-text" style={{ color: '#B5B6BA' }}>Tick values goes here</div>
          </div>
        </div>
        <div className="get-started-button">
          <div className="button-text">Get Started</div>
        </div>
      </div>
      {/* Repeat for additional pricing plan */}

      <div className="pricing-plan">
        <div className="plan-header">
          <div className="plan-type">TEAMS</div>
        </div>
        <div className="plan-details">
          <div className="price">
            <div className="currency">$16</div>
            <div className="period">/month</div>
          </div>
          <div className="plan-description">
            <div className="title">Perfect plan for starters</div>
            <div className="subtitle">
              A free account forever grants you access to exclusive Polka features and project management tools. Sign up
              now
            </div>
          </div>
        </div>
        <div className="tick-values">
        <div className="tick-item">
            <div className="tick-icon">
                <img src='./Tick-Icon.png' alt='tick-icon' />
                 </div>
            <div className="tick-text">Tick values goes here</div>
          </div>
          {/* Repeat tick-items as needed */}

          <div className="tick-item">
            <div className="tick-icon">
                <img src='./Tick-Icon.png' alt='tick-icon' />
                 </div>
            <div className="tick-text">Tick values goes here</div>
          </div>
          <div className="tick-item">
            <div className="tick-icon">
                <img src='./Tick-Icon.png' alt='tick-icon' />
                 </div>
            <div className="tick-text">Tick values goes here</div>
          </div>
          <div className="tick-item">
            <div className="tick-icon">
                <img src='./Tick-Icon.png' alt='tick-icon' />
                 </div>
            <div className="tick-text">Tick values goes here</div>
          </div>
          <div className="tick-item">
            <div className="tick-icon">
                <img src='./Tick-Icon.png' alt='tick-icon' />
                 </div>
            <div className="tick-text">Tick values goes here</div>
          </div>
          <div className="tick-item">
            <div className="tick-icon">
                <img src='./Tick-Icon.png' alt='tick-icon' />
                 </div>
            <div className="tick-text">Tick values goes here</div>
          </div>
        </div>
        <div className="get-started-button">
          <div className="button-text">Get Started</div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
