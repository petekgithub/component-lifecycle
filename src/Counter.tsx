import { useEffect, useState } from "react";
import "./styles.css";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("The component has mounted!");
    return () => {
      console.log("The component has unmounted!");
    };
  }, []);

  return (
    <div className="Counter">
      <h3>Counter</h3>
      current counter : {counter}
      <br />
      <button onClick={() => setCounter(counter + 1)}>
        Increment the count
      </button>
    </div>
  );
}
