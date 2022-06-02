import React from "react";
import { Button } from "antd";
import image from "../../assets/images/about.jpg";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <div className="about component">
      <div className="container">
        <div className="left">
          <img src={image} alt="" />
        </div>
        <div className="right">
          <div className="title">
            <span>About Us</span>
            <div className="main">
              Welcome To
              <br />
              Aakash Group
            </div>
          </div>
          <p>
            Aakash Group is located in the heart of Nepal, Kathmandu, where we
            form an intrinsic part of every realm of life from{" "}
            <Link to="/industries">packaged food manufacturing</Link>,{" "}
            <Link to="/industries">restaurants</Link>,{" "}
            <Link to="/industries">insurance</Link>,{" "}
            <Link to="/industries">real estate</Link> and{" "}
            <Link to="/industries">banking</Link>. Aakash Group continues to
            provide cost-effective solutions to businesses all over Nepal. The
            company prides itself in its premium quality and exceptional
            customer service.
          </p>
          <Link to="/about">
            <Button type="primary" size="large">
              More Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
