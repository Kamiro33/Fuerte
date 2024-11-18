import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import api from '../../Services/api'; // Ajusta la ruta según tu estructura
import styles from '../../styles/progressstats.module.css'; // Importamos el CSS module
=======
import { getUserProgress } from '../../Services/api';
>>>>>>> c2e85787b88fe35d36970004ce8fc0fd83413caf

function ProgressStats() {
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const response = await getUserProgress();
        setProgress(response.data);
      } catch (error) {
<<<<<<< HEAD
        console.error('Error al obtener estadísticas de progreso:', error);
        setStats({
          totalWeight: 450,
          totalDuration: 120,
          averageReps: 12,
        });
=======
        console.error('Error al obtener el progreso del usuario:', error);
>>>>>>> c2e85787b88fe35d36970004ce8fc0fd83413caf
      }
    };

    fetchProgress();
  }, []);

<<<<<<< HEAD
  if (!stats) {
    return <p className={styles.loadingText}>Cargando estadísticas...</p>;  // Usamos el CSS module aquí
  }

=======
>>>>>>> c2e85787b88fe35d36970004ce8fc0fd83413caf
  return (
    <div className={styles.statsContainer}>  {/* Usamos el CSS module aquí */}
      <h2>Estadísticas de Progreso</h2>
<<<<<<< HEAD
      <ul className={styles.statsList}>
        <li className={styles.statItem}>Peso Total Levantado: {stats.totalWeight} kg</li>
        <li className={styles.statItem}>Duración Total del Entrenamiento: {stats.totalDuration} minutos</li>
        <li className={styles.statItem}>Promedio de Repeticiones: {stats.averageReps}</li>
=======
      <ul>
        {progress.map((entry, index) => (
          <li key={index}>
            Fecha: {entry.date}, Peso Levantado: {entry.weightLifted}, Reps: {entry.reps}
          </li>
        ))}
>>>>>>> c2e85787b88fe35d36970004ce8fc0fd83413caf
      </ul>
    </div>
  );
}

export default ProgressStats;
