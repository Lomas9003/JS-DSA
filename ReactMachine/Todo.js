import { useState } from "react";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");

  // Add new todo
  const handleAdd = () => {
    if (input.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text: input.trim(),
    };
    setTodos((prev) => [...prev, newTodo]);
    setInput("");
  };

  // Delete a todo
  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Filtered list based on search term
  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h2>📝 Todo List</h2>

      <div style={styles.inputGroup}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add new todo"
          style={styles.input}
        />
        <button onClick={handleAdd} style={styles.button}>
          Add
        </button>
      </div>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search todos..."
        style={styles.search}
      />

      <ul style={styles.list}>
        {filteredTodos.length === 0 ? (
          <li style={styles.empty}>No todos found</li>
        ) : (
          filteredTodos.map((todo) => (
            <li key={todo.id} style={styles.todoItem}>
              {todo.text}
              <button
                onClick={() => handleDelete(todo.id)}
                style={styles.deleteBtn}
              >
                ❌
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "30px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontFamily: "Arial",
    backgroundColor: "#f9f9f9",
  },
  inputGroup: {
    display: "flex",
    gap: "10px",
    marginBottom: "15px",
  },
  input: {
    flex: 1,
    padding: "8px",
    fontSize: "16px",
  },
  button: {
    padding: "8px 12px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  search: {
    width: "100%",
    padding: "8px",
    marginBottom: "15px",
    fontSize: "16px",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  todoItem: {
    padding: "8px",
    backgroundColor: "#fff",
    borderBottom: "1px solid #ddd",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  deleteBtn: {
    backgroundColor: "transparent",
    border: "none",
    color: "red",
    fontSize: "18px",
    cursor: "pointer",
  },
  empty: {
    textAlign: "center",
    color: "#888",
  },
};
