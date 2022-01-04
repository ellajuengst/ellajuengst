import React from 'react';
import MainLogo from '../assets/main-logo.svg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LinkedIn from '../assets/linkedin.svg'
import Behance from '../assets/behance.svg'
import Instagram from '../assets/instagram.svg'
import Gmail from '../assets/gmail.svg'
import ContactIll from '../assets/illustrations/contact-ill.svg'
import EmailToCopy from '../components/EmailToCopy'

function Contact() {

  return (
    <div className="contact">
      <Link to="/"><img className="logo"  src={MainLogo} alt='MainLogo' /></Link>
      <div className="contact-page">

        <div className="contact-page-text-section">
            
            <div className="contact-page-text-section-container">
                <h1 className="contact-page-text-section-header">contact</h1>
                <div className="top-border-container">
                    <div style={{borderTop: `1px solid #87baeb`}} className="top-border"></div>
                </div>
                <p style={{textAlign: 'left'}} className="contact-page-text-section-text"><div>Email:</div> <EmailToCopy /></p>            
            </div>
        </div>
        <div className="lets-talk-section">
            <div className="lets-talk-links">
              <div className="link-container"><Link to={{ pathname: "https://www.linkedin.com/in/ella-juengst/" }} target="_blank"><img className="link-img" src={LinkedIn}></img></Link></div>
              <div className="link-container"><Link to={{ pathname: "https://www.behance.net/ellajuengst" }} target="_blank"><img className="link-img" src={Behance}></img></Link></div>
              <div className="link-container"><Link to={{ pathname: "https://www.instagram.com/ella.j.art/" }} target="_blank"><img className="link-img" src={Instagram}></img></Link></div>
              <div className="link-container"><Link to={{ pathname: "mailto:ellajuengst@gmail.com" }} target="_blank"><img className="link-img" src={Gmail}></img></Link></div>
            </div> 
          </div>
   
        <div className="contact-page-image-container">
                <img className="contact-page-image" src={ContactIll}></img>
        </div>
 

      </div>
    </div>
  );
}

export default Contact;
