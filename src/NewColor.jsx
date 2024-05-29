import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewColor = ({ addColor }) => {
  const [color, setColor] = useState("");
  const handleChange = (evt) => {
    setColor(evt.target.value);
  };
  const gatherInput = (evt) => {
    evt.preventDefault();
    addColor(color);
    setColor("");
    navigate("/colors");
  };

  const navigate = useNavigate();
  return (
    <div>
      <form onSubmit={gatherInput}>
        <label htmlFor="color">Color Name</label>
        <input
          id="color"
          type="text"
          placeholder="Write Color"
          value={color}
          onChange={handleChange}
          name="color"
        />
        <button type="submit">Add Color</button>
      </form>
    </div>
  );
};

export default NewColor;
