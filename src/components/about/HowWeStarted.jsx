import React from "react";
import img from "../../assets/images/how-we-started.png";

const HowWeStarted = () => {
  return (
    <div className="how-we-started component">
      <div className="container">
        <div className="left">
          <div className="title">
            <div className="main">How We Started</div>
          </div>
          <div className="content">
            <p>
              Aakash Group has touched the lives of people from its humble
              beginnings as an importer of textiles and electronics 150 years
              ago. Today, we are diversified into packaged food manufacturing,
              restaurants, insurance, real estate and banking.
            </p>
            {/* <p>
              The group diversified into packaged food manufacturing,
              restaurants, insurance, real estate and banking over the years.
            </p> */}
          </div>
        </div>
        <div className="right">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HowWeStarted;
