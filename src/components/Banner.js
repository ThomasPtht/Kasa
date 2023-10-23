import React from "react";
import "../styles/Banner.scss";

const Banner = ({ picture, title }) => {
  return (
    <div className="banner">
      <img src={picture} alt="bannière kasa" className="banner-img" />
      {title && (
        <div className="banner-title">
          <h1>{title}</h1>
        </div>
      )}
    </div>
  );
};

export default Banner;
