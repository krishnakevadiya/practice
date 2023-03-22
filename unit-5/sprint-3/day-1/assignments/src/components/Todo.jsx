import {useState}from 'react';
import Todoitems from './Todoitems';
const initialState=[
    {id:1,title:"learn react",status:false},
    {id:2,title:"learn redux",status:false},
    {id:3,title:"learn js",status:false}

]
export const Todo = () => {
 const [todos, setTodos] = useState(initialState);
 const [CurrentTodos, setCurrentTodos] = useState("");
  const handlechange=(e)=>{
    setCurrentTodos(e.target.value)
  }

  const handleAddTask=()=>{
    const payload={
        id:todos.length+1,
        status:false,
        title:CurrentTodos,
    }
    setTodos([...todos,payload]);
    setCurrentTodos("");
  }


  const handleToggle=(id)=>{
    let newTodos=todos.map((item)=>{
        return item.id===id?{...item,status:!item.status}:item;
    })
    setTodos(newTodos)
  }

  const handleDelete=(id)=>{
    let newTodos=todos.filter((item)=>item.id!==id);
    setTodos(newTodos);
  }
  

  return (
    <div>
    <div>Todo</div>
    <input value={CurrentTodos} onChange={handlechange}/>
    <button onClick={handleAddTask}>ADD</button>
    {todos.length&&
    todos.map((item)=>{
      return<Todoitems key={item.id} {...item}
       handleDelete={handleDelete}
        handleToggle={handleToggle}/>
    })}
    
    </div>
  )}

