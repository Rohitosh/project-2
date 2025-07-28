import React, { useState } from 'react';
import './Dashboard.css';
import CalorieGraph from './CalorieGraph';
import Suggestions from './Suggestions';
import MotivationalQuote from './MotivationalQuote';
import TotalSummary from './TotalSummary';

const Dashboard = ({ isDark, toggleTheme }) => {
  const [foods, setFoods] = useState([]);
  const [food, setFood] = useState('');
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [fat, setFat] = useState('');
  const [carbs, setCarbs] = useState('');
  const [fiber, setFiber] = useState('');
  const [water, setWater] = useState('');

  const handleAddFood = () => {
    if (food && calories) {
      setFoods([
        ...foods,
        {
          food,
          calories: parseInt(calories),
          protein: parseFloat(protein || 0),
          fat: parseFloat(fat || 0),
          carbs: parseFloat(carbs || 0),
          fiber: parseFloat(fiber || 0),
          water: parseFloat(water || 0),
        },
      ]);
      setFood('');
      setCalories('');
      setProtein('');
      setFat('');
      setCarbs('');
      setFiber('');
      setWater('');
    }
  };

  const handleClear = () => {
    setFoods([]);
  };

  const totals = foods.reduce(
    (acc, item) => {
      acc.calories += item.calories || 0;
      acc.protein += item.protein || 0;
      acc.fat += item.fat || 0;
      acc.carbs += item.carbs || 0;
      acc.fiber += item.fiber || 0;
      acc.water += item.water || 0;
      return acc;
    },
    { calories: 0, protein: 0, fat: 0, carbs: 0, fiber: 0, water: 0 }
  );

  return (
    <div className={`dashboard-container ${isDark ? 'dark' : ''}`}>
      <header className="dashboard-header">
        <h1>🍏 NutriTrack Pro</h1>
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDark ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>

      <div className="dashboard-main">
        <div className="input-section">
          <h3>Add Food Intake</h3>
          <input
            type="text"
            placeholder="Food Item"
            value={food}
            onChange={(e) => setFood(e.target.value)}
          />
          <input
            type="number"
            placeholder="Calories (kcal)"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
          />
          <input
            type="number"
            placeholder="Protein (g)"
            value={protein}
            onChange={(e) => setProtein(e.target.value)}
          />
          <input
            type="number"
            placeholder="Fat (g)"
            value={fat}
            onChange={(e) => setFat(e.target.value)}
          />
          <input
            type="number"
            placeholder="Carbs (g)"
            value={carbs}
            onChange={(e) => setCarbs(e.target.value)}
          />
          <input
            type="number"
            placeholder="Fiber (g)"
            value={fiber}
            onChange={(e) => setFiber(e.target.value)}
          />
          <input
            type="number"
            placeholder="Water (ml)"
            value={water}
            onChange={(e) => setWater(e.target.value)}
          />
          <div className="button-group">
            <button onClick={handleAddFood}>➕ Add</button>
            <button onClick={handleClear} className="clear-btn">
              🗑 Clear All
            </button>
          </div>
        </div>

        <div className="calorie-summary">
          <h3>📋 Today's Intake</h3>
          <ul>
            {foods.map((item, index) => (
              <li key={index}>
                <strong>{item.food}</strong> – {item.calories} kcal, P: {item.protein}g, F: {item.fat}g, C: {item.carbs}g
              </li>
            ))}
          </ul>
        </div>

        <TotalSummary totals={totals} />
        <CalorieGraph data={foods} />
        <Suggestions goal="muscleGain" />
        <MotivationalQuote />
      </div>
    </div>
  );
};

export default Dashboard;
