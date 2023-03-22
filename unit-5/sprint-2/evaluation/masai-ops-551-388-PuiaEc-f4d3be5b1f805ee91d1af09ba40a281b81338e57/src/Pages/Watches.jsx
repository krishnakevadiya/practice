import { getwatches } from '../Redux/AppReducer/action';
import React, { useEffect } from 'react'
import Filter from "../Components/Filter";
import {useDispatch, useSelector } from "react-redux";
import SingleWatch from "./SingleWatch";
import { useLocation, useSearchParams } from 'react-router-dom'
const Watches = () => {
  const watches = useSelector((store) => store.AppReducer.watches);
  const location=useLocation();
  const [serchParams]=useSearchParams()
  console.log(location);
  useEffect(()=>{
    
    let paramobj={
      
      params:{
        category:serchParams.getAll("category"),
        
      }
    }
    dispatch(getwatches(paramobj))
  },[location.search])
  console.log(Watches)
  
  const dispatch=useDispatch();
  return (
    <div>
      <Filter />
      <div>
        {/* Map through the watch list here using WatchCard Component */}
        {watches.length > 0 &&
        watches.map((el) => {
          return <SingleWatch key={el.id} watches={el} />;
        })}
     
      </div>
    </div>
  );
};

export default Watches;
