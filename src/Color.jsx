import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

const Color = () => {
  const { name } = useParams();
  const divStyle = {
    backgroundColor: `${name}`,
  };
  return (
    <div style={divStyle}>
      <p>This is {name}. Isn't it beautiful:</p>
      <Link to="/colors">Go Back</Link>
    </div>
  );
};

export default Color;
