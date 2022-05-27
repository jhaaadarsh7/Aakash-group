import React from "react";
import CareerDetailPage from "./CareerDetailPage";

const careerDetails = {
  title: "Data Analyst",
  type: "Full Time",
  level: "Mid Level",
  education: [
    "Bachelor’s degree in graphic design, industrial design, or interior design, or equivalent experience",
    "Five to eight years of experience in graphic design",
  ],
  description:
    "Perform statistical analysis with the information and data we have.",
  qualifications: [
    "Bachelor’s degree from an accredited university or college in computer science.",
    "Work experience as a data analyst or in related field.",
    "Ability to work with stakeholders to assess potential risks.",
    "Ability to analyze existing tools and databases and provide software solution recommendations.",
    "Ability to translate business requirements into non-technical, lay terms.",
    "High-level experience in methodologies and processes for managing large scale databases.",
    "Demonstrated experience in handling large data sets and relational databases.",
    "Understanding of addressing and metadata standards.",
    "High-level written and verbal communication skills.",
  ],
};

const GraphicDesigner = () => {
  return <CareerDetailPage careerDetails={careerDetails} />;
};

export default GraphicDesigner;
