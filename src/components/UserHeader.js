import React from 'react';
import styles from '../styles/header.module.css'; // Archivo CSS

function UserHeader() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Panel de Usuario</h1>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li><a href="/dashboard" className={styles.navLink}>Gestionar Ejercicios</a></li>
          <li><a href="/progress" className={styles.navLink}>Mi Progreso</a></li>
          <li><a href="/settings" className={styles.navLink}>Cerrar Sesión</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default UserHeader;
