import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // Para la redirección
import { AuthContext } from '../services/AuthContext'; // Importamos el contexto de autenticación
import { login as loginService } from '../services/authService'; // Importamos la función login del servicio

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook para la navegación
  const { login } = useContext(AuthContext); // Obtenemos la función login del contexto

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Llamamos a la función login del servicio
      const data = await loginService(email, password);
      console.log('Login exitoso:', data);

      // Actualizamos el estado de autenticación global con el token
      login(data.token); // Asumiendo que el token está en 'data.token'

      // Si el login es exitoso, redirigimos al usuario a la página de inicio o cualquier otra ruta
      navigate('/'); // Cambia esto por la ruta deseada

    } catch {
      // Si ocurre un error (por ejemplo, credenciales incorrectas)
      setError('Credenciales incorrectas');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 md:px-0">
      <div className="w-full max-w-sm p-6 md:p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-blue-800 text-center mb-6">Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Correo Electrónico
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              id="email"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="Tu correo"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              id="password"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="Tu contraseña"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>} {/* Mensaje de error */}

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-800 transition-all"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
