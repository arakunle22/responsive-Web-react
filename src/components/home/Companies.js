import React from 'react';
import './Companies.css'; // Don't forget to create the CSS file

const Companies = () => {
  return (
    <div className="flex-container">
      <img style={{ width: 138, height: 19 }} src="/Brand1.png" alt="Placeholder 1" />
      <img style={{ width: 139, height: 29 }} src="/Brand2.png" alt="Placeholder 2" />
      <img style={{ width: 138, height: 22 }} src="/Brand3.png" alt="Placeholder 3" />
      <img style={{ width: 138, height: 26 }} src="/Brand4.png" alt="Placeholder 4" />
    </div>
  );
};

export default Companies;
