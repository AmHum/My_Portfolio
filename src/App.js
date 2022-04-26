import React from 'react';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Contact from "./components/Contact";
import Project from "./components/Project";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Resume from "./components/Resume";

//React App with react router for access to all the pages
function App() {
  return (
    <Router>
      <div>
        <Header></Header>
        <main>
          <Routes>
            {/* {Routes to all the pages in my app} */}
            <Route path="/" exact element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
