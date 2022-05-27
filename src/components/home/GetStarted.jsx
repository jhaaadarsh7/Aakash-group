import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <div className="get-started component">
      <div className="container">
        <div className="wrapper">
          <div className="text">
            <div className="heading">Get Started Today</div>
            <div className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident perferendis, quae dolor vero at minus amet quidem quam
              quisquam, temporibus sint totam ullam. Voluptas, quas neque omnis
              quasi magni harum?
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

export default GetStarted;
