import React from "react";
import SideBySide from "../common/SideBySide";
import HowWeStarted from "./HowWeStarted";
import Info from "./Info";
import img from "../../assets/images/who-we-are.png";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="about-page page">
      <div className="page-header">
        <div className="text">
          <h1>About Us</h1>
          <p>
            Thousands of people and business all over Nepal use Aakash Group.
          </p>
        </div>
      </div>
      <HowWeStarted />
      <div className="side-by-side component">
        <div className="container">
          <div className="left">
            <img src={img} alt="" />
          </div>
          <div className="right">
            <div className="title">
              <div className="main">Who We Are</div>
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
          </div>
        </div>
      </div>
      <Info />
    </div>
  );
};

export default AboutPage;
