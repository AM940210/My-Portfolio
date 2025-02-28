import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">
            <img
              src="/src/assets/Alogo.jpg"
              alt=""
              className="h-12"
            />
          </Link>
        </div>
        <ul className="flex space-x-6 justify-center flex-grow">
          <li>
            <Link
              to="/about"
              className="hover:text-gray-300 transition duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="hover:text-gray-300 transition duration-200"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-gray-300 transition duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-gray-200 transition duration-200">
            Contact Me
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
