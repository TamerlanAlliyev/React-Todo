import { useState } from "react"; 
import "./App.css";
import CreatTodo from "./components/CreatTodo";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const handleCreateTodo = (todo) => {
    console.log("New todo created:", todo);
    setTodos([...todos, todo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (updatedTodo) => {
    debugger
    setTodos(todos.map((todo) => 
      todo.id === updatedTodo.id ? updatedTodo : todo
    ));
  };

  return (
    <div className="Div">
      <div className="Container">
        <CreatTodo createTodo={handleCreateTodo} />
        <TodoList removeTodo={removeTodo} todos={todos} updateTodo={updateTodo}/>
      </div>
    </div>
  );
}

export default App;
