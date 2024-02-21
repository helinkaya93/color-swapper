import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [color, setColor] = useState(["azure"]);
  const ColorHandle = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className="App">
      <div
        style={{
          backgroundColor: color,
          height: "50vh",
          width: "50vh",
          margin: "10%",
          border: "5px solid teal",
          borderRadius: "6px",
        }}
      >
        <input
          type="color"
          onChange={ColorHandle}
          style={{
            margin: "60px",
            border: "none",
            borderRadius: "10px",
            outline: "none",
          }}
        />
      </div>
    </div>
  );
}

export default App;
