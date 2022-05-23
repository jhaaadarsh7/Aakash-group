import React from "react";
import { Card, Row, Col } from "antd";

const Specialities = (props) => {
  return (
    <div className="specialities component">
      <div className="title">What We Provide</div>
      <div className="data-wrap">
        <Row gutter={16}>
          {props.data.map((item, index) => (
            <Col span={6} key={index}>
              <Card title={item.title}>
                <p>{item.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Specialities;
