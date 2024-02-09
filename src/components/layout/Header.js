import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo">
        <a href="/">
          <img src="/Logo 1.png" alt="Logo" />
        </a>
      </div>

      <nav className="navigation">
        <ul>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/apps">Apps</Link>
          </li>

          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
        </ul>
      </nav>
      <div className="end">
        <div className="video-section">
          <button className="watch-video">
            <img src="/icons=play-circle-outline.png" alt="Video Icon" />
            Watch Video
          </button>
        </div>

        <div className="download-section">
          <button className="download-now">Download Now</button>
        </div>
      </div>
    </header>
  );
};

export default Header;