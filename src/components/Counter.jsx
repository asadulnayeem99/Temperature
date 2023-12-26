import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
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
      <h2>{counter}</h2>
      <div
        style={{
          display: "flex",
          gap: "10px",

          justifyContent: "center",
        }}
      >
        <Button onClick={() => handleChange("increment")}>+</Button>
        <Button onClick={handleChange}>Reset</Button>
        <Button onClick={() => handleChange("minus")}>-</Button>
      </div>
    </div>
  );
};

export default Counter;
