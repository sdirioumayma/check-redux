import { Button } from 'react-bootstrap'
import React from 'react'
import { useDispatch} from 'react-redux'
import { doneTodo} from '../actions/toDoActions'

function Task({task}) {
 
 
 const dispatch= useDispatch()
 const handleDone=(task)=>{
  dispatch(doneTodo(task))
 }

  return (
    <div>
        <ul className ='bunch'>
            <li  className='oneTodo'>
                <span className='content'key={task.id} > {task.todo}  </span>
                <Button variant='success' style={{ marginRight: 10}} onClick={()=>handleDone(task)}> done</Button>
               
            </li>
        </ul>
    </div>
  )
}

export default Task