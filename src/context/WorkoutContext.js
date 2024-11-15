import React, { createContext, useState, useEffect } from 'react';
//import api from '../Services/api';  // Importamos Axios para la conexión al backend

export const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState([
    // Datos simulados para pruebas
    { id: 1, name: 'Sentadillas', type: 'fuerza' },
    { id: 2, name: 'Correr', type: 'cardio' },
    { id: 3, name: 'Press de banca', type: 'fuerza' }
  ]); // Ejercicios disponibles
  const [schedule, setSchedule] = useState({
    lunes: [],
    martes: [],
    miercoles: [],
    jueves: [],
    viernes: [],
    sabado: [],
    domingo: []
  });

  // Función para cargar ejercicios simulados (puedes sustituirla por un GET al backend más tarde)
  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        // Simula un retraso en la carga de datos (elimina esto cuando tengas backend)
        setTimeout(() => {
          console.log('Datos simulados cargados');
        }, 500);
      } catch (error) {
        console.error('Error al cargar los ejercicios:', error);
      }
    };
    fetchWorkouts();
  }, []);

  return (
    <WorkoutContext.Provider value={{ workouts, setWorkouts, schedule, setSchedule }}>
      {children}
    </WorkoutContext.Provider>
  );
};