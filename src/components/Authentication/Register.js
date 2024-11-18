import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../../Services/api';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('ROLE_USER');
  const navigate = useNavigate();

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      toast.error('Por favor, introduce un email válido.');
      return;
    }

    if (password.length < 6) {
      toast.error('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    try {
      await api.post('/auth/register', {
        name,
        email,
        password,
        role,
      });

      toast.success('Registro exitoso. Por favor inicia sesión.');
      navigate('/login');
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || 'Error en el registro.');
      } else {
        toast.error('Error en el servidor. Intenta más tarde.');
      }
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Registrar Usuario</h2>
      <form onSubmit={handleRegister}>
        <label>Nombre:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Contraseña:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label>Rol:</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="ROLE_USER">Usuario</option>
          <option value="ROLE_COACH">Coach</option>
        </select>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Register;