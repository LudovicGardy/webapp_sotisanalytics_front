import React, { useState } from 'react';
import "./Testimonials_carousel_item.css";
import "../../../components/Buttons/Buttons.css";

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
    
    const handleOpenModal = () => {
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };

    const handleSendComment_to_backend = async (event) => {
      event.preventDefault();
    // Pour envoyer des informations à un backend Python en utilisant Flask, 
    // vous pouvez faire une requête POST comme avant, mais vous devrez remplacer l'URL par celle de 
    // votre endpoint Flask. Par exemple, si votre serveur Flask est en cours 
    // d'exécution sur http://localhost:8000/api/comment

    // N'oubliez pas que pour que cela fonctionne, votre serveur Flask doit être configuré pour accepter 
    // les requêtes de l'origine à partir de laquelle votre application React est servie. 
    // Vous pouvez le faire en utilisant l'extension Flask-CORS.

    // Notez également que vous devez sécuriser votre serveur Flask avant de le mettre en production, 
    // notamment en vous assurant que vous gérez correctement les erreurs et que vous utilisez HTTPS.       
      const urls = [
        'http://127.0.0.1:8000/api/submitTestimonial', 
        'https://aokg04owccog44g408s484kk.sotisai.com/api/submitTestimonial'
      ];
      
      for (const url of urls) {
        try {
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, comment }),
          });
          
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
      
          const data = await response.json();
          alert(`Thank you for your comment! It will be online soon. Have a great day! ID:${data.random_number}`);
          handleCloseModal();
          return; // Si le fetch réussit, sortez de la boucle et de la fonction
        } catch (error) {
        // Ceci va attraper toute erreur provenant du fetch, y compris si la requête a échoué 
        // parce que le serveur est offline.
          console.error(`Fetch failed for ${url}: ${error.message}`);
        }
      }
      
      // Si on arrive ici, toutes les tentatives ont échoué
      alert('Oops, an error has occurred, maybe the backend server is offline.');
    };


  return (
    <div className='btn_testimonials_container'>
      <button
        className={`btn_medium btn_testimonials`}
        onClick={handleOpenModal}
        type={type}
      >
        {children}
      </button>
  
      {showModal && (
        <div className='modal'>
          <div className='modal-content'>
            <form onSubmit={handleSendComment_to_backend}>
              <label>Your name:</label>
              <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} />
              <label>Your e-mail:</label>
              <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
              <label>Your comment:</label>
              <textarea name='comment' value={comment} onChange={(e) => setComment(e.target.value)} />
              <button type='submit'>Send</button>
              <button type='button' onClick={handleCloseModal}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
  };