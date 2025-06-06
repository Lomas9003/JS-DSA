import { useState } from "react";
import "./styles.css";

export default function App() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const val = new Array(5).fill(0);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Star Rating</h1>
      <h3>by NamasteDev</h3>

      {/* Step 2: Render 5 stars using a loop ★★★★★ */}
      {val.map((star, index) => (
        <span
          onMouseEnter={() => setHover(index + 1)}
          onMouseOut={() => setHover(0)}
          onClick={() => setRating(index + 1)}
          style={{
            fontSize: "70px",
            color: index < (rating || hover) ? "yellow" : "black",
          }}
        >
          ★
        </span>
      ))}
      {/* Step 3: Update rating when a star is clicked */}
      <h3>Current Rating: {rating}</h3>
      {/* Step 4: Style stars based on rating */}

      {/* Step 5: Display current rating */}

      {/* Step 6: Add a Reset button to clear the rating */}
      <button onClick={() => setRating(null)}>Reset Rating</button>
    </div>
  );
}
