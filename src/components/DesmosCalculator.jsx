import React, { useEffect, useRef } from "react";

const DesmosCalculator = () => {
  const calculatorRef = useRef(null);

  useEffect(() => {
    // Ensure the Desmos script is loaded
    const script = document.createElement("script");
    script.src =
      "https://www.desmos.com/api/v1.10/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6";
    script.async = true;
    script.onload = () => {
      // Initialize the Desmos calculator once the script is loaded
      const elt = calculatorRef.current;
      const calculator = Desmos.GraphingCalculator(elt);

      // Example: Set up a basic graph
      calculator.setExpression({ id: "graph1", latex: "y=x^2" });
    };

    document.body.appendChild(script);

    // Cleanup the calculator instance
    return () => {
      if (calculatorRef.current) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div ref={calculatorRef} style={{ width: "600px", height: "400px" }}></div>
  );
};

export default DesmosCalculator;
