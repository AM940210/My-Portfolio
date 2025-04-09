import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen text-center bg-gray-50 p-8">
      <div className="w-full md:w-1/2 mb-8 md:am-0 mr-16">
        <h1 className="text-4xl font-semibold text-gray-800 mb-8">Let's talk</h1>
        <p className="text-lg text-gray-600 mb-8">I'm currently available to take on new projects, so feel free to send me a message about anyting that you want me to work on. You can contact me anytime.</p>
        <p className="text-lg text-gray-600 mb-8">
        <i className="fas fa-envelope h-6 w-6 text-gray-600 mr-2"></i>
          ahmmoh0210@gmail.com</p>
        <p className="text-lg text-gray-600 mb-8">
        <i className="fas fa-phone-alt h-6 w-6 text-gray-600 mr-2"></i>
          +46727191174</p>
        <p className="text-lg text-gray-600">
        <span className="mr-2"><i className="fas fa-map-marker-alt"></i></span>
          Sweden, Gotengborg</p>
      </div>
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl font-semibold text-gray-800 mb-6">Get in touch</h1>

        <form className="w-full bg-white p-8 rounded-lg shadow-lg">
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-left text-lg text-gray-700">
              Name
            </label>
            <input 
              type="text"
              id="name"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Your Name" 
              />
          </div>

          {/* Email Input */}
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
          
          {/* Message Textarea */}
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

          {/* Submit Button */}
          <button 
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            Send Message
          </button>
        </form>
      </div>
      
    </div>
  );
};

export default Contact;
