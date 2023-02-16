const redux = require("redux");
const { default: todoReducer } = require("./reducers/todoReducer");

module.exports.initialState= {
    todos:[]
}
const store=redux.createStore(todoReducer);
module.exports.store = store;
