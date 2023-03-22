import React from 'react'

export default function Todoitem({title,status,id}) {
  const updatecaption = async (id,ss) =>{
    try{
        // let idc = document.getElementById("upid").value;
        // let capc = document.getElementById("upcaption").value;
        let seda = {
            status:ss,
        };

        let res = await fetch(`http://localhost:3000/posts/${id}`,{
            method:'PATCH',
            body:JSON.stringify(seda),
            headers:{
                'Content-Type':'application/json',
            },
        });
        let data = await res.json();
        if(ss){
          let btn=document.getElementById("notcom");
          btn.style.border="10px solid rgb(135,255,197)";
        }else{
          let btn=document.getElementById("com");
          btn.style.border="10px solid rgb(127,123,255)";
        }
        console.log(data)
    }catch(e){
        console.log(e);
    }
}
  const comst=()=>{
    let ans= window.confirm("DO YOU COMPLETE THE TASK?");
    if(ans===true){
      if(status===false){
        // status=true;
        updatecaption(id,true);
        console.log(status);
        
      }else{
        updatecaption(id,false);
        console.log(status);
        
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
