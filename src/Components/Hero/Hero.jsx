import React from "react";
import "./Hero.css";
import hero_image from "../Assets/hero_image.png";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>EXCLUSIVE PRODUCTS</h2>
        <div>
          <div className="hero-hand-icon">
            <p>FESTIVE</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>SEASON SALE </p>
          <p>IS LIVE</p>
        </div>
        <div className="hero-latest-btn">
          <div>SHOP PRODUCTS</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
