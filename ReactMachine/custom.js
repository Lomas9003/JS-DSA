export default function App() {
  const [val, increment, decrement, reset] = Usecustom();
  const [input, setInput] = useState("");

  const data = (val) => {
    setInput(val);
  };
  return (
    <div className="App">
      <p>{val}</p>

      <button onClick={increment}>INcrement</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
      <div>
        <p>data from child : {input}</p>
        <Child val={data} />
      </div>
    </div>
  );
}


// child

import { useState } from "react";

export const Usecustom = () => {
  const [val, setVal] = useState(0);

  const increment = () => {
    setVal(val + 1);
  };

  const decrement = () => {
    setVal(val - 1);
  };

  const reset = () => {
    setVal(0);
  };

  return [val, increment, decrement, reset];
};

// chil sending data 

const Child = ({ val }) => {
  const handeChange = () => {
    const data = "data fderom child";
    val(data);
  };
  return (
    <div>
      <button onClick={handeChange}>Click</button>
      <p>Hello</p>
    </div>
  );
};

