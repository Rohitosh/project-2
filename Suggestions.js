import React from 'react';

const Suggestions = ({ goal }) => {
  const suggestionList = {
    weightLoss: ['🥗 Salad Bowl', '🍵 Green Tea', '🍎 Fruits', '🐟 Grilled Fish'],
    muscleGain: ['🍗 Chicken Breast', '🥜 Peanut Butter', '🥚 Eggs', '🍌 Bananas'],
    maintenance: ['🍞 Whole Grains', '🥦 Veggies', '🍚 Rice', '🍖 Lean Meat'],
  };

  const tips = {
    weightLoss: '💡 Tip: Focus on calorie deficit & hydration!',
    muscleGain: '💡 Tip: Eat more protein and lift consistently.',
    maintenance: '💡 Tip: Maintain balance and stay active daily.',
  };

  return (
    <div>
      <h3>🍱 Suggested Foods for {goal}</h3>
      <ul>
        {suggestionList[goal]?.map((food, index) => (
          <li key={index}>{food}</li>
        ))}
      </ul>
      <p><strong>{tips[goal]}</strong></p>
    </div>
  );
};

export default Suggestions;
