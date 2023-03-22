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
