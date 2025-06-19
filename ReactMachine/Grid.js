import "./styles.css";
import { useState, useRef, useEffect } from "react";

export default function App() {
  const [grid, setGrid] = useState(
    Array.from({ length: 3 }, () => new Array(3).fill(false))
  );

  const ref = useRef([]);
  const refId = useRef([]);
  console.log(refId);

  const handelClick = (row, col, flag) => {
    if (refId.current.length > 0 && flag) {
      return;
    }
    if (grid[row][col] && flag) {
      return;
    }
    setGrid((pre) => {
      let newGrid = pre.map((grid) => [...grid]);
      newGrid[row][col] = flag;

      if (flag) {
        ref.current.push([row, col]);
      }

      return newGrid;
    });
  };

  useEffect(() => {
    if (ref.current.length === 9) {
      ref.current.forEach(([row, col], index) => {
        refId.current[index] = setTimeout(() => {
          handelClick(row, col, false);
        }, 1000 * (index + 1));
      });
      ref.current = [];
    }
  }, [grid]);

  // on unmout

  useEffect(() => {
    return () => {
      refId.current.forEach((id) => clearTimeout(id));
    };
  }, []);

  return (
    <div className="container">
      {grid.map((rowInx, rIndex) =>
        rowInx.map((colInx, cIndex) => (
          <div
            key={`${rIndex}${cIndex}`}
            className={colInx ? "cell active" : "cell"}
            onClick={() => handelClick(rIndex, cIndex, true)}
          ></div>
        ))
      )}
    </div>
  );
}




//    width: "100px",
//         display: "grid",
//         gridTemplateColumns: "repeat(5, 1fr)",
//         gap: "5px",