import React from "react";
import HowWeStarted from "./HowWeStarted";

const AboutPage = () => {
  return (
    <div className="about-page page">
      <div className="page-header">
        <div className="text">
          <h1>About Us</h1>
          <p>
            Thousands of people and business around the world use Aakash Groups.
          </p>
        </div>
      </div>
      <HowWeStarted />
    </div>
  );
};

export default AboutPage;
