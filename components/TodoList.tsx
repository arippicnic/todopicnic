import React from "react";
import { useAppContext } from "../contexts/useAppContext";

const TodoList: React.FC = () => {
  const { state, dispatch } = useAppContext();
  const { todo, loading } = state;

  const RederHeader = () => {
    const lenght = todo.length === 0;
    const lenghtMax = todo.length === 7;
    let message = `${todo.length} todo`;
    if (lenght) {
      message = "Add todo for new todo";
    }
    if (lenghtMax) {
      message = "Max todo 7";
    }
    return <h6 className={lenght ? "text-center" : "text-right"}>{message}</h6>;
  };

  const RenderContent = () => {
    if (loading) {
      return <p className="text-center">Loading todo ...</p>;
    }
    return (
      <>
        <RederHeader />
        <ul className="list-group">
          {todo.map((t: string, index: number) => (
            <li key={index} className="list-group-item bg-dark">
              {t}
              <button
                className="float-right btn btn-danger btn-sm ml-2"
                onClick={() => dispatch!({ type: "REMOVE", value: index })}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <main className="mt-4">
      <RenderContent />
    </main>
  );
};

export default TodoList;
