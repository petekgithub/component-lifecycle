import { useState } from "react";
import "./styles.css";
import Counter from "./Counter";

export default function App() {
  const [showCounter, setShowCounter] = useState(false);

  return (
    <div className="App">
      <h1>Hey hey Nazlı !</h1>
      <button onClick={() => setShowCounter(!showCounter)}>
        {showCounter ? "Hide Counter" : "Show Counter"}
      </button>
      {showCounter && <Counter />}
    </div>
  );
}
