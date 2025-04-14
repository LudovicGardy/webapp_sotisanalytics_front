import React from "react";
import "./Introduction_section.css";
import { Fade } from 'react-reveal';

function Introduction() {
  return (
    <div className="intro_container">
      <div className="text_container">
        <Fade duration={2000}>
        <div className="intro_text">
          <h1>
            Your Data Can Transform the World, Let's Transform Your Data
          </h1>
          <p>
            Building a data-driven technological solution that adheres to the highest standards of quality and sustainability is challenging. 
            I am here to assist you in constructing and designing: <span>Data pipelines tailored to your needs</span> | High-performance 
            artificial intelligence models | <span>Interactive and intuitive data visualization solutions</span> | Real-time data processing 
            solutions | <span>Large-scale data processing solutions</span> | Scalable and secured technological solutions | <span>Ethical data processing 
            solutions.</span>
          </p>

        </div>
        </Fade>
      </div>
    </div>
  );
}

export default Introduction;
