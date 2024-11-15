import React, { useState } from 'react';

function ExerciseLibrary({ onSelectExercise }) {
  // Lista de ejercicios predefinidos
  const exercises = [
    { id: 1, name: 'Sentadillas', type: 'fuerza' },
    { id: 2, name: 'Press de banca', type: 'fuerza' },
    { id: 3, name: 'Correr', type: 'cardio' },
    { id: 4, name: 'Flexiones', type: 'fuerza' },
    { id: 5, name: 'Bicicleta', type: 'cardio' }
  ];

  return (
    <div>
      <h2>Biblioteca de Ejercicios</h2>
      <ul>
        {exercises.map((exercise) => (
          <li key={exercise.id} onClick={() => onSelectExercise(exercise)}>
            {exercise.name} ({exercise.type})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExerciseLibrary;