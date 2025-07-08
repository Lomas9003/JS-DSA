import { useRef, useState } from "react";
import "./styles.css";
// disabled
const Child = ({ val }) => {
  let num = val * 100;
  return (
    <div>
      <div
        style={{
          height: `${num}px`,
          width: `${num}px`,
          borderRadius: "100%",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {val > 1 && <Child val={val - 1} />}
      </div>
    </div>
  );
};

export default function App() {
  const [val, setval] = useState();

  const handelChange = (e) => {
    setval(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={val} onChange={handelChange} />
      </div>
      <Child val={val} />
    </div>
  );
}
