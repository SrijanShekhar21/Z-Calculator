import React, { useState } from "react";
import "./Calculator.css";

function Calculator({ data }) {
  const [selectedComponent, setSelectedComponent] = useState(null); // Selected substance
  const [temperature, setTemperature] = useState(""); // User input for T
  const [pressure, setPressure] = useState(""); // User input for P
  const [calculatedZ, setCalculatedZ] = useState(null); // Calculated Z value
  const [error, setError] = useState(null); // Error handling

  const R = 82.05; // Constant R in atm.cm3/g.mol.K

  const handleSelectChange = (e) => {
    const selected = data.find((item) => item.Component === e.target.value);
    setSelectedComponent(selected);
    setCalculatedZ(null); // Reset Z when a new substance is selected
    setError(null); // Clear errors
  };

  const convertPcToAtm = (PcMPa) => {
    return (PcMPa * 10) / (0.980665 * 1.03323);
  };

  const solveEquations = (T, P, Tc, PcMPa) => {
    const tolerance = 1e-6; // Convergence tolerance
    const maxIterations = 100; // Maximum iterations
    const constant = 0.0867; // Constant in the equations

    // Convert Pc from MPa to atm
    const PcAtm = convertPcToAtm(PcMPa);

    // Initial guesses for Z and h
    let Z = 1.0;
    let h = 0.1;

    for (let i = 0; i < maxIterations; i++) {
      // Calculate h using the second equation
      const newH = (constant * (P / PcAtm)) / (Z * (T / Tc));

      // Calculate Z using the first equation
      const newZ =
        1 / (1 - newH) - 4.9343 * Math.pow(Tc / T, 1.5) * (newH / (1 + newH));

      // Check for convergence
      if (Math.abs(newZ - Z) < tolerance && Math.abs(newH - h) < tolerance) {
        return newZ; // Converged value of Z
      }

      // Update Z and h for the next iteration
      Z = newZ;
      h = newH;
    }

    throw new Error("Failed to converge after maximum iterations");
  };

  const calculateZ = () => {
    if (!temperature || !pressure || !selectedComponent) {
      setError("Please select a substance and enter valid T and P values.");
      return;
    }

    const T = parseFloat(temperature);
    const P = parseFloat(pressure);
    const Tc = selectedComponent["Tc (K)"];
    const PcMPa = selectedComponent["Pc (Mpa)"]; // Get Pc in MPa

    try {
      const Z = solveEquations(T, P, Tc, PcMPa);
      setCalculatedZ(Z.toFixed(5)); // Limit Z to 5 decimal places
      setError(null); // Clear any previous errors
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="calculator-container">
      <h2 className="calculator-title">Z Calculator</h2>

      {/* Dropdown to select the substance */}
      <label htmlFor="substance" className="dropdown-label">
        Select a Substance:
      </label>
      <select
        id="substance"
        onChange={handleSelectChange}
        className="dropdown"
        value={selectedComponent ? selectedComponent.Component : ""}
      >
        <option value="">-- Select --</option>
        {data.map((item) => (
          <option key={item.Component} value={item.Component}>
            {item.Component}
          </option>
        ))}
      </select>

      {/* Display selected substance details */}
      {selectedComponent && (
        <div className="details-container">
          <h3>{selectedComponent.Component}</h3>
          <div className="details-grid">
            <p>
              <strong>
                P<sub>c</sub> (converted to atm):
              </strong>{" "}
              {convertPcToAtm(selectedComponent["Pc (Mpa)"]).toFixed(5)}
            </p>
            <p>
              <strong>
                T<sub>c</sub> (K):
              </strong>{" "}
              {selectedComponent["Tc (K)"]}
            </p>
            <p>
              <strong>R:</strong> {R} atm.cm<sup>3</sup>/g.mol.K
            </p>
          </div>

          {/* Inputs for user to set T and P */}
          <div className="input-container">
            <div className="input-group">
              <label htmlFor="temperature" className="input-label">
                Enter Temperature (T) in K:
              </label>
              <input
                type="number"
                id="temperature"
                value={temperature}
                onChange={(e) => setTemperature(e.target.value)}
                placeholder="Enter temperature"
                className="input-field"
              />
            </div>
            <div className="input-group">
              <label htmlFor="pressure" className="input-label">
                Enter Pressure (P) in atm:
              </label>
              <input
                type="number"
                id="pressure"
                value={pressure}
                onChange={(e) => setPressure(e.target.value)}
                placeholder="Enter pressure"
                className="input-field"
              />
            </div>
          </div>

          {/* Centered button to calculate Z */}
          <div className="button-container">
            <button onClick={calculateZ} className="calculate-button">
              Calculate Z
            </button>
          </div>

          {/* Display calculated Z */}
          {calculatedZ !== null && (
            <div className="result-container">
              <h4>Calculated Z:</h4>
              <p>{calculatedZ}</p>
            </div>
          )}

          {/* Display error messages */}
          {error && (
            <div className="error-container">
              <p>{error}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Calculator;
