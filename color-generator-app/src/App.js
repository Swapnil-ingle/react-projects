import "./App.css";

import Values from "values.js";
import { useState } from "react";
import SingleColor from "./SingleColor";

function App() {
  const [color, setColor] = useState("");
  const [list, setList] = useState(new Values("#F15025").all(10));
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e && e.preventDefault();

    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log("Error!!");
    }
  };

  return (
    <div className="App">
      <header style={{ backgroundColor: `${color || "#F15025"}` }}>
        <h2>Color Generator (Tint and Shade)</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className={`form-control ${error ? "error" : null}`}
            id="hex-input"
          />
          <input
            type="submit"
            id="submit"
            value="Generate"
            className="form-control"
          />
        </form>
      </header>
      <div className="colors-container">
        {list.map((color, index) => {
          return (
            <SingleColor key={index} index={index} {...color} hex={color.hex} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
