import React from 'react'
import { useSelector } from 'react-redux'

const Todolist = () => {
    const todos=useSelector((store)=>store.todos)
  return (
    <div>
      {todos.length>0&&                                   
      todos.map((item)=>{
        return (
            <div key={item.id}>
                {item.title} - {item.status?"true":"false"}
                <button>Toggle</button>
                <button>Delete</button>
            </div>
        )
      })}
    </div>
  )
}

export default Todolist
