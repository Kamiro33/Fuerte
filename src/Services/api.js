import axios from 'axios';

// URL base del backend (ajusta esta URL si es necesario)
const api = axios.create({
  baseURL: 'http://localhost:8080/api/v1', // Cambia al puerto correcto de tu backend
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para agregar el token JWT a las solicitudes
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Función para obtener los ejercicios desde el backend
export const getExercises = () => {
  return api.get('/Exercises');
};

// Función para registrar un entrenamiento en el backend
export const createWorkout = (workoutData) => {
  return api.post('/Workouts', workoutData);
};

// Función para obtener el progreso del usuario
export const getUserProgress = () => {
  return api.get('/Workouts/Progress');
};

export default api;