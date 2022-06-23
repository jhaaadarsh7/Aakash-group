import React from "react";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import StatsSection from "./StatsSection";
import ContactSection from "./ContactSection";
import video from "../../assets/images/aakash-group-vid.mp4";
import logo from "../../assets/images/LOGO.png";

const HomePage = () => {
  return (
    <div className="home-page page">
      <div className="page-header">
        <video id="home-video" poster={logo} loop muted autoPlay>
          <source src={video} type="video/mp4" />
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
