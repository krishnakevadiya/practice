import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {login} from '../REDUX/AuthData/action'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const location = useLocation();

  const comingForm = location.state?.data || "/";
  // console.log(location)
  // console.log(comingForm)
  const handleSubmit =(e)=>{
    e.preventDefault();
    if(email && password){
      dispatch(login({email, password})).then((r)=>{
        navigate(comingForm);
        console.log(comingForm)
      });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div>
        <label>User Email</label>
        <input 
        type="email" 
        value={email} 
        onChange={(e)=>setEmail(e.target.value)} 
        />
      </div>
      <div>
        <label>User Password</label>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
      </div>
     <button type='submit'>LOGIN</button>
      </form>
    </div> 
  )
}

export default Login