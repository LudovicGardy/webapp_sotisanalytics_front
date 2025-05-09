import React from "react";
import Footer from "./Footer/Footer";
import "./Legal_info/Legal_info.css";


function TrustSecurity() {
  return (
    <>
    <div className="legal_main">

      <div className="legal_container" styles={"color:#fff"}>


        <h2>Confidence and security</h2>

        <p>At Sotis Advanced Insights, we take the security of your data very seriously. We understand the importance 
            of the data you entrust to us, and we are committed to protecting it. We use highly secure data hosting 
            designed to store sensitive information, including medical data. Our servers comply with the
            most stringent security standards, including the Payment Card Industry Data Security Standard (PCI DSS), HIPAA 
            for healthcare data in the United States and the General Data Protection Regulation (RGPD) in the European Union. 
            We also use SSL (Secure Socket Layer) encryption to protect all data transmitted between your browser and 
            our website. This is the same type of encryption used by banks to protect online transactions. 
            Our servers are monitored 24 hours a day, 7 days a week, to detect any suspicious activity and 
            prevent attempted security breaches. We also carry out regular security audits to ensure that our 
            security measures are constantly maintained and improved. We are committed to protecting your data 
            and treating it with the utmost respect. If you have any questions about the security of your data, 
            please do not hesitate to contact us at contact@sotisai.com.</p>

      </div>

    </div>
    <Footer />
    </>
  );
}

export default TrustSecurity;