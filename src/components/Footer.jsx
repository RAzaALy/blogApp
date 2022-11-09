import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-gray-600 bg-black bg-opacity-100  body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          
          <div className="lg:w-1/2 w-full px-4">
            <h1 className="title-font font-bold text-white  text-4xl mb-8">
              Get in touch with us <br />
              for your services
            </h1>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">   
            <Link to='/home' className="text-gray-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </Link>
          <Link to='/about' className="ml-3 text-gray-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </Link>
          <Link to='/contact' className="ml-3 text-gray-500">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </Link>
          <Link to='/services' className="ml-3 text-gray-500">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </Link>
          </span>
          </div>
          <div className="lg:w-1/2  w-full px-4">
            <h2 className="title-font font-medium text-gray-600 tracking-widest text-sm mb-3">
              Help line Number
            </h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start mb-4">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <label
                  for="footer-field"
                  className="leading-7 text-sm text-white"
                >
                 +9230233493
                </label>
              </div>
             
            </div>
            <h2 className="title-font font-medium text-gray-600 tracking-widest text-sm mb-3">
             Address
            </h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start mb-4">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <label
                  for="footer-field"
                  className="leading-7 text-sm text-white"
                >
                 NH 234   Public Square San Francisco  65368
                </label>
              </div>
             
            </div>
            <h2 className="title-font font-medium text-gray-600 tracking-widest text-sm mb-3">
             We are Open
            </h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start mb-4">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <label
                  for="footer-field"
                  className="leading-7 text-sm text-white"
                >
                 Monday to Friday 9:00 AM to  10:00  AM
                </label>
              </div>
             
            </div>
            
            
          </div>
        </div>
      </div>
      <div className="bg-black bg-opacity-100">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <Link to='/home' className="flex title-font font-medium items-center md:justify-start justify-center">
            <img src="./images/footer.svg" alt="logo" />
          </Link>
          <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
            © Copyright 2021 — finsweet All right reserved !
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <nav className="list-none flex justify-between items-center">
              <li className="mx-4 cursor-pointer">
                <Link to="/home" className="text-gray-600 hover:text-white">
                  Home
                </Link>
              </li>
              <li className="mx-4 cursor-pointer">
                <Link to="/about" className="text-gray-600 hover:text-white">
                  About
                </Link>
              </li>
              <li className="mx-4 cursor-pointer">
                <Link to="/services" className="text-gray-600 hover:text-white">
                  Services
                </Link>
              </li>
              <li className="mx-4 cursor-pointer">
                <Link to="/blog" className="text-gray-600 hover:text-white">
                  Blog
                </Link>
              </li>
              <li className="mx-4 cursor-pointer">
                <Link to="/contact" className="text-gray-600 hover:text-white">
                  Contact
                </Link>
              </li>
            </nav>
      
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
