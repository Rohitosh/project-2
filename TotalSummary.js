import React from 'react';
import './TotalSummary.css';

const ProgressBar = ({ label, value, goal }) => {
  const percentage = Math.min((value / goal) * 100, 100);
  return (
    <div className="summary-bar">
      <div className="summary-label">{label}: {value}/{goal}</div>
      <div className="progress-wrapper">
        <div className="progress-fill" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
};

const TotalSummary = ({ totals }) => {
  return (
    <div className="total-summary">
      <h3>Today's Summary 📊</h3>
      <ProgressBar label="Calories" value={totals.calories} goal={2500} />
      <ProgressBar label="Protein (g)" value={totals.protein} goal={150} />
      <ProgressBar label="Fat (g)" value={totals.fat} goal={70} />
      <ProgressBar label="Carbs (g)" value={totals.carbs} goal={300} />
      <ProgressBar label="Fiber (g)" value={totals.fiber} goal={30} />
      <ProgressBar label="Water (ml)" value={totals.water} goal={3000} />
    </div>
  );
};

export default TotalSummary;
