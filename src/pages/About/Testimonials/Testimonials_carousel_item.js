import React, { useState, useEffect, useRef } from 'react';
import { ButtonTestimonials } from './Testimonials_carousel_item_button';
import './Testimonials_carousel_item.css';

function TestimonialsCarousel(): JSX.Element {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      try {
        const response = await fetch('https://aokg04owccog44g408s484kk.sotisai.com/api/getData');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setTestimonials(data);

        // Initialiser un index aléatoire APRÈS chargement
        const randomIndex = Math.floor(Math.random() * data.length);
        setCurrentIndex(randomIndex);
      } catch (error) {
        console.error('An error occurred while fetching testimonials:', error);
      }
    }

    fetchData();
  }, []);

  const handleColorChange = (): void => {
    const element = textRef.current;
    if (element) {
      element.style.opacity = '0.5';
      setTimeout(() => {
        element.style.opacity = '1';
      }, 900);
    }
  };

  const handlePrevious = (): void => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    handleColorChange();
  };

  const handleNext = (): void => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    handleColorChange();
  };

  const handleClick = (): void => {
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
                <img src={current?.image} alt={`${current?.name}'s testimonial`} />
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
                <button
                  className="arrow arrow-left arrow-testimonials hover-color-1"
                  onClick={handlePrevious}
                  aria-label="Previous testimonial"
                >
                  ‹
                </button>
                <button
                  className="arrow arrow-right arrow-testimonials hover-color-2"
                  onClick={handleNext}
                  aria-label="Next testimonial"
                >
                  ›
                </button>
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
