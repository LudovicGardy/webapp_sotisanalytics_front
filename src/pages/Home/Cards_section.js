import React from "react";
import CardItem from "./Card_item";
import "./Cards_section.css";


function Cards() {
  return (

    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper cards__wrapper__left">
          <div>
            <CardItem
              src="/images/LG_imgs/img5.png"
              // text="Project design and data collection"
              label="DATA STRATEGY"
              path="/services"
              // href="https://www.linkedin.com/in/ludovic-gardy/"
              />
            </div>

            <div className="cards__lateral">
            <CardItem
              src="/images/LG_imgs/img1.png"
              // text="Statistical analysis and modeling"
              label="SCALABLE ARCHITECTURES"
              path="/services"
              // href="https://www.linkedin.com/in/ludovic-gardy/"
            />
            </div>
          </div>

          <div className="cards__wrapper">
            <div className="cards__center">
            <CardItem
              src="/images/LG_imgs/img6.png"
              // text="Storytelling and dashboards"
              label="EFFICIENCE & QUALITY"
              path="/services"
              // href="https://www.linkedin.com/in/ludovic-gardy/"
              />
            </div>

            <div className="cards__center">
            <CardItem
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
            <CardItem
              src="/images/LG_imgs/img4.png"
              // text="Smart data management"
              label="MLOPS | DATAOPS"
              path="/services"
              // href="https://www.linkedin.com/in/ludovic-gardy/"
              />
            </div>

            <div>
            <CardItem
              src="/images/LG_imgs/img2.png"
              // text="Decision support and automation"
              label="PRODUCTION READY"
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
