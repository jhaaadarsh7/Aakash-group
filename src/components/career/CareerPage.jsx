import React from "react";
import PageHeader from "./../common/PageHeader";
import dataAnalyst from "../../assets/images/career/data-analyst.jpg";
import graphicDesigner from "../../assets/images/career/graphic-designer.jpg";
import { Link } from "react-router-dom";

const openings = [
  {
    title: "Data Analyst",
    shortDescription:
      "Perform statistical analysis with the information and data we have.",
    link: "/career/data-analyst",
    logo: dataAnalyst,
  },
  {
    title: "Graphic Designer",
    shortDescription:
      "Perform statistical analysis with the information and data we have.",
    link: "/career/graphic-designer",
    logo: graphicDesigner,
  },
];

const CareerPage = () => {
  return (
    <div className="career-page page">
      <PageHeader
        heading="Career"
        description="Since we have been growing hard lately, we are looking for member to join our team!"
      />
      <div className="container">
        <div className="title">
          <div className="heading">Current Openings</div>
          <span>Look at the job posting(s) below and apply!</span>
        </div>
        <ul className="openings">
          {openings.map((opening, index) => (
            <li key={index} className="opening">
              <div className="wrapper">
                <div className="image">
                  <img src={opening.logo} alt="" />
                </div>
                <div className="details">
                  <div className="title">{opening.title}</div>
                  <div className="details-bot">{opening.shortDescription}</div>
                </div>
                <div className="apply-wrap">
                  <Link to={opening.link}>
                    <button>Apply</button>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CareerPage;
