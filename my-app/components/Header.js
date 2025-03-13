import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Header() {
  return (
    <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
          </a>
        </div>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ml-4">
          <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>

            <div className="flex  mr-4">
              <a
                href="https://www.linkedin.com/in/felix-roland/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                <FaLinkedin size={40} />
              </a>

              <a
                href="https://github.com/Chassdow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 dark:text-gray-300"
              >
                <FaGithub size={40} />
              </a>
            </div>

          </button>
          <DarkModeToggle />
        </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">

          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">

            <li className="mr-2">

              <a
                href="https://www.linkedin.com/in/felix-roland/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                <FaLinkedin size={40} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Chassdow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 dark:text-gray-300"
              >
                <FaGithub size={40} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}



