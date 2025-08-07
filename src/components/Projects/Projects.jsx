import React, { useState, useEffect } from "react";
import { FaReact, FaJava, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import {
  SiSpringboot,
  SiTailwindcss,
  SiJavascript,
  SiCss3,
  SiSupabase,
  SiTypescript,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiExpress,
} from "react-icons/si";
import energyImg from "../../assets/recipe img.png";
import weather from "../../assets/weather.png";
import ScrollReveal from "../../utils/ScrollReveal";

const projects = [
  {
    title: "QRupay",
    description:
      "A smart solution for emergency situations – QRupay stores your critical health data and links it to a scannable QR code for instant access by first responders.",
    image: "qrupay1.png", // Replace with your actual image name in the assets folder
    tech: [
      <FaReact size={40} />,
      <SiTailwindcss size={40} />,
      <SiSupabase size={40} />,
      <SiTypescript size={40} />,
    ],
    github: "https://github.com/sudhirmhamane/qrupay",
    demo: "https://qrupay.vercel.app/",
  },
  {
  title: "Creativo",
  description:
    "Currently Building a full-stack AI SaaS application using the PERN stack. The platform includes user authentication, AI-powered features, and integrated Clerk subscriptions and billing.",
  image: "image.png", // replace with actual filename
  tech: [<FaReact size={40} />, <SiPostgresql size={40} />, <SiExpress size={40} />, <SiNodedotjs size={40} />,],
  github: "https://github.com/sudhirmhamane/CreativoAI",
  demo: "https://creativoai.vercel.app/",
}
,
  {
    title: "ShowMate",
    description:
      "Developing a full-stack movie ticket booking platform .The frontend is fully completed in React with dynamic date selection, pricing logic, and a smooth booking flow with Admin panel.",
    image: "showmate.png",
    tech: [
      <FaReact size={40} />,
      <SiTailwindcss size={40} />,
      <SiMongodb size={40} />,
      <SiNodedotjs size={40} />,
    ],
    github: "https://github.com/sudhirmhamane/ShowMate",
    demo: "https://showsmate.vercel.app/",
  },
  {
    title: "GONATIONS",
    description:
      "Developed a fully responsive web application that provides insightful facts and statistics about countries around the world.",
    image: "project1.png",
    tech: [<FaReact size={40} />, <SiTailwindcss size={40} />],
    github: "https://github.com/sudhirmhamane/GoNations",
    demo: "https://gonations.vercel.app/",
  },
  {
    title: "RECIPE FINDER APP",
    description:
      "Built a recipe application leveraging TheMealDB API to provide a rich selection of international and regional recipes.",
    image: "project2.png",
    tech: [
      <FaHtml5 size={40} />,
      <SiCss3 size={40} />,
      <SiJavascript size={40} />,
    ],
    github: "https://github.com/sudhirmhamane/Recipe-Finder-App",
    demo: "https://recipefinder-app.vercel.app/",
  },

  {
    title: "WEATHER FORECASTER",
    description:
      "Developed a responsive weather forecasting application using HTML, CSS, and JavaScript.",
    image: weather,
    tech: [
      <FaHtml5 size={40} />,
      <SiCss3 size={40} />,
      <SiJavascript size={40} />,
    ],
    github: "https://github.com/sudhirmhamane/WeatherForecast",
    demo: "https://forecastweather.vercel.app/",
  },
];

function useIsSmallScreen() {
  const [isSmall, setIsSmall] = useState(false);
  useEffect(() => {
    const check = () => setIsSmall(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isSmall;
}

const Projects = () => {
  const isSmallScreen = useIsSmallScreen();
  const [showAll, setShowAll] = useState(false);
  const visibleProjects =
    isSmallScreen && !showAll ? projects.slice(0, 2) : projects;

  return (
    <section id="projects" className="py-20 bg-graph text-white px-6">
      <ScrollReveal>
        <div className="text-center mb-12 mt-20">
          <h2 className="text-4xl font-bold text-blue-500">MY PROJECTS</h2>
          <p className="italic text-gray-400 mt-2">
            "A glimpse into my top projects and achievements."
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="bg-blue-500/10 border border-blue-400 rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="py-2 px-2 rounded-2xl w-full h-60 object-contain"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-blue-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex items-center space-x-4 text-2xl text-white mb-4">
                  {project.tech.map((Icon, i) => (
                    <span key={i}>{Icon}</span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-blue-400 text-blue-400 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {isSmallScreen && projects.length > 2 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="px-6 py-2 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </ScrollReveal>
    </section>
  );
};

export default Projects;
