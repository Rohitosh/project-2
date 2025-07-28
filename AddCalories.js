// src/components/AddCalories.js
import React, { useState } from 'react';
import './AddCalories.css';

const AddCalories = ({ onAdd, dailyTotals }) => {
  const [food, setFood] = useState('');
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [fat, setFat] = useState('');
  const [carbs, setCarbs] = useState('');
  const [fiber, setFiber] = useState('');
  const [water, setWater] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const entry = {
      food,
      calories: Number(calories),
      protein: Number(protein),
      fat: Number(fat),
      carbs: Number(carbs),
      fiber: Number(fiber),
      water: Number(water),
    };
    onAdd(entry);
    setFood('');
    setCalories('');
    setProtein('');
    setFat('');
    setCarbs('');
    setFiber('');
    setWater('');
  };

  const renderProgress = (value, max, label) => {
    const percent = Math.min((value / max) * 100, 100);
    return (
      <div className="progress-item">
        <label>{label}: {value}/{max}</label>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${percent}%` }}></div>
        </div>
      </div>
    );
  };

  return (
    <div className="add-calories">
      <h3>Add Food Intake 🍎</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Food Name" value={food} onChange={(e) => setFood(e.target.value)} required />
        <input type="number" placeholder="Calories (kcal)" value={calories} onChange={(e) => setCalories(e.target.value)} required />
        <input type="number" placeholder="Protein (g)" value={protein} onChange={(e) => setProtein(e.target.value)} />
        <input type="number" placeholder="Fat (g)" value={fat} onChange={(e) => setFat(e.target.value)} />
        <input type="number" placeholder="Carbs (g)" value={carbs} onChange={(e) => setCarbs(e.target.value)} />
        <input type="number" placeholder="Fiber (g)" value={fiber} onChange={(e) => setFiber(e.target.value)} />
        <input type="number" placeholder="Water (ml)" value={water} onChange={(e) => setWater(e.target.value)} />
        <button type="submit">Add</button>
      </form>

      <div className="daily-summary">
        <h4>Today's Intake Summary</h4>
        {renderProgress(dailyTotals.calories, 2500, 'Calories')}
        {renderProgress(dailyTotals.protein, 150, 'Protein (g)')}
        {renderProgress(dailyTotals.fat, 70, 'Fat (g)')}
        {renderProgress(dailyTotals.carbs, 300, 'Carbs (g)')}
        {renderProgress(dailyTotals.fiber, 30, 'Fiber (g)')}
        {renderProgress(dailyTotals.water, 3000, 'Water (ml)')}
      </div>
    </div>
  );
};

export default AddCalories;
