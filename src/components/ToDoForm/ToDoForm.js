import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notifier, resetAction } from "../../redux/reducers/notificationReducer";

import { actions, createTodo } from "../../redux/reducers/todoReducer";
import "./ToDoForm.css";

function ToDoForm() {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();
  const notification = useSelector(notifier);
  if(notification){
    console.log("dsd");
    setTimeout(()=>{
      dispatch(resetAction());
    },3000);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoText("");
    dispatch(createTodo(todoText));
  };

  return (
    <div className="container">
      {
        notification &&
      <div class="alert alert-success" role="alert">
        {notification}
      </div>

}
      
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control mb-3"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button className="btn btn-success float-end" type="submit">Create Todo</button>
    </form>
    </div>
  );
}

export default ToDoForm;
