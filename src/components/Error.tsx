import React from 'react';
import '../App.css';
import snorlaxImage from '../assets/snorlax-404.png'; // Correctly import the image

export const ErrorComponent = () => (
  <div className="error-container">
    <img src={snorlaxImage} alt="404 Error: Snorlax Blocks the Way" className="error-image" />
    <div className="error-message">
      <span className="oops">Oops!</span>
      <span className="rest"> A wild Snorlax has blocked your path!</span>
    </div>
  </div>
);