import React, {useState} from "react";
import Header from "./components/Header";
import About from "./components/About";
// import Portfolio from "./components/Portfolio";
// import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Hero from "./components/Hero"
import Project from "./components/Project";
import "./assets/css/style.css"

function App() {
    const [pages] = useState([
        {
            name: "about",
            display: "About Me",
            component: <About />
        },
        {
            name: "resume",
            display: "Resume",
            component: <Resume />
        },
        {
            name: "project",
            display: "Portfolio",
            component: <Project />
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
            <Hero />
            <main>
                {currentPage.component}
            </main>
            <Footer />
        </body>
    );
  
};

export default App;
