import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from '../../styles/progresschart.module.css'; // Importamos el CSS module

function ProgressChart({ data }) {
  console.log('Datos recibidos para el gráfico:', data); // Depuración

  return (
    <div className={styles.chartContainer}>  {/* Usamos el CSS module aquí */}
      <h2 className={styles.chartTitle}>Progreso del Usuario</h2>  {/* Usamos el CSS module aquí */}
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="weight" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="duration" stroke="#ffc658" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ProgressChart;
