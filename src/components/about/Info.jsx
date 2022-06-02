import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <div className="info component">
      <div className="container">
        <div className="text">
          <div className="title">Interested In Joining Us?</div>
          <Link to="/careers">
            <Button type="primary">Explore Careers</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Info;
