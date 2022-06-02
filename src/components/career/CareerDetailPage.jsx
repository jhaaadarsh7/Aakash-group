import React from "react";
import { ClockCircleOutlined, LaptopOutlined } from "@ant-design/icons";
import { Form, Input, Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const CareerDetailPage = ({ careerDetails }) => {
  const onFinish = (values) => {
    values = { ...values, job: careerDetails.title };
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const normFile = (e) => {
    console.log("Upload event:", e);

    if (Array.isArray(e)) {
      return e;
    }

    return e?.fileList;
  };

  return (
    <div className="career-detail-page page">
      <div className="career-header">
        <div className="title">{careerDetails.title}</div>
        <div className="caption">
          <div className="type">
            <ClockCircleOutlined />
            {careerDetails.type}
          </div>
          <div className="level">
            <LaptopOutlined />
            {careerDetails.level}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="about component">
          <div className="heading">About</div>
          <div className="description">{careerDetails.description}</div>
        </div>
        <div className="qualifications component">
          <div className="heading">Qualifications</div>
          <ul className="list">
            {careerDetails.qualifications.map((qualification, index) => (
              <li key={index}>{qualification}</li>
            ))}
          </ul>
        </div>
        <div className="education component">
          <div className="heading">Education</div>
          <ul className="list">
            {careerDetails.education.map((education, index) => (
              <li key={index}>{education}</li>
            ))}
          </ul>
        </div>
        <div className="application-form component">
          <div className="heading">Application Form</div>
          <Form
            name="basic"
            layout="vertical"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off">
            <Form.Item
              label="First Name"
              name="firstname"
              rules={[
                { required: true, message: "Please input your first name!" },
              ]}>
              <Input />
            </Form.Item>
            <Form.Item
              label="Last Name"
              name="lastname"
              rules={[
                { required: true, message: "Please input your last name!" },
              ]}>
              <Input />
            </Form.Item>
            <Form.Item
              label="Email Address"
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please input your email address!",
                },
              ]}>
              <Input />
            </Form.Item>
            <Form.Item
              label="Phone Number"
              name="phone"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}>
              <Input />
            </Form.Item>
            <Form.Item label="Address" name="address">
              <Input />
            </Form.Item>
            <Form.Item
              name="resume"
              label="Resume"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              extra=".docx or .pdf only">
              <Upload
                maxCount={1}
                name="logo"
                action="//jsonplaceholder.typicode.com/posts/"
                accept=".doc, .docx, .pdf">
                <Button icon={<UploadOutlined />}>Click to upload</Button>
              </Upload>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CareerDetailPage;
