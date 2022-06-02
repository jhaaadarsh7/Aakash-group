import React from "react";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import StatsSection from "./StatsSection";
import ContactSection from "./ContactSection";

const HomePage = () => {
  return (
    <div className="home-page page">
      <div className="page-header">
        <video
          id="home-video"
          poster="https://aakash.group/wp-content/uploads/2019/10/logo.png"
          loop
          muted
          autoPlay>
          <source
            src="https://aakash.group/wp-content/uploads/2019/10/aakash-group-text-anime-change1.mp4"
            type="video/mp4"
          />
          Your browser does not support HTML5 video.
        </video>
      </div>
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
