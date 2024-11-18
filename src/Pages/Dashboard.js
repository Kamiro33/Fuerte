import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TrainerHeader from '../components/TrainerHeader'; // Header para entrenador
import UserHeader from '../components/UserHeader'; // Header para usuario
import ManageExercises from '../components/ManageExercises';
import PlanWorkout from '../components/Workouts/PlanWorkout';
import ProgressChart from '../components/Progress/ProgressChart';
import ProgressStats from '../components/Progress/ProgressStats';
import api from '../Services/api';
<<<<<<< HEAD
import styles from '../styles/dashboard.module.css';

function Dashboard() {
  const navigate = useNavigate();
  const [roles, setRoles] = useState([]);
=======

function Dashboard() {
  const navigate = useNavigate();
  const [roles, setRoles] = useState([]);                     
>>>>>>> c2e85787b88fe35d36970004ce8fc0fd83413caf
  const [progressData, setProgressData] = useState([]);

  useEffect(() => {
    const storedRoles = JSON.parse(localStorage.getItem('roles'));
    if (storedRoles) {
      setRoles(storedRoles);
    }
  }, []);

  useEffect(() => {
    const fetchProgressData = async () => {
      try {
        const response = await api.get('/progress');
        setProgressData(response.data);
      } catch (error) {
        console.error('Error al obtener los datos de progreso:', error);
        setProgressData([
          { date: '2024-11-10', weight: 1, duration: 2 },
          { date: '2024-11-11', weight: 3, duration: 4 },
          { date: '2024-11-12', weight: 6, duration: 5 },
        ]);
      }
    };

    fetchProgressData();
  }, []);

  const handleLogout = () => {
    if (window.confirm('¿Estás seguro de que deseas cerrar sesión?')) {
      localStorage.removeItem('token');
      localStorage.removeItem('roles');
      navigate('/');
    }
  };

  return (
<<<<<<< HEAD
    <div className={styles.dashboardContainer}>
      {/* Renderiza un header dependiendo del rol */}
      {roles.includes('ROLE_COACH') && <TrainerHeader />}
      {roles.includes('ROLE_USER') && <UserHeader />}

      <h1 className={styles.dashboardTitle}>Bienvenido al Dashboard</h1>

      {roles.includes('ROLE_COACH') && (
        <div className={styles.dashboardPanel}>
          <h2 className={styles.dashboardSectionTitle}>Panel de Entrenador</h2>
          <p className={styles.dashboardParagraph}>Puedes ver y gestionar el progreso de tus usuarios.</p>
=======
    <div>
      <h1>Bienvenido al Dashboard</h1>
      {roles.includes('ROLE_COACH') && (
        <div>
          <h2>Panel de Entrenador</h2>
          <p>Puedes ver y gestionar el progreso de tus usuarios.</p>
>>>>>>> c2e85787b88fe35d36970004ce8fc0fd83413caf
          <PlanWorkout />
        </div>
      )}
      {roles.includes('ROLE_USER') && (
<<<<<<< HEAD
        <div className={styles.dashboardPanel}>
          <h2 className={styles.dashboardSectionTitle}>Panel de Usuario</h2>
          <p className={styles.dashboardParagraph}>Puedes ver tu propio progreso y gestionar tus entrenamientos.</p>
=======
        <div>
          <h2>Panel de Usuario</h2>
          <p>Puedes ver tu propio progreso y gestionar tus entrenamientos.</p>
>>>>>>> c2e85787b88fe35d36970004ce8fc0fd83413caf
          <ManageExercises />
          <ProgressChart data={progressData} />
          <ProgressStats />
        </div>
      )}
      {!roles.length && (
        <p>No tienes roles asignados. Por favor, verifica tu cuenta.</p>
      )}
<<<<<<< HEAD

      <button className={styles.dashboardButton} onClick={handleLogout}>Cerrar Sesión</button>
=======
      <button onClick={handleLogout}>Cerrar Sesión</button>
>>>>>>> c2e85787b88fe35d36970004ce8fc0fd83413caf
    </div>
  );
}

export default Dashboard;