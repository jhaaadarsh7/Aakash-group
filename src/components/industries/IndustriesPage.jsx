import React from "react";
import PageHeader from "../common/PageHeader";
import SideBySide from "../common/SideBySide";
import Industries from "./Industries";

const IndustriesPage = () => {
  return (
    <div className="industries-page page">
      <PageHeader
        heading="Industries"
        description="Aakash Group always tries to provide the best Business Solutions for Clients to grow up their Business very sharply and smoothly."
      />
      <SideBySide
        title={["We Provide", "Best Business Solutions"]}
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, laborum debitis, est reiciendis natus quam sed a quos pariatur inventore officia vel itaque, consequuntur quidem optio laudantium nam? Fuga, quae!"
      />
      <Industries />
    </div>
  );
};

export default IndustriesPage;
