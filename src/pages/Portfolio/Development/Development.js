import React, { useState } from "react";
import Footer from "../../../components/Footer/Footer";
import ScreenshotsArea1 from "./Screenshots1";
import ScreenshotsArea2 from "./Screenshots2";
import ScreenshotsArea3 from "./Screenshots3";
import Dev_squares from "./Dev_squares";
import Dev_types from "./Dev_types";

import "../../../App.css";
import "../Portfolio.css";

function Fullstack_Dev() {
  const [currentArea, setCurrentArea] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const renderScreenshotsArea = () => {
    console.log(currentArea);
    switch (currentArea) {
      case 0:
        return <ScreenshotsArea1 />;
      case 1:
        return <ScreenshotsArea2 />;
      case 2:
        return <ScreenshotsArea3 />;
    }
  };

  return (
    <>
      <div className="services-container">
        <div className="services-banner">
          <img src="/images/LG_banners/fullstack_dev/format_L.jpg"></img>
          <h1 className="banners-title">DEVELOPMENT</h1>
        </div>

        {/* <div className="services-quote-text">
          <figure className="services-figure">
            <blockquote className="blockquote text-italic">
              <p>
                Computer programming is an art, because it applies accumulated
                knowledge to the world, because it requires skill and ingenuity,
                and especially because it produces objects of beauty. A
                programmer who subconsciously views himself as an artist will
                enjoy what he does and will do it better.
              </p>
              <figcaption className="figcaption">
                <span>Donald Knuth</span>
              </figcaption>
            </blockquote>
          </figure>
        </div> */}

        <div className="services-transition">
          <p>
          My role as a data science expert is not to develop applications, but it is a field that 
          I know well and which allows me to address broader issues by offering plug-and-play solutions, when necessary.
          </p>

          <p> 
          This page highlights some complete solutions that I have developed, 
          presenting the technology used for the frontend and that used for the backend, 
          with a note to explain the choice of technology as well as their advantages and disadvantages.</p>
        </div>

        <div className="services-start" style={{paddingLeft: '0px', paddingTop: '0px', width:'95%'}}>
          <h3>Select a technology to explore sample projects</h3>
        </div>

        <Dev_types setScreenshotsArea={setCurrentArea} />

        {renderScreenshotsArea()}

      </div>

      <Dev_squares />
      {/* <Partners /> */}
      <Footer />
    </>
  );
}

export default Fullstack_Dev;
