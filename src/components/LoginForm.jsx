import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Para la redirección
import { login } from '../services/authService';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook para la navegación

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Llamamos a la función login del servicio
      const data = await login(email, password);
      console.log('Login exitoso:', data);

      // Si el login es exitoso, redirigimos al usuario a la página de inicio o cualquier otra ruta
      navigate('/'); // Cambia esto por la ruta deseada

    } catch {
      // Si ocurre un error (por ejemplo, credenciales incorrectas)
      setError('Credenciales incorrectas');
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Correo Electrónico
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
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
              type="password"
              id="password"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              placeholder="Tu contraseña"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>} {/* Mensaje de error */}

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-500"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
