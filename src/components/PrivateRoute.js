import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const token = localStorage.getItem('token');  // Verifica si el usuario está autenticado
  return token ? children : <Navigate to="/" />;  // Redirige a la página de Login si no está autenticado
}

export default PrivateRoute;