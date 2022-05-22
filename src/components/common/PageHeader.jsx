import React from "react";

const PageHeader = (props) => {
  return (
    <div className="page-header">
      <div className="text">
        <h1>{props.heading}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default PageHeader;
