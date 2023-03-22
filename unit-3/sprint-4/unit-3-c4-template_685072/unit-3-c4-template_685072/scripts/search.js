// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js";
let navbar_div=document.getElementById("navbar");
navbar_div.innerHTML=navbar()

let four=document.getElementById("aee");
three.addEventListener("click",function(){
    ck()
})

const ck=async()=>{
    try{
        const qurry=document.getElementById("news").value;
        
        let res=await fetch(`https://masai-api.herokuapp.com/news?q={query} `);
        const data=await res.json();
        console.log("datakkrr")
         
    
    }catch(e){
        console.log(e)

    }
}
