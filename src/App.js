import React, { useState } from "react";
import "./styles/App.css";

// screens
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([
    {
      date: Date.now(),
      title: "walk my dog",
      desc: "for 30min",
      done: false,
      due: "2019 - 10 - 27"
    }
  ]);
  const [error, setError] = useState(false);

  const addTodo = (title, desc, due) => {
    let currentDate = Date.now();
    const newTodo = { title, desc, done: false, due, date: currentDate };
    setTodos([...todos, newTodo]);
  };

  const submitHandler = e => {
    e.preventDefault();
    const title = e.target.elements.title.value;
    const desc = e.target.elements.desc.value;
    const due = e.target.elements.due.value;
    if ((title, desc, due)) {
      addTodo(title, desc, due);
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <div className="App">
      <Todos todos={todos} submitHandler={submitHandler} error={error} />
    </div>
  );
}

export default App;
