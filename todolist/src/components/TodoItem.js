import React from "react";

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li
      style={{
        listStyle: "none",
        marginBottom: 8,
        display: "flex",
        justifyContent: "space-between",
        textDecoration: todo.completed ? "line-through" : "none"
      }}
    >
      <span onClick={() => onToggle(todo.id)} style={{ cursor: "pointer" }}>
        {todo.todo}
      </span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
