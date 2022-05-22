import React from "react";
import angan from "../../assets/images/industries/angan.png";
import aakashLabs from "../../assets/images/industries/aakash-labs.png";
import aakashAi from "../../assets/images/industries/aakash-ai.png";
import aakashCapital from "../../assets/images/industries/aakash-capital.png";
import siddharthaInsurance from "../../assets/images/industries/siddhartha-insurance.png";
import relianceLife from "../../assets/images/industries/reliance-life.png";
import mahalaxmi from "../../assets/images/industries/mahalaxmi.jpg";
import hotelHospitality from "../../assets/images/industries/hotel-hospitality.jpg";
import { Link } from "react-router-dom";

const industries = [
  {
    parent: "Food And Beverages",
    image: angan,
    child: "Angan Nepal",
    link: "/industries/angan",
  },
  {
    parent: "Information And Technology",
    image: aakashLabs,
    child: "Aakash Labs",
    link: "/industries/aakash-labs",
  },
  {
    parent: "Information And Technology",
    image: aakashAi,
    child: "Aakash AI",
    link: "/industries/aakash-ai",
  },
  {
    parent: "Banking",
    image: aakashCapital,
    child: "Aakash Capital",
    link: "/industries/aakash-capital",
  },
  {
    parent: "Promoter Of Insurance Companies",
    image: siddharthaInsurance,
    child: "Siddhartha Insurance",
    link: "/industries/siddhartha-insurance",
  },
  {
    parent: "Promoter Of Insurance Companies",
    image: relianceLife,
    child: "Reliance Life Insurance",
    link: "/industries/reliance-life-insurance",
  },
  {
    parent: "Real Estate",
    image: mahalaxmi,
    child: "Mahalaxmi Complex Pvt. Ltd.",
    link: "/industries/mahalaxmi-complex",
  },
  {
    parent: "Real Estate",
    image: hotelHospitality,
    child: "Hospitality & Hotel",
    link: "/industries/hospitality-hotel",
  },
];

const Industries = () => {
  return (
    <>
      <div className="industries component">
        <div className="container">
          <div className="title">
            <span>Our Industries</span>
            <div className="main">
              We Provide
              <br />
              Best Solutions
            </div>
          </div>
        </div>
      </div>
      <div className="industry-cards">
        <div className="container">
          <ul>
            {industries.map((industry, index) => {
              return (
                <li className="industry-card">
                  <div className="content">
                    <Link to={industry.link}>
                      <div className="content-overlay"></div>
                      <img src={industry.image} alt={industry.child} />
                      <div class="content-details fadeIn-left">
                        <h3>{industry.parent}</h3>
                        <p>This is a short description</p>
                      </div>
                    </Link>
                  </div>
                  <div className="text">
                    <Link to={industry.link}>{industry.child}</Link>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Industries;
