import React from "react";
import "../../assets/css/style.css"

const Footer = (props) => {
    const {
        pages = [],
        setCurrentPage,
        currentPage
      } = props;

      return (
        <footer className="flex-row">
          <div className="contact-info">
            <a href="https://github.com/vsmith95">GitHub</a>
            <a href="https://www.linkedin.com/in/vaughn-smith-256552157/">Linkedin</a>
            <a href="mailto: vaughnsmith95@gmail.com">vaughnsmith95@gmail</a>
            <a href="tel:8602443569">(860)244-3569</a>
          </div>  
        </footer>
      );
    };

    export default Footer;