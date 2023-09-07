import React, { useContext } from "react";
import AppContext from "../../../context/AppContext";
import TodoItem from "./TodoItem";

const TodosList = () => {
  const { todos } = useContext(AppContext);
  return (
    <div className="todosListContainer">
      {todos.length ? (
        todos.map((todo) => <TodoItem todo={todo} key={todo.id} />)
      ) : (
        <span>No todos</span>
      )}
    </div>
  );
};

export default TodosList;
