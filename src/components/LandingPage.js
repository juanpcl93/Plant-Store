import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="background-image"></div>
      <h1>Plant Store</h1>
      <p>Encuentra las plantas perfectas para tu hogar.</p>
      <button onClick={() => window.location.href = '/products'}>Comenzar</button>
    </div>
  );
};

export default LandingPage;
