import React, { useState } from "react";
import { FaFilePen } from "react-icons/fa6";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

export default function Todo({ todo, removeTodo, updateTodo }) {
  const { id, value } = todo;
  const [editValue, setEditValue] = useState(value); 
  const [editTable, setEditTable] = useState(false);

  const todoRemove = () => {
    removeTodo(id);
  };

  const editNewValue = () => {
    setEditTable(false);
    updateTodo({ id, value: editValue }); 
    console.log("New value updated:", editValue);
  };

  return (
    <div className="todo">
      {editTable ? (
        <input
          type="text"
          className="EditInput"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
        />
      ) : (
        <p id={id}>{value}</p>
      )}

      <div className="button">
        <IoIosRemoveCircleOutline className="remove" onClick={todoRemove} />
        {editTable ? (
          <FaCheck
            style={{ color: "green" }}
            className="update"
            onClick={editNewValue} 
          />
        ) : (
          <FaFilePen
            className="update"
            onClick={() => setEditTable(true)}
          />
        )}
      </div>
    </div>
  );
}
