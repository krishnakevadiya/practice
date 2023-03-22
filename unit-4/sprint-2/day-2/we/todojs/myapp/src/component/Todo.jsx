import React,{useState} from 'react';
import Addtodo from './Addtodo';
import Todoitem from './Todoitem';
export default function Todo() {
    // const [todos, setTodos] = useState([]);
    const [dataa, setDataa] = useState([]);
    
    const handleaddtodo = async (text) =>{
        const newitem = {
            id: Math.random() + Date.now() + text ,
            title : text,
            status: false,
        };
        let res = await fetch(`http://localhost:3000/posts`,{
            method:'POST',
            body:JSON.stringify(newitem),
            headers:{
                'Content-Type':'application/json',
            }
        })
        let data = await res.json();
        console.log(data)
        // setData(await res.json());
        // console.log(data);
        // setTodos([...todos,newitem]);
    };
    const datalav = async ()=>{
        try{
            let res= await fetch(`http://localhost:3000/posts`);
            setDataa(await res.json());
            // append(data,con)
            // console.log(data);
        }catch(e){
            console.log(e);
        }
    }
    datalav();
    // console.log(todos)
  return (
    <div id="container">
        <Addtodo handleAddTodo={handleaddtodo}/>
        <div>
            {dataa.map((todo) =>(
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