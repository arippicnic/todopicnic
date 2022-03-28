import React, { useState } from "react";

import { useAppContext } from "../contexts/useAppContext";

const TodoForm: React.FC = () => {
  const { dispatch } = useAppContext();
  const [todo, setTodo] = useState("");

  const handleAdd = () => {
    dispatch!({ type: "ADD", value: todo });
    setTodo("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleAdd();
  };

  return (
    <div className="input-group mt-4">
      <input
        className="form-control bg-dark text-white"
        value={todo}
        autoFocus={true}
        placeholder="Enter new todo"
        onKeyDown={handleEnter}
        onChange={handleChange}
      />
      <div className="input-group-append">
        <button className="btn btn-primary" onClick={handleAdd}>
          Add
        </button>
      </div>
    </div>
  );
};

export default TodoForm;
