import React from "react";
import "./Home.scss";
import Slideshow from "./Slider";
import logo from "../images/logo.jpg";
import Header from "../Header/header";
import RowServices from "../Row-services/Row-services";
import Experience from "./Experience/Experience";
const services = [
  {
    images: logo,
    name: "INVESTMENT LOAN",
    paragraph: "Secure the long-term growth of your company",
  },
  {
    images: logo,
    name: "INVESTMENT",
    paragraph: "Secure the long-term growth of your company",
  },
  {
    images: logo,
    name: "LOAN",
    paragraph: "Secure the long-term growth of your company",
  },
];

const infos = [
  {
    name: "Founded",
    date: "In 1980 .",

    para: "We become one of the largest financial services providers",
  },
  {
    num: "7513 +",
    para: "Happy Customers",
  },
  {
    num: "7513 +",
    para: "Expert Customer",
  },
  {
    num: "7513 +",
    para: "Project Success",
  },
];

export default function HomePage() {
  return (
    <div id="wrapper" className="animsition">
      <Header />
      {/* end of header section */}
      <div id="main-content" className="site-main clearfix">
        <div id="content-wrap">
          <div id="site-content" className="site-content clearfix">
            <div id="inner-content" className="inner-content-wrap">
              <div className="page-content">
                <div
                  className="hero-section slideshow text-center vegas-container"
                  data-height="full"
                >
                  <Slideshow />
                </div>

                <div className="page-contents">
                  <h2>Best Services Offers</h2>
                  <div className="line"></div>
                  <p>
                    Appropriate and sufficient financing for a company is
                    crucially important for its long-term success.
                    <br />
                    <span>
                      We advise you in choosing the appropriate type of
                      financing
                    </span>
                  </p>
                  <div className="page-content">
                    {services.map((service, index) => {
                      return (
                        <div className="description" key={index}>
                          <img src={service.images} alt="logo" />
                          <div className="name">{service.name}</div>
                          <p>{service.paragraph}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                {/* end of text-content section  */}

                <div className="found">
                  {infos.map((info, index) => (
                    <div className="founded" key={index}>
                      <div className="infoname">{info.name}</div>
                      <div className="date">{info.date}</div>
                      <div className="num">{info.num}</div>
                      <div className="para">{info.para}</div>
                    </div>
                  ))}
                </div>
                {/* importing Experience component */}
                <Experience />

                {/* end of row-video section  */}
                <div className="separation"></div>
                {/* end of separation */}
                <div className="row-services">
                  <RowServices />
                </div>
                {/* end of row-services section  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
