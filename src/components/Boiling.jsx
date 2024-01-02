import { useState } from "react";

export const Boiling = () => {
  const [temp, setTemp] = useState(0);
  console.log(temp);

  const farenhite = (temp) => {
    const convert = (temp * 9) / 5 + 32;
    const round = Math.round(convert * 1000) / 1000;
    return round;
  };

  const Converter = (e) => {
    const input = parseFloat(e.target.value);
    if (Number.isNaN(input)) {
      return "";
    }
    const output = farenhite(input);
    console.log(output.toString());
    setTemp(output.toString());
  };

  return (
    <div>
      <fieldset>
        <legend>Enter Temp in Clesius</legend>
        <input
          name=""
          id=""
          type="number"
          cols=""
          onChange={(e) => Converter(e)}
          rows=""
        ></input>
      </fieldset>
      {temp}
    </div>
  );
};

export default Boiling;
