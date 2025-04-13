import React from "react";
import TestimonialsCarousel from "./Testimonials_carousel_item";
import Footer from "../../../components/Footer/Footer";

function Testimonials() {
  return (
    <main className="testimonials-container">
      <section className="services-banner testimonials-banner">
        <img
          src="/images/LG_banners/testimonials/format_L.jpg"
          alt="Testimonials banner"
          className="banner-image"
        />
        <h1 className="banners-title">Testimonials</h1>
      </section>

      <TestimonialsCarousel />
      <Footer />
    </main>
  );
}

export default Testimonials;
