import { useState } from "react";

const useTodos = (myTodos, value, setValue) => {
  const [todos, setTodos] = useState(myTodos ? myTodos : []);
  const [date, setDate] = useState(new Date());
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const deleteCompleteds = () => {
    setTodos(todos.filter((el) => el.completed !== true));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      const newTodo = {
        id: Math.random(),
        title: value,
        quantity: 0,
        child: [],
        created: date.toDateString(),
        completed: false,
      };
      if (todos.length) {
        const updatedTodos = todos.map((todo) => {
          if (todo.created === date.toDateString()) {
            return {
              ...todo,
              quantity: todo.quantity + 1,
              child: [...todo.child, todo.child.length ? newTodo : todo],
            };
          } else {
            return todo;
          }
        });
        if (!todos.some((elm) => elm.created === date.toDateString())) {
          updatedTodos.push(newTodo);
        }
        setTodos(updatedTodos);
      } else {
        setTodos([...todos, newTodo]);
      }
      setDate(new Date());
      setValue("");
    } else alert("Please Enter todo");
  };
  return [
    todos,
    date,
    setDate,
    setTodos,
    handleChange,
    handleSubmit,
    deleteCompleteds,
  ];
};
export { useTodos };
