import React, { useEffect, useContext } from 'react';
import { WorkoutContext } from '../context/WorkoutContext';
<<<<<<< HEAD
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
=======
import { toast } from 'react-toastify';
import { getExercises, createWorkout } from '../Services/api';
import ExerciseList from './Exercises/ExerciseList';
import ExerciseForm from './Exercises/ExerciseForm';

function ManageExercises() {
  const { workouts, setWorkouts } = useContext(WorkoutContext);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await getExercises();
        setWorkouts(response.data); // Asume que el backend retorna un array
      } catch (error) {
        toast.error('Error al cargar los ejercicios.');
        console.error(error);
      }
    };

    fetchExercises();
  }, [setWorkouts]);

  const handleAddExercise = async (exercise) => {
    console.log('Ejercicio recibido para agregar:', exercise);
    try {
      const response = await createWorkout(exercise);
      console.log('Respuesta del backend:', response.data);
      setWorkouts([...workouts, response.data]); // Agregar al estado local
      toast.success('Ejercicio agregado exitosamente.');
    } catch (error) {
      toast.error('Error al agregar el ejercicio.');
      console.error(error);
    }
  };

  const handleDeleteExercise = (id) => {
    const updatedWorkouts = workouts.filter((workout) => workout.id !== id);
    setWorkouts(updatedWorkouts);
    toast.info('Ejercicio eliminado.');
  };

  return (
    <div>
      <h2>Gestión de Ejercicios</h2>
      <ExerciseForm onSave={handleAddExercise} />
      <ExerciseList workouts={workouts} onDelete={handleDeleteExercise} />
>>>>>>> c2e85787b88fe35d36970004ce8fc0fd83413caf
    </div>
  );
}

export default ManageExercises;
