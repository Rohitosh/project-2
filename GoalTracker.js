// src/components/GoalTracker.js
import React, { useState } from 'react';

const GoalTracker = () => {
  const [goal, setGoal] = useState('');
  const [status, setStatus] = useState('');

  const handleSetGoal = () => {
    if (goal.trim()) {
      setStatus(`🎯 Goal set: ${goal}`);
      setGoal('');
    }
  };

  return (
    <div className="goal-tracker">
      <h2>🎯 Fitness Goal Tracker</h2>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Enter your fitness goal (e.g., Lose 5kg)"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleSetGoal}>
        Set Goal
      </button>
      {status && <p className="mt-2 text-success">{status}</p>}
    </div>
  );
};

export default GoalTracker;
