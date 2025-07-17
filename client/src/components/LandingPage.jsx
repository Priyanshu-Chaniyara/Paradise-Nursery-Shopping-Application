import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="company-name">Paradise Nursery</h1>
          <p className="company-description">
            Welcome to Paradise Nursery, where nature meets nurture. We are your
            premier destination for beautiful, healthy houseplants that bring
            life and tranquility to your home. Our carefully curated selection
            includes a diverse range of indoor plants, succulents, and flowering
            varieties, each chosen for their beauty, resilience, and ability to
            thrive in home environments. Whether you're a seasoned plant parent
            or just beginning your green journey, we're here to help you create
            your own personal paradise.
          </p>
          <Link to="/products" className="get-started-btn">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
