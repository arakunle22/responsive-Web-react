import React from 'react';
import './BlogHeader.css';

const BlogHeader = () => {
  return (
    <div className="blog-header-container">
        <div>
      <div className="blog-title">
        <div className="title-text">Blog</div>
      </div>
      <div className="post-section">
        <div className="post-label">All posts
        <img src='./ProductLayer 2.png' alt='arrow-down' />
        </div>
        
        {/* <div className="icon-container">
         <img src='./ProductLayer 2.png' alt='arrow-down' />
        </div> */}
      </div>
      </div>
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
        />
        <div className="search-icon-container">
          <div className="search-icon-background">
            <img src='./search-icon.png' alt='search-icon'/>
          </div>
          <div className="search-icon-shape"></div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
