import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodoAc} from '../actions/toDoActions'

function AddTask({task}) {
  const [todo, setTodo]= useState()
  const dispatch= useDispatch()
  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(addTodoAc(todo))
    setTodo('')
    }
    return (
        <div>
            <form  onSubmit={handleSubmit}>
                <input placeholder='add a task' value={todo} style={{
                    width:350, padding: 10, borderRadius: 20, border: "none", fontSize: 20,
                }} 
                onChange={(e)=> setTodo(e.target.value)}
                />
                <button type='submit' style={{
                    padding: 15, borderRadius: 25, fontSize: 15, marginLeft: 20,
                }} > add </button>
            </form>
        </div>
      )
    }
    
    export default AddTask