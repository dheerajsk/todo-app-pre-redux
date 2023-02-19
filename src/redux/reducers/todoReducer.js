
// import { initialState } from "../store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const initialState= {
    todos:[{text:'1', comppleted:false}]
}

export const getInitialState=createAsyncThunk(
    'todo/getData',
    async()=>{
        const response = await fetch("https://utilityapp-21e49-default-rtdb.firebaseio.com/todos.json");
        return response.json();
       
    }
)

export const createTodo=createAsyncThunk(
    'todo/create',
    async(payload, thunkAPI)=>{
        const response = await fetch("https://utilityapp-21e49-default-rtdb.firebaseio.com/todos.json",{
            method:"POST",
            body:JSON.stringify({
                text:payload,
                completed: false
            })
        });
        await response.json();
        return thunkAPI.dispatch(getInitialState())
    }
)

const todoSlice = createSlice(
{
    name:'todo',
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
    },extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getInitialState.fulfilled, (state, action) => {
            const data = Object.entries(action.payload);
        const result = data.map(i=> i[1]);
        console.log(result);
        state.todos=[...result];
        })
        .addCase(createTodo.fulfilled, (state, action)=>{
            console.log(action.payload);
        })
      }
}  
);

export default todoSlice.reducer;
export const todoSelector = (state)=> {
    console.log(state);
    return state.suretodo.todos;
};
export const actions = todoSlice.actions;
