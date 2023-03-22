import React from 'react'
import { useTodos } from '../hooks/useTodos'

const Todos2 = () => {
  //use the initialData that you are getting from the props to be used, as the initial argument for useTodos hook
  const {
    
    title,
    data,
    changeHnalder,
    addData, 
    clearData, 
    removeByIndex,
}
 = useTodos()
  return (
    <div data-testid='todos2'>
      <h1 data-testid='todos2-label'>Todos-2</h1>
      <input data-testid='todos2-input'     type="text"
        name="title"
        value={title}
        onChange={changeHnalder}/>
      <button data-testid='todos2-add' onClick={addData}>Add Task</button>
      <div>
        {/* Loop through the todo data that you are getting from the useTodos hook to render the tasks with their name, and a delete button with each task */}
        {
        
        data.length > 0 && 
          data.map((ele, index)=>(
            <div style={{display:"flex"}}>
              <div data-testid='todos2-element'>
               
                {/* task name here */}
                {ele.title}
              </div>
              <button data-testid='todos2-delete' onClick={()=>removeByIndex(ele.title)}>Delete</button>
            </div>
         
         ))
        }

      </div>
      <button data-testid='todos2-clear' onClick={clearData}>Clear Todos</button>
    </div>
  )
}

export default Todos2