import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import CatsScreen from "./components/cats/CatsScreen";
import TodoForm from "./components/todos/TodoForm";
import TodoInfo from "./components/todos/TodoInfo";
import { Root } from "./root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <CatsScreen />,
        lazy: () => import("./components/cats/CatsScreen"),
      },
      {
        path: "todos",
        element: <TodoForm />,
      },
      {
        path: "todos/todo/:title",
        element: <TodoInfo />,
      },
    ],
  },
]);
