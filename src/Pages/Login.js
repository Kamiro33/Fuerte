import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../Services/api'; // Importar el servicio API
import styles from '../styles/login.module.css'; // Importar estilos como módulos

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Indicador de carga
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Activa el estado de carga

    try {
      const response = await api.post('https://planiworkout-bwafb0h8gcezb2af.canadacentral-01.azurewebsites.net/api/auth/signin', { email, password });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('roles', JSON.stringify(response.data.roles));
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Error al iniciar sesión.');
    } finally {
      setLoading(false); // Desactiva el estado de carga
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginForm}>
        <h2 className={styles.loginTitle}>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label className={styles.loginLabel}>Email:</label>
            <input
              className={styles.loginInput}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className={styles.loginLabel}>Contraseña:</label>
            <input
              className={styles.loginInput}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className={styles.errorMessage}>{error}</p>}
          <button className={styles.loginButton} type="submit" disabled={loading}>
            {loading ? 'Cargando...' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
