import React from "react";
import banner from "../../images/banner.jpg";
export default function Experience() {
  return (
    <div className="row-video">
      <div className="container">
        <div className="content">
          <div className="text">WE HAVE A WIDE BREADTH OF EXPERIENCE</div>
          <div className="line"></div>
          <p>
            The breadth of knowledge and experience at Financial Group assures
            our clients that we have the skills necessary to focus on their
            important financial matters.
          </p>
          <div className="para">
            We are independent and free from third party influence.
          </div>
          <button>Watch more video</button>
        </div>
        <div className="videos">
          <img src={banner} alt="video" />
        </div>
      </div>
    </div>
  );
}
