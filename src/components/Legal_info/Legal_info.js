import React from "react";
import Footer from ".././Footer/Footer";
import "./Legal_info.css";


function LegalInfo() {
  return (
    <>
      <div className="legal_main">

        <div className="legal_container">


          <h2>Legal informations</h2>


          <h3>Site editor</h3>
          <p>Ludovic Gardy, Director, residing at Le Mans, 72000, France, e-mail address: contact@sotisai.com.</p>

          <h3>Site host</h3>
          <p>Website is hosted on servers located in Europe by <a href="https://aws.amazon.com/fr/compliance/eu-data-protection">Amazon Web
            Services Inc</a>, PO Box 81226, Seattle, WA 981808-1226 - USA. Applications can be stored on the same service, or on <a href="http://www.ovh.com">OVH</a> for French customers.</p>

          <h3>General conditions of use</h3>
          <p>Use of this site is subject to acceptance of the general conditions of use detailed on the corresponding page.</p>

          <h3>Privacy policy</h3>
          <p>In accordance with the French Data Protection Act of January 6, 1978 and the General Data Protection Regulation (RGPD) of May 25, 2018, all personal data collected on the site is treated with the strictest confidentiality.</p>

          <h3>Intellectual property rights</h3>
          <p>All content on the site, including but not limited to graphics, images, texts, videos, animations,
            sounds, logos, gifs and icons, as well as their layout, are the exclusive property of
            Martin Dupont, with the exception of trademarks, logos or content belonging to other
            partner companies or authors.</p>

          <h3>Cookies policy</h3>
          <p>Our site, sotisai.com, uses cookies to enhance your user experience. Cookies are small text files that are
            stored on your computer or mobile device when you visit our site. We use cookies for several reasons. "Essential" cookies
            are necessary for the operation of our site. They enable you to navigate our site and use our features.
            "Performance" cookies help us understand how visitors use our site and how we can improve their experience. For example,
            these cookies tell us which pages are visited most often, help us record any difficulties you have with our site, and show us
            whether or not our advertising is effective. You have the right to choose whether or not to accept cookies.
            Most web browsers are configured by default to accept cookies, but you can usually modify your browser settings to
            refuse cookies if you prefer. If you choose to decline cookies, you may not be able to take full advantage of all
            our site's features. For more information about cookies, including how to see which cookies have been set on your
            device and how to manage and delete them, visit <a href="www.allaboutcookies.org">www.allaboutcookies.org</a>. If you have
            any questions about our use of cookies, please feel free to contact us at contact@sotisai.com.</p>

        </div>
      </div>
      <Footer />
    </>
  );
}

export default LegalInfo;