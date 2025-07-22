import React, { useState, useEffect } from "react";
import profileImg from "../../assets/sudhirpfp.png";
import { smoothScrollTo } from '../../utils/smoothScroll';

const texts = ["Web Developer", "Tech Enthusiast", "Electrical Engineer"];

function useTypewriter(words, delay = 120, pause = 1000) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), pause);
      return;
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? delay / 2 : delay);
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, words, delay, pause]);

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((v) => !v), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return `${words[index].substring(0, subIndex)}${blink ? "|" : " "}`;
}

const Home = () => {
  const typewriterText = useTypewriter(texts);

  const handleConnectClick = (e) => {
    e.preventDefault();
    const section = document.getElementById("contact");
    if (section) {
      smoothScrollTo(section, 700);
    }
  };

  return (
    <section className="min-h-screen pt-24 flex flex-col items-center justify-center px-4 text-center bg-graph text-white" id="home">
      <img
        src={profileImg}
        alt="Sudhir Mhamane profile"
        className="w-48 h-48 rounded-full object-cover border-2 border-blue-500 shadow-lg mb-6"
      />

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center px-4 flex flex-wrap justify-center items-center gap-2">
        <span className="whitespace-nowrap">I'm Sudhir Mhamane - A</span>
        <span
          className="text-blue-400 whitespace-nowrap transition-opacity duration-700 ease-in-out sm:ml-2 sm:inline-block block inline-block w-40 text-center"
          style={{ minHeight: 40 }}
        >
          {typewriterText}
        </span>
      </h1>

      <p className="max-w-2xl mt-6 text-lg text-gray-300">
        I am a Full Stack Developer from Solapur, Maharashtra. I specialize in
        creating beautiful, responsive, and fast websites. I have worked on
        various projects ranging from small websites to large-scale web
        applications.
      </p>

      <div className="mt-8 flex gap-6">
        <a
          href="#contact"
          onClick={handleConnectClick}
          className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
        >
          Connect
        </a>
        <a
          href="resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-blue-400 text-blue-400 px-6 py-2 rounded-full hover:bg-blue-500 hover:text-white transition"
        >
          Resume
        </a>
      </div>
    </section>
  );
};

export default Home;
