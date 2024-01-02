import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const Time = () => {
  const [date, setDate] = useState(new Date());
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  const handleToggleTimer = () => {
    setIsTimerRunning((prevIsTimerRunning) => !prevIsTimerRunning);
  };

  const tick = () => {
    console.log("rendered");
    setDate(new Date());
  };

  useEffect(() => {
    let intervalId;
    console.log("useEffect");
    if (isTimerRunning) {
      intervalId = setInterval(tick, 1000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isTimerRunning]);

  return (
    <div>
      <h2>{date.toLocaleTimeString("en-US")}</h2>
      <br />
      <Button variant="danger" onClick={handleToggleTimer}>
        {isTimerRunning ? "Stop Timer" : "Start Timer"}
      </Button>
    </div>
  );
};

export default Time;
