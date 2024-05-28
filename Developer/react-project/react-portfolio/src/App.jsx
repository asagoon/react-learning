import './App.css'
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import SocialLinks from './components/SocialLinks';



function App() {

  return (
    <>
    <Navbar />
    <Home />

    <SocialLinks />
    <About />
    <Projects />
    <Skills />
    <Contact />
    </>
  );
}

export default App
