import { UrlLoginUsuarios } from "../url/urlSitioWeb";
const login = async (email, password) => {
    try {
      const response = await fetch(UrlLoginUsuarios, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token); // Guardar token en localStorage
        return data;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      throw error;
    }
  };
  
  export { login };
  