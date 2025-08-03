function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <ul>
      {todos.length === 0 && <p>No todos yet!</p>} {/* Conditional rendering */}
      {todos.map((todo) => (
        <li key={todo.id} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          {todo.text}
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;