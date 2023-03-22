import React from 'react'
const updatetodo = async () =>{
    try{
        let idc = document.getElementById("upid").value;
        let capc = document.getElementById("upcaption").value;
        let seda = {
            title:capc,
        };
        let res = await fetch(`http://localhost:3000/posts/${idc}`,{
            method:'PATCH',
            body:JSON.stringify(seda),
            headers:{
                'Content-Type':'application/json',
            },
        });
        let data = await res.json();
        console.log(data)
        // ref=true;
    }catch(e){
        console.log(e);
    }
}
export default function Upadate() {
  return (
    <div><h3>Upadate Caption</h3>
    <input type="text" id="upid"placeholder="id"/>
    <input type="text" id="upcaption" placeholder="title"/>
    <button onClick={updatetodo}>Update</button></div>
  )
}
