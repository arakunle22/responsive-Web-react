import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <img src="/Logo 2.png" alt="Logo" />
        <div className="footer-description">
          <div className="footer-description-text">
            Lorem ipsum dolor sit amet, consect etur adipiscing elit.
          </div>
        </div>
        <div className="footer-social">
        <a href='/social'>  <img src="/Soc1.png" alt="Social Icon" /> </a>
        <a href='/social'>  <img src="/Soc2.png" alt="Social Icon" /> </a>
        <a href='/social'>  <img src="/Soc3.png" alt="Social Icon" /> </a>
      </div>
      </div>
    
      <div className="footer-links">
        <div className="footer-section">
          <div className="footer-title">Company</div>
          <a href="/products" className="footer-link">Products</a>
          <a href="/apps" className="footer-link">Apps</a>
          <a href="/blog" className="footer-link">Blogs</a>
          <a href="/pricing" className="footer-link">Pricing</a>
        </div>
        <div className="footer-section">
          <div className="footer-title">Resources</div>
          <a href="/template" className="footer-link">Template</a>
          <a href="/invoice" className="footer-link">Invoice</a>
          <a href="/feature1" className="footer-link">Feature </a>
          <a href="/feature2" className="footer-link">Feature</a>
        </div>
      </div>
      <div className="footer-newsletter">
        <div className="footer-end">Join Our Newsletter</div>
        <div className="footer-input-container">
          <div className="footer-input">
            <input type="text" placeholder="Your email address" />
          </div>
        </div>
        <ul className="bullet-list">
          <li className="footer-description-text">
            Will send you weekly updates for your better finance management
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
