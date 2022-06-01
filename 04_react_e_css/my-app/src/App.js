import "./App.css";
// Hook
import { useState } from "react";

// Components
import MyComponent from "./components/MyComponent";
import Title from "./components/Title";

function App() {
  const n = 15;
  const [name] = useState(`Matheus`);
  const redTitle = true;

  return (
    <div className="App">
      {/* CSS Global */}
      <h1>React com CSS</h1>
      {/* CSS Component */}
      <MyComponent />
      <p>Este parágrafo é do App.js</p>
      {/* CSS Inline */}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>
        Este elemento foi estilizado de forma inline
      </p>
      {/* CSS Inline Dinamic */}
      <h2 style={n > 10 ? { color: "purple" } : { color: "green" }}>
        CSS Dinâmico
      </h2>
      <h2
        style={
          name === "Matheus"
            ? { color: "green", backgroundColor: "#000" }
            : null
        }
      >
        CSS Dinâmico
      </h2>
      <h2
        style={
          name === "João" ? { color: "green", backgroundColor: "#000" } : null
        }
      >
        CSS Dinâmico
      </h2>
      {/* Classe Dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este título vai ter classe dinâmica!
      </h2>
      {/* CSS Modules */}
      <Title />
    </div>
  );
}

export default App;
