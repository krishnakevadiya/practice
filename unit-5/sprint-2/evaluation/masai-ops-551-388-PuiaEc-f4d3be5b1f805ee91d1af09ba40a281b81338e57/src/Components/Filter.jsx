import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'



const Filter = () => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Analog, Digital, Chronograph in the UI
  const [serchParams,setSearchParams]=useSearchParams()//for push in url
  const initialState=serchParams.getAll("category")
 
  const[category,setcat]=useState(initialState||[]) 
 
  // console.log(category)
  const handleFilter=(e)=>{
    //when user change category stored in state 
    // if is alrady pop
    
    let newCatagory=[...category]
    if(newCatagory.includes(e.target.value)){
      newCatagory.splice(newCatagory.indexOf(e.target.value),1)
  
    }else{
      newCatagory.push(e.target.value)
    }
    setcat(newCatagory)
  }
  
  
  // whenever category change i want to change in url...
  useEffect(()=>{ 
    const params={
      category
    }
   
    setSearchParams(params)
  },[category])



  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-testid="filter-category">
        <div>
          <input type="checkbox" value="Analog" onChange={handleFilter} checked={category.includes("Analog")}/>
          <label>Analog</label>
        </div>
        <div>
          <input type="checkbox" value="Digital" onChange={handleFilter} checked={category.includes("Digital")}/>
          <label>Digital</label>
        </div>
        <div>
          <input type="checkbox" value="Chronograph" onChange={handleFilter} checked={category.includes("Chronograph")}/>
          <label>Chronograph</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
