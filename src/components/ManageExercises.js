import React, { useContext, useState } from 'react';
import { WorkoutContext } from '../context/WorkoutContext';
import styles from '../styles/manageexercise.module.css'; // Importamos el CSS module

function ManageExercises() {
  const { workouts, setWorkouts } = useContext(WorkoutContext);
  const [exerciseName, setExerciseName] = useState('');
  const [exerciseType, setExerciseType] = useState('fuerza');
  const [message, setMessage] = useState('');

  const handleAddExercise = () => {
    if (!exerciseName) {
      alert('Por favor, ingresa un nombre para el ejercicio.');
      return;
    }

    const newExercise = { id: Math.random(), name: exerciseName, type: exerciseType };
    setWorkouts([...workouts, newExercise]);
    setExerciseName('');
    setExerciseType('fuerza');
    setMessage('Ejercicio registrado exitosamente.');
  };

  const handleDeleteExercise = (id) => {
    setWorkouts(workouts.filter((workout) => workout.id !== id));
    setMessage('Ejercicio eliminado exitosamente.');
  };

  return (
    <div className={styles['manage-exercises']}>
      <h2 className={styles.title}>Gestión de Ejercicios</h2>
      <label>Nombre del Ejercicio:</label>
      <input
        type="text"
        className={styles.inputField}
        value={exerciseName}
        onChange={(e) => setExerciseName(e.target.value)}
      />
      <label>Tipo de Ejercicio:</label>
      <select
        className={styles.inputField}
        value={exerciseType}
        onChange={(e) => setExerciseType(e.target.value)}
      >
        <option value="fuerza">Fuerza</option>
        <option value="cardio">Cardio</option>
      </select>
      <button
        className={styles.button}
        onClick={handleAddExercise}
        id="add-exercise-button"
      >
        Agregar Ejercicio
      </button>
      <h3>Lista de Ejercicios</h3>
      <ul>
        {workouts.map((workout) => (
          <li key={workout.id} className={styles['exercise-item']}>
            <span className={styles['exercise-name']}>
              {workout.name} ({workout.type})
            </span>
            <button
              className={styles.button}
              onClick={() => handleDeleteExercise(workout.id)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
}

export default ManageExercises;
