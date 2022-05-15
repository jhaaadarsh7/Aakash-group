import React from "react";

const stats = [
  {
    name: "Happy Clients",
    value: "1000",
  },
  {
    name: "Projects Done",
    value: "200",
  },
  {
    name: "Awards Won",
    value: "10",
  },
  {
    name: "Cups of Coffee",
    value: "100",
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
