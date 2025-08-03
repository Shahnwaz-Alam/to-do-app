import { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} /> {/* Form component */}
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} /> {/* List component */}
    </div>
  );
}

export default App;