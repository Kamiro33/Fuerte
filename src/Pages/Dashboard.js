import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ManageExercises from '../components/ManageExercises';
import PlanWorkout from '../components/Workouts/PlanWorkout';
import ProgressChart from '../components//Progress/ProgressChart'; // Importamos ProgressChart
import ProgressStats from '../components/Progress/ProgressStats';
import api from '../Services/api'; // Para datos del backend o simulaciones

function Dashboard() {
  const navigate = useNavigate();
  const [roles, setRoles] = useState([]);
  const [progressData, setProgressData] = useState([]); // Datos de progreso para el gráfico

  // Obtener roles del usuario
  useEffect(() => {
    const storedRoles = JSON.parse(localStorage.getItem('roles'));
    console.log('Roles obtenidos:', storedRoles); // Para depuración
    if (storedRoles) {
      setRoles(storedRoles);
    }
  }, []);

  // Obtener datos de progreso
  useEffect(() => {
    const fetchProgressData = async () => {
      try {
        // Simular o cargar datos del backend
        const response = await api.get('/progress');
        setProgressData(response.data); // Datos reales del backend
      } catch (error) {
        console.error('Error al obtener los datos de progreso:', error);

        // Datos simulados
        setProgressData([
          { date: '2024-11-10', weight: 1, duration: 2 },
          { date: '2024-11-11', weight: 3, duration: 4 },
          { date: '2024-11-12', weight: 6, duration: 5 },
        ]);
      }
    };

    fetchProgressData();
  }, []);

  // Manejar el cierre de sesión
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('roles');
    navigate('/');
  };

  return (
    <div>
      <h1>Bienvenido al Dashboard</h1>

      {/* Mostrar contenido basado en los roles */}
      {roles.includes('ROLE_COACH') && (
        <div>
          <h2>Panel de Entrenador</h2>
          <p>Puedes ver y gestionar el progreso de tus usuarios.</p>
          <PlanWorkout /> {/* Componente para planificar rutinas */}
        </div>
      )}

      {roles.includes('ROLE_USER') && (
          <div>
          <h2>Panel de Usuario</h2>
          <p>Puedes ver tu propio progreso y gestionar tus entrenamientos.</p>
          <ManageExercises />
          <ProgressChart data={progressData} />
          <ProgressStats /> {/* Agregamos ProgressStats */}
        </div>
      )}

      {!roles.length && (
        <p>No tienes roles asignados. Por favor, verifica tu cuenta.</p>
      )}

      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
}

export default Dashboard;