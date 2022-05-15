import React from "react";
import { Link } from "react-router-dom";

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

const Navbar = () => {
  return (
    <div className="navbar">
      {navLinks.map((link, index) => {
        return (
          <Link className="navlink" to={link.path} key={index}>
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;
