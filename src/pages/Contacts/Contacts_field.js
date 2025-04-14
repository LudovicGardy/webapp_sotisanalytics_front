import React, { useState } from "react";
import "./Contacts_field.css";

const FORM_ENDPOINT = "https://formspree.io/f/xzbqkody";

const Contact_Field = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setError(null);

    const formData = new FormData(e.target);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError("Oops! Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact_main">
      {submitted ? (
        <div className="contact_container">
          <p>Thank you! We will get in touch soon.</p>
          <button onClick={() => setSubmitted(false)} className="button_style">
            Send another message
          </button>
        </div>
      ) : (
        <>
          <div className="purple_container">
            <div className="contact_wrapper">
              <h2>Get in touch</h2>
              <p>
                Use the form or send your message to
                contact@sotisanalytics.com
              </p>

              <form className="form_style" onSubmit={handleSubmit}>
                <div className="form_block">
                  <input
                    className="field_style"
                    type="text"
                    placeholder="Your name"
                    name="name"
                    required
                  />
                </div>
                <div className="form_block">
                  <input
                    className="field_style"
                    type="email"
                    placeholder="Email"
                    name="_replyto"
                    required
                  />
                </div>
                <div className="form_block">
                  <textarea
                    className="field_style"
                    placeholder="Your message"
                    name="message"
                    required
                  />
                </div>
                {error && <p className="error_message">{error}</p>}
                <div className="form_block">
                  <button
                    className="button_style"
                    type="submit"
                    disabled={isSending}
                  >
                    {isSending ? "Sending..." : "Send a message"}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="purple_container map_info">
            <h2>From Laval, Le Mans or Paris to Anywhere</h2>
            <p>
              Based in France, I am perfectly positioned to collaborate with
              clients both locally and internationally. Whether you are close by
              or across the globe, I offer flexible working modes — be it fully
              remote or a balanced hybrid approach.
            </p>
          </div>
        </>
      )}
    </section>
  );
};

export default Contact_Field;
