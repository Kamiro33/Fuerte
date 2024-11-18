import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import styles from '../styles/login.module.css'; // Importar estilos como módulos
=======
import api from '../Services/api';
>>>>>>> c2e85787b88fe35d36970004ce8fc0fd83413caf

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Indicador de carga
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Activa el estado de carga

<<<<<<< HEAD
    // Simular inicio de sesión
    if (email === 'usuario@ejemplo.com' && password === '123456') {
      localStorage.setItem('token', 'simulated-token');
      localStorage.setItem('roles', JSON.stringify(['ROLE_USER', 'ROLE_COACH']));
=======
    try {
      const response = await api.post('/login', { email, password });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('roles', JSON.stringify(response.data.roles));
>>>>>>> c2e85787b88fe35d36970004ce8fc0fd83413caf
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Error al iniciar sesión.');
    } finally {
      setLoading(false); // Desactiva el estado de carga
    }
  };

  return (
<<<<<<< HEAD
    <div className={styles.loginContainer}>
      <div className={styles.loginForm}>
        <h2 className={styles.loginTitle}>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <label className={styles.loginLabel}>Email:</label>
          <input
            className={styles.loginInput}
=======
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
>>>>>>> c2e85787b88fe35d36970004ce8fc0fd83413caf
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
<<<<<<< HEAD
          <label className={styles.loginLabel}>Contraseña:</label>
          <input
            className={styles.loginInput}
=======
        </div>
        <div>
          <label>Contraseña:</label>
          <input
>>>>>>> c2e85787b88fe35d36970004ce8fc0fd83413caf
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
<<<<<<< HEAD
          {error && <p className={styles.errorMessage}>{error}</p>}
          <button className={styles.loginButton} type="submit">Entrar</button>
        </form>
      </div>
=======
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" disabled={loading}>
          {loading ? 'Cargando...' : 'Entrar'}
        </button>
      </form>
>>>>>>> c2e85787b88fe35d36970004ce8fc0fd83413caf
    </div>
  );
}

export default Login;