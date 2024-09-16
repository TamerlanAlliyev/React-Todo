import React from "react";
import "../assets/styles/CreatTodo.css";
import { useState } from "react";

export default function CreatTodo({ createTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = () => {
    if (!newTodo) return;
    createTodo({ id: Math.floor(Math.random() * 9999999999), value: newTodo });
    setNewTodo("");
    console.log(newTodo);
  };

  return (
    <div className="create">
      <h1>Create Todo</h1>
      <div className="createTodo">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleSubmit}>Create</button>
      </div>
    </div>
  );
}
