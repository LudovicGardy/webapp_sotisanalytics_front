import React from "react";
import "./Contacts_banner.css";

function ContactBanner() {
  return (
    <div className="contact-container">
      <div className="services-banner">
        <img
          src="/images/LG_banners/contact/format_L_v2.jpg"
          alt="Contact banner"
          loading="lazy"
        />
        <h1 className="banners-title">CONTACT</h1>
      </div>
    </div>
  );
}

export default ContactBanner;
