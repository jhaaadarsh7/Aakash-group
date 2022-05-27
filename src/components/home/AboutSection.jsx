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
              Provide Best
              <br /> Business Solutions
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit quos blanditiis necessitatibus. Illo expedita eos
            consequatur odio hic vero voluptatem praesentium asperiores impedit
            eaque magni exercitationem temporibus optio, cum repudiandae dolor
            minima eveniet sit, deserunt, adipisci veritatis rerum alias. Saepe.
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
