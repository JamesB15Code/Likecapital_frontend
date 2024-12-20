import { createContext, useState, useEffect } from 'react';
import { getToken } from '../utils/authUtils';
import PropTypes from 'prop-types';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = getToken();
    setIsAuthenticated(!!token); // Si el token existe, el usuario está autenticado
  }, []);

  const login = (token) => {
    setIsAuthenticated(true);
    localStorage.setItem('token', token); // Guardamos el token en localStorage
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('token'); // Eliminamos el token
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Validación de las props
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, // Asegura que children esté presente
};

export { AuthContext, AuthProvider };
