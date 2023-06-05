export const addTodoAc=(todo )=>(dispatch, getState)=>{
    const {todo: {todos}}= getState()
     const todoexists = todos.find(item=> item.todo === todo)
     if(!todoexists && todo!==''){
       dispatch({
           type:'ADDTODO',
           payload:[ ...todos, {id: todo, todo,  fulfilled: false}]
       })
     }
   }
   export const doneTodo=(todo)=>(dispatch, getState)=> {
     const {todo: {todos}} = getState()
     dispatch({
       type:'DONETODO',
       payload: todos.filter((item)=> item.id !== todo.id )
     })
   }
   
   