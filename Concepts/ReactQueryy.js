// 1 WRap app in QueryClientProvider 
// index.js
import React from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);


// then api call // App.js

import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchUsers = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
  return data;
};

export default function App() {
  const {
    data: users,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users"],  // unique key for caching
    queryFn: fetchUsers,  // function that fetches data
    staleTime: 5 * 60 * 1000, // cache valid for 5 minutes
  });

  if (isLoading) return <h3>Loading...</h3>;
  if (error) return <h3>Something went wrong!</h3>;

  return (
    <div>
      <h2>👥 User List</h2>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}
