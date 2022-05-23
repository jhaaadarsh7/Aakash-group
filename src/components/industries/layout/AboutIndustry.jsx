import React from "react";
import { Link } from "react-router-dom";

const AboutIndustry = (props) => {
  return (
    <div className="industry-about component">
      <div className="title">About {props.title}</div>
      <div className="description">{props.description}</div>
      <div className="btn-wrap">
        <Link to={props.website} target="_blank">
          <button className="btn">Visit Website</button>
        </Link>
      </div>
    </div>
  );
};

export default AboutIndustry;
