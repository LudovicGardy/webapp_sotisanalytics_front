import React from "react";
import Footer from "../../../components/Footer/Footer";
import Dashboards_images from "./Dashboards_images";
import Data_workflow from "./Data_workflow";

import "../../../App.css";
import "../Portfolio.css";

function Reports() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
    <div className="services-container">

        <div className="services-banner" >
            <img src="/images/LG_banners/dashboards/format_L.jpg"></img>
            <h1 className= "banners-title">REPORTS</h1>
        </div>

        <div className="services-transition" style={{padding:'0px', paddingTop:'80px', width:'90%'}}>
          <p style={{width: '100%',alignSelf:'center'}}>
          My practice of datascience has brought me into contact with all the elements that make up a data project, 
          from concept definition to implementation, including database management, machine learning, dashboards and reporting. 
          Depending of the ressources you have at your disposal, I can help you with all or part of your project.
          </p>
          
        </div>

        <div className="services-start" style={{paddingLeft: '0px', paddingTop: '0px', width:'90%'}}>
          <h3>Workflow might vary</h3>
        </div>

        <Data_workflow/>

        <div className="services-start" style={{paddingLeft: '0px', paddingTop: '0px', width:'90%'}}>
          <h3>Examples of publicly shareable summarized reports I had the opportunity to deliver</h3>
        </div>

        <Dashboards_images/>

        {/* <div className="services-transition">
        </div> */}


      {/* <div className="services-ending">
        <h4>And many more.</h4>
      </div> */}

    </div>

    {/* <Partners/> */}
    <Footer/>

    </>
  );
}

export default Reports;
