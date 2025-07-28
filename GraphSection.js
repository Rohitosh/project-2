import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const GraphSection = ({ items }) => {
  const labels = items.map((item) => item.name);
  const quantities = items.map((item) => item.quantity);
  const calories = items.map((item) => +item.calories * item.quantity);

  const data = {
    labels,
    datasets: [
      {
        label: 'Calories',
        data: calories,
        backgroundColor: '#ff6384',
        borderRadius: 5,
      },
      {
        label: 'Quantity',
        data: quantities,
        backgroundColor: '#36a2eb',
        borderRadius: 5,
      }
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      tooltip: { enabled: true },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          precision: 0,
        },
      },
    },
  };

  return (
    <div className="graph-container">
      <h4 className="text-center">Nutrition Graph 📈</h4>
      <Bar data={data} options={options} />
    </div>
  );
};

export default GraphSection;
