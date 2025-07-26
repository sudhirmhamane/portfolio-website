import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Certificates from './components/Certificates/Certificates';
import Contact from './components/Contact/Contact';
import Chatbot from './components/Chatbot/Chatbot';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="certificates"><Certificates /></section>
        <section id="contact"><Contact /></section>

         {/* ✅ Floating Chatbot */}
        <Chatbot />
      </main>
      <Footer />
    </>
  );
};

export default App;
