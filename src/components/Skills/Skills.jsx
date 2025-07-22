import React from 'react';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGithub,
  SiGit,
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import ScrollReveal from '../../utils/ScrollReveal';

const skills = [
  { name: 'HTML', icon: <SiHtml5 color="#e44d26" size={55} /> },
  { name: 'CSS', icon: <SiCss3 color="#264de4" size={55} /> },
  { name: 'JavaScript', icon: <SiJavascript color="#f0db4f" size={55} /> },
  { name: 'Java', icon: <DiJava color="#ffffff" size={55} /> },
  { name: 'React', icon: <SiReact color="#61DBFB" size={55} /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss color="#38bdf8" size={55} /> },
  { name: 'Node.js', icon: <SiNodedotjs color="#3c873a" size={55} /> },
  { name: 'Express.js', icon: <SiExpress color="#ffffff" size={55} /> },
  { name: 'MongoDB', icon: <SiMongodb color="#47A248" size={55} /> },
  { name: 'MySQL', icon: <SiMysql color="#00758F" size={55} /> },
  { name: 'GitHub', icon: <SiGithub color="#ffffff" size={55} /> },
  { name: 'Git', icon: <SiGit color="#f1502f" size={55} /> },
];

const Skills = () => {
  return (
    <section className="bg-black text-white py-16 px-4" id="skills">
      <ScrollReveal>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-500">MY SKILLS</h2>
          <p className="italic text-gray-400 mt-2">
            "Every skill begins with a decision to improve."
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center hover:scale-110 transition-transform duration-300"
            >
              {skill.icon}
              <span className="mt-2 text-xl font-bold">{skill.name}</span>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Skills;
