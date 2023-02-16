
const { configureStore } = require("@reduxjs/toolkit");
const { loggerMiddleware } = require("./middlewares/loggerMiddleware");
const x = require("./reducers/todoReducer");

module.exports.initialState= {
    todos:[{text:'1', comppleted:false}]
}
console.log(x.default);
const store=configureStore({
    reducer:{
        suretodo:x.default
    },
    middleware:[loggerMiddleware]
});
module.exports.store = store;
