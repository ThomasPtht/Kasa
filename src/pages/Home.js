import React from "react";
import Banner from "../components/Banner";
import bannerHome from "../assets/banner.png";
import Card from "../components/Card";

const Home = () => {
  return (
    <div className="home-container">
      <Banner picture={bannerHome} title="Chez vous, partout et ailleurs" />
      <Card />
    </div>
  );
};

export default Home;
