import React from "react";

// Styles globaux
import "../../App.css";

// Composants globaux
import Footer from "../../components/Footer/Footer";

// Composants spécifiques Contact
import Contact_Banner from "./Contacts_banner";
import Contact_Field from "./Contacts_field";
import GoogleApiWrapper from "./Google_maps";
import ContactInfo from "./Contacts_info";
// import Contact_Schedule from "./Contact/Contact_Schedule";

function Contact() {
  return (
    <main className="contact-page">
      <Contact_Banner />
      {/* <Contact_Schedule /> */}
      <Contact_Field />
      {/* <ContactInfo /> */}
      <GoogleApiWrapper />
      <Footer />
    </main>
  );
}

export default Contact;
