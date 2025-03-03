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
              alt=""
              className="h-12"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6 justify-center flex-grow">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/education">Education</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Hamburger Icon for Mobile */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          <i className="fas fa-bars"></i>
        </button>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
          <ul className="space-y-4 text-center">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
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
