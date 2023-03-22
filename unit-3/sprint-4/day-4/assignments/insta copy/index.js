import {navbar} from "./component/navbar.js";
import append from "./script/append.js"
console.log(navbar);
let con  = document.getElementById("posts");
let current_p =1;
let nav = document.getElementById("navbar");
nav.innerHTML = navbar();
const datalav = async ()=>{
    try{
        let res= await fetch(`http://localhost:3000/posts?_page=${current_p}&_limit=3`);
        let data = await res.json();
        append(data,con)
        console.log(data);
    }catch(e){
        console.log(e);
    }
}
datalav();
document.getElementById("next").addEventListener("click",async function(){
    current_p++;
    try{
        let res= await fetch(`http://localhost:3000/posts?_page=${current_p}&_limit=3`);
        let data = await res.json();
        append(data,con)
        console.log(data);
    }catch(e){
        console.log(e);
    }

})
document.getElementById("back").addEventListener("click",async function(){
    current_p--;
    try{
        let res= await fetch(`http://localhost:3000/posts?_page=${current_p}&_limit=3`);
        let data = await res.json();
        append(data,con)
        console.log(data);
    }catch(e){
        console.log(e);
    }

})
