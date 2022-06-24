import React, {useEffect} from "react";
import "../../assets/css/style.css"

const Nav = (props) => {
    const {
        pages = [],
        setCurrentPage,
        currentPage
    } = props;

    useEffect(() => {document.title = currentPage.display}, [currentPage])

    return (
        <nav>
            <ul className="flex-row">
                {pages.map((page) => (
                    <li className={`${page.name===currentPage.name && "navActive"}`} key={page.name} onClick={() => {setCurrentPage(page);}}>
                        {page.display}
                    </li>
                ))};
            </ul>
        </nav>
    );
};

export default Nav;