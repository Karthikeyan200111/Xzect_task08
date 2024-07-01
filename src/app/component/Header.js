'use client';
import React, { useState } from 'react';
import Image from 'next/image';
 // Adjust the path as necessary

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.classList.toggle('overflow-hidden', !isMobileMenuOpen);
  };

  const togglePagesDropdown = () => {
    setIsPagesDropdownOpen(!isPagesDropdownOpen);
  };

  return (
    <header className="mx-auto bg-white sticky top-0 z-50">
      <nav className="bg-white p-3 flex items-center justify-between mx-auto max-w-screen-xl">
        <a className="text-gray-800 font-bold text-3xl ml-5" href="#">
          <img src="/assets/logo-dark.webp" alt="logo" className="sm:w-auto w-40" />
        </a>
        <button
          id="toggleMobileMenu"
          className="navbar-toggler block lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-400"
          type="button"
          aria-label="toggle navigation"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        <div className={`lg:hidden fixed inset-0 bg-white bg-opacity-90 z-50 ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobileMenu">
          <div className="flex justify-end p-4">
            <button
              id="closeMobileMenu"
              className="text-gray-800"
              onClick={toggleMobileMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <ul className="flex flex-col items-center justify-center gap-5 text-xl navbar-wrapper active">
            <li><a className="text-gray-800 hover:text-gray-900" href="#">Home</a></li>
            <li><a className="text-gray-800 hover:text-gray-900" href="#">About</a></li>
            <li><a className="text-gray-800 hover:text-gray-900" href="#">Blog</a></li>
            <li className="relative">
              <a
                className="text-gray-800 hover:text-gray-900"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  togglePagesDropdown();
                }}
              >
                Pages
              </a>
              <ul className={`dropdown-menu bg-white shadow-lg mt-2 py-1 w-32 text-gray-800 ${isPagesDropdownOpen ? 'block' : 'hidden'}`}>
                <li><a className="dropdown-item block px-4 py-2 hover:bg-gray-200" href="#">Elements</a></li>
                <li><a className="dropdown-item block px-4 py-2 hover:bg-gray-200" href="#">Integration</a></li>
                <li><a className="dropdown-item block px-4 py-2 hover:bg-gray-200" href="#">Careers</a></li>
                <li><a className="dropdown-item block px-4 py-2 hover:bg-gray-200" href="#">Pricing</a></li>
                <li><a className="dropdown-item block px-4 py-2 hover:bg-gray-200" href="#">Authors</a></li>
                <li><a className="dropdown-item block px-4 py-2 hover:bg-gray-200" href="#">Contact</a></li>
                <li><a className="dropdown-item block px-4 py-2 hover:bg-gray-200" href="#">Sign Up</a></li>
                <li><a className="dropdown-item block px-4 py-2 hover:bg-gray-200" href="#">Terms and Conditions</a></li>
                <li><a className="dropdown-item block px-4 py-2 hover:bg-gray-200" href="#">404 Page</a></li>
              </ul>
            </li>
            <li><button type="button" className="btn-outline text-black border border-black hover:text-white hover:bg-black px-4 py-2 rounded-lg mr-2">Login</button></li>
            <li><button type="button" className="btn bg-gray-800 text-white px-4 py-2 rounded-lg">Get Started</button></li>
          </ul>
        </div>

        <div className="hidden lg:flex lg:items-center lg:justify-evenly ml-5" id="navbarNavDropdown">
          <ul className="mx-auto flex gap-5 items-center justify-between text-xl">
            <li className="nav-item">
              <a className="nav-link text-gray-800 hover:text-gray-900" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-gray-800 hover:text-gray-900" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-gray-800 hover:text-gray-900" href="#">Blog</a>
            </li>
            <li className="nav-item dropdown relative">
              <a className="nav-link text-gray-800 hover:text-gray-900" href="#" id="navbarDropdown" role="button">
                Pages
              </a>
              <ul className="dropdown-menu absolute hidden bg-white shadow-lg mt-2 py-1 w-32 text-gray-800" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item block px-4 py-2 hover:bg-gray-200" href="#">Elements</a></li>
                <li><a className="dropdown-item block px-4 py-2 hover:bg-gray-200" href="#">Integration</a></li>
                <li><a className="dropdown-item block px-4 py-2 hover:bg-gray-200" href="#">Careers</a></li>
                <li><a className="dropdown-item block px-4 py-2 hover:bg-gray-200" href="#">Pricing</a></li>
                <li><a className="dropdown-item block px-4 py-2 hover:bg-gray-200" href="#">Authors</a></li>
                <li><a className="dropdown-item block px-4 py-2 hover:bg-gray-200" href="#">Contact</a></li>
                <li><a className="dropdown-item block px-4 py-2 hover:bg-gray-200" href="#">Sign Up</a></li>
                <li><a className="dropdown-item block px-4 py-2 hover:bg-gray-200" href="#">Terms and Conditions</a></li>
                <li><a className="dropdown-item block px-4 py-2 hover:bg-gray-200" href="#">404 Page</a></li>
              </ul>
            </li>
            <li className="nav-item ml-3 flex ml-5">
              <button type="button" className="btn-outline text-black border border-black hover:text-white hover:bg-black px-4 py-2 rounded-lg mr-2">Login</button>
              <button type="button" className="btn bg-gray-800 text-white px-4 py-2 rounded-lg">Get Started</button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
