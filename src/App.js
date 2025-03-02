import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactCookieConsent from "react-cookie-consent";

import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './pages/Home/Home';
import CookiesPolicy from './components/Cookies/Cookies_policy';


import Contact from './pages/Contacts/Contact';
import HistoryPage from './pages/About/History_page/History_page';
import DataScience from './pages/Portfolio/Data_science/Data_science';
import SignalProcessing from './pages/Portfolio/Signal_processing/Signal_processing';
import FullstackDev from './pages/Portfolio/Development/Development';
import Reports from './pages/Portfolio/Dashboards/Dashboards';
import Testimonials from './pages/About/Testimonials/Testimonials';
import LegalInfo from './components/Legal_info/Legal_info';
import TrustSecurity from './components/Trust_security';
import ErrorPage from './components/Error_msg/Error_msg';
import tests from './pages/Tests/tests';
import ResaAMT from './pages/ResaAMT/ResaAMT';
import { InlineWidget, PopupWidget } from "react-calendly";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // set the time for the preloader to appear before the content is displayed
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? ( // display the preloader if loading is true
        <div className="preloader">
            {/* <img src="./../images/gif/loader/loading.GIF" alt="Loading..." /> */}
            <img src="images/gif/loader/loader_square.gif" alt="Loading..." />
        </div>
      ) : (
        <Router>
          <ReactCookieConsent
            location="bottom"
            buttonText="Accept"
            cookieName="Sotis_Cookie" // Nom du cookie
            style={{ background: "#2B373B" }}
            expires={150} // Le cookie expirera après 150 jours
            buttonStyle={{ color: "#4e503b", fontSize: "13px" }}

          //   enableDeclineButton
          //   declineButtonText="Refuse"
          //   declineButtonStyle={{ background: "#c44d58", fontSize: "13px" }}
          //   onDecline={() => {
          //     window.location.href = '/tests';
          // }}
          >
            We use cookies to improve your experience. By continuing to use this site, you agree to our cookies policy.
          </ReactCookieConsent>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/data-science" component={DataScience} />
            <Route path="/signal-processing" component={SignalProcessing} />
            <Route path="/development" component={FullstackDev} />
            <Route path="/reports" component={Reports} />
            <Route path="/about" component={HistoryPage} />
            <Route path="/testimonials" component={Testimonials} />
            <Route path="/legal-information" component={LegalInfo} />
            <Route path="/trust-and-security" component={TrustSecurity} />
            <Route path="/cookies-policy" component={CookiesPolicy} />
            <Route path="/AMT" component={ResaAMT} />
            <Route path="/tests" component={tests} />
            <Route path="*" component={ErrorPage} />
          </Switch>
        </Router>
      )}
    </>
  );
}


export default App;
