
// import { initialState } from "../store";
import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    todos:[{text:'1', comppleted:false}]
}

const todoSlice = createSlice(
{
    name:'MyTODOReducer',
    initialState,
    reducers:{
        add:(state, action)=>{
            console.log(action.payload);
            state.todos.push({
                text:action.payload,
                completed:false});
        },
        toggle:(state,action)=>{
            state.todos.map((todo,i)=>{
                if(i==action.payload){
                    todo.completed=!todo.completed;
                }
                return todo;
            })
        }
    }
}  
);

export default todoSlice.reducer;
export const todoSelector = (state)=> {
    console.log(state);
    return state.suretodo.todos;
};
export const actions = todoSlice.actions;
