import React from "react";
import IndustryHeader from "./layout/IndustryHeader";
import logo from "../../assets/images/industries/aakashlabs-logo.png";
import img from "../../assets/images/industries/aakash labs/img.png";
import AboutIndustry from "./layout/AboutIndustry";
import Specialities from "./layout/Specialities";
import Features from "./layout/Features";

const about = {
  description:
    "Aakash Labs provides implementation of advanced digital technologies that are crucial to business organizations across different industries. Combining the unrivaled specialism in data driven approach with judicious strategy formulation, the company is able to meet complex needs in the fast paced and constantly evolving digital landscape. By working with developer partners from around the world, Aakash Labs is building software products in the domains of CRM, Data Segmentation and Machine Learning. ",
  title: "Aakash Labs",
  link: "https://aakashlabs.com/",
};

const header = {
  company: "Aakash Labs",
  logo: logo,
  caption:
    "Aakash Labs provides implementation of advanced digital technologies that are crucial to business organizations across different industries. ",
  website: "https://aakashlabs.com/",
};

const specialities = [
  {
    title: "Social Media Marketing",
    description:
      "We focus on clients objectives to plan, design, publish and distribute content on all social media platforms.",
  },
  {
    title: "Web Analytics",
    description:
      "Generate actionable results by tracking your website visitors and remarketing them via Google and Facebook ads.",
  },
  {
    title: "Google Display Network (GDN)",
    description:
      "We track, gather, funnel and re-market via ad-word integrations and APIs.",
  },
  {
    title: "UI/UX Design",
    description:
      "User experience (UX) and interface (UI) design goes beyond the appearance of a product.",
  },
];

const features = [
  {
    title: "Content Strategy",
    description: "",
  },
  {
    title: "Data Mining",
    description: "",
  },
  {
    title: "Machine Learning",
    description: "",
  },
  {
    title: "Artificial Intelligence",
    description: "",
  },
  {
    title: "Web Optimization with SEO",
    description: "",
  },
  {
    title: "Data and Website Analytics",
    description: "",
  },
  {
    title: "Boosting and Paid Advertising",
    description: "",
  },
  {
    title: "Email and Media Marketing",
    description: "",
  },
];

const AakashLabs = () => {
  return (
    <div className="industry-page page aakashlabs">
      <div className="container">
        <IndustryHeader
          company={header.company}
          logo={header.logo}
          caption={header.caption}
          website={header.website}
        />
        <Specialities data={specialities} />
      </div>
      <div className="main-img-wrap">
        <img src={img} alt="aakash labs" className="main-img" />
      </div>
      <div className="container">
        <AboutIndustry
          description={about.description}
          title={about.title}
          website={about.link}
        />
        <Features data={features} />
      </div>
    </div>
  );
};

export default AakashLabs;
