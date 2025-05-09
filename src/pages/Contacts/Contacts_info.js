import {
  faLocationDot,
  faSquareEnvelope,
  faSquarePhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "../../App.css";
import "./Contacts_info.css";

function ContactInfo() {
  return (
    <div className="contactInfo_container">
      <div className="horizontal-box-icon">
        <div className="vertical-box-info">
          <FontAwesomeIcon icon={faLocationDot} className="contactIcon_style" />
          <p>Le Mans, France</p>
        </div>
        <div className="vertical-box-info">
          <FontAwesomeIcon icon={faSquarePhone} className="contactIcon_style" />
          <p>+33 (0)6 46 61 14 41</p>
        </div>
        <div className="vertical-box-info">
          <FontAwesomeIcon icon={faSquareEnvelope} className="contactIcon_style" />
          <p>contact@sotisai.com</p>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
