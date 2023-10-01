import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "./todoSlice";
import { FaTrashAlt } from "react-icons/fa";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <ul className="list-none flex items-center flex-col">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded w-4/5"
            key={todo.id}
          >
            <div className="text-white">{todo.text}</div>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              <FaTrashAlt />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
