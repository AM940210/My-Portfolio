import React from "react";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center bg-gray-50">
      <img 
        src="/src/assets/Alogo.jpg" 
        alt=""
        className="rounded-full w-48 h-48 shadow-lg mb-4" />
      <h1 className="text-4xl font-semibold text-gray-800 mb-4">I'am Ahmad Mohammadi, frontend developer.</h1>
      <p className="text-xl text-gray-600 mx-6">
        I'm a passionate Frontend Developer with a love for crafting beautiful and functional web experiences. I specialize in creating responsive, dynamic, and user-friendly interfaces.
      </p>
      <div className="flex space-x-4">
        <button className="px-6 py-2 mt-4 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 cursor-pointer">
          About Me
        </button>
        <button className="px-6 py-2 mt-4 bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray-700 transition duration-300 cursor-pointer">
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Home;
