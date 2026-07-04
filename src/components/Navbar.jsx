// src/components/Navbar.jsx
import { useState } from "react";

const Navbar = () => {
  return (
    // backdrop-blur-md se blurry effect aayega aur bg-black/40 se transparency handle hogi
    <nav className="fixed top-0 left-0 w-full z-50 px-10 py-5 flex justify-between items-center bg-black/40 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      
      {/* 1. Logo Section (Attractive Styling) */}
      <div className="flex items-center gap-2 cursor-pointer group">
        <h1 className="text-red-600 font-extrabold text-3xl tracking-tighter italic uppercase transition-transform duration-300 group-hover:scale-105">
          K-STREAM <span className="text-white font-light text-xl not-italic">.</span>
        </h1>
        {/* Chota sa active pulse dot jo logo ko premium look dega */}
        <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse mt-3"></div>
      </div>

      {/* 2. Navigation Links (Beautiful Fonts & Hover Effects) */}
      <div className="flex gap-8 text-gray-300 font-medium text-sm tracking-wide items-center">
        <a href="#" className="text-white hover:text-red-500 transition-colors duration-200 flex items-center gap-1">
          🎬 Home
        </a>
        <a href="#" className="hover:text-red-500 transition-colors duration-200 flex items-center gap-1">
          🔍 Browse
        </a>
        <a href="#" className="hover:text-red-500 transition-colors duration-200 flex items-center gap-1">
          💖 My List
        </a>
      </div>

      {/* 3. Action Buttons Section */}
      <div className="flex items-center gap-4">
        <button className="text-white text-sm bg-red-600 hover:bg-red-700 px-4 py-2 font-semibold rounded-md shadow-lg shadow-red-600/20 transition-all duration-200 active:scale-95">
          Join Now
        </button>
      </div>

    </nav>
  );
};

export default Navbar;