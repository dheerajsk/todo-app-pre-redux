
const { configureStore } = require("@reduxjs/toolkit");
const x = require("./reducers/todoReducer");

module.exports.initialState= {
    todos:[{text:'1', comppleted:false}]
}
console.log(x.default);
const store=configureStore({
    reducer:{
        suretodo:x.default
    }
});
module.exports.store = store;
