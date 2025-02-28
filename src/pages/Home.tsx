import React from "react";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center bg-gray-50">
      <img 
        src="/src/assets/Alogo.jpg" 
        alt=""
        className="rounded-full w-48 h-48 shadow-lg mb-4" />
      <h1 className="text-4xl font-semibold text-gray-800 mb-4">I'am Ahmad Mohammadi, frontend developer.</h1>
      <p className="text-xl text-gray-600">
        I'm a passionate Frontend Developer with a love for crafting beautiful and functional web experiences. I specialize in creating responsive, dynamic, and user-friendly interfaces.
      </p>
      
    </div>
  );
};

export default Home;
