import { useState } from "react";
import { BsFillFileMinusFill, BsFillPlusSquareFill } from "react-icons/bs";
import { TbRefresh } from "react-icons/tb";

const MainComp = () => {
  const [value, setValue] = useState(0);
  return (
    <div className="main">
      <div className="display">
        <h1>{value}</h1>
      </div>
      <div className="btn">
        <span>
          <BsFillPlusSquareFill onClick={() => setValue(value + 1)} />
        </span>
        <span>
          <TbRefresh onClick={() => setValue(0)} />
        </span>
        <span>
          <BsFillFileMinusFill
            onClick={() => setValue(Math.max(0, value - 1))}
          />
        </span>
      </div>
    </div>
  );
};

export default MainComp;
