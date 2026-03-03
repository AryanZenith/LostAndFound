import React from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-90 w-full bg-white/ backdrop-blur-md ">
      <div className="flex justify-between container mx-auto px-6 py-4 items-center">
        
        <div className="flex items-center gap-2 group cursor-pointer">
          <img 
            className="w-30 h-auto transition-transform duration-300 group-hover:scale-110"
            src="https://images.vexels.com/media/users/3/198875/isolated/preview/aca9178281a41eb6c0265ec8a0782eb9-lost-and-founds-label-flat-by-vexels.png" 
            alt="LOGO" 
          />
        </div>

       <div className="hidden md:flex justify-center">
  <nav className="flex gap-8 items-center  backdrop-blur-md px-20 py-5 rounded-4xl shadow-lg border border-gray-200">
    
    <Link to="/" className="text-2xl font-semibold text-black-800 hover:text-black transition-colors relative group">
      Home
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-800 transition-all group-hover:w-full"></span>
    </Link>

    <Link to="/about" className="text-2xl font-semibold text-black-800 hover:text-black transition-colors relative group">
      About
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-800 transition-all group-hover:w-full"></span>
    </Link>

    <Link to="/contact" className="text-2xl font-semibold text-black-800 hover:text-black transition-colors relative group">
      Contact
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-800 transition-all group-hover:w-full"></span>
    </Link>

  </nav>
</div>


        <div className="flex items-center gap-4">
          {!token ? (
            <>
              <Link
                to="/login"
                className="bg-gray-900 text-white py-2.5 px-6 rounded-full text-sm font-bold shadow-lg hover:bg-blue-600 hover:shadow-blue-200 transition-all active:scale-95"
              >
                Log in
              </Link>

              <Link
                to="/signup"
                className="bg-gray-900 text-white py-2.5 px-6 rounded-full text-sm font-bold shadow-lg hover:bg-blue-600 hover:shadow-blue-200 transition-all active:scale-95"
              >
                Sign up
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-gray-900 text-white py-2.5 px-6 rounded-full text-sm font-bold shadow-lg hover:bg-blue-600 hover:shadow-blue-200 transition-all active:scale-95"
            >
              Logout
            </button>
          )}
        </div>

      </div>
    </header>
  );
}
