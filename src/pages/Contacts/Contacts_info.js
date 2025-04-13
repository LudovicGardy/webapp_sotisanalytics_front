import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";

import "../../App.css";
import "./Contacts_info.css";


function ContactInfo() {
return (
<>
<div className="contact_container">
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
                <p>contact@sotisanalytics.com</p>
            </div>   
        </div>
    </div>
</div>
</>
);
}

export default ContactInfo;
