import React from "react";
import "./Cards_section.css";
import Card_item from "./Card_item";
import { Fade } from 'react-reveal';


function Cards() {
  return (

    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper cards__wrapper__left">
          <div>
            <Card_item
              src="/images/LG_imgs/img5.png"
              // text="Project design and data collection"
              label="DATA GOVERNANCE"
              path="/services"
              // href="https://www.linkedin.com/in/ludovic-gardy/"
              />
            </div>

            <div className="cards__lateral">
            <Card_item
              src="/images/LG_imgs/img1.png"
              // text="Statistical analysis and modeling"
              label="DATA ENGINEERING"
              path="/services"
              // href="https://www.linkedin.com/in/ludovic-gardy/"
            />
            </div>
          </div>

          <div className="cards__wrapper">
            <div className="cards__center">
            <Card_item
              src="/images/LG_imgs/img6.png"
              // text="Storytelling and dashboards"
              label="DATA ANALYTICS"
              path="/services"
              // href="https://www.linkedin.com/in/ludovic-gardy/"
              />
            </div>

            <div className="cards__center">
            <Card_item
              src="/images/LG_imgs/img3.png"
              // text="Machine learning and MLOps"
              label="MACHINE LEARNING"
              path="/services"
              // href="https://www.linkedin.com/in/ludovic-gardy/"
              />
            </div>
          </div>

          <div className="cards__wrapper cards__wrapper__right">

            <div className="cards__lateral">
            <Card_item
              src="/images/LG_imgs/img4.png"
              // text="Smart data management"
              label="MLOPS | DATAOPS"
              path="/services"
              // href="https://www.linkedin.com/in/ludovic-gardy/"
              />
            </div>

            <div>
            <Card_item
              src="/images/LG_imgs/img2.png"
              // text="Decision support and automation"
              label="REPORTING"
              path="/services"
              // href="https://www.linkedin.com/in/ludovic-gardy/"
              />
            </div>
        </div>
      </div>
    </div>

  );
}

export default Cards;
