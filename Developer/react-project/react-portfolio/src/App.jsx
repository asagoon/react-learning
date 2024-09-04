import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import SocialLinks from './components/SocialLinks';
import Footer from './components/footer'

function App() {
  return (
    <Router>
      <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <SocialLinks />
        {/* <Contact /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;