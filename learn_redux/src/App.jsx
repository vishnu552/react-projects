import { useState } from "react";
import AddTodo from "./app/features/todo/addTodo";
import Todos from "./app/features/todo/Todos";

function App() {
  return (
    <>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
