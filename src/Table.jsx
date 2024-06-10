import React, { useEffect, useState } from "react";
import axios from "axios";

const Table = ({ searchQuery }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/todos")
      .then((response) => {
        setTodos(response.data.todos);
        console.log(response.data.todos);
      })
      .catch((error) => {
        console.error("There was an error fetching the todos!", error);
      });
  }, []);

  const filteredTodos = todos.filter((todo) =>
    todo.todo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>User ID</th>
          <th>Todo</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        {filteredTodos.map((todo) => (
          <tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.userId}</td>
            <td>{todo.todo}</td>
            <td>{todo.completed ? "Yes" : "No"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
