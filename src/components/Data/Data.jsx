import React from "react";
import "./Data.css"; // Import your custom CSS for styling

function Data({ data }) {
  return (
    <div className="data-container">
      <h2>Dataset</h2>
      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              {/* Dynamically generate table headers from the keys of the first JSON object */}
              {data.length > 0 &&
                Object.keys(data[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
            </tr>
          </thead>
          <tbody>
            {/* Loop through data to populate table rows */}
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {Object.values(row).map((value, colIndex) => (
                  <td key={colIndex}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Data;
