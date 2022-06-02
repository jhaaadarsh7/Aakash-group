import React from "react";
import PageHeader from "../common/PageHeader";
import SideBySide from "../common/SideBySide";
import Industries from "./Industries";

const IndustriesPage = () => {
  return (
    <div className="industries-page page">
      <PageHeader
        heading="Industries"
        description="Aakash Group provides the best business solutions to improve our client's businesses."
      />
      <SideBySide
        title={["One Company.", "Multiple Solutions."]}
        description="Aakash Group, a fusion of various companies each of them being the best in their own field. We are continuously dedicated to empower and improve the lives of our customers, employees, investors, partners and the entire nation."
      />
      <Industries />
    </div>
  );
};

export default IndustriesPage;
