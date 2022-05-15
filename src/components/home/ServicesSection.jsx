import React from "react";
import icon from "../../assets/images/service.png";

const services = [
  {
    name: "Creative Team",
    description: "We have creative team, they always ready to help you.",
    icon: icon,
  },
  {
    name: "Best Service",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon: icon,
  },
  {
    name: "Online Support",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon: icon,
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
