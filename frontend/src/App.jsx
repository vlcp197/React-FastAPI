import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";


function App(){
  return(
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
  );
}


export default App
