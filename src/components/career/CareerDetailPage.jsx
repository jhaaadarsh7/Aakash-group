import React, { useState } from "react";
import { ClockCircleOutlined, LaptopOutlined } from "@ant-design/icons";
import { Form, Input, Button, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { aakashapi } from "./../api/aakashapi";
import { NotificationManager } from "react-notifications";

const CareerDetailPage = ({ careerDetails }) => {
  const [imageUrl, setImageUrl] = useState();

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const onFinish = async (values) => {
    values = {
      ...values,
      aakashform: "true",
      subject: "Contact Form",
    };
    const formData = new FormData();
    console.log(values.resume);
    for (const name in values) {
      formData.append(name, values[name]);
    }
    try {
      const response = await aakashapi.post("", formData);
      NotificationManager.sucess("Sucess", "We will get back to you shortly");
    } catch (e) {
      NotificationManager.error("Error", "Error submitting form");
      console.log(e);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      return;
    }

    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setImageUrl(url);
      });
    }
  };

  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
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
              getValueFromEvent={({ file }) => file.originFileObj}
              extra=".docx or .pdf only">
              <Upload
                maxCount={1}
                customRequest={dummyRequest}
                onChange={handleChange}
                showUploadList={false}
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
