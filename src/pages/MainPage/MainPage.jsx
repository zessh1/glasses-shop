import React from "react";
import Slider from "./components/Slider";
import Header from "../../components/Header/Header";
import { useState, useEffect } from "react";
import axios from "axios";

const MainPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3031/glasses")
      .then((data) => setData(data.data));
  }, []);

  const sliderData = data;

  return (
    <div className="main-page">
      <Header />
      <Slider slides={sliderData} />
      <div className="about-us">
        <h2>About Us</h2>
        <p>
          Welcome to [Your Brand Name], your go-to destination for stylish and
          quality eyewear. We believe in providing the perfect blend of fashion
          and functionality, ensuring that you not only see well but also look
          great. Our curated collection features the latest trends, top brands,
          and innovative designs. Join us on a journey to discover eyewear that
          complements your unique style and vision needs.
        </p>
      </div>
    </div>
  );
};

export default MainPage;
