import {
  ClockCircleFilled,
  CloseCircleFilled,
  CompassFilled,
  PhoneFilled,
  MailFilled,
} from "@ant-design/icons";
import { Form, Input, Button, Row, Col } from "antd";
import React from "react";

const ContactPage = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="contact-page page">
      <div className="page-header">
        <div className="text">
          <h1>Contact Us</h1>
          <p>Get in touch and let us know how we can help</p>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <Form
            name="contact"
            labelCol={{ span: 0 }}
            wrapperCol={{ span: 24 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off">
            <div className="heading">Send Us A Message</div>
            <Row gutter={24}>
              <Col span={8}>
                <Form.Item
                  name="name"
                  rules={[
                    { required: true, message: "Please input your name!" },
                  ]}>
                  <Input placeholder="Name" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}>
                  <Input placeholder="Email" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone!",
                      type: "tel",
                    },
                  ]}>
                  <Input placeholder="Phone" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={24}>
                <Form.Item
                  name="message"
                  rules={[
                    { required: true, message: "Please input your message!" },
                  ]}>
                  <Input.TextArea
                    rows={4}
                    placeholder="Your Message"
                    autoSize={{ minRows: 4, maxRows: 8 }}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={12} offset={4}>
                <Form.Item wrapperCol={{ offset: 10 }}>
                  <Button type="primary" htmlType="submit">
                    Send Message
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
          <div className="info">
            <div className="general-info">
              <div className="item">
                <CompassFilled /> Laxmi Plaza, Putalisadak, Kathmandu
              </div>
              <div className="item">
                <PhoneFilled /> <a href="tel: +977 01- 4430196">01- 4430196</a>
              </div>
              <div className="item">
                <MailFilled />{" "}
                <a href="mailto: info@aakash.group">info@aakash.group</a>
              </div>
            </div>
            <div className="working-hours">
              <div className="heading">Working Hours</div>
              {/* <span>
                Our support Hotline is available 24 Hours a day: +61 3 8376 6284
              </span> */}
              <div className="item">
                <ClockCircleFilled /> Sunday-Friday: 10am to 6pm
              </div>
              {/* <div className="item">
                <CloseCircleFilled /> Saturday: Closed
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="map-wrap">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.505532613029!2d85.32017191453821!3d27.701673632349266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19eb19faf563%3A0x98a2104a2408e05a!2sLaxmi%20Plaza!5e0!3m2!1sen!2snp!4v1655724676084!5m2!1sen!2snp"
          width="100%"
          height="450"
          style={{ border: 0, margin: 0, padding: 0 }}
          allowfullscreen=""
          title="map-aakashlabs"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
