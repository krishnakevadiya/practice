import React from 'react'

const expensiveOperation=(ms)=>{
    const start=Date.now();
    while(Date.now()-start<ms){
      continue;
    }
    return true;
}

const Todoitems = ({id,title,status,handleDelete,handleToggle}) => {
    expensiveOperation(200)
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
    <div>{title}</div>
    <div>{status? "True":"False"}</div>
    <button onClick={()=>handleDelete(id)}>DELETE</button>
    <button onClick={()=>handleToggle(id)}>Toggle</button>
  
    </div>
  )
}
const cheackEqulity=(prevprops,currentprops)=>{
    return(
        prevprops.status===currentprops.status&&
        prevprops.title===currentprops.title
    )

}

export default React.memo( Todoitems,cheackEqulity)
