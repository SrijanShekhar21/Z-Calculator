import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Calculator from "./components/Calculator/Calculator";
import Data from "./components/Data/Data";

const zdata = [
  {
    Component: "Hydrogen",
    MWt: 2.016,
    "Tc (K)": 33,
    "Pc (Mpa)": 1.29,
    "Accentric(w)": -0.216,
    "Tc (F)": -400.27,
    "Tc (C)": -240.15,
    "Tc (K)__1": 33,
    "Pc (atm)": 13.731,
  },
  {
    Component: "Methane",
    MWt: 16,
    "Tc (K)": 190.564,
    "Pc (Mpa)": 4.59,
    "Accentric(w)": 0.011,
    "Tc (F)": -116.655,
    "Tc (C)": -82.586,
    "Tc (K)__1": 190.564,
    "Pc (atm)": 46.3,
  },
  {
    Component: "Acetylene",
    MWt: 26.038,
    "Tc (K)": 308.32,
    "Pc (Mpa)": 6.15,
    "Accentric(w)": 0.188,
    "Tc (F)": 95.306,
    "Tc (C)": 35.17,
    "Tc (K)__1": 308.32,
    "Pc (atm)": 61.696,
  },
  {
    Component: "Ethylene",
    MWt: 28,
    "Tc (K)": 282.34,
    "Pc (Mpa)": 5.03,
    "Accentric(w)": 0.086,
    "Tc (F)": 48.542,
    "Tc (C)": 9.19,
    "Tc (K)__1": 282.34,
    "Pc (atm)": 50.642,
  },
  {
    Component: "Ethane",
    MWt: 30,
    "Tc (K)": 305.32,
    "Pc (Mpa)": 4.85,
    "Accentric(w)": 0.098,
    "Tc (F)": 89.906,
    "Tc (C)": 32.17,
    "Tc (K)__1": 305.32,
    "Pc (atm)": 48.866,
  },
  {
    Component: "Propylene",
    MWt: 42.08,
    "Tc (K)": 365.57,
    "Pc (Mpa)": 4.63,
    "Accentric(w)": 0.137,
    "Tc (F)": 198.356,
    "Tc (C)": 92.42,
    "Tc (K)__1": 365.57,
    "Pc (atm)": 46.694,
  },
  {
    Component: "Propane",
    MWt: 44,
    "Tc (K)": 369.83,
    "Pc (Mpa)": 4.21,
    "Accentric(w)": 0.149,
    "Tc (F)": 206.024,
    "Tc (C)": 96.68,
    "Tc (K)__1": 369.83,
    "Pc (atm)": 42.549,
  },
  {
    Component: "MAPD",
    MWt: 74.079,
    "Tc (K)": 506.55,
    "Pc (Mpa)": 4.69,
    "Accentric(w)": 0.326,
    "Tc (F)": 452.12,
    "Tc (C)": 233.4,
    "Tc (K)__1": 506.55,
    "Pc (atm)": 47.287,
  },
  {
    Component: "i-Butane",
    MWt: 58,
    "Tc (K)": 425.12,
    "Pc (Mpa)": 3.77,
    "Accentric(w)": 0.197,
    "Tc (F)": 305.546,
    "Tc (C)": 151.97,
    "Tc (K)__1": 425.12,
    "Pc (atm)": 38.207,
  },
  {
    Component: "n-Butane",
    MWt: 58,
    "Tc (K)": 425.12,
    "Pc (Mpa)": 3.77,
    "Accentric(w)": 0.197,
    "Tc (F)": 305.546,
    "Tc (C)": 151.97,
    "Tc (K)__1": 425.12,
    "Pc (atm)": 38.207,
  },
  {
    Component: "1-3 Butadiene",
    MWt: 54.012,
    "Tc (K)": 425.17,
    "Pc (Mpa)": 4.3,
    "Accentric(w)": 0.19,
    "Tc (F)": 305.636,
    "Tc (C)": 152.02,
    "Tc (K)__1": 425.17,
    "Pc (atm)": 43.438,
  },
  {
    Component: "1-Butene",
    MWt: 56.108,
    "Tc (K)": 419.95,
    "Pc (Mpa)": 4.04,
    "Accentric(w)": 0.19,
    "Tc (F)": 296.24,
    "Tc (C)": 146.8,
    "Tc (K)__1": 419.95,
    "Pc (atm)": 40.872,
  },
  {
    Component: "i-Pentane",
    MWt: 72,
    "Tc (K)": 469.7,
    "Pc (Mpa)": 3.36,
    "Accentric(w)": 0.251,
    "Tc (F)": 385.79,
    "Tc (C)": 196.55,
    "Tc (K)__1": 469.7,
    "Pc (atm)": 34.161,
  },
  {
    Component: "n-Pentane",
    MWt: 72,
    "Tc (K)": 469.7,
    "Pc (Mpa)": 3.36,
    "Accentric(w)": 0.251,
    "Tc (F)": 385.79,
    "Tc (C)": 196.55,
    "Tc (K)__1": 469.7,
    "Pc (atm)": 34.161,
  },
  {
    Component: "n-Hexane",
    MWt: 86,
    "Tc (K)": 507.6,
    "Pc (Mpa)": 3.04,
    "Accentric(w)": 0.304,
    "Tc (F)": 454.01,
    "Tc (C)": 234.45,
    "Tc (K)__1": 507.6,
    "Pc (atm)": 31.002,
  },
  {
    Component: "n-Heptane",
    MWt: 100,
    "Tc (K)": 540.2,
    "Pc (Mpa)": 2.72,
    "Accentric(w)": 0.346,
    "Tc (F)": 512.69,
    "Tc (C)": 267.05,
    "Tc (K)__1": 540.2,
    "Pc (atm)": 27.844,
  },
  {
    Component: "Benzene",
    MWt: 78.114,
    "Tc (K)": 562.16,
    "Pc (Mpa)": 4.88,
    "Accentric(w)": 0.209,
    "Tc (F)": 552.218,
    "Tc (C)": 289.01,
    "Tc (K)__1": 562.16,
    "Pc (atm)": 49.162,
  },
  {
    Component: "Toluene",
    MWt: 92.141,
    "Tc (K)": 591.8,
    "Pc (Mpa)": 4.1,
    "Accentric(w)": 0.262,
    "Tc (F)": 605.57,
    "Tc (C)": 318.65,
    "Tc (K)__1": 591.8,
    "Pc (atm)": 41.464,
  },
  {
    Component: "CO",
    MWt: 28.01,
    "Tc (K)": 132.92,
    "Pc (Mpa)": 3.49,
    "Accentric(w)": 0.048,
    "Tc (F)": -220.414,
    "Tc (C)": -140.23,
    "Tc (K)__1": 132.92,
    "Pc (atm)": 35.444,
  },
  {
    Component: "CO2",
    MWt: 44.01,
    "Tc (K)": 304.21,
    "Pc (Mpa)": 7.39,
    "Accentric(w)": 0.224,
    "Tc (F)": 87.908,
    "Tc (C)": 31.06,
    "Tc (K)__1": 304.21,
    "Pc (atm)": 73.933,
  },
  {
    Component: "Nitrogen",
    MWt: 28.014,
    "Tc (K)": 126.2,
    "Pc (Mpa)": 3.39,
    "Accentric(w)": 0.037,
    "Tc (F)": -232.51,
    "Tc (C)": -146.95,
    "Tc (K)__1": 126.2,
    "Pc (atm)": 34.457,
  },
  {
    Component: "Oxygen",
    MWt: 31.999,
    "Tc (K)": 154.58,
    "Pc (Mpa)": 5.02,
    "Accentric(w)": 0.02,
    "Tc (F)": -181.426,
    "Tc (C)": -118.57,
    "Tc (K)__1": 154.58,
    "Pc (atm)": 50.543,
  },
  {
    Component: "Water",
    MWt: 18.016,
    "Tc (K)": 647.13,
    "Pc (Mpa)": 21.94,
    "Accentric(w)": 0.343,
    "Tc (F)": 705.164,
    "Tc (C)": 373.98,
    "Tc (K)__1": 647.13,
    "Pc (atm)": 217.53,
  },
  {
    Component: "Air",
    MWt: 28.951,
    "Tc (K)": 132.45,
    "Pc (Mpa)": 3.79,
    "Accentric(w)": 0,
    "Tc (F)": -221.26,
    "Tc (C)": -140.7,
    "Tc (K)__1": 132.45,
    "Pc (atm)": 38.404,
  },
];

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/calculator" />} />
          <Route path="/calculator" element={<Calculator data={zdata} />} />
          <Route path="/data" element={<Data data={zdata} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
