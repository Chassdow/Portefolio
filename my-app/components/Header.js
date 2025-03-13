import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Header() {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-3">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text">FR</span>
          </a>
          
          <div className="flex items-center space-x-6">
            <a
              href="https://www.linkedin.com/in/felix-roland/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/Chassdow"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}



