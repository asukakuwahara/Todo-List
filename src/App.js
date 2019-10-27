import React, { useState } from "react";
import "./styles/App.css";

// screens
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "walk my dog",
      desc: "for 30min",
      done: false,
      due: "2019 - 10 - 27"
    }
  ]);
  return (
    <div className="App">
      <Todos todos={todos} />
    </div>
  );
}

export default App;
