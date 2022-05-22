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
      <SideBySide />
      <Industries />
    </div>
  );
};

export default IndustriesPage;
