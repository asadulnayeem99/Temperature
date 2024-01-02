import { createContext, useState } from "react";
import Temprature from "./components/Temp/Temprature";
export const CounterContext = createContext();
const App = () => {
  const [value, setValue] = useState(0);
  return (
    <CounterContext.Provider value={[value, setValue]}>
      <Temprature />
    </CounterContext.Provider>
  );
};

export default App;
