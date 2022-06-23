import React, { useState, useEffect } from "react";
import logo from "../../assets/images/LOGO.png";
import Navbar from "./Navbar";
import { BarsOutlined, PhoneFilled, DownOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import { Dropdown, Menu, Space } from "antd";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Industries",
    path: "/industries",
    industries: [
      {
        name: "Angan Nepal",
        link: "/industries/angan",
      },
      {
        name: "Aakash Labs",
        link: "/industries/aakash-labs",
      },
      {
        name: "Aakash AI",
        link: "/industries/aakash-ai",
      },
      {
        name: "Aakash Capital",
        link: "/industries/aakash-capital",
      },
      {
        name: "Siddhartha Insurance",
        link: "/industries/siddhartha-insurance",
      },
      {
        name: "Reliance Life Insurance",
        link: "/industries/reliance-life-insurance",
      },
      {
        name: "Mahalaxmi Complex Pvt. Ltd.",
        link: "/industries/mahalaxmi-complex",
      },
      {
        name: "Hospitality & Hotel",
        link: "/industries/hospitality-hotel",
      },
    ],
  },
  {
    name: "Careers",
    path: "/careers",
  },
  {
    name: "Contact",
    path: "/contact-us",
  },
];

const menu = (
  <Menu
    items={[
      {
        label: <Link to="/industries/angan">Angan Nepal</Link>,
        key: 1,
      },
      {
        label: <Link to="/industries/aakash-labs">Aakash Labs</Link>,
        key: 2,
      },
      {
        label: <Link to="/industries/aakash-ai">Aakash AI</Link>,
        key: 3,
      },
      {
        label: <Link to="/industries/aakash-capital">Aakash Capital</Link>,
        key: 4,
      },
      {
        label: (
          <Link to="/industries/siddhartha-insurance">
            Siddhartha Insurance
          </Link>
        ),
        key: 5,
      },
      {
        label: (
          <Link to="/industries/reliance-life-insurance">
            Reliance Life Insurance
          </Link>
        ),
        key: 6,
      },
      {
        label: (
          <Link to="/industries/mahalaxmi-complex">
            Mahalaxmi Complex Pvt. Ltd
          </Link>
        ),
        key: 7,
      },
      {
        label: (
          <Link to="/industries/hospitality-hotel">Hospitality & Hotel</Link>
        ),
        key: 8,
      },
    ]}
  />
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  let location = useLocation();

  useEffect(() => {
    console.log(location);
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <div className="header">
      <div className="logo-wrap">
        <Link to="/">
          <img src={logo} className="logo" alt="" />
        </Link>
      </div>
      <Navbar />
      <div className="right">
        <div className="info">
          <a href="tel: +97714430196">
            <PhoneFilled className="phone-icon" /> 01- 4430196
          </a>
        </div>
        <div className="sidebar-toggler" onClick={() => setIsOpen(true)}>
          <BarsOutlined />
        </div>
      </div>
      <div className={`side-bar ${isOpen ? "show" : ""}`}>
        <div className="toggler-btn" onClick={() => setIsOpen(false)}>
          <BarsOutlined style={{ fontSize: "2rem", cursor: "pointer" }} />
        </div>
        <div className="side-bar-content">
          <div className="side-bar-header">
            <div className="logo-wrap">
              <Link to="/">
                <img src={logo} className="logo" alt="" />
              </Link>
            </div>
          </div>
          <div className="side-bar-links">
            {navLinks.map((link) => {
              if (link.name !== "Industries") {
                return (
                  <div className="side-bar-link">
                    <Link to={link.path}>{link.name}</Link>
                  </div>
                );
              } else {
                return (
                  <Dropdown
                    className="side-bar-link"
                    placement="bottomRight"
                    overlay={menu}>
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        Industries
                        <DownOutlined />
                      </Space>
                    </a>
                  </Dropdown>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
