import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Contact from "../components/Contact"
export default function Footer() {
  return (
    <footer className="text-center py-6 border-t mt-6">
      <h2 className="text-xl font-semibold">📩 Contact</h2>
      <div className="flex justify-center gap-6 mt-4">
        <a
          href="https://www.linkedin.com/in/felix-roland/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          <FaLinkedin size={70} />
        </a>
        <a
          href="https://github.com/Chassdow"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 dark:text-gray-300"
        >
          <FaGithub size={70} />
        </a>
    
      </div>
      <Contact></Contact>
    </footer>
  );
}
