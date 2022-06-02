import React from "react";
import { Button } from "antd";

const SideBySide = (props) => {
  const renderImage = () => {
    if (props.image) {
      return (
        <div className="left">
          <img src={props.image} alt="" />
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="side-by-side component">
      <div className="container">
        {renderImage()}

        <div className="right">
          <div className="title">
            <div className="main">
              {props.title[0]}
              <br /> {props.title[1]}
            </div>
          </div>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SideBySide;
