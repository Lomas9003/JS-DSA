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

import { useCallback, useEffect, useState } from "react";

export default function useDounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value || "");
  const debouncedFxn = useCallback(debounce(setDebouncedValue, delay), [delay]);
  debouncedFxn(value);
  return debouncedValue;
}

function debounce(callback, delay) {
  let timerId;
  return function debouncedFxn(...args) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}