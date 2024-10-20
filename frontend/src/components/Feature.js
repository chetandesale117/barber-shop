import React from 'react';
import '../App.css'; // Assuming you'll add some styles for the feature component

const Feature = ({ title, description, icon }) => {
  return (
    <div className="feature">
      <div className="feature-icon">
        {icon}
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
};

export default Feature;
