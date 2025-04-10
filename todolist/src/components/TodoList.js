import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0) return <p>No tasks found.</p>;

  return (
    <ul style={{ padding: 0 }}>
      {todos.map(todo => (
        <TodoItem
          key={todo.todo + todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
