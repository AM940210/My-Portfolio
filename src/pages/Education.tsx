import React from "react";

const Education: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-semibold text-gray-800 mb-6">Education</h1>
      <div className="bg-white p-6 round-lg shadow-lg">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Teknik College, Industri Programmet.</h2>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Teknik College, Ljusdal</strong>
        </p>
        <p className="text-gray-600">
        At Teknik College, within the Industri Programmet, I gained a strong foundation in industrial technology and engineering. This program provided me with hands-on experience and a deep understanding of various technical disciplines, preparing me for challenges in the rapidly evolving tech industry. The focus on practical skills, combined with theoretical knowledge, helped me develop problem-solving abilities and a keen eye for detail. I’m proud to have been a part of this program, which has equipped me with valuable skills.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Frontend Developer</h2>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Medieinstutet</strong> - Gotenborg, Sweden
        </p>
        <p className="text-gray-600">I’m currently learning Frontend Development at Medieinstitutet, where I’m honing my skills in modern web technologies like React, JavaScript, HTML, and CSS. This bootcamp has provided me with a comprehensive understanding of frontend development, with a strong emphasis on creating responsive, user-friendly interfaces. Additionally, I’ve gained valuable experience in building efficient APIs, enabling me to craft seamless, interactive web applications. I’m excited to continue expanding my knowledge and applying it in real-world projects.</p>
      </div>
    </div>
  );
};

export default Education;
