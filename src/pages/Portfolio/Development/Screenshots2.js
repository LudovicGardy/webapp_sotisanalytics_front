import React, { useState } from 'react';
import { Fade } from 'react-reveal';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

import './Screenshots.css';

const images = [
  './images/carousel_sotisimmo/screen1.jpg',
  './images/carousel_sotisimmo/screen2.jpg',
  './images/carousel_sotisimmo/screen3.jpg',
  './images/carousel_sotisimmo/screen4.jpg',
  './images/carousel_sotisimmo/screen5.jpg',
  './images/carousel_sotisimmo/screen6.jpg',
  './images/carousel_sotisimmo/screen7.jpg',
  './images/carousel_sotisimmo/screen8.jpg',
  './images/carousel_sotisimmo/screen9.jpg',
  './images/carousel_sotisimmo/screen10.jpg',
  './images/carousel_sotisimmo/screen11.jpg',
];

const links = [
    'https://www.google.com',
    'https://www.youtube.com',
    'https://www.facebook.com',
  ];
  

function ScreenshotsArea2() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    function handlePrevious() {
      setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
    };
  
    function handleNext() {
      setCurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1);
    };
  
    function handleClick() {
        window.open(links[currentImageIndex], '_blank');
    }

    return (
        <div className="screenshots_container">
            <div className="screenshots_wrapper">
              <Fade duration={2000}>
              <div className="horizontal_box_screenshots">
                  <div className="left_box_screenshots">
                      <div className="carousel">
                          <img src={images[currentImageIndex]} alt="carousel" />
                          <div className="arrow arrow-left" onClick={handlePrevious}><i className="fas fa-arrow-left"></i></div>
                          <div className="arrow arrow-right" onClick={handleNext}><i className="fas fa-arrow-right"></i></div>
                          {/* <div className="arrow arrow-left" onClick={handlePrevious}><i><FontAwesomeIcon icon={faArrowCircleLeft} /></i></div>
                          <div className="arrow arrow-right" onClick={handleNext}><i><FontAwesomeIcon icon={faArrowCircleRight} /></i></div> */}
                      </div>
                        <p className="Halyzia_description">Sotis Immobilier is a web-based platform that I have designed to serve as a comprehensive guide to the French real estate market. 
                        The application seamlessly integrates a Streamlit frontend with a Flask RESTful API backend, both residing on individual servers for optimized communication. 
                        It harnesses dynamic data visualization and statistical analysis to help users navigate market trends and property values across various French regions. 
                        The platform is backed by a rich database, including records of over 18.9 million properties from 2018 to 2022, geographic information for all French cities, 
                        and additional related data, all securely stored in AWS S3 buckets and Google Cloud NoSQLdatabases. For real-time insights in 2023, a web scraping robot actively 
                        scans real estate agency websites to collect, clean, and analyze current listings. Sotis Immobilier aims to be the go-to resource for investors, real estate agents, 
                        and anyone keen on the French property market. <a target="_blank" href="https://immo.sotisai.com">The app is available here</a>.
                        </p>
                  </div>
              </div>
              </Fade>
            </div>
            
      </div>
    );
  }
  
  export default ScreenshotsArea2;


  