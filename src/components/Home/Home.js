import React from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Products from "../Products/Products";
import DisplayReview from "../Review/DisplayReview";
import Speciality from "../Speciality/Speciality";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <Speciality></Speciality>
      <Gallery></Gallery>
      <DisplayReview></DisplayReview>
    </div>
  );
};

export default Home;
