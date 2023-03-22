import React from 'react'

export default function Deletetodo() {
  

const delpost = async () =>{
    try{
        let idtd = document.getElementById("did").value;
        let ress = await fetch(`http://localhost:3000/posts/${idtd}`)
        let datas = await ress.json();
        let trash = JSON.parse(localStorage.getItem("trash"))||[];
        trash.push(datas);
        localStorage.setItem("trash",JSON.stringify(trash));
        let res = await fetch(`http://localhost:3000/posts/${idtd}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json',
            },
        });
        let data = await res.json();
        console.log(data);
    }catch(e){
        console.log(e);
    }
}
  return (
    <>
    <div style={{margin:"10px",padding:"10px"}}>
    <h3>Delete Post</h3>
    <input type="text" id="did" placeholder="enter id that a should be delter"/>
    <button onClick={delpost}>deletepost</button>
    </div>
    </>
  )
}
