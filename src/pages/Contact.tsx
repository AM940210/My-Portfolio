import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center bg-gray-50 p-8">
      <h1 className="text-4xl font-semibold text-gray-800 mb-6">Get in touch</h1>

      <form className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-left text-lg text-gray-700">
            Name
          </label>
          <input 
            type="text"
            id="name"
            className="w-full px-4 py-2 mt-2 border border-gray-300 ruonded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Your Name" 
            />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-left text-lg text-gray-700">
            Email
          </label>
          <input 
            type="email"
            id="email"
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" 
            placeholder="Your Email"
            />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-left text-lg text-gray-700">
            Message
          </label>
          <textarea 
            id="message"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Your Message"
            rows={5}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
