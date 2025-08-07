import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="w-full text-white bg-graph">
      <div className="flex flex-row md:flex-row justify-between items-center px-6 py-4">
        <p className="text-sm text-gray-400 text-center md:text-left">
          Made with <span className="text-red-500">❤️</span> by Sudhir
        </p>
        <div className="flex space-x-4 text-xl mt-2 md:mt-0">
          <a
            href="https://www.linkedin.com/in/sudhirmhamane/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="hover:text-blue-500 transition" />
          </a>
          <a
            href="https://github.com/sudhirmhamane"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="hover:text-blue-500 transition" />
          </a>

          <a href="mailto:sudhirmhamane908@gmail.com" aria-label="Email">
            <MdEmail className="hover:text-red-400 transition" />
          </a>

          <a
            href="https://unstop.com/u/SudhirM_45"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Unstop"
          >
            <img
              src="unstop (2).png"
              alt="Unstop Profile Sudhir Mhamane"
              className="w-6 h-6 object-contain "
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
