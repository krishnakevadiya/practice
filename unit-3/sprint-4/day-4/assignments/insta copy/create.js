// import { json } from "body-parser";
import {navbar} from "./component/navbar.js";
// console.log(navbar);
let nav = document.getElementById("navbar");
let img_url;
nav.innerHTML = navbar();
let api_key= "8b1f01edede5586a463d22be7a935729";
let a=document.getElementById("image").addEventListener("change",handelimage);
let adf=document.getElementById("Create_btn");
adf.addEventListener("click",function (){
    addpost();
});
adf.disabled=true;
async function handelimage(e){
    try{
        let image = document.getElementById("image");
        let ac_img = image.files[0];
        
        let form = new FormData()
        form.append('image',ac_img)
        
        let res = await fetch(`https://api.imgbb.com/1/upload?key=${api_key}`,{
            method:'POST',
    body:form,
    })
    let data = await res.json();
    console.log(data);
    img_url=data.data.display_url;
    console.log(img_url);
    adf.disabled=false;
}catch(e){
    console.log(e);
}


}
let dib = document.getElementById("dbi");
dib.addEventListener("click",function(){
    delpost();
});

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
    }catch(e){
        console.log(e);
    }
}

let uib = document.getElementById("upcap");
uib.addEventListener("click",function(){
    updatecaption();
});

const updatecaption = async () =>{
    try{
        let idc = document.getElementById("upid").value;
        let capc = document.getElementById("upcaption").value;
        let seda = {
            caption:capc,
        };
        let res = await fetch(`http://localhost:3000/posts/${idc}`,{
            method:'PATCH',
            body:JSON.stringify(seda),
            headers:{
                'Content-Type':'application/json',
            },
        });
        let data = await res.json();
    }catch(e){
        console.log(e);
    }
}
let rib = document.getElementById("rtda");
rib.addEventListener("click",function(){
    retrivedata();
});

const retrivedata = async () =>{
    try{
        let idc = document.getElementById("rtid").value;
        let trash = JSON.parse(localStorage.getItem("trash"))||[];
        let send_tdata;
        for(let i=0;i<trash.length;i++){
            if(idc==trash[i].id){
                send_tdata=trash[i];
            }
        }
        let res = await fetch(`http://localhost:3000/posts`,{
        method:'POST',
        body:JSON.stringify(send_tdata),
        headers:{
            'Content-Type':'application/json',
        }
    })
    let data = await res.json();
    }catch(e){
        console.log(e);
    }
}


const addpost = async() =>{
    let id = document.getElementById("id").value;
    let caption = document.getElementById("caption").value;
    if(img_url!=undefined){
        let loader = document.getElementById("loader");
        loader.innerHTML=null;
    }
    let send_tdata={
        id,
        caption,
        img_url,
    };

    let res = await fetch(`http://localhost:3000/posts`,{
        method:'POST',
        body:JSON.stringify(send_tdata),
        headers:{
            'Content-Type':'application/json',
        }
    })
    let data = await res.json();
    console.log(data);
    adf.disabled=true;
}
