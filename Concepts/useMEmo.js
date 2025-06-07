import "./styles.css";
import { useState, useMemo } from "react";

export default function App() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const IncrementCountOne = () => {
    console.log(">>>>>>>>IncrementCountOne>>>>>>>>>>");
    setCounterOne(counterOne + 1);
  };
  const IncrementCountTwo = () => {
    console.log(">>>>>>>>IncrementCountTwo>>>>>>>>>>");
    setCounterTwo(counterTwo + 1);
  };

  const CheckEven = useMemo(() => {
    console.log("hello");
    let i = 0;
    while (i < 20) i++;
    return counterOne % 2 === 0 ? "Even" : "Odd";
  }, [counterOne]);

  return (
    <>
      <div>
        <button onClick={IncrementCountOne}>Count {counterOne} times</button>
        <span>{CheckEven}</span>
      </div>
      <div>
        <button onClick={IncrementCountTwo}>Count {counterTwo} times</button>
      </div>
    </>
  );
}
