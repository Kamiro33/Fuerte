import React from 'react';
import AppRoutes from './routes';
import { WorkoutProvider } from './context/WorkoutContext';  // Importamos el proveedor de contexto

function App() {
  return (
    <WorkoutProvider>
      <AppRoutes />
    </WorkoutProvider>
  );
}

export default App;
