import { useEffect, useState } from "react";
import "./styles.css";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  // Component didMount
  // useEffect(() => {
  //   console.log("The useEffect ran");
  // }, []);

  // Component didUpdate
  useEffect(() => {
    console.log("The useEffect ran");
  }, [counter]);

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
