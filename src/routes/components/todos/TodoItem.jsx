import React, { useContext, useRef, useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "../../../assets/svgs/DeleteIcon";
import DragIcon from "../../../assets/svgs/DragIcon";
import InfoIcon from "../../../assets/svgs/InfoIcon";
import AppContext from "../../../context/AppContext";

const TodoItem = ({ todo }) => {
  const navigate = useNavigate();
  const [showDrag, setShowDrag] = useState(false);
  const { todos, setTodos } = useContext(AppContext);
  const seeMoreInfo = () => {
    localStorage.setItem("selectedTodo", JSON.stringify(todo));
    navigate(`/todos/todo/${todo.title}`);
  };
  const handleDelete = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const mouseEnter = () => setShowDrag(true);
  const mouseLeave = () => setShowDrag(false);
  const containerRef = useRef();

  return (
    <React.Fragment>
      <div className="spaceBox" />
      <Droppable droppableId={todo.id.toString()}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <div
              className="eachTodoItemBox"
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
            >
              <div className="taskTitleBox">
                Task : <span className="taskTitle">{todo.title}</span>
              </div>
              <span>Quantity : {todo.count}</span>
              <span>Created at: {todo.createdDate}</span>
              <div className="infoDltBtnsBox" ref={containerRef}>
                {todo.count > 1 ? (
                  <div className="infoBtn" onClick={seeMoreInfo}>
                    <InfoIcon />
                  </div>
                ) : null}
                <div className="infoBtn" onClick={handleDelete}>
                  <DeleteIcon />
                </div>
                {showDrag && (
                  <div className="dragIconBox">
                    <DragIcon className="dragIconBox" />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </Droppable>
    </React.Fragment>
  );
};

export default TodoItem;
