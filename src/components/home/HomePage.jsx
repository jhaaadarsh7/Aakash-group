import React from "react";

const HomePage = () => {
  return (
    <div className="home-page page">
      <div className="page-header">
        <video id="home-video" loop muted autoPlay>
          <source
            src="https://aakash.group/wp-content/uploads/2019/10/aakash-group-text-anime-change1.mp4"
            type="video/mp4"
          />
          Your browser does not support HTML5 video.
        </video>{" "}
      </div>
    </div>
  );
};

export default HomePage;
