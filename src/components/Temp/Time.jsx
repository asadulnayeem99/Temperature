import { useEffect, useState } from "react";

const Time = () => {
  const [times, setTimes] = useState(new Date());
  const tick = () => {
    setTimes(new Date());
  };
  useEffect(() => {
    const int = setInterval(tick, 1000);
    return () => {
      clearInterval(int);
    };
  }, []);

  return <h1>{times.toLocaleTimeString("en-US")}</h1>;
};

export default Time;
