
export const loggerMiddleware = (store)=>{
    return (next)=>{
        return (action)=>{
            console.log("Dispatching action: "+action.type);
            next(action);
            console.log("State after dispatch: "+JSON.stringify(store.getState()));
        }
    } 
}
