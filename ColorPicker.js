import React, { useState } from "react";
import "./ColorPicker.css"; // Import your CSS for styling

const ColorPicker = ({ colors }) => {
  const [showColorOptions, setShowColorOptions] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const toggleColorOptions = () => {
    setShowColorOptions(!showColorOptions);
  };

  const selectColor = (color) => {
    setSelectedColor(color);
    setShowColorOptions(false);
  };

  return (
    <div className="color-picker" style={{ background: "#c8b4dc" }}>
      <div style={{background:"pink",width:"1000px",borderRadius:"30px",boxShadow: '10px 10px 10px 10px black',height:"600px"}}>
      <h1>Color Picker</h1>
      <button
        onClick={toggleColorOptions}
        style={{ background: selectedColor || "green" }}
      >
        Pick a color
      </button>
      {showColorOptions && (
        <div className="color-options">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-option"
              style={{
                backgroundColor: color,
                boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
              }}
              onClick={() => selectColor(color)}
            ></div>
          ))}
        </div>
      )}
      </div>
    </div>
  );
};

export default ColorPicker; 