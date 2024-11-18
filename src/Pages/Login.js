import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/login.module.css'; // Importar estilos como módulos

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simular inicio de sesión
    if (email === 'usuario@ejemplo.com' && password === '123456') {
      localStorage.setItem('token', 'simulated-token');
      localStorage.setItem('roles', JSON.stringify(['ROLE_USER', 'ROLE_COACH']));
      navigate('/dashboard');
    } else {
      setError('Credenciales incorrectas. Usa "usuario@ejemplo.com" y "123456".');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginForm}>
        <h2 className={styles.loginTitle}>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <label className={styles.loginLabel}>Email:</label>
          <input
            className={styles.loginInput}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className={styles.loginLabel}>Contraseña:</label>
          <input
            className={styles.loginInput}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className={styles.errorMessage}>{error}</p>}
          <button className={styles.loginButton} type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;