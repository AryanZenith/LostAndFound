import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/30 backdrop-blur-md">
      <div className="flex justify-between container mx-auto px-6 py-4 items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <img 
            className="w-28 h-auto transition-transform duration-300 group-hover:scale-110"
            src="https://images.vexels.com/media/users/3/198875/isolated/preview/aca9178281a41eb6c0265ec8a0782eb9-lost-and-founds-label-flat-by-vexels.png" 
            alt="LOGO" 
          />
        </div>

        {/* Desktop Navbar (UNCHANGED) */}
        <div className="hidden md:flex justify-center">
          <nav className="flex gap-8 items-center bg-white/30 backdrop-blur-md px-20 py-5 rounded-4xl shadow-lg border border-white/40">
            
            <Link to="/" className="text-2xl font-semibold text-black hover:text-black transition-colors relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-800 transition-all group-hover:w-full"></span>
            </Link>

            <Link to="/about" className="text-2xl font-semibold text-black hover:text-black transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-800 transition-all group-hover:w-full"></span>
            </Link>

            <Link to="/contact" className="text-2xl font-semibold text-black hover:text-black transition-colors relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-800 transition-all group-hover:w-full"></span>
            </Link>

          </nav>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {!token ? (
            <>
              <Link
                to="/login"
                className="bg-gray-900 text-white py-2.5 px-6 rounded-full text-sm font-bold shadow-lg hover:bg-blue-600 transition-all active:scale-95"
              >
                Log in
              </Link>

              <Link
                to="/signup"
                className="bg-gray-900 text-white py-2.5 px-6 rounded-full text-sm font-bold shadow-lg hover:bg-blue-600 transition-all active:scale-95"
              >
                Sign up
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-gray-900 text-white py-2.5 px-6 rounded-full text-sm font-bold shadow-lg hover:bg-blue-600 transition-all active:scale-95"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl font-bold text-black"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[500px] py-6" : "max-h-0"
        } bg-white/30 backdrop-blur-md`}
      >
        <div className="flex flex-col items-center gap-6 text-lg font-semibold">
          
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>

          {!token ? (
            <>
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-bold"
              >
                Log in
              </Link>

              <Link
                to="/signup"
                onClick={() => setIsOpen(false)}
                className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-bold"
              >
                Sign up
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-bold"
            >
              Logout
            </button>
          )}

        </div>
      </div>
    </header>
  );
}