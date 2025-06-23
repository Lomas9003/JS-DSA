import { useRef, useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [data, setdata] = useState(Array(4).fill());

  const inputRef = useRef([]);

  // console.log(inputRef);

  // const focusInput = (index) => {
  //   inputRef.current[index]?.focus();
  // };

  const handelChange = (e, index) => {
    let val = e.target.value;

    if (isNaN(val)) return;

    let newVal = val.trim();
    newVal = newVal.slice(0, 1);
    let newOTP = [...data];
    newOTP[index] = newVal;
    setdata(newOTP);

    newVal && inputRef.current[index + 1]?.focus();
  };

  const handelKeyDown = (e, index) => {
    if (!e.target.value && e.key === "Backspace") {
      inputRef.current[index - 1]?.focus();
    }
  };

  useEffect(() => {
    inputRef.current[0]?.focus();
  }, []);

  return (
    <div className="App">
      <div className="box-conatiner">
        {data.map((val, index) => (
          <div key={index} className="box">
            <input
              ref={(input) => (inputRef.current[index] = input)}
              value={val}
              onChange={(e) => handelChange(e, index)}
              onKeyDown={(e) => handelKeyDown(e, index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
