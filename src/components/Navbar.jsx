import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../services/AuthContext'; // Importamos el contexto

const Navbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext); // Estado de autenticación y función logout
  const navigate = useNavigate(); // Para redirigir al usuario después de cerrar sesión
  const [menuOpen, setMenuOpen] = useState(false); // Control del menú móvil

  const handleLogout = () => {
    logout(); // Llamamos a la función logout del contexto
    navigate('/login'); // Redirigimos al login
    setMenuOpen(false); // Cerramos el menú móvil
  };

  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-white text-3xl font-extrabold hover:text-indigo-300 transition duration-300">
            <Link to="/">Likecapital</Link>
          </div>

          {/* Menú para pantallas grandes */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-white hover:text-white transition duration-300 text-lg font-medium py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Home
            </Link>
            <Link
              to="/users"
              className="text-white hover:text-white transition duration-300 text-lg font-medium py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Users
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-white transition duration-300 text-lg font-medium py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              About
            </Link>
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="text-white hover:text-white transition duration-300 text-lg font-medium py-2 px-4 rounded-lg hover:bg-blue-700"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="text-white hover:text-white transition duration-300 text-lg font-medium py-2 px-4 rounded-lg hover:bg-blue-700"
              >
                Login
              </Link>
            )}
          </div>

          {/* Icono del menú móvil */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-white focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className={`w-6 h-6 transition-transform ${menuOpen ? 'rotate-90' : ''}`}
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
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú desplegable para pantallas pequeñas */}
      {menuOpen && (
        <div className="md:hidden bg-blue-600 p-4 rounded-lg shadow-lg">
          <div className="space-y-4">
            <Link
              to="/"
              className="block text-white text-lg font-medium py-2 px-4 rounded-lg hover:bg-blue-700"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/users"
              className="block text-white text-lg font-medium py-2 px-4 rounded-lg hover:bg-blue-700"
              onClick={() => setMenuOpen(false)}
            >
              Users
            </Link>
            <Link
              to="/about"
              className="block text-white text-lg font-medium py-2 px-4 rounded-lg hover:bg-blue-700"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="block text-white text-lg font-medium py-2 px-4 rounded-lg hover:bg-blue-700"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="block text-white text-lg font-medium py-2 px-4 rounded-lg hover:bg-blue-700"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
