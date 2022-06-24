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
            <a href="">GitHub</a>
            <a href="">Linkedin</a>
          </div>  
        </footer>
      );
    };

    export default Footer;