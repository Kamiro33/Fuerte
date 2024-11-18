import React, { useEffect, useState } from 'react';
import api from '../../Services/api'; // Ajusta la ruta según tu estructura
import styles from '../../styles/progressstats.module.css'; // Importamos el CSS module

function ProgressStats() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await api.get('/progress/stats'); // Endpoint del backend
        setStats(response.data);
      } catch (error) {
        console.error('Error al obtener estadísticas de progreso:', error);
        setStats({
          totalWeight: 450,
          totalDuration: 120,
          averageReps: 12,
        });
      }
    };

    fetchStats();
  }, []);

  if (!stats) {
    return <p className={styles.loadingText}>Cargando estadísticas...</p>;  // Usamos el CSS module aquí
  }

  return (
    <div className={styles.statsContainer}>  {/* Usamos el CSS module aquí */}
      <h2>Estadísticas de Progreso</h2>
      <ul className={styles.statsList}>
        <li className={styles.statItem}>Peso Total Levantado: {stats.totalWeight} kg</li>
        <li className={styles.statItem}>Duración Total del Entrenamiento: {stats.totalDuration} minutos</li>
        <li className={styles.statItem}>Promedio de Repeticiones: {stats.averageReps}</li>
      </ul>
    </div>
  );
}

export default ProgressStats;
