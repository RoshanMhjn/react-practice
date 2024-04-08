import React, { useState } from "react";
import "./ToDoList.css";

const ToDoList = () => {
  const [todos, setTodos] = useState(["Make tea", "Buy clothes", "set alarms"]);

  const handleAddTodos = () => {
    const newTodo = document.getElementById("todo-input").value;

    document.getElementById("todo-input").value = "";

    setTodos((t) => [...t, newTodo]);
  };

  const handleRemoveTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const adjustTodoUp = (index) => {};
  const adjustTodoDown = () => {};

  return (
    <div className="todo-list">
      <h1>To-Do-List</h1>

      <input id="todo-input" type="text" placeholder="Enter a task..." />
      <button onClick={handleAddTodos}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <div className="todo">
            <li key={index}>{todo}</li>
            <button onClick={() => handleRemoveTodo(index)}>Remove</button>
            <button onClick={adjustTodoUp}>👆</button>
            <button onClick={adjustTodoDown}>👇</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
