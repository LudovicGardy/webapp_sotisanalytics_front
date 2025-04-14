import React from "react";
import "../../App.css";
import { Button } from "../../components/Buttons/Buttons";
import "./Hero_top_section.css";

function HeroSection() {
  return (
    <section className="hero-container">
      <video
        src="images/video/1106690367-sd.mp4"
        autoPlay
        loop
        muted
      />
      <div className="video-overlay"></div>

      <div className="hero-title-container">
        <h1 className="hero-h1 hero-h1-p1">Empowering Solutions Through </h1>
        <h1 className="hero-h1 hero-h1-p2">Insightful Analytics</h1>
      </div>

      <h2 className="hero-h2">Data and A.I. Solutions by Ludovic Gardy</h2>
      <h2 className="hero-h2">To Make Better Business Decisions</h2>

      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn_reverse"
          buttonSize="btn_large"
          redirection="/about"
        >
          HISTORY
        </Button>
        <Button
          className="btns"
          buttonStyle="btn_primary"
          buttonSize="btn_large"
          redirection="/testimonials"
        >
          TESTIMONIALS
        </Button>
      </div>
    </section>
  );
}

export default HeroSection;
