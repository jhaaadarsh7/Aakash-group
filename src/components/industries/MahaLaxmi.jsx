import React from "react";
import IndustryHeader from "./layout/IndustryHeader";
// import logo from "../../assets/images/industries/mahalaxmi-logo.png";
import img from "../../assets/images/industries/mahalaxmi/img.jpg";
import AboutIndustry from "./layout/AboutIndustry";
import Specialities from "./layout/Specialities";
import Features from "./layout/Features";

const about = {
  description:
    "Aakash Group is dedicated to developing environmentally sustainable, strategically located and economically viable properties in Nepal. This is achieved through clear vision, innovation, creative thinking, progressive business practices and a highly committed team of professionals.",
  title: "Mahalaxmi Complex Pvt Ltd.",
  link: "/industries",
};

const header = {
  company: "Mahalaxmi Complex Pvt Ltd.",
  // logo: logo,
  caption:
    "Aakash Group is dedicated to developing environmentally sustainable, strategically located and economically viable properties in Nepal.",
  website: "/industries",
};

const specialities = [
  {
    title: "LOCATION",
    description:
      "Mahalaxmi Complex Pvt. Ltd. is located at prime location : Putalisadak, Kathmandu Opposite to Pradarshani Marg.",
  },
  {
    title: "STRUCTURE",
    description:
      "Mass structured complex with four storey building centered at putalisadak near Singha Durbar.",
  },
  {
    title: "CONSULTANCIES",
    description:
      "Approximately 8 consultancies, a bank, a paper wholesalers and a clothing store are actively operating at Mahalaxmi Complex Pvt. Ltd.",
  },
  {
    title: "TENANTS",
    description:
      "Summing up with consultancies, bank, paper wholesalers and clothing store, there are about 11 tenants at Mahalaxmi Complex Pvt. Ltd.",
  },
];

const features = [
  {
    title: "Commercial",
    description:
      "Mahalaxmi Complex Pvt. Ltd is a commercial purpose based building complex in which banks, consultancies and clothing stores are actively established.",
  },
  {
    title: "Agricultural",
    description:
      "Hospitality and Hotel is a upcoming project in Lahan, Nepal which is a agriculture purposed, eco-friendly and sustainable property of Aakash Group.",
  },
];

const MahalaxmiComplex = () => {
  return (
    <div className="industry-page page mahalaxmicomplex">
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
        <img src={img} alt="mahalaxmi complex" className="main-img" />
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

export default MahalaxmiComplex;
