import React from 'react';

const MotivationalQuote = () => {
  const quotes = [
    "💪 Don't limit your challenges, challenge your limits.",
    "🔥 The pain you feel today will be the strength you feel tomorrow.",
    "🏃‍♂️ Push yourself because no one else is going to do it for you.",
    "🥇 Success doesn’t come from what you do occasionally, it comes from what you do consistently."
  ];

  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div style={{ marginTop: '20px' }}>
      <h4>✨ Daily Motivation</h4>
      <p>{quote}</p>
    </div>
  );
};

export default MotivationalQuote;
