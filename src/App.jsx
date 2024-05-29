import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Colors from "./Colors";
import Color from "./Color";
import NewColor from "./NewColor";

function App() {
  const [colors, addColors] = useState(["red", "blue", "green"]);
  const addColor = (newColor) => {
    addColors((color) => [...color, newColor]);
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/colors/new"
            element={<NewColor addColor={addColor} />}
          />
          <Route path="/colors/:name" element={<Color colors={colors} />} />
          <Route path="/colors" element={<Colors colors={colors} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
