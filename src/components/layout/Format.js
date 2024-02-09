import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Format = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />

      {/* Content section where you can add other components */}
      <div className="content">
        {children}
      </div>

      <Footer />
    </div>
  );
};

export default Format;
