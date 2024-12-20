import { useEffect, useState } from 'react';
import { UrlLoginUsuarios } from "../url/urlSitioWeb";
import axios from 'axios';

const ListUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(UrlLoginUsuarios)
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error al obtener usuarios', error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
          Lista de Usuarios
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map(user => (
            <div
              key={user.id}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-600">
                {user.name}
              </h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
          ))}
        </div>
        {users.length === 0 && (
          <p className="text-center text-gray-500 mt-6">
            No hay usuarios disponibles.
          </p>
        )}
      </div>
    </div>
  );
};

export default ListUsers;
