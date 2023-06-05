const initialState={
    todos:[]      
}
 export const toDoReducer=(state =initialState, {type, payload})=>{
switch (type) {
    case "ADDTODO":
        return {todos: payload}
    case "DONETODO":
        return {todos: payload} 
   
       default: return state
}}