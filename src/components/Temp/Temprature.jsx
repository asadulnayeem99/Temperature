import { useState } from "react";
import BoilingVerdict from "./BoilingVerdict";
import { default as TempInput } from "./TempInput";
import Time from "./Time";
import { convert, toCelsius, toFarenhite } from "./calculator";

const Temprature = () => {
  const [temperature, setTemperature] = useState(0);
  const [scale, setScale] = useState("");

  const handleChange = (e, scale) => {
    const input = e.target.value;
    setTemperature(input);
    setScale(scale);
  };

  const celsius = scale === "f" ? convert(temperature, toCelsius) : temperature;
  const farenhit =
    scale === "c" ? convert(temperature, toFarenhite) : temperature;

  return (
    <>
      <TempInput scale={"c"} handleChange={handleChange} temp={celsius} />
      <TempInput scale={"f"} handleChange={handleChange} temp={farenhit} />
      <BoilingVerdict celsius={celsius} />
      <Time />
    </>
  );
};

export default Temprature;
