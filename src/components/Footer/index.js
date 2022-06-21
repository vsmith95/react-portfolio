import React from "react";

const Footer = (props) => {
    const {
        pages = [],
        setCurrentPage,
        currentPage
      } = props;

      return (
        <footer className="flex-row">
            <a href="">GitHub</a>
            <a href="">Linkedin</a>
        </footer>
      );
    };

    export default Footer;