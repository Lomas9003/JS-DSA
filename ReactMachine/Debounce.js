import { useState } from "react";
import useDebounce from "./hooks/useDebounce";
import "./styles.css";

export default function App() {
  const [search, setSearch] = useState("");
  const debouncedValue = useDebounce(search, 1000);
  return (
    <div className="App">
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      <hr />
      <h2>Normal : {search}</h2>
      <hr />
      <h2>Debounced : {debouncedValue}</h2>
    </div>
  );
}


// debpunce file 

import { useEffect, useState } from "react";

export default function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Start a timer — update debounced value only after 'delay' ms
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup — clear the timer if value changes before 'delay' finishes
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
