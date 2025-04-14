import React from "react";

// Styles globaux
import "../../App.css";

// Composants globaux
import Footer from "../../components/Footer/Footer";

// Composants spécifiques Contact
import ContactBanner from "./Contacts_banner";
import ContactField from "./Contacts_field";
import GoogleApiWrapper from "./Google_maps";
// import ContactInfo from "./Contacts_info";
// import Contact_Schedule from "./Contact/Contact_Schedule";

function Contact() {
  return (
    <main className="contact-page">
      <ContactBanner />
      {/* <Contact_Schedule /> */}
      <ContactField />
      {/* <ContactInfo /> */}
      <GoogleApiWrapper />
      <Footer />
    </main>
  );
}

export default Contact;
