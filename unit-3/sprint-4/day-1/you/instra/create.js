
import {navbar} from "./components/navbar.js";
let nav=document.getElementById("navbar");
nav.innerHTML=navbar();


let nave=document.getElementById("navbar");
nave.innerHTML=navbar();
 let inp=document.getElementById("image");
 inp.addEventListener("change",function(){
    hendleImage(event);
 })


const hendleI= async(event)=>{


console.log(`event:`,event);




}
let image=document.getElementById("image");
console.log(image)
//     try{
//     let image=document.getElementById("image");
//   let actual_image=image.files(0);
  
//   let form=new FormData()
//   form.append("img",actual_image);
  
//   let res=await fetch(`https://api.imgbb.com/1/upload?key=9cdbd6b37eb74c379d806eb5c148ee46`,{
//   method:"post",
//   body:form,
// });
// let data=await res.json();
// img_url=data.data.displa_url;
// console.log(data)
//     }catch(e){
//      console.log(e)
//     }
// }