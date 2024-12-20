import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../Services/api'; // Asume que tienes configurado Axios
import styles from '../styles/register.module.css'; // Importar el archivo CSS como módulo

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
      await api.post('https://planiworkout-bwafb0h8gcezb2af.canadacentral-01.azurewebsites.net/api/auth/signup', { name, email, password });
      navigate('/'); // Redirige al login
    } catch (err) {
      setError(err.response?.data?.message || 'Error al registrarse.');
    } finally {
      setLoading(false);
    }
  };

  return (
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
          <button className={styles.registerButton} type="submit" disabled={loading}>
            {loading ? 'Registrando...' : 'Registrarse'}
          </button>
        </form>
        <p className={styles.registerLink}>¿Ya tienes cuenta? <a href="/">Inicia Sesión</a></p>
      </div>
    </div>
  );
}

export default Register;
