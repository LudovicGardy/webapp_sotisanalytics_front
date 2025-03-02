import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Company</h2>
            <Link to="/legal-information">Legal information</Link>
            <Link to="/cookies-policy">Cookies Policy</Link>
            <Link to="/trust-and-security">Security</Link>
          </div>
          <div className="footer-link-items">
            <h2>Get in touch</h2>
            {/* <Link to="/Contact">Book a call</Link> */}
            <Link to="/Contact">Contact</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Deontology</h2>
            <a target="_blank" href="https://comite-ethique.cnrs.fr/charte/">Ethical standards</a>
            <a target="_blank" href="https://www.cnrs.fr/fr/la-recherche">Social impact</a>
          </div>
          <div className="footer-link-items">
            <h2>Research</h2>
            <a target="_blank" href="https://www.researchgate.net/profile/Ludovic-Gardy">Research Gate</a>
            <a target="_blank" href="https://scholar.google.fr/citations?user=eLO7NHwAAAAJ&hl=fr&oi=sra">Scholar</a>
            <a target="_blank" href="https://orcid.org/0000-0002-2977-8831">ORCID</a>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <img
                src="https://sotisimmo.s3.eu-north-1.amazonaws.com/Sotis_AI_pure_darkbg_240px.png"
                alt="AMT_logo"
                className="logo"
              />
              <h2 className="logo-h2">Sotis A.I.</h2>
            </Link>
          </div>
          <small className="website-rights">React Technology © 2025</small>
          <div className="social-icons">
            <div className="social-icon-link youtube">
                <a target="_blank" href="https://www.linkedin.com/company/sotis-advanced-insights" className="fab fa-linkedin" id="linkedin"/>
            </div>
            {/* <div className="social-icon-link youtube">
              <a target="_blank" href="https://www.youtube.com/@halyziaavriomedtech5585" className="fab fa-youtube" id="youtube"/>
            </div> */}
            <div className="social-icon-link github">
              <a target="_blank" href="https://github.com/LudovicGardy" className="fab fa-github" id="github"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
