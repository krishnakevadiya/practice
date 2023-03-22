import {useEffect} from 'react'
import { getTodos } from '../Redux/action';
import {useDispatch, useSelector} from 'react-redux';
import Todoinput from './TodoInput';
import Todolist from './Todolist';
const Todo = () => {
const dispatch=useDispatch();
const isLoading=useSelector((store)=>store.isLoading);
    useEffect(()=>{
       dispatch(getTodos)
    },[]);
    if(isLoading){
        return <h2>...Loading</h2>
    }
  return (
    <div>
      <h1>Todos</h1>
      <Todoinput/>
      <Todolist/>
    </div>
  )
}

export default Todo
