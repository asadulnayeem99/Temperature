import { useState } from "react";
import classes from "./Counter.module.css";
const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleChange = (e) => {
    if (e === "increment") {
      return setCounter((prevCount) => prevCount + 1);
    } else if (e === "minus") {
      return setCounter((prevCount) => prevCount - 1);
    } else {
      setCounter(0);
    }
  };
  return (
    <div className={classes.parent}>
      <h1>Counter App</h1>
      <div>{counter}</div>
      <div>
        <button
          onClick={() => handleChange("increment")}
          className={classes.buttons}
        >
          +
        </button>
        <button onClick={handleChange} className={classes.buttons}>
          Reset
        </button>
        <button
          onClick={() => handleChange("minus")}
          className={classes.buttons}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
