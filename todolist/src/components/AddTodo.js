import React, { useState } from "react";

function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) {
        setError("Task cannot be empty");
        return;
    };
    onAdd(text);
    setText("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 16 }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
        style={{ padding: 8, width: "80%" }}
      />
      <button type="submit" style={{ padding: 8 }}>Add</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}

export default AddTodo;
