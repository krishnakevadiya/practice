import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const FilterCom = () => {
   
    const [searchParams, setSearchParams] =useSearchParams();
    const initalCategory = searchParams.getAll('category');
    const initalSort = searchParams.getAll('sort');
    const [category, setCategory] =useState(initalCategory||[])
    const [sort, setSortBy] = useState(initalSort[0]||'');
    
   
    const handlerFilterCheckbox =(e) =>{
        const newCategory =[...category]
        if(newCategory.includes(e.target.value)){
            newCategory.splice(newCategory.indexOf(e.target.value),1)
        }
        else {
            newCategory.push(e.target.value)
        }
        setCategory(newCategory)
    }
    
    const handleSort = (e)=>{
        setSortBy(e.target.value);
    }


    useEffect(()=>{
        let params = {};
        params.category = category;
       sort && ( params.sort = sort);
        setSearchParams(params)
    },[category,  setSearchParams,sort])
  return (
    <div>
    <div>
      <h3>Filter Components</h3>
      <div>
        <input 
            type="checkbox" 
            value="Novel"
            checked ={category.includes('Novel')}
            onChange={handlerFilterCheckbox}

            />
        <label>Novel</label>
      </div>
      <div>
        <input 
            type="checkbox" 
            value="Motivational"
            checked={category.includes('Motivational')}
            onChange={handlerFilterCheckbox}
            />
        <label>Motivational</label>
      </div>
      <div>
        <input 
            type="checkbox" 
            value="Science_Fiction"
            checked={category.includes('Science_Fiction')}
            onChange={handlerFilterCheckbox}
            />
        <label>Science Fiction</label>
      </div>
      <div>
        <input 
            type="checkbox" 
            value="Thriller"
            checked={category.includes('Thriller')}
            onChange={handlerFilterCheckbox}
            />
        <label>Thriller</label>
      </div>
      </div>
      <h3>Sort Component</h3>
      <div onChange={handleSort}>
        <input type="radio" value="asc" name= "sortBy" 
            defaultChecked={sort==='asc'}
        />
        <label>Ascending</label>
        <br />
        <input type="radio" value="desc" name= "sortBy"
        defaultChecked={sort==='desc'}
         />
        <label>Descending</label>
      </div>
    </div>

  )
}

export default FilterCom
