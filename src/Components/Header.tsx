import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">
            <img
              src="/src/assets/Alogo.jpg"
              alt="Ahmad Mohammadi"
              className="h-12"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6 justify-center flex-grow">
          <li>
            <Link to="/about" className="hover:text-gray-300 transition duration-200">
              About
            </Link>
          </li>
          <li>
            <Link to="/education" className="hover:text-gray-300 transition duration-200">
              Education
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-gray-300 transition duration-200">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300 transition duration-200">
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger Icon for Mobile */}
        <button className="md:hidden text-white" 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen ? "true" : "false"}
        aria-label="Toggle menu"
        >
          <i className="fas fa-bars text-2xl"></i>
        </button>

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${isOpen ? "block" : "hidden"} bg-blue-700 rounded-b-lg mt-4 p-4 absolute top-16 left-0 right-0 z-10`}
        >
          <ul className="space-y-4 text-center text-white">
            <li>
              <Link to="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/education" onClick={() => setIsOpen(false)}>
                Education
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={() => setIsOpen(false)}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Me Button for Desktop */}
        <div className="hidden md:block">
          <Link to="/contact">
            <button className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-gray-200 transition duration-200">
              Contact Me
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
