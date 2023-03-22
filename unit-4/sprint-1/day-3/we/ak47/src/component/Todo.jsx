import React,{useState} from 'react';
import Addtodo from './Addtodo';
import Todoitem from './Todoitem';
export default function Todo() {
    const [todos, setTodos] = useState([]);

    const handleaddtodo = (text) =>{
        const newitem = {
            id: Math.random() + Date.now() + text ,
            title : text,
            status: false,
        };
        setTodos([...todos,newitem]);
    };
    console.log(todos)
  return (
    <div>
        <Addtodo handleAddTodo={handleaddtodo}/>
        <div>
            {todos.map((todo) =>(
                <Todoitem
                key={todo.id}
                title={todo.title}
                status={todo.status}
                id={todo.id}
                />
            ))}
        </div>
    </div>
  )
}
