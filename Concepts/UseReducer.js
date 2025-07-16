import React, { useReducer } from "react";

// Step 1: Define initial state
const initialState = { count: 0 };

// Step 2: Define reducer function
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// Step 3: Create component
function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: "decrement" })}>
        ➖ Decrement
      </button>
      <button onClick={() => dispatch({ type: "increment" })}>
        ➕ Increment
      </button>
    </div>
  );
}

export default Counter;
