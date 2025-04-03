import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white p-6 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold">Ecommerce</h1>
        </div>

        <div className="flex flex-wrap justify-center space-x-4 my-4 md:my-0">
          <Link to="/" className="text-blue-400 font-semibold hover:text-blue-500 transition">
            Home
          </Link>
          <Link to="/products" className="text-blue-400 font-semibold hover:text-blue-500 transition">
            Products
          </Link>
          <Link to="/about" className="text-blue-400 font-semibold hover:text-blue-500 transition">
            About Us
          </Link>
          <Link to="/contact" className="text-blue-400 font-semibold hover:text-blue-500 transition">
            Contact
          </Link>
        </div>

        <div className="text-center md:text-right">
          <p className="mb-2">Follow us on social media</p>
          <div className="flex justify-center space-x-4 text-xl">
            <FaFacebook className="cursor-pointer hover:text-blue-500" />
            <FaTwitter className="cursor-pointer hover:text-blue-400" />
            <FaInstagram className="cursor-pointer hover:text-pink-500" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
