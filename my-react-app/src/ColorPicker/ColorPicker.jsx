import React from "react";
import { useState } from "react";
import "./ColorPicker.css";

const ColorPicker = () => {
  const [color, setColor] = useState("#fff");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };
  return (
    <div className="color-picker">
      <h1>Color Picker</h1>

      <label>Select a Color:</label>
      <input
        type="color"
        value={color}
        onChange={handleColorChange}
        className="color-selector"
      />
      <div className="color-display" style={{ backgroundColor: color }}>
        <p>Selected Color: {color}</p>
      </div>
    </div>
  );
};

export default ColorPicker;
