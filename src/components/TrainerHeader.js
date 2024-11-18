import React from 'react';
import styles from '../styles/header.module.css'; // Archivo CSS

function TrainerHeader() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Panel de Entrenador</h1>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li><a href="/dashboard" className={styles.navLink}>Planificar Rutinas</a></li>
          <li><a href="/user-progress" className={styles.navLink}>Progreso de Usuarios</a></li>
          <li><a href="/settings" className={styles.navLink}>Cerrar Sesión</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default TrainerHeader;
