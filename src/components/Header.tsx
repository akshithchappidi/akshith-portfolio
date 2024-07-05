import React from 'react';

const Header: React.FC = () => (
  <header className="fixed top-0 w-full bg-white shadow z-50">
    <nav className="container mx-auto p-4">
      <ul className="flex justify-between">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/blogs">Blogs</a></li>
        <li><a href="/tools">Tools</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;