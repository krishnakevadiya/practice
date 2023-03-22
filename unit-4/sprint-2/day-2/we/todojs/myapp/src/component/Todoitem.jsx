import React from 'react'

export default function Todoitem({title,status}) {
  const comst=()=>{
    let ans= window.confirm("DO YOU COMPLETE THE TASK?");
    if(ans===true){
      if(status===false){
        status=true;
        console.log(status);
        let btn=document.getElementById("notcom");
        btn.style.border="10px solid rgb(135,255,197)";
      }else{
        status=false;
        console.log(status);
        let btn=document.getElementById("com");
        btn.style.border="10px solid rgb(127,123,255)";
      }
    }else{
      return;
    }
  }
 
  return (
    <div id='todos'>
        {title}
        {status ? <button onClick={comst} id='com'></button>:<button onClick={comst} id='notcom'> </button>}
    </div>
  )
}