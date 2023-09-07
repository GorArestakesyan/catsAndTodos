import React, { useContext, useRef, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import AppContext from "../../../context/AppContext";
import TodosList from "./TodosList";
import "./index.css";
const TodoForm = () => {
  let { todos, setTodos } = useContext(AppContext);
  const [date, setDate] = useState(new Date());

  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputRef.current.value) {
      const newTodo = {
        id: Math.random(),
        count: 1,
        title: inputRef.current.value,
        completed: false,
        createdDate: date.toLocaleDateString(),
        todosInSomeDate: [],
      };

      let findedTodo = todos?.find(
        (el) => el.createdDate === date.toLocaleDateString()
      );

      if (todos.length && findedTodo) {
        delete newTodo.todosInSomeDate;
        delete newTodo.count;
        findedTodo = {
          ...findedTodo,
          count: ++findedTodo.count,
          todosInSomeDate: [...findedTodo.todosInSomeDate, newTodo],
        };

        setTodos(
          todos.map((todo) => (todo.id === findedTodo.id ? findedTodo : todo))
        );
      } else {
        setTodos([...todos, newTodo]);
      }

      inputRef.current.value = "";
      inputRef.current.focus();
    } else alert("Please enter todo");
  };

  const handleChangeDate = (date) => {
    setDate(date);
  };

  return (
    <div className="todosMainContainer">
      <form className="todoFormBox" onSubmit={handleSubmit}>
        <input className="input margin" ref={inputRef} />
        <DatePicker
          className="datePicker"
          calendarClassName="datePopper"
          selected={date}
          startDate={date}
          onChange={handleChangeDate}
        />
        <button title="Add" className="addButton margin">
          <span className="addButtonText">Add Todo</span>
        </button>
      </form>
      <TodosList />
    </div>
  );
};

export default TodoForm;
