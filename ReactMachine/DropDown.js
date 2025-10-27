
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setdata] = useState(0);
  const countries = [
    { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
    { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
    { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] },
  ];
  

  const handelChange = (e) => {
    console.log(e.target.value);
    setdata(e.target.value);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <div>
        <select value={data} onChange={(e) => handelChange(e)}>
          {countries.map((val, index) => (
            <option value={index}>{val.name}</option>
          ))}
        </select>
        <select>
          {countries[Number(data)].cities.map((n, index) => (
            <option>{n}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
