import React, { useState, useEffect } from "react";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import Filter from "../components/Filter";

const LOCAL_STORAGE_KEY = "todos";
const userId = 38;
const baseURL = 'https://dummyjson.com/todos';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const keyValue = localStorage.getItem(LOCAL_STORAGE_KEY);
    const stored = keyValue ? JSON.parse(keyValue) : [];
    if (stored?.length) { 
      setTodos(stored); 
    } else {
      if(!stored) {
        fetch(`${baseURL}/user/${userId}`)
        .then(res => res.json())
        .then(res => setTodos(res.todos));
      } 
    }
  }, []);

  useEffect(() => {
    if(todos?.length) { 
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }
  }, [todos]);

  const addTodo = (text) => {
    const body = {
      todo: text,
      completed: false,
      userId: userId,
      id: Date.now()
    }
    fetch(`${baseURL}/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
    .then(res =>  res.json())
    .then(output => {
      if(output) {
        setTodos([body, ...todos]);
      }
    })
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => (
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )));
  };

  const deleteTodo = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this task?");
    if (confirmDelete) {
      fetch(`${baseURL}/todos/${id}`, {
        method: 'DELETE',
      })
      .then(res => res.json())
      .then((res) => {
        if(res?.id) {
          setTodos(todos.filter(todo => todo.id !== res.id));
        } else {
          setTodos(todos.filter(todo => todo.id !== id));
        }
      });
    }
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  return (
    <div style={{ maxWidth: 500, margin: "auto", padding: 20 }}>
      <h1>React To-Do App</h1>
      <AddTodo onAdd={addTodo} />
      <Filter current={filter} setFilter={setFilter} />
      <TodoList
        todos={filteredTodos}
        onToggle={toggleComplete}
        onDelete={deleteTodo}
      />
    </div>
  );
}

export default TodoApp;
