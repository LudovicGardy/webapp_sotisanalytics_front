import React from "react";
import "./Introduction_section.css";
import MovingComponent from "react-moving-text";
import { Fade } from 'react-reveal';

// After several years' experience in data science applied to medical research, I am setting out a new and broader path over other 
// fields of application, to take part in other awesome and exciting projects. Wether you are a company, a scale-up,
// a start-up, a lab, or a research center, I can help you to turn your data into insight, and insight into action.

// Avec Sotis A.I., bénéficiez d'une expertise en science des données et en intelligence artificielle pour vos projets. 
// Développez votre business en ajoutant à votre équipe un data scientist expérimenté et de confiance, 
// capable de vous accompagner de manière flexible et agile dans la transformation digitale de votre entreprise. 

// Ludovic Gardy, data scientist indépendant et fondateur de Sotis A.I. couvre vos besoins sur l'ensemble du cycle de vie de vos données, pour des missions de conseil, de formation, de développement et de recherche, toute durée.

{/* <p>Construire une solution technologique basée sur les données en respectant les standards de qualité et de durabilité les plus élevés est difficile. 
Je peux vous aider à construire et concevoir : <span>Une architecture de données adaptée à vos besoins</span> | Des modèles 
d'intelligence artificielle performants | <span>Des solutions de visualisation de données interactives et intuitives</span> | <span> Des
 solutions de traitement de données en temps réel</span> | Des solutions de traitement de données à grande échelle | <span>Des 
  solutions de traitement de données sécurisées</span> |Des solutions de traitement de données éthiques.
</p> */}

function Introduction() {
  return (
    <div className="intro_container">
      <div className="text_container">
        <Fade duration={2000}>
        <div className="intro_text">
          <h1>
            Your Data Can Transform the World, Let's Transform Your Data
          </h1>
          <p>
            Building a data-driven technological solution that adheres to the highest standards of quality and sustainability is challenging. 
            I am here to assist you in constructing and designing: <span>Data pipelines tailored to your needs</span> | High-performance 
            artificial intelligence models | <span>Interactive and intuitive data visualization solutions</span> | Real-time data processing 
            solutions | <span>Large-scale data processing solutions</span> | Scalable and secured technological solutions | <span>Ethical data processing 
            solutions.</span>
          </p>

          {/* <div className="moving_text">
            <MovingComponent
              type="typewriter"
              dataText={["Decode your business metrics", "Surpass expectations"]}
              className="moving_text"
            />
          </div> */}
        </div>
        </Fade>
      </div>
    </div>
  );
}

export default Introduction;
