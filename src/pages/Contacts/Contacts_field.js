import React, { useState } from "react";
import "./Contacts_field.css";


const FORM_ENDPOINT = "https://formspree.io/f/xzbqkody"; // Formspree is a javascript compatible mail sender

const Contact_Field = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="thankyou_container">
          <p>Thank you! We will get in touch soon.</p>
        </div>
      </>
    );
  }

  return (

    <div className="contact_main">

      <div className="purple_container">

        <div className="contact_wrapper">
          <h2>Get in touch</h2>
          <p>Use the form or send your message to contact@sotisanalytics.com</p>

          <form className="form_style"
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
          >
            <div className="ID_container">
              <input className="field_style"
                type="text"
                placeholder="Your name"
                name="name"
                required
              />
            </div>
            <div className="ID_container">
              <input className="field_style"
                type="email"
                placeholder="Email"
                name="_replyto"
                required
              />
            </div>
            <div className="message_container">
              <textarea className="field_style"
                placeholder="Your message"
                name="message"
                required
              />
            </div>
            <div className="button_container">
              <button className="button_style"
                type="submit"
              >
                Send a message
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="purple_container map_info">
        <h2>From Laval, Le Mans or Paris to Anywhere</h2>
        <p> Based in France, I am perfectly positioned to collaborate with clients both locally and internationally. Whether you are close by or across the globe, I offer flexible working modes — be it fully remote or a balanced hybrid approach.</p>
      </div>
    </div>

  );
};

export default Contact_Field;