import React from "react";

const Contacts = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
      <p className="text-lg text-gray-600 mb-6">We'd love to hear from you! Reach out to us via the form below.</p>

      <form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Name</label>
          
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Message</label>
          <textarea
            placeholder="Write your message..."
            rows="4"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contacts;
