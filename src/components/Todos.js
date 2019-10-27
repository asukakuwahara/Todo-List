import React, { useState } from "react";
import "../styles/Todos.css";

const Todos = ({ todos }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="todo-item" key={todo.id}>
          <button>X</button>
          <p>{todo.title}</p>
          <p>{todo.desc}</p>
          <p>Status: {todo.done ? <>Done!</> : <>Pending</>}</p>
          <p>{todo.due}</p>
        </div>
      );
    })
  ) : (
    <span>Nothing to do</span>
  );
  return <div>{todoList}</div>;
};

export default Todos;
