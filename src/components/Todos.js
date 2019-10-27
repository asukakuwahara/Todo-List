import React from "react";
import "../styles/Todos.css";

const Todos = ({ todos, submitHandler, error, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="todo-item" key={todo.date}>
          <button
            onClick={e => {
              deleteTodo(todo);
            }}
            className="delete"
          >
            X
          </button>
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
  return (
    <div>
      <form onSubmit={e => submitHandler(e)} className="todo-form">
        <input type="text" name="title" placeholder="Type todo" />
        <input type="text" name="desc" placeholder="Type description" />
        <input type="date" name="due" />
        <button type="submit" className="submit">
          Add todo
        </button>
      </form>
      {error && <p className="error">Fill out all the form</p>}
      <div>{todoList}</div>
    </div>
  );
};

export default Todos;
