import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import Task from './Task'
function ListTask() {
  const todo= useSelector((state) =>state.todo)
  const {todos}= todo
  return (
    <div>
     {
      todos && todos.map((task)=><Task task= {task}  />)
     }
     <p> number of tasks: {todos.length}</p>
    </div>
  )
}

export default ListTask