import React from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import i18n from './i18n';
import { I18nextProvider } from "react-i18next";


const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
    <div className="App">
      <Navbar />
      <main>
        <section id="about">
          <AboutMe />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </main>
    </div>

   </I18nextProvider>
  );
};

export default App;

<I18nextProvider i18n={i18n}> {/* Wrap your app with I18nextProvider */}
      <div className="App">
        <Navbar /> {/* Now Navbar controls the language switch */}
      </div>
    </I18nextProvider>