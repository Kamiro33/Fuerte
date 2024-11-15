import React, { useEffect, useState } from 'react';
import api from '../../Services/api'; // Ajusta la ruta según tu estructura

function ProgressStats() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await api.get('/progress/stats'); // Endpoint del backend
        setStats(response.data);
      } catch (error) {
        console.error('Error al obtener estadísticas de progreso:', error);
        // Usa valores predeterminados en caso de error
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
    return <p>Cargando estadísticas...</p>;
  }

  return (
    <div>
      <h2>Estadísticas de Progreso</h2>
      <ul>
        <li>Peso Total Levantado: {stats.totalWeight} kg</li>
        <li>Duración Total del Entrenamiento: {stats.totalDuration} minutos</li>
        <li>Promedio de Repeticiones: {stats.averageReps}</li>
      </ul>
    </div>
  );
}

export default ProgressStats;