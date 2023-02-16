
import { initialState } from "../store";
import { actions } from "../actions";

function todoReducer(state=initialState, action){
    console.log("s");
    switch(action.type){
        case actions.ADD_TODO:
            return {
                ...state,
                todos:[
                    ...state.todos,
                    {
                        text:action.text,
                        completed: false
                    }
                ]
            }
        case actions.TOGGLE_TODO:
            console.log(action);
            return {
                ...state,
                todos:[
                    ...state.todos.map((todo,i)=>{
                        if(i==action.index){
                            todo.completed=!todo.completed
                            return todo;
                        }
                        return todo;
                    })
                ]
            }
        default:
            return state;
    }
}

export default todoReducer;