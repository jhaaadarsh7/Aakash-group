import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <div className="get-started component">
      <div className="container">
        <div className="wrapper">
          <div className="text">
            <div className="heading">Work With Us</div>
            <div className="description">
              We delivery successful projects in a wide range of industries
              including FMCG, Real Estate, Banking and Insurance.
            </div>
          </div>
          <div className="button-wrap">
            <Link to="/contact-us">
              <button className="contact-btn">Contact Us</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
