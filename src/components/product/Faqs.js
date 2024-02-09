import React, { useState } from 'react';
import './Faqs.css';

const Faqs = () => {
  const [dropdownState, setDropdownState] = useState(Array(5).fill(false));
  const [additionalText, setAdditionalText] = useState(Array(5).fill(''));

  const toggleDropdown = (index) => {
    const newDropdownState = [...dropdownState];
    newDropdownState[index] = !newDropdownState[index];
    setDropdownState(newDropdownState);

    // If dropdown is open, add additional text, otherwise remove it
    setAdditionalText((prevText) => {
      const newText = [...prevText];
      newText[index] = newDropdownState[index] ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa nisi, efficitur in consectetur ac, dictum sit amet massa.' : '';
      return newText;
    });
  };

  return (
    <div className="faqs-container">
      <div className="faqs-content">
        <div className="faqs-section">
          <div className="section-title">FAQs</div>
          <div className="section-subtitle">Frequently Asked Questions</div>
        </div>
        <div className="faqs-list">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="faq-item">
              <div className="faq-text">
                Add commonly asked questions here
                <img
                  className={`dropdown-icon ${dropdownState[index] ? 'dropup' : ''}`}
                  src={dropdownState[index] ? './ProductLayer 1.png' : './ProductLayer 2.png'}
                  alt="Dropdown Icon"
                  onClick={() => toggleDropdown(index)}
                />
                {dropdownState[index] && <div className="additional-text">{additionalText[index]}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
