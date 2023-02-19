
const { configureStore } = require("@reduxjs/toolkit");
const x = require("./reducers/todoReducer");
const projectReducer = require("./reducers/notificationReducer").projectReducer;

module.exports.initialState= {
    todos:[{text:'1', comppleted:false}]
}
console.log(x.default);
const store=configureStore({
    reducer:{
        suretodo:x.default,
        projectReducer
    }
});
module.exports.store = store;
