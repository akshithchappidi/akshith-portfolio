import React, { useState } from 'react';
import akshithImage from '../assets/Akshith_Animated_photo.png'; // Replace with your image path

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow z-50">
      <nav className="container mx-auto p-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src={akshithImage} alt="Akshith" className="w-10 h-10 rounded-full mr-2" />
          <h1 className="text-xl font-bold text-center">Akshith Chowdary</h1>
        </div>
        <div className="flex space-x-4 lg:hidden">
          <button onClick={toggleMenu} className="block text-gray-600 hover:text-gray-800 focus:text-gray-800 focus:outline-none">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M4 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 5h16a1 1 0 010 2H4a1 1 0 010-2zm0 5h16a1 1 0 010 2H4a1 1 0 010-2z" />
            </svg>
          </button>
          {isMenuOpen && (
            <ul className="absolute top-12 right-0 bg-white shadow-lg rounded mt-1 py-1 w-48">
              <li><a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Home</a></li>
              <li><a href="/about" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">About</a></li>
              <li><a href="/blogs" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Blogs</a></li>
              <li><a href="/tools" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Tools</a></li>
            </ul>
          )}
        </div>
        <ul className="hidden lg:flex lg:items-center lg:space-x-4">
          <li><a href="/" className="text-gray-600 hover:text-gray-800">Home</a></li>
          <li><a href="/about" className="text-gray-600 hover:text-gray-800">About</a></li>
          <li><a href="/blogs" className="text-gray-600 hover:text-gray-800">Blogs</a></li>
          <li><a href="/tools" className="text-gray-600 hover:text-gray-800">Tools</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
