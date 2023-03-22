import React,{useEffect,useState} from "react";
import {  useDispatch, useSelector,shallowEqual } from 'react-redux'
import axios from 'axios';
import TaskItems from "../Components/TaskItems";
import {getTodoError, getTodoRequest, getTodoSuccess} from "../Redux/action"
const Homepage = () => {
  const dispatch = useDispatch();
  const {tasks,isLoading} = useSelector(store=>{
    return {
        tasks:store.tasks,
        isLoading:store.isLoading,
    }
        
},shallowEqual)
const [data, setdata] = useState([])
  const getTodos=()=>{
    dispatch(getTodoRequest())
    axios.get("http://localhost:8080/tasks").then(r=>{
      setdata(r.data)
    dispatch(getTodoSuccess(r.data))
    }).catch(e=>{
        dispatch(getTodoError())
    })
}
useEffect(() => {
getTodos();
setcount(tasks.length);
},[])
const [count, setcount] = useState(0)
console.log(count)
  return (
    <>
      {isLoading  && <div>Loading.......</div> }
      {data.length>0 && data?.map((item)=>{
          return (
              <TaskItems id={item.id} title={item.title} status={item.status}/>
          )
      })}
    </>
  );
};

export default Homepage;
