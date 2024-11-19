import React, { useEffect, useState } from 'react';
import { getUserProgress } from '../../Services/api'; // Importación de la función para obtener el progreso del usuario
import styles from '../../styles/progressstats.module.css'; // Importamos el CSS module

function ProgressStats() {
  const [progress, setProgress] = useState([]); // Estado para almacenar los datos de progreso

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const response = await getUserProgress(); // Llamada a la API para obtener el progreso
        setProgress(response.data); // Actualizamos el estado con los datos recibidos
      } catch (error) {
        console.error('Error al obtener el progreso del usuario:', error);
      }
    };

    fetchProgress(); // Llamada para obtener el progreso al montar el componente
  }, []); // El efecto solo se ejecuta una vez, cuando el componente se monta

  // Mostrar un mensaje mientras se cargan los datos
  if (!progress.length) {
    return <p className={styles.loadingText}>Cargando estadísticas...</p>; // Usamos el CSS module aquí
  }

  return (
    <div className={styles.statsContainer}>  {/* Usamos el CSS module aquí */}
      <h2>Estadísticas de Progreso</h2>
      <ul className={styles.statsList}>
        {progress.map((entry, index) => (
          <li key={index} className={styles.statItem}>
            Fecha: {entry.date}, Peso Levantado: {entry.weightLifted} kg, Reps: {entry.reps}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProgressStats;
