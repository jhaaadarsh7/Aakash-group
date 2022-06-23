import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/LOGO.png";

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

const industries = [
  {
    name: "Food And Beverages",
    path: "/industries",
  },
  {
    name: "Information And Technology",
    path: "/industries",
  },
  {
    name: "Banking",
    path: "/industries",
  },
  {
    name: "Promoter Of Insurance Companies",
    path: "/industries",
  },
  {
    name: "Real Estate",
    path: "/industries",
  },
];

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <div className="logo-wrap">
            <img src={logo} className="logo" alt="" />
          </div>
          <div className="text">
            The group diversified into packaged food manufacturing, restaurants,
            insurance, real estate and banking over the years.
          </div>
          <div className="socials"></div>
        </div>
        <div className="footer-industries">
          <div className="heading">INDUSTRIES</div>
          {industries.map((industry, index) => {
            return (
              <Link to={industry.path} key={index}>
                {industry.name}
              </Link>
            );
          })}
        </div>
        <div className="footer-menu">
          <div className="heading">QUICK ACCESS</div>
          {navLinks.map((link, index) => {
            return (
              <Link to={link.path} key={index}>
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className="footer-contact">
          <div className="heading">CONTACT US</div>
          <div className="item">
            <strong>Address:</strong> Laxmi Plaza, Putalisadak Kathmandu
          </div>
          <div className="item">
            <strong>Phone:</strong>{" "}
            <a href="tel: +977-1-4430196">+977-1-4430196</a>
          </div>
          <div className="item">
            <strong>Email:</strong>{" "}
            <a href="mailto: info@aakash.group">info@aakash.group</a>
          </div>
          <div className="item">
            <strong>Opening Hours:</strong> Sunday To Friday (10:00 To 6:00)
          </div>
        </div>
      </div>
      <div className="copyright">
        Copyright © 2019 - 2020 AakashLabs. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
