import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import ManageExercises from './components/ManageExercises';
import PlanWorkout from './components/Workouts/PlanWorkout';
import UserProgress from './Pages/UserProgress';
import PrivateRoute from './components/PrivateRoute';
import ProgressChart from './components/Progress/ProgressChart';
import ProgressStats from './components/Progress/ProgressStats'; // Importamos ProgressStats

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />

        {/* Ruta para probar ProgressChart (opcional, puede eliminarse) */}
        <Route path="/ProgressChart" element={<ProgressChart />} />

        {/* Ruta protegida por PrivateRoute */}
        <Route
          path="/Dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        {/* Rutas adicionales */}
        <Route
          path="/ManageExercises"
          element={
            <PrivateRoute>
              <ManageExercises />
            </PrivateRoute>
          }
        />

        <Route
          path="/PlanWorkout"
          element={
            <PrivateRoute>
              <PlanWorkout />
            </PrivateRoute>
          }
        />

        <Route
          path="/Progress"
          element={
            <PrivateRoute>
              <UserProgress />
            </PrivateRoute>
          }
        />

        {/* Ruta para ProgressStats */}
        <Route
          path="/ProgressStats"
          element={
            <PrivateRoute>
              <ProgressStats />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default AppRoutes;