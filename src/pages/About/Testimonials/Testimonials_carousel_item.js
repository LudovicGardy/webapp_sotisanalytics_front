import React, { useState, useEffect, useRef } from 'react';
import { ButtonTestimonials } from "./Testimonials_carousel_item_button";
import './Testimonials_carousel_item.css';

function TestimonialsCarousel() {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // const response = await fetch('http://127.0.0.1:8000/api/getData');
        const response = await fetch('https://aokg04owccog44g408s484kk.sotisai.com/api/getData');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setTestimonials(data);

        // Initialisation aléatoire APRÈS chargement des données
        const rndIndex = Math.floor(Math.random() * data.length);
        setCurrentIndex(rndIndex);
      } catch (error) {
        console.error('An error occurred while fetching testimonials:', error);
      }
    }

    fetchData();
  }, []);

  const handleColorChange = () => {
    if (textRef.current) {
      textRef.current.style.opacity = 0.5;
      setTimeout(() => {
        textRef.current.style.opacity = 1;
      }, 900);
    }
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    handleColorChange();
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    handleColorChange();
  };

  const handleClick = () => {
    const url = testimonials[currentIndex]?.social;
    if (url) window.open(url, '_blank');
  };

  if (testimonials.length === 0) {
    return <div className="testCards_container">Loading testimonials...</div>;
  }

  const current = testimonials[currentIndex];

  return (
    <div className="testCards_container">
      <div className="testCards_wrapper">
        <div className="testimonials_carousel">
          <div className="testimonials_individual_card">
            <div className="testimonials_individual_card_image">
              <a href={current?.social} target="_blank" rel="noopener noreferrer">
                <img src={current?.image} alt="testimonials" />
              </a>
              <p className="card-title">{current?.name}</p>
              <p>{current?.profession}</p>

              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${((currentIndex + 1) * 100) / testimonials.length}%` }}
                ></div>
              </div>

              <div className="arrow-container">
                <div className="arrow arrow-left arrow-testimonials hover-color-1">
                  <i className="fas to-left" onClick={handlePrevious}></i>
                </div>
                <div className="arrow arrow-right arrow-testimonials hover-color-2">
                  <i className="fas to-right" onClick={handleNext}></i>
                </div>
              </div>
            </div>

            <div className="testimonials_individual_card_text" ref={textRef}>
              <p>{current?.text_EN}</p>
            </div>
          </div>

          <ButtonTestimonials
            className="btns"
            buttonStyle="btn--third"
            buttonSize="btn--large3"
            redirection="/contact"
          >
            Leave a review
          </ButtonTestimonials>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsCarousel;
