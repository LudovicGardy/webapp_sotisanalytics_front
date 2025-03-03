import React, { useState, useEffect } from 'react';
import { ButtonTestimonials } from "./Testimonials_carousel_item_button";
import './Testimonials_carousel_item.css';

function TestimonialsCarousel() {
    // const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // let min = 0;
    // let max = text_EN.length - 1;
    // let rndInt = Math.floor(Math.random() * (max - min + 1) + min);
    // console.log(rndInt);
    // const [currentImageIndex, setCurrentImageIndex] = useState(rndInt);

    let nbComments = 9
    let rndInt = Math.floor(Math.random() * nbComments);

    const [testimonials, setTestimonials] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(rndInt);
  
    useEffect(() => {
      // Fonction pour récupérer les témoignages depuis l'API
      async function fetchData() {
        try {
          // const response = await fetch('http://127.0.0.1:8000/api/getData');
          const response = await fetch('https://back.sotisai.com/api/getData');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setTestimonials(data);
        } catch (error) {
          console.error('An error occurred while fetching testimonials:', error);
        }
      }
  
      fetchData();
    }, []);


  // Fonction JavaScript pour changer la couleur
  function handleColorChange() {
    let textDiv = document.querySelector('.testimonials_individual_card_text');
    // textDiv.style.backgroundColor = 'rgba(240, 220, 255, 1)';
    textDiv.style.opacity = 0.5;


    // setTimeout(() => {
    //   textDiv.style.backgroundColor = 'white';
    // }, 300);
    
    setTimeout(() => {
      textDiv.style.opacity = 1;
    }, 900);

  }



  function handlePrevious() {
    setCurrentImageIndex(currentImageIndex === 0 ? testimonials.length - 1 : currentImageIndex - 1);
    handleColorChange();
  };

  function handleNext() {
    setCurrentImageIndex(currentImageIndex === testimonials.length - 1 ? 0 : currentImageIndex + 1);
    handleColorChange();
  };

  function handleClick() {
    window.open(testimonials[currentImageIndex]?.social, '_blank');
  }

  return (
    <div className="testCards_container">
      <div className="testCards_wrapper">
        {/* <Fade duration={2000}> */}
          <div className="testimonials_carousel">
            <div className="testimonials_individual_card">
              <div className="testimonials_individual_card_image">
                <a href={testimonials[currentImageIndex]?.social} target="_blank" rel="noopener noreferrer">
                  <img src={testimonials[currentImageIndex]?.image} alt="testimonials" />
                </a>
                <p className='card-title'> {testimonials[currentImageIndex]?.name} </p>
                <p> {testimonials[currentImageIndex]?.profession} </p>
                {/* <p> {employers[currentImageIndex]} </p> */}

                {/* <progress value={currentImageIndex+1} max={text_EN.length} id="imageProgress"></progress> */}
                  <div className="progress-bar">
                  <div className="progress-bar-fill" style={{width: `${(currentImageIndex+1)*100/testimonials.length }%`}}></div>
                </div>

                <div className="arrow-container">
                  <div className="arrow arrow-left arrow-testimonials hover-color-1"><i className="fas to-left" onClick={handlePrevious}></i></div>
                  <div className="arrow arrow-right arrow-testimonials hover-color-2"><i className="fas to-right" onClick={handleNext}></i></div>
                </div>
              </div>
              <div className="testimonials_individual_card_text">
                <p> {testimonials[currentImageIndex]?.text_EN} </p>
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
        {/* </Fade> */}
      </div>
    </div>
  );
}
  
export default TestimonialsCarousel;