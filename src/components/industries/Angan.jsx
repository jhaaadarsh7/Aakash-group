import React from "react";
import IndustryHeader from "./layout/IndustryHeader";
import anganLogo from "../../assets/images/industries/angan-logo.png";
import anganImg from "../../assets/images/industries/angan/food-bg.jpg";
import AboutIndustry from "./layout/AboutIndustry";
import Specialities from "./layout/Specialities";
import Features from "./layout/Features";

const about = {
  description:
    "In association with Bikanervala Foods from India, Aakash Group has been operating Indian fast food restaurants by the name of Angan in Nepal since 1992. Angan is traditional household brand in Nepal widely acknowledged for quality sweets, namkeens and fast food.  Angan started as just a traditional sweets, chat, fast food and bakery store. However, it gradually and successfully carried the strides of taking great traditional taste to new heights. As a result, it has gained stronghold over the Indian sweets & fast food and market in Nepal.",
  title: "Aakash Foods",
  link: "https://angansweets.com/",
};

const header = {
  company: "Aakash Foods",
  logo: anganLogo,
  caption:
    "In association with Bikanervala Foods from India, Aakash Group has been operating Indian fast food restaurants by the name of Angan in Nepal since 1992.",
  website: "https://angansweets.com/",
};

const specialities = [
  {
    title: "Sweets",
    description:
      "Angan, Present the sub continental Indian & Nepali in savories in Nepal for the sweets lover where you will find very popular sweets.",
  },
  {
    title: "Fast Foods and Meal",
    description:
      "Fast Food collection like Angan offers a range of specialities for our values guests in every aspect of our service & features.",
  },
  {
    title: "Namkeens",
    description:
      "In association with Bikanervala Foods, Aakash group offers a wide variety of delicious specialties of Namkeens.",
  },
  {
    title: "Bakery",
    description:
      "Aakash group, under Bikanervala Foods, offers wide varieties of bakery items which are delicious and healthy.",
  },
];

const features = [
  {
    title: "9 Outlets",
    description:
      "We have 5 branches in Kathmandu, one branches in Biratnagar and one branches in Pokhara.",
  },
  {
    title: "2 Manufacturing Units",
    description:
      "We have two manufacturing units, 1 at Patan industrial Area and 1 at Ganeshwor, Way to Bhagwati Bhala.",
  },
  {
    title: "3 Lines Assorted Sweets",
    description:
      "3 Lines Assorted Sweets AN-144 - Angan Specification : Badam Barfi, Kanfuri Laddu and Khoya/Ghee Barfi.",
  },
  {
    title: "350+ Skilled Staff",
    description:
      "We have skilled manpower from different branches, trained in Indian franchises in respective departments for quality cooking.",
  },
];

const Angan = () => {
  return (
    <div className="industry-page page angan">
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
        <img src={anganImg} alt="angan sweets" className="main-img" />
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

export default Angan;
