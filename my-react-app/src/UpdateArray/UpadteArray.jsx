import React from "react";
import { useState } from "react";
import "./UpdateArray.css";

const UpadteArray = () => {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  const handleAddFood = () => {
    const newFood = document.getElementById("food-input").value;
    document.getElementById("food-input").value = "";

    setFoods((f) => [...f, newFood]);
  };

  const handleRemoveFood = (index) => {
    setFoods(foods.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>List of Foods:</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {food}
          </li>
        ))}
      </ul>

      <br />

      <input type="text" id="food-input" placeholder="Enter food name" />
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  );
};

export default UpadteArray;
