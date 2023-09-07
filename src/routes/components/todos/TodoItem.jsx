import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import InfoIcon from "../../../assets/svgs/InfoIcon";
import AppContext from "../../../context/AppContext";

const TodoItem = ({ todo }) => {
  const navigate = useNavigate();
  const { todos, setTodos } = useContext(AppContext);
  const seeMoreInfo = () => {
    localStorage.setItem("selectedTodo", JSON.stringify(todo));
    navigate(`/todos/todo/${todo.title}`);
  };
  const handleDelete = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  return (
    <div className="eachTodoItemBox">
      <div className="taskTitleBox">
        Task : <span className="taskTitle">{todo.title}</span>
      </div>
      <span>Quantity : {todo.count}</span>
      <span>Created at: {todo.createdDate}</span>
      <div className="infoDltBtnsBox">
        {todo.count > 1 ? (
          <div onClick={seeMoreInfo} className="infoBtn">
            <InfoIcon />
          </div>
        ) : null}
        <span className="deleteButton" onClick={handleDelete}>
          X
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
