import React from "react";
import { Button } from "antd";

const SideBySide = (props) => {
  return (
    <div className="side-by-side component">
      <div className="container">
        <div className="left">
          <img src={props.image} alt="" />
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
        </div>
      </div>
    </div>
  );
};

export default SideBySide;
