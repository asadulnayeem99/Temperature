import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import { CounterContext } from "./App";

const Fun = () => {
  const [value, setValue] = useContext(CounterContext);
  return (
    <>
      <h1>Fun</h1>
      <h2>See : {value}</h2>
      <Button variant="outline-primary" onClick={() => setValue(value + 1)}>
        Bara
      </Button>
    </>
  );
};

export default Fun;
