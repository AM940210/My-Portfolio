import React, { useState } from "react";

const Home: React.FC = () => {
  // Adding state to toggle between "About Me" and "Contact Me"
  const [currentSection, setCurrentSection] = useState<'about' | 'contact'>('about');

  // Handle button click to toggle between sections
  const showAbout = () => setCurrentSection('about');
  const showContact = () => setCurrentSection('contact');

  return (
    <div className="flex flex-col justify-center items-center h-screen text-center bg-gray-50">
      <img 
        src="/src/assets/Alogo.jpg" 
        alt="Ahmad's logo"
        className="rounded-full w-48 h-48 shadow-lg mb-4" />
      <h1 className="text-4xl font-semibold text-gray-800 mb-4">
        I'am Ahmad Mohammadi, frontend developer.
      </h1>

      {/* Conditional Rendering Based on Current Section */}
      {currentSection === 'about' ? (
        <p className="text-xl text-gray-600 mx-6">
          ? "I'm a passionate Frontend Developer with a love for crafting beautiful and functional web experiences. 
          I specialize in creating responsive, dynamic, and user-friendly interfaces."
        </p>
      ) : (
        <p className="text-xl text-gray-600 mx-6">
          You can reach out to me for any frontend development work, projeckts, or collaboration!
        </p>
      )}
      
      <div className="flex space-x-4">
        <button 
          className="px-6 py-2 mt-4 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 cursor-pointer"
          onClick={showAbout}
        >
          About Me
        </button>
        <button 
          className="px-6 py-2 mt-4 bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray-700 transition duration-300 cursor-pointer"
          onClick={showContact}
        >
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Home; 
