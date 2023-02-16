
// Action
const ADD_TODO="Add";
const TOGGLE_TODO="Toggle";

module.exports.actions = {ADD_TODO, TOGGLE_TODO};

// Action Creators
module.exports.addTodo = (text)=>({
    text,
    type:ADD_TODO
})

module.exports.toggleTodo = (index)=>({
    index,
    type:TOGGLE_TODO
})