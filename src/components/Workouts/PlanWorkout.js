import React, { useContext, useState } from 'react';
import { WorkoutContext } from '../../context/WorkoutContext';
import { toast } from 'react-toastify'; // Importación de toast
import 'react-toastify/dist/ReactToastify.css'; // Importación de estilos CSS
import styles from '../../styles/planworkout.module.css'; // Asegúrate de importar los estilos

function PlanWorkout() {
  const { schedule, setSchedule, workouts } = useContext(WorkoutContext); // Acceso al estado global
  const [selectedExercise, setSelectedExercise] = useState(null); // Ejercicio seleccionado
  const [message, setMessage] = useState(''); // Mensajes para el usuario

  console.log('Ejercicios disponibles:', workouts); // Depuración: Ver ejercicios

  // Función para guardar la rutina
  const handleSaveSchedule = async () => {
    try {
      console.log('Rutina guardada:', schedule);
      toast.success('Rutina guardada exitosamente.'); // Notificación de éxito
    } catch (error) {
      toast.error('Error al guardar la rutina.'); // Notificación de error
    }
  };

  // Función para agregar un ejercicio a un día específico
  const handleAddExerciseToDay = (day) => {
    if (!selectedExercise) {
      alert('Por favor selecciona un ejercicio primero.');
      return;
    }

    // Validar si el ejercicio ya existe en el día
    const alreadyExists = schedule[day].some((exercise) => exercise.id === selectedExercise.id);
    if (alreadyExists) {
      alert(`El ejercicio "${selectedExercise.name}" ya está asignado a ${day}.`);
      return;
    }

    setSchedule({
      ...schedule,
      [day]: [...schedule[day], selectedExercise],
    });
    setMessage(`Ejercicio añadido a ${day}.`);
    setSelectedExercise(null); // Limpia la selección
  };

  return (
    <div className={styles.planWorkoutContainer}>
      <h2 className={styles.planWorkoutTitle}>Planificación de Rutinas</h2>

      <h3 className={styles.planWorkoutSubtitle}>Seleccionar Ejercicio para Planificar</h3>
      <select
        value={selectedExercise?.id || ''}
        onChange={(e) => {
          const exercise = workouts.find((w) => w.id === parseInt(e.target.value));
          setSelectedExercise(exercise);
        }}
        className={styles.selectExercise}
      >
        <option value="">--Seleccionar--</option>
        {workouts.map((exercise) => (
          <option key={exercise.id} value={exercise.id}>
            {exercise.name} ({exercise.type})
          </option>
        ))}
      </select>

      <div className={styles.addExerciseButtons}>
        {['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'].map((day) => (
          <button key={day} onClick={() => handleAddExerciseToDay(day)}>
            Añadir a {day.charAt(0).toUpperCase() + day.slice(1)}
          </button>
        ))}
      </div>

      <h3 className={styles.planWorkoutSubtitle}>Rutina Semanal</h3>
      <div className={styles.scheduleContainer}>
        {Object.keys(schedule).map((day) => (
          <div key={day}>
            <h4>{day.charAt(0).toUpperCase() + day.slice(1)}</h4>
            <ul>
              {schedule[day].map((exercise, index) => (
                <li key={index}>{exercise.name} ({exercise.type})</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <button className={styles.saveButton} onClick={handleSaveSchedule}>Guardar Rutina</button>

      {message && <p className={message.includes('error') ? styles.messageError : styles.message}>{message}</p>}
    </div>
  );
}

export default PlanWorkout;

