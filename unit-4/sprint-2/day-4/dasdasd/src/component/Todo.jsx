import React,{useState} from 'react';
import Addtodo from './Addtodo';
import Deletetodo from './Deletetodo';
import Todoitem from './Todoitem';
import Upadate from './Upadate';
export default function Todo() {
    // const [todos, setTodos] = useState([]);
    const [dataa, setDataa] = useState([]);
    const [load, setLoad] = useState(false);
    const [page, setPage] = useState(1);
    
    // const [count, setCount] = useState(1);
    
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
    React.useEffect(()=>{

        datalav();
      },[page]);
      
    const datalav = async ()=>{
        try{
            setLoad(true)
            let res= await fetch(`http://localhost:3000/posts?_page=${page}&_limit=5`);
            setDataa(await res.json());
            setLoad(false);
        }catch(e){
            console.log(e);
            setLoad(false);
        }
    }
    const handlePagechange = (val) => {
        const value = page + val;
        setPage(value);
      };
    // console.log(todos)
    if(load){
        return (
            <h1>Loading</h1>
        )
    }
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
        <div>
        <button
          disabled={page === 1 ? true : false}
          onClick={() => {
            handlePagechange(-1);
          }}
        >
          pahcal
        </button>
        <button disabled>{page}</button>
        <button
          onClick={() => {
            handlePagechange(1);
          }}
        >
          aagal
        </button>
        </div>
        <Deletetodo/>
        <Upadate />
    </div>
  )
}
