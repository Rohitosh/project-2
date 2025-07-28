import React from 'react';

const DashboardContent = () => {
  const totalCalories = 1850;
  const avgCalories = (totalCalories / 7).toFixed(2);

  return (
    <div className="dashboard">
      <h2>🍽 User Dashboard</h2>
      <p><strong>Total Calories Consumed:</strong> {totalCalories} kcal</p>
      <p><strong>Average Weekly Intake:</strong> {avgCalories} kcal</p>
    </div>
  );
};

export default DashboardContent;
