import React from "react";
import { Link } from "react-router-dom";

const IndustryHeader = (props) => {
  return (
    <div className="industry-header component">
      <div className="left">
        <div className="heading">{props.company}</div>
        <div className="caption">{props.caption}</div>
      </div>
      <div className="right">
        <div className="logo-wrap">
          <Link to={props.website} target="_blank">
            <img src={props.logo ? props.logo : ""} alt={props.company} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IndustryHeader;
