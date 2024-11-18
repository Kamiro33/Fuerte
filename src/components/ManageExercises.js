import React, { useEffect, useContext, useState } from 'react';
import { WorkoutContext } from '../context/WorkoutContext';
import { toast } from 'react-toastify';
import { getExercises, createWorkout } from '../Services/api';
import ExerciseList from './Exercises/ExerciseList';
import ExerciseForm from './Exercises/ExerciseForm';
import 'react-toastify/dist/ReactToastify.css'; // Asegúrate de importar los estilos CSS

function ManageExercises() {
  const { workouts, setWorkouts } = useContext(WorkoutContext); // Obtener el estado y setter del contexto
  const [message, setMessage] = useState(''); // Mensajes de éxito o error

  // Cargar los ejercicios al montar el componente
  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await getExercises(); // Obtener ejercicios desde la API
        setWorkouts(response.data); // Asignar los ejercicios al estado global
      } catch (error) {
        toast.error('Error al cargar los ejercicios.');
        console.error(error);
      }
    };

    fetchExercises();
  }, [setWorkouts]);

  // Manejo de agregar un ejercicio
  const handleAddExercise = async (exercise) => {
    console.log('Ejercicio recibido para agregar:', exercise);
    try {
      const response = await createWorkout(exercise); // Enviar el nuevo ejercicio a la API
      setWorkouts([...workouts, response.data]); // Actualizar el estado local con el nuevo ejercicio
      toast.success('Ejercicio agregado exitosamente.');
    } catch (error) {
      toast.error('Error al agregar el ejercicio.');
      console.error(error);
    }
  };

  // Manejo de eliminar un ejercicio
  const handleDeleteExercise = (id) => {
    const updatedWorkouts = workouts.filter((workout) => workout.id !== id); // Filtrar el ejercicio eliminado
    setWorkouts(updatedWorkouts); // Actualizar el estado local
    toast.info('Ejercicio eliminado.');
  };

  return (
    <div>
      <h2>Gestión de Ejercicios</h2>
      <ExerciseForm onSave={handleAddExercise} /> {/* Formulario para agregar ejercicios */}
      <ExerciseList workouts={workouts} onDelete={handleDeleteExercise} /> {/* Lista de ejercicios */}
    </div>
  );
}

export default ManageExercises;
