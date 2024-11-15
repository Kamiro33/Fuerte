import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../Services/api'; // Asume que tienes configurado Axios

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simulamos el registro de usuario (esto cambiará cuando el backend esté listo)
      await api.post('/signup', { name, email, password });
      navigate('/'); // Redirigir al Login después del registro
    } catch (err) {
      setError('Error al registrarse. Inténtalo nuevamente.');
    }
  };

  return (
    <div>
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Registrarse</button>
      </form>

      {/* Enlace al login */}
      <p>¿Ya tienes cuenta? <a href="/">Inicia Sesión</a></p>
    </div>
  );
}

export default Register;