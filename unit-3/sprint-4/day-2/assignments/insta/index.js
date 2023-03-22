import {navbar} from "./component/navbar.js";
import append from "./script/append.js"
console.log(navbar);
let con  = document.getElementById("posts");

let nav = document.getElementById("navbar");
nav.innerHTML = navbar();
const datalav = async ()=>{
    try{
        let res= await fetch("http://localhost:3000/posts");
        let data = await res.json();
        append(data,con)
        console.log(data);
    }catch(e){
        console.log(e);
    }
}
datalav();

