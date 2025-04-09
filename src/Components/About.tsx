import React from "react";

const About: React.FC = () => {
  return (
    <div className="flex h-screen text-center p-8 font-sans bg-gray-50">
      <div className="am:w-1/2 pr-8">
        <img
          src="/src/assets/Alogo.jpg"
          alt="About Me"
          className="h-auto object-cover shadow-lg rounded-lg"
        />
      </div>

      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl font-bold text-gray-900">About Me!</h1>
        <p className="mt-4 text-lg text-gray-700">
          Ahmad Mohammadi is a passionate and dedicated frontend developer who
          has recently embarked on an exciting journey in the world of web
          development. With a strong foundation in the latest web technologies,
          Ahmad continuously strives to create beautiful, responsive, and
          user-friendly interfaces. His enthusiasm for learning and growing in
          the tech space is evident in his commitment to mastering tools like
          React, HTML, CSS, and JavaScript. Ahmad is excited to bring his
          creativity and problem-solving skills to a dynamic team that values
          innovation and collaboration.
        </p>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Skills</h2>
          <div className="mt-4">
            <div className="mb-4">
              <label className="text-sm text-gray-600">HTML</label>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-orange-500 h-2.5 rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
            <div className="mb-4">
              <label className="text-sm text-gray-600">CSS</label>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
            <div className="mb-4">
              <label className="text-sm text-gray-600">JavaScript</label>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-yellow-500 h-2.5 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
            <div className="mb-4">
              <label className="text-sm text-gray-600">React</label>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-500 h-2.5 rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
