import React from "react";
import vision from "../../assets/icons/vision.png";
import value from "../../assets/icons/value.png";
import mission from "../../assets/icons/mission.png";

const services = [
  {
    name: "Vision",
    description: "To contribute to the upliftment of the nation's economy",
    icon: vision,
  },
  {
    name: "Mission",
    description:
      "To provide high-quality products and services to the people of Nepal",
    icon: mission,
  },
  {
    name: "Values",
    description:
      "To move forward with its country, customers, and community in mind",
    icon: value,
  },
];

const ServicesSection = () => {
  return (
    <div className="services component">
      <div className="container">
        <ul>
          {services.map((service, index) => (
            <li key={index}>
              <div className="icon">
                <img src={service.icon} alt="" />
              </div>
              <div className="data">
                <div className="heading">{service.name}</div>
                <div className="main">{service.description}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServicesSection;
