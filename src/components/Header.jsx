import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bookDropdownOpen, setBookDropdownOpen] = useState(false);

  const navLinkClass =
    'relative group text-gray-700 font-medium transition duration-300';

  const underlineEffect = `
    before:content-[''] before:absolute before:bottom-0 before:left-0
    before:w-0 before:h-[2px] before:bg-indigo-600 before:transition-all
    before:duration-300 group-hover:before:w-full
  `;

  const glowText = `
    group-hover:text-indigo-600 group-hover:drop-shadow-[0_0_5px_rgba(99,102,241,0.6)]
  `;

  return (
    <header className="bg-white shadow-lg px-6 py-4 sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <BookOpen className="text-indigo-600 w-6 h-6" />
          <span className="text-2xl font-extrabold text-indigo-700 tracking-tight">BookDragon</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-lg">
  <Link
    to="/"
    className="relative text-gray-700 font-medium transition hover:text-indigo-600 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
  >
    Home
  </Link>

  <Link
    to="/articles"
    className="relative text-gray-700 font-medium transition hover:text-indigo-600 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
  >
    Blog
  </Link>

  {/* Books Dropdown */}
  {/* <div
    className="relative"
    onMouseEnter={() => setBookDropdownOpen(true)}
    onMouseLeave={() => setBookDropdownOpen(false)}
  >
    <button className="relative flex items-center text-gray-700 font-medium transition hover:text-indigo-600 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full">
      Books <ChevronDown className="ml-1 w-4 h-4" />
    </button>

    {bookDropdownOpen && (
      <div className="absolute left-0 mt-2 w-44 bg-white border rounded-lg shadow-xl py-2 z-40">
        <Link to="/books/romantic" className="block px-4 py-2 hover:bg-indigo-50">Romantic</Link>
        <Link to="/books/mystery" className="block px-4 py-2 hover:bg-indigo-50">Mystery</Link>
        <Link to="/books/fantasy" className="block px-4 py-2 hover:bg-indigo-50">Fantasy</Link>
        <Link to="/books/scifi" className="block px-4 py-2 hover:bg-indigo-50">Sci-Fi</Link>
      </div>
    )}
  </div> */}

  <Link
    to="/reviews"
    className="relative text-gray-700 font-medium transition hover:text-indigo-600 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
  >
    Testimonials
  </Link>

  <Link
    to="/contact"
    className="relative text-gray-700 font-medium transition hover:text-indigo-600 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
  >
    Contact
  </Link>

  <Link
    to="/about"
    className="relative text-gray-700 font-medium transition hover:text-indigo-600 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
  >
    About
  </Link>
</nav>



        {/* Mobile Toggle */}
        <button
          className="md:hidden text-indigo-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-3 px-4 pb-4 space-y-2 text-base">
          <Link to="/" className="block text-gray-700 hover:text-indigo-600">Home</Link>
          <Link to="/articles" className="block text-gray-700 hover:text-indigo-600">Blog</Link>

          <Link
    to="/reviews"
className="block text-gray-700 hover:text-indigo-600"
  >
    Reviews
  </Link>
          <Link to="/contact" className="block text-gray-700 hover:text-indigo-600">Contact</Link>
          <Link to="/about" className="block text-gray-700 hover:text-indigo-600">About</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
