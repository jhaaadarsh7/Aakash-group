import React from "react";
import IndustryHeader from "./layout/IndustryHeader";
import logo from "../../assets/images/industries/aakash-capital-logo.png";
import img from "../../assets/images/industries/aakash capital/img.png";
import AboutIndustry from "./layout/AboutIndustry";
import Specialities from "./layout/Specialities";
import Features from "./layout/Features";

const about = {
  description:
    "Aakash Group is the promoter of Aakash Capital and Global IME Bank. Aakash Group entered into the banking industry as promoters Siddhartha Development Bank Ltd. in late 90s. Since then, the consolidation of the banking industry in Nepal as required by Nepal Rastra Bank paved the way for stronger commercial banking. Through mergers and acquisitions in the industry, Aakash Group today holds active promoter investment in several commercial banks. Aakash Capital Ltd. is the latest addition to the group’s banking portfolio. It licensed by the Securities Board of Nepal (SEBON) to provide Portfolio Management Services (PMS). Aakash Capital is committed to provide one window financial solution to the different investor segments in Nepal. The company aims to provide financial services to meet both personal and corporate wealth management requirements of its clients.",
  title: "Aakash Capital",
  link: "https://aakashcapital.com.np/",
};

const header = {
  company: "Aakash Capital",
  logo: logo,
  caption:
    "Aakash Group is the promoter of Aakash Capital and Global IME Bank.",
  website: "https://aakashcapital.com.np/",
};

const specialities = [
  {
    title: "SEBON Licenced Merchant Bank",
    description:
      "Licensed by the Securities Board of Nepal (SEBON) to provide Portfolio Management Services (PMS).",
  },
  {
    title: "NRB Licenced Commercial Bank",
    description:
      "Commercial banks like Siddhartha bank established under the NRB Act regulate and systematize domestic financial sector.",
  },
  {
    title: "Portfolio Management Services",
    description:
      "Portfolio Management Services is the Investment Division that helps you access the equity market in Nepal.",
  },
  {
    title: "Remittance",
    description:
      "Global Remit is a premium online customer focused and technology oriented remittance product of Global IME Bank Ltd.",
  },
];

const features = [
  {
    title: "Optimum Returns",
    description: "",
  },
  {
    title: "Hassle Free",
    description: "",
  },
  {
    title: "Managed by Professionals",
    description: "",
  },
  {
    title: "Transparent",
    description: "",
  },
  {
    title: "Cost Effective",
    description: "",
  },
  {
    title: "Research Based",
    description: "",
  },
  {
    title: "Internet Banking",
    description: "",
  },
  {
    title: "Locker Services",
    description: "",
  },
];

const AakashCapital = () => {
  return (
    <div className="industry-page page aakashcapital">
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
        <img src={img} alt="aakash capital" className="main-img" />
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

export default AakashCapital;
