import React from 'react';
import './BlogPost.css';

const BlogPost = () => {
  // Create an array with 5 elements to repeat the BlogPost component 5 times
  const blogPosts = Array.from({ length: 5 }, (_, index) => (
    <div className="blog-post-container" key={index}>
      <img className="blog-image" src="./BlogPost.png" alt="Blog Cover" />
      <div className="blog-content">
        <div className="blog-header">
          <div className="theme">THEME</div>
          <div className="blog-title">Blog Title goes here</div>
          <div className="blog-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa nisi, efficitur in consectetur ac,
            dictum sit amet massa.
          </div>
        </div>
        <div className="publish-date">00 Month 2023</div>
      </div>
    </div>
  ));

  return (
    <div>
      {blogPosts}
      <div className='btn' >
      <button className="load-more-button" onClick={() => console.log('Load More clicked')}>
        <div className="load-more-text">Load More</div>
      </button>
      </div>
    </div>
  );
};

export default BlogPost;
