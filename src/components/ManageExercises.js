import React, { useContext, useState } from 'react';
import { WorkoutContext } from '../context/WorkoutContext';

function ManageExercises() {
  const { workouts, setWorkouts } = useContext(WorkoutContext); // Acceso al estado global de ejercicios
  const [exerciseName, setExerciseName] = useState(''); // Nombre del ejercicio
  const [exerciseType, setExerciseType] = useState('fuerza'); // Tipo de ejercicio ('fuerza' o 'cardio')
  const [message, setMessage] = useState(''); // Mensajes para el usuario

  // Función para agregar un nuevo ejercicio
  const handleAddExercise = () => {
    if (!exerciseName) {
      alert('Por favor, ingresa un nombre para el ejercicio.');
      return;
    }

    const newExercise = { id: Math.random(), name: exerciseName, type: exerciseType }; // Generar un ID temporal
    setWorkouts([...workouts, newExercise]); // Actualizar la lista de ejercicios globalmente
    setExerciseName(''); // Limpia el formulario
    setExerciseType('fuerza');
    setMessage('Ejercicio registrado exitosamente.');
  };

  // Función para eliminar un ejercicio
  const handleDeleteExercise = (id) => {
    setWorkouts(workouts.filter((workout) => workout.id !== id)); // Filtrar ejercicios por ID
    setMessage('Ejercicio eliminado exitosamente.');
  };

  return (
    <div>
      <h2>Gestión de Ejercicios</h2>

      {/* Formulario para agregar ejercicios */}
      <label>Nombre del Ejercicio:</label>
      <input
        type="text"
        value={exerciseName}
        onChange={(e) => setExerciseName(e.target.value)}
      />
      <label>Tipo de Ejercicio:</label>
      <select
        value={exerciseType}
        onChange={(e) => setExerciseType(e.target.value)}
      >
        <option value="fuerza">Fuerza</option>
        <option value="cardio">Cardio</option>
      </select>
      <button onClick={handleAddExercise}>Agregar Ejercicio</button>

      {/* Lista de ejercicios */}
      <h3>Lista de Ejercicios</h3>
      <ul>
        {workouts.map((workout) => (
          <li key={workout.id}>
            {workout.name} ({workout.type})
            <button
              style={{
                marginLeft: '10px',
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
              onClick={() => handleDeleteExercise(workout.id)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>

      {/* Mensajes de éxito o error */}
      {message && <p style={{ color: 'green' }}>{message}</p>}
    </div>
  );
}

export default ManageExercises;