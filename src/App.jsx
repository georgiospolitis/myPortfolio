import { BrowserRouter } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaFacebook, FaGithub } from 'react-icons/fa';

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const currentYear = new Date().getFullYear();

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          <footer className="text-white mt-6 text-center pb-5">
            <p>&copy; {currentYear} | Made by GPOLITIS</p>
            <div className="flex justify-center mt-4 space-x-4">
            <a href='https://www.linkedin.com/in/giorgospolitis/' target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} color="white" />
            </a>
            <a href='https://www.instagram.com/george__politis/' target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} color="white" />
            </a>
            <a href='https://www.facebook.com/giorgos.plts.9/' target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} color="white" />
            </a>
            <a href='https://github.com/georgiospolitis' target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} color="white" />
            </a>
            </div>
          </footer>
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;