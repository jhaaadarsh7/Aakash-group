import React from "react";
import logo from "../../assets/images/LOGO.png";
import Navbar from "./Navbar";
import { BarsOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-wrap">
        <img src={logo} className="logo" alt="" />
      </div>
      <Navbar />
      <div className="right">
        <div className="info">01- 4430196</div>
        <div className="sidebar-toggler">
          <BarsOutlined />
        </div>
      </div>
    </div>
  );
};

export default Header;
