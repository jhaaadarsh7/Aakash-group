import React from "react";
import img from "../../assets/images/how-we-started.png";

const HowWeStarted = () => {
  return (
    <div className="how-we-started component">
      <div className="container">
        <div className="left">
          <div className="title">
            <div className="mini">ABOUT US</div>
            <div className="main">How We Started</div>
          </div>
          <div className="content">
            <p>
              With a history of more than 100 years in Nepal, Aakash Group
              started with import of textiles and electronic goods into Nepal.
            </p>
            <p>
              The group diversified into packaged food manufacturing,
              restaurants, insurance, real estate and banking over the years.
            </p>
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
