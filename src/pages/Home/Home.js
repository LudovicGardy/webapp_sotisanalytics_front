import React from "react";

import "../../App.css";
import Footer from "../../components/Footer/Footer";

import Parallax from "./Parallax_section";
import Introduction from "./Introduction_section";
import HeroSection from "./Hero_top_section";
import Cards from "./Cards_section";
// import Partners from "./Scrolling_banner_section";

function Home() {

  return (
    <>
      <HeroSection />
      <Introduction />
      <Cards />
      <Parallax />
      {/* <Partners /> */}
      <Footer />
    </>
  );
}

export default Home;
