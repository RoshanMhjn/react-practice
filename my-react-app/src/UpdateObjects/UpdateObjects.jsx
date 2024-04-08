import React, { useState } from "react";

const UpdateObjects = () => {
  const [car, setCar] = useState({
    year: 2024,
    make: "Tesla",
    model: "Model X",
  });

  const handleYearChange = (e) => {
    setCar((c) => ({ ...c, year: e.target.value }));
  };
  const handleMakeChange = (e) => {
    setCar((c) => ({ ...c, make: e.target.value }));
  };
  const handleModelChange = (e) => {
    setCar((c) => ({ ...c, model: e.target.value }));
  };

  return (
    <div>
      <p>
        Your favourite car is {car.year} {car.make} {car.model} <br />
        <input type="number" value={car.year} onChange={handleYearChange} />
        <input type="text" value={car.make} onChange={handleMakeChange} />
        <input type="text" value={car.model} onChange={handleModelChange} />
      </p>
    </div>
  );
};

export default UpdateObjects;
