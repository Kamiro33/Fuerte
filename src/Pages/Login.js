import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simular inicio de sesión
    if (email === 'usuario@ejemplo.com' && password === '123456') {
      // Simulamos un token y roles de prueba
      localStorage.setItem('token', 'simulated-token');
      localStorage.setItem('roles', JSON.stringify(['ROLE_USER', 'ROLE_COACH'])); // Cambia los roles según lo que quieras probar

      // Redirige al Dashboard
      navigate('/dashboard');
    } else {
      setError('Credenciales incorrectas. Usa "usuario@ejemplo.com" y "123456".');
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
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
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;