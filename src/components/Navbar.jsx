// src/components/Navbar.jsx
import { useState } from 'react';
import AuthModal from './AuthModal';

const Navbar = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    // Blur effect aur layout yahan set hai
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 px-4 py-3 ">
      
      {/* SARA CONTENT IS CONTAINER KE ANDAR DALA HAI */}
      <div className="container mx-auto flex justify-between items-center text-white">
        
        {/* 1. Logo Section */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <h1 className="text-red-600 font-extrabold text-3xl tracking-tighter italic uppercase transition-transform duration-300 group-hover:scale-105">
            K-STREAM <span className="text-white font-light text-xl not-italic">.</span>
          </h1>
          <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse mt-3"></div>
        </div>

        {/* 2. Navigation Links (Ye ab justify-between ki wajah se center aur right ke beech mein adjust hoga) */}
        <div className="flex gap-6 text-gray-300 font-medium text-sm tracking-wide items-center">
          <a href="#home" className="text-white hover:text-red-500 transition-colors duration-200 flex items-center gap-1">
            🎬 Home
          </a>
          <a href="#browse" className=" hover:text-red-500 transition-colors duration-200 flex items-center gap-1">
            🔍 Browse
          </a>
          <a href="#MyList" className=" hidden md:block hover:text-red-500 transition-colors duration-200 flex items-center gap-1">
            💖MyList
          </a>
        </div>

        {/* 3. Action Buttons Section */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsAuthOpen(true)}
            className="text-white text-sm bg-red-600 hover:bg-red-700 px-4 py-2 font-semibold rounded-md shadow-lg shadow-red-600/20 transition-all duration-200 active:scale-95"
          >
            Join Now
          </button>
          
          <AuthModal isOpen={isAuthOpen} onRequestClose={() => setIsAuthOpen(false)} />
        </div>

      </div> 
      {/* Container end yahan hoga */}
    </nav>
  );
};

export default Navbar;