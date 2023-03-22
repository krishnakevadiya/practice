

import React from 'react'

export default function Todoitem({title,status}) {
  let comst=()=>{
    let ans=window.confirm("DO YOU COMPLETE THE TASK")
      if (ans===true) {
        status=true;
        let btn=document.getElementById("notcom")
        btn.style.border="10px solid rgb(135,255,197)"

        
      }else{
        return;
      }
  
  } 
 
 
 
  return (
    <div>
        {title}
        {status ? <button onClick={comst}id="com"></button>: <button id="notcom"></button>}
    </div>
  )
}
