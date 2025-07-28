import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const CalorieGraph = ({ data }) => {
  const labels = data.map((item, index) => item.food || `Item ${index + 1}`);
  const calorieData = data.map(item => parseInt(item.calories));

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Calories Consumed',
        data: calorieData,
        fill: false,
        borderColor: '#00c9a7',
        backgroundColor: '#00c9a7',
        tension: 0.3,
        pointBackgroundColor: '#00c9a7',
        pointBorderColor: '#fff',
        pointRadius: 5,
        pointHoverRadius: 7
      }
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#333',
          font: {
            size: 14,
            family: 'Poppins'
          }
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#555',
          font: {
            family: 'Poppins'
          }
        },
        grid: {
          display: false,
        }
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: '#555',
          font: {
            family: 'Poppins'
          }
        },
        grid: {
          color: '#eee'
        }
      },
    },
  };

  return (
    <div className="graph-container">
      <h3>📈 Live Calorie Intake</h3>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default CalorieGraph;
