import React from "react";

const stats = [
  {
    name: "Years Industry Experience",
    value: "50+",
  },
  {
    name: "Projects Accomplished",
    value: "100+",
  },
  {
    name: "Clients Across Nepal",
    value: "50+",
  },
];

const StatsSection = () => {
  return (
    <div className="stats component">
      <div className="container">
        {stats.map((stat, index) => (
          <div key={index} className="stat">
            <div className="value">{stat.value}</div>
            <div className="name">{stat.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
