import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-white text-3xl font-extrabold hover:text-indigo-300 transition duration-300">
            <Link to="/">Likecapital</Link>
          </div>

          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-white hover:text-indigo-300 transition duration-300 text-lg font-medium py-2 px-4 rounded-lg hover:bg-indigo-600"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-indigo-300 transition duration-300 text-lg font-medium py-2 px-4 rounded-lg hover:bg-indigo-600"
            >
              Contact
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-indigo-300 transition duration-300 text-lg font-medium py-2 px-4 rounded-lg hover:bg-indigo-600"
            >
              About
            </Link>
            <Link
              to="/login"
              className="text-white hover:text-indigo-300 transition duration-300 text-lg font-medium py-2 px-4 rounded-lg hover:bg-indigo-600"
            >
               Login
            </Link>
          </div>

          {/* Icono de menú en móviles */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-white focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Open Menu"
            >
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${menuOpen ? 'rotate-45' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú desplegable en móviles */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800 p-4 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out">
          <div className="space-y-4">
            <Link
              to="/"
              className="block text-white text-lg font-medium py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-white text-lg font-medium py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block text-white text-lg font-medium py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/login"
              className="block text-white text-lg font-medium py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
