/* eslint-disable react/prop-types */

const TempInput = ({ scale, handleChange, temp }) => {
  const scaleNames = {
    c: "Celsius",
    f: "Farenhite",
  };
  return (
    <div>
      <fieldset>
        <legend>Enter Temp in {scaleNames[scale]}</legend>
        <input
          name=""
          id=""
          type="number"
          value={temp}
          onChange={(e) => handleChange(e, scale)}
          rows=""
        ></input>
      </fieldset>
      {/* {temp} */}
    </div>
  );
};

export default TempInput;
