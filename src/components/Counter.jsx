import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import { TbRefresh } from "react-icons/tb";
import { CounterContext } from "../App";
import classes from "./Counter.module.css";

const Counter = () => {
  const [value, setValue] = useContext(CounterContext);

  return (
    <div className={classes.parent}>
      <h1>Counter App</h1>
      <h2>{value}</h2>
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button onClick={() => setValue(value + 1)}>+</Button>
        <Button
          style={{ textAlign: "center" }}
          variant="danger"
          onClick={() => setValue(0)}
        >
          <TbRefresh />
        </Button>
        <Button onClick={() => setValue(Math.max(0, value - 1))}>-</Button>
      </div>
    </div>
  );
};

export default Counter;
