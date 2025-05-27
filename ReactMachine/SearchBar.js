import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  const fetchData = async () => {
    if (!search.trim()) return; // Prevent empty searches

    // 1️⃣ Check localStorage first
    const cachedData = localStorage.getItem(search);
    if (cachedData) {
      console.log("Loaded from cache:", search);
      setResult(JSON.parse(cachedData));
      return;
    }

    // 2️⃣ If no cached data, fetch from API
    try {
      const response = await fetch(
        `https://dummyjson.com/recipes/search?q=${search}`
      );
      const data = await response.json();
      console.log("Fetched from API:", search);

      setResult(data?.recipes || []);

      // 3️⃣ Store result in localStorage
      localStorage.setItem(search, JSON.stringify(data?.recipes || []));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (!search.trim()) return;

    const timer = setTimeout(() => {
      console.log("API call or Cache check");
      fetchData();
    }, 1000); // 1s debounce

    return () => {
      console.log("Cleanup previous timer");
      clearTimeout(timer);
    };
  }, [search]);

  return (
    <div className="App">
      <h1>Search Bar</h1>

      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="list">
        {result.map((n) => (
          <span key={n.id}>{n.name}</span>
        ))}
      </div>
    </div>
  );
}
