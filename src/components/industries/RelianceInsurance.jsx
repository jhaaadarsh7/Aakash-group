import React from "react";
import IndustryHeader from "./layout/IndustryHeader";
import logo from "../../assets/images/industries/reliance-logo.png";
import img from "../../assets/images/industries/siddhartha insurance/img.png";
import AboutIndustry from "./layout/AboutIndustry";
import Specialities from "./layout/Specialities";
import Features from "./layout/Features";

const about = {
  description:
    "Aakash Group was one of the founding promoters of Siddhartha Insurance Ltd (SIL).  Established in the year 2006, SIL is one of the renowned non-life (general) insurance companies in Nepal with strong presence in the form of 74 Branches.  Reliance Life Insurance Ltd. is one of the new life insurance companies in Nepal and starter its operation from 1st of Mangsir, 2074 (17th November 2017) post receiving its operating license from the Insurance Board of Nepal. It is promoted by Siddhartha Bank limited and other renowned business houses.",
  title: "Reliance Insurance",
  link: "https://siddharthainsurance.com/",
};

const header = {
  company: "Reliance Life Insurance",
  logo: logo,
  caption:
    "Aakash Group was one of the founding promoters of Siddhartha Insurance Ltd (SIL).",
  website: "https://siddharthainsurance.com/",
};

const specialities = [
  {
    title: "Life Insurance",
    description:
      "Contract between an insurance policy holder and an insurer or assurer.",
  },
  {
    title: "Non Life Insurance",
    description:
      "Provide payments on automobile and homeowners policies depending on the loss from a particular financial event",
  },
];

const features = [
  {
    title: "75+ Branches",
    description: "",
  },
  {
    title: "2 Insurance Units",
    description: "",
  },
  {
    title: "200+ Employees",
    description: "",
  },
  {
    title: "Property Insurance",
    description: "",
  },
  {
    title: "Student Medical Insurance",
    description: "",
  },
  {
    title: "Personal Accident Insurance",
    description: "",
  },
  {
    title: "Group com Family Hospitalization Insurance",
    description: "",
  },
  {
    title: "Money Back Assurance Plan (15 & 20 years)",
    description: "",
  },
  {
    title: "Child Assurance Plan",
    description: "",
  },
  {
    title: "Engineering Insurance",
    description: "",
  },
  {
    title: "Burglary & House Breaking Insurance",
    description: "",
  },
  {
    title: "Burglary & House Breaking Insurance",
    description: "",
  },
];

const RelianceInsurance = () => {
  return (
    <div className="industry-page page relianceinsurance">
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
        <img src={img} alt="reliance insurance" className="main-img" />
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

export default RelianceInsurance;
