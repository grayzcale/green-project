import React, { useState } from "react";
import '../assets/CarbonCalculatorFootprint.css'; // Importing the CSS file

const CarbonCalculatorFootprint = () => {
  const [commuteHours, setCommuteHours] = useState(0);
  const [itemsPurchased, setItemsPurchased] = useState(0);
  const [energyConsumption, setEnergyConsumption] = useState(0);
  const [gasConsumption, setGasConsumption] = useState(0);
  const [electricUsage, setElectricUsage] = useState(0);
  const [points, setPoints] = useState(0);
  const [rating, setRating] = useState("");
  const [showCalculator, setShowCalculator] = useState(false);

  const calculatePoints = () => {
    const livingAirPollutionPoints = 50;

    // Commute (Public Transport)
    const commutePoints = Math.min(((commuteHours / 31) * 50), 100); // 31 hours = 50 points, 93 hours = 100 points

    // Shopping Consumption
    let shoppingPoints = 0;
    if (itemsPurchased <= 6) {
      shoppingPoints = 100;
    } else if (itemsPurchased <= 12) {
      shoppingPoints = 75;
    } else if (itemsPurchased <= 22) {
      shoppingPoints = 50;
    } else {
      shoppingPoints = 0;
    }

    // Energy Consumption (Household)
    let energyPoints = 0;
    if (energyConsumption <= 100) {
      energyPoints = 100;
    } else if (energyConsumption <= 200) {
      energyPoints = 75;
    } else if (energyConsumption <= 300) {
      energyPoints = 50;
    } else {
      energyPoints = 0;
    }

    // Electric Usage (kWh per month) scaled linearly
    let electricPoints = 0;
    if (electricUsage <= 200) {
      electricPoints = (electricUsage / 200) * 50;
    } else if (electricUsage <= 400) {
      electricPoints = 50 + ((electricUsage - 200) / 200) * 50;
    } else {
      electricPoints = 100;
    }

    // Gas Consumption (Negative points, capped at -50)
    const gasPoints = -Math.min((gasConsumption / 50) * 50, 50); // Negative points

    // Total Points
    const totalPoints =
      livingAirPollutionPoints +
      commutePoints +
      shoppingPoints +
      energyPoints +
      gasPoints +
      electricPoints;
    setPoints(totalPoints);

    // Carbon Emission Rating
    let emissionRating = "";
    if (totalPoints <= 100) {
      emissionRating = "Poor";
    } else if (totalPoints <= 200) {
      emissionRating = "Fair";
    } else if (totalPoints <= 300) {
      emissionRating = "Good";
    } else if (totalPoints <= 400) {
      emissionRating = "Very Good";
    } else {
      emissionRating = "Excellent";
    }
    setRating(emissionRating);
  };

  return (
    <div className="carbon-calculator">
      <h1>Carbon Calculator</h1>
      {!showCalculator && (
        <button
          className="start-button"
          onClick={() => setShowCalculator(true)}
        >
          Start Quiz
        </button>
      )}
      {showCalculator && (
        <div className="calculator-form">
          <div className="input-group">
            <label>Commute Hours (per month):</label>
            <input
              type="number"
              value={commuteHours}
              onChange={(e) => setCommuteHours(e.target.value)}
              className="input-field"
            />
          </div>
          <div className="input-group">
            <label>Items Purchased (per month):</label>
            <input
              type="number"
              value={itemsPurchased}
              onChange={(e) => setItemsPurchased(e.target.value)}
              className="input-field"
            />
          </div>
          <div className="input-group">
            <label>Energy Consumption (kWh per month):</label>
            <input
              type="number"
              value={energyConsumption}
              onChange={(e) => setEnergyConsumption(e.target.value)}
              className="input-field"
            />
          </div>
          <div className="input-group">
            <label>Gas Consumption (gallons per month):</label>
            <input
              type="number"
              value={gasConsumption}
              onChange={(e) => setGasConsumption(e.target.value)}
              className="input-field"
            />
          </div>
          <div className="input-group">
            <label>Electric Usage (kWh per month):</label>
            <input
              type="number"
              value={electricUsage}
              onChange={(e) => setElectricUsage(e.target.value)}
              className="input-field"
            />
          </div>
          <button
            className="calculate-button"
            onClick={calculatePoints}
          >
            Calculate Points
          </button>
          <h2>Total Points: {points}</h2>
          <h2>Carbon Emission Rating: {rating}</h2>
        </div>
      )}
      <div className="explanation">
        <h3>Scoring Explanation:</h3>
        <table className="chart">
          <thead>
            <tr>
              <th>Score Range</th>
              <th>Status</th>
              <th>Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0-100</td>
              <td>Poor</td>
              <td className="meaning">Your carbon footprint is high and needs significant reduction.</td>
            </tr>
            <tr>
              <td>101-200</td>
              <td>Fair</td>
              <td className="meaning">Your carbon footprint is moderate, but improvements are needed.</td>
            </tr>
            <tr>
              <td>201-300</td>
              <td>Good</td>
              <td className="meaning">Your carbon footprint is relatively low, but there's still room for improvement.</td>
            </tr>
            <tr>
              <td>301-400</td>
              <td>Very Good</td>
              <td className="meaning">Your carbon footprint is quite low, showing strong sustainability practices.</td>
            </tr>
            <tr>
              <td>401-500</td>
              <td>Excellent</td>
              <td className="meaning">Your carbon footprint is excellent, indicating top-notch sustainability efforts.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CarbonCalculatorFootprint;
