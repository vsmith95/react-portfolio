import React from "react";
import "../../assets/css/style.css"

const Footer = () => {
      return (
        <footer className="flex-row">
          <div className="contact-info">
            <a className="contact-info-text" href="https://github.com/vsmith95">GitHub</a>
            <a className="contact-info-text" href="https://www.linkedin.com/in/vaughn-smith-256552157/">Linkedin</a>
            <a className="contact-info-text" href="mailto: vaughnsmith95@gmail.com">vaughnsmith95@gmail</a>
            <a className="contact-info-text" href="tel:8602443569">(860)244-3569</a>
          </div>  
        </footer>
      );
    };

    export default Footer;