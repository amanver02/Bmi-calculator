import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [weight, setWeight] = useState(80); // Initial weight
  const [height, setHeight] = useState(170); // Initial height in cm
  const [bmi, setBmi] = useState(null); // Stores the calculated BMI
  const [status, setStatus] = useState(''); // Stores the BMI status

  // Function to calculate BMI
  const calculateBMI = () => {
    const heightInMeters = height / 100; // Convert height to meters
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2); // BMI formula
    setBmi(bmiValue);

    // Determine BMI status
    if (bmiValue < 18.5) {
      setStatus('Underweight');
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      setStatus('Normal weight');
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      setStatus('Overweight');
    } else {
      setStatus('Obese');
    }
  };

  return (
    <main>
      <div className="calculator-box">
        <h1>BMI Calculator</h1>

        {/* Weight Input Section */}
        <div className="input-section">
          <p className="slider-output">Weight: {weight} Kg</p>
          <input
            className="input-slider"
            type="range"
            step="1"
            min="1"
            max="200"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
          />
        </div>

        {/* Height Input Section */}
        <div className="input-section">
          <p className="slider-output">Height: {height} cm</p>
          <input
            className="input-slider"
            type="range"
            step="1"
            min="50"
            max="250"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
          />
        </div>

        {/* Calculate Button */}
        <button onClick={calculateBMI} className="calculate-btn">
          Calculate BMI
        </button>

        {/* Display BMI Result */}
        {bmi && (
          <div className="result">
            <h2>Your BMI: {bmi}</h2>
            <p>Status: {status}</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default App;