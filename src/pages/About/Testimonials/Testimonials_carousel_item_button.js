import React, { useState } from 'react';
import './Testimonials_carousel_item.css';
import '../../../components/Buttons/Buttons.css';

const SUBMISSION_URLS = [
  'http://127.0.0.1:8000/api/submitTestimonial',
  'https://aokg04owccog44g408s484kk.sotisai.com/api/submitTestimonial',
];

export const ButtonTestimonials = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resetForm = () => {
    setName('');
    setEmail('');
    setComment('');
    setMessage('');
  };

  const handleOpenModal = () => {
    setShowModal(true);
    resetForm();
  };

  const handleCloseModal = () => {
    setShowModal(false);
    resetForm();
  };

  const validateForm = () => {
    if (!name || !email || !comment) {
      setMessage('Please fill in all fields.');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage('Please enter a valid email.');
      return false;
    }
    return true;
  };

  const handleSendComment = async (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setMessage('Submitting your comment...');

    for (const url of SUBMISSION_URLS) {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, comment }),
        });

        if (!response.ok) throw new Error('Network response was not ok');

        const data = await response.json();
        setMessage(`✅ Thank you! Your testimonial will be online soon. ID: ${data.random_number}`);
        setIsSubmitting(false);
        return;
      } catch (error) {
        console.error(`Fetch failed for ${url}: ${error.message}`);
      }
    }

    setMessage('❌ Error: All servers seem unreachable. Please try again later.');
    setIsSubmitting(false);
  };

  return (
    <div className="btn_testimonials_container">
      <button
        className={`btn_medium btn_testimonials`}
        onClick={handleOpenModal}
        type={type}
      >
        {children}
      </button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <form onSubmit={handleSendComment}>
              <label>Your name:</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label>Your e-mail:</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label>Your comment:</label>
              <textarea
                name="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />

              {message && <p className="feedback-message">{message}</p>}

              <div className="modal-buttons">
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send'}
                </button>
                <button type="button" onClick={handleCloseModal}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
