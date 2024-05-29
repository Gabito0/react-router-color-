import React from "react";
import { Link } from "react-router-dom";

const Colors = ({ colors }) => {
  return (
    <div>
      <div>
        <h1>Welcome to the color factory</h1>
        <Link to="/colors/new">Add a color</Link>
      </div>
      <div>
        <h2>Please select a color</h2>
        <ul>
          {colors.map((color, index) => (
            <li key={index}>
              <Link to={`/colors/${color}`}>{color}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Colors;
