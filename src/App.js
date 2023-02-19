import { useEffect, useState } from "react";
import TodoForm from "./components/ToDoForm/ToDoForm";
import TodoList from "./components/ToDoList/ToDoList";
import { useDispatch } from "react-redux";

import './App.css';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { actions, getInitialState } from "./redux/reducers/todoReducer";

function App() {
  console.log("Getting");
  const dispatch = useDispatch();
  dispatch(getInitialState());

  // useEffect(()=>{
  //   async function fetchData() {
  //     const response = await fetch("https://utilityapp-21e49-default-rtdb.firebaseio.com/todos.json");
  //     const data = Object.entries(await response.json());
  //     const result = data.map(i=> i[1]);
  //     dispatch(actions.setState(result));
  //   }
  //   fetchData();
   
  // },[])

  return (
    <div>
     
        <TodoForm />
        <TodoList />
     
    </div>
  );
}

export default App;
