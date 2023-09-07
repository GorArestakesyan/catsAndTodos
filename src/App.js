import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import AppContext from "./context/AppContext";
import { router } from "./routes/router";
function App() {
  const [todos, setTodos] = useState([]);
  const todosContext = {
    todos,
    setTodos,
  };

  return (
    <div className="App">
      <AppContext.Provider value={todosContext}>
        <RouterProvider router={router} />
      </AppContext.Provider>
    </div>
  );
}

export default App;
