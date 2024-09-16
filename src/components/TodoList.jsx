import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, removeTodo, updateTodo }) {
  return (
    <div className="TodoList">
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} removeTodo={removeTodo} updateTodo={updateTodo} />
      ))}
    </div>
  );
}
