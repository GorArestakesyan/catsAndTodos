import React, { useContext } from "react";
import { Link } from "react-router-dom";
import BackIcon from "../../../assets/svgs/BackIcon";
import AppContext from "../../../context/AppContext";

const TodoInfo = () => {
  const { setTodos, todos } = useContext(AppContext);
  const selectedTodo = JSON.parse(localStorage.getItem("selectedTodo"));
  const putInStorage = (elem, value) => {
    localStorage.setItem(
      "selectedTodo",
      JSON.stringify({
        ...elem,
        todosInSomeDate: value,
      })
    );
  };
  const handleCheckTodo = (id) => {
    const newTodos = todos.map((el) => {
      if (el.id === selectedTodo.id) {
        const updatedTodosInSomeDay = el.todosInSomeDate.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          } else {
            return todo;
          }
        });
        putInStorage(el, updatedTodosInSomeDay);

        return { ...el, todosInSomeDate: updatedTodosInSomeDay };
      } else {
        return el;
      }
    });
    setTodos(newTodos);
  };
  const deleteCompleteds = () => {
    const filteredTodos = selectedTodo.todosInSomeDate.filter(
      (el) => !el.completed
    );
    putInStorage(selectedTodo, filteredTodos);
    setTodos((prev) =>
      prev.map((el) =>
        el.id === selectedTodo.id
          ? {
              ...el,
              todosInSomeDate: filteredTodos,
              count: filteredTodos.length + 1,
            }
          : el
      )
    );
  };
  return (
    <div className="todoInfoContainer">
      <Link to={"/todos"} title="Go back">
        <BackIcon />
      </Link>
      <div className="todosListContainer">
        {selectedTodo.todosInSomeDate.length ? (
          selectedTodo.todosInSomeDate.map((todo) => (
            <React.Fragment>
              <div className="spaceBox" />
              <div
                key={todo.id}
                className={
                  todo.completed
                    ? "completedTodo, eachTodoItemBox"
                    : "unCompletedTodo, eachTodoItemBox"
                }
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => handleCheckTodo(todo.id)}
                />
                <div className="taskTitleBox">
                  <span className="taskTitle">{todo.title}</span>
                </div>
                <span>{todo.createdDate}</span>
              </div>
            </React.Fragment>
          ))
        ) : (
          <span>No todos</span>
        )}
      </div>
      <button onClick={deleteCompleteds} className="deleteCompleteds">
        <span className="addButtonText">Delete completeds</span>
      </button>
    </div>
  );
};

export default TodoInfo;
