import { useState } from "react";
import TodoForm from "./components/ToDoForm/ToDoForm";
import TodoList from "./components/ToDoList/ToDoList";

import './App.css';
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {

  return (
    <div>
      <Provider store={store}>
        <TodoForm />
        <TodoList />
      </Provider>
    </div>
  );
}

export default App;
