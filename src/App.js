import React, {useState} from "react";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import "./assets/css/style.css"

function App() {
    const [pages] = useState([
        {
            name: "about",
            display: "About Me",
            component: <About />
        },
        {
            name: "contact",
            display: "Contact",
            component: <Contact />
        },
        {
            name: "resume",
            display: "Resume",
            component: <Resume />
        },
        {
            name: "portfolio",
            display: "Portfolio",
            component: <Portfolio />
        }
    ]);

    const [currentPage, setCurrentPage] = useState(pages[0]);

    return (
        <body className="App">
            <Header
            pages={pages}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            />
            <main>
                {currentPage.component}
            </main>
            <Footer />
        </body>
    );
  
};

export default App;
