import React from "react";
import Nav from "../Nav";
import "../../assets/css/style.css"

const Header = (props) => {
    const {
        pages = [],
        setCurrentPage,
        currentPage
      } = props;

      return (
        <header className="flex-row">
            <h1>
                <a href="/">Vaughn Smith</a>
            </h1>
            <Nav
                pages = {pages}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                />
        </header>
      )
    };

    export default Header;