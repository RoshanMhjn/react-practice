import React, { useState } from "react";

const ArrayOfObjects = () => {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [make, setCarMake] = useState("");
  const [model, setCarModel] = useState("");

  const handleAddCar = () => {
    const newCar = { carYear, make, model };

    setCars((c) => [...c, newCar]);

    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  };

  const handleRemoveCar = (index) => {
    setCars((c) => c.filter((_, i) => i !== index));
  };

  const handleYearChange = (e) => {
    setCarYear(e.target.value);
  };

  const handleMakeChange = (e) => {
    setCarMake(e.target.value);
  };

  const handleModelChange = (e) => {
    setCarModel(e.target.value);
  };

  return (
    <div>
      <h2>List of Car Objects</h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index} onClick={() => handleRemoveCar(index)}>
            {car.carYear} {car.make} {car.model}
          </li>
        ))}
      </ul>

      <input
        type="number"
        value={carYear}
        onChange={handleYearChange}
        placeholder="Enter Car Year"
      />

      <br />

      <input
        type="text"
        value={make}
        onChange={handleMakeChange}
        placeholder="Enter Car Make"
      />
      <br />

      <input
        type="text"
        value={model}
        onChange={handleModelChange}
        placeholder="Enter Car Model"
      />
      <br />

      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
};

export default ArrayOfObjects;
