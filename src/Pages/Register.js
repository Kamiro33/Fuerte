import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import api from '../Services/api'; // Asume que tienes configurado Axios
import styles from '../styles/register.module.css'; // Importar el archivo CSS como módulo
=======
import api from '../Services/api';
>>>>>>> c2e85787b88fe35d36970004ce8fc0fd83413caf

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.post('/signup', { name, email, password });
      navigate('/'); // Redirige al login
    } catch (err) {
      setError(err.response?.data?.message || 'Error al registrarse.');
    } finally {
      setLoading(false);
    }
  };

  return (
<<<<<<< HEAD
    <div className={styles.registerContainer}>
      <div className={styles.registerForm}>
        <h2 className={styles.registerTitle}>Registro de Usuario</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label className={styles.registerLabel}>Nombre:</label>
            <input
              className={styles.registerInput}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className={styles.registerLabel}>Email:</label>
            <input
              className={styles.registerInput}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className={styles.registerLabel}>Contraseña:</label>
            <input
              className={styles.registerInput}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className={styles.errorMessage}>{error}</p>}
          <button className={styles.registerButton} type="submit">Registrarse</button>
        </form>
        <p className={styles.registerLink}>¿Ya tienes cuenta? <a href="/">Inicia Sesión</a></p>
      </div>
=======
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
        <button type="submit" disabled={loading}>
          {loading ? 'Registrando...' : 'Registrarse'}
        </button>
      </form>
>>>>>>> c2e85787b88fe35d36970004ce8fc0fd83413caf
    </div>
  );
}

export default Register;