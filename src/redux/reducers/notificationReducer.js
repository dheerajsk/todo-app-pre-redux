import { createSlice } from "@reduxjs/toolkit";
import { actions } from "./todoReducer";

const projectSlice = createSlice({
  name: "projects",
  initialState: {msg:""},
  reducers: {
    reset: (state, action)=>{
      state.msg="";
    }
  },
  // extraReducers: {
  //   "todo/add": (state, action) => {
  //     state.msg="To do is added"
  //   },

  // }
  // extraReducers:(builder)=>{
  //   builder.addCase(actions.add, (state, action)=>{
  //     state.msg="To do is added";
  //   });
  // }
  extraReducers:{
    [actions.add]:(state, action)=>{
      state.msg="To do is added";
    }
  }
});

export const projectReducer = projectSlice.reducer;
export const notifier = (state)=> state.projectReducer.msg;
export const resetAction = projectSlice.actions.reset;
