import navbar from "./component/navbar.js";
let navbar_div=document.getElementById("navbar")
navbar_div.innerHTML=navbar()


async function serchmovies(){
    try {
     let tr=document.getElementById("ms").value;
   
     let rus=await fetch(`https://www.omdbapi.com/?apikey=903a510e&s=${tr}&type=movie`);
     let data = await rus.json();
     let acdata = data.Search;
     console.log(acdata);
     opop(acdata);
    } catch (error) {
     console.log(error);
    }
}

serchmovies()
 
   
   function opop(acdata){
     let container= document.querySelector("#disply");
     container.innerHTML=null;
     acdata.forEach(function(el){
      let dive=document.createElement("div");
      let image=document.createElement("img");
      image.src=el.Poster
      let name=document.createElement("h1");
      name.innerText=el.Title;
      let rating=document.createElement("h3");
      rating.innerText=el.Year;
      dive.append(image,name,rating);
      container.append(dive)
  
     })
  
    }
    
    async function notop(){
     try {
      let tr=document.getElementById("ms").value;
    
      let rus=await fetch(`https://www.omdbapi.com/?apikey=903a510e&s=${tr}&type=movie`);
      let data = await rus.json();
      let acdata = data.Search;
      console.log(acdata);
      opopop(acdata);
     } catch (error) {
      console.log(error);
     }
  
  
    }
    function opopop(acdata){
      let container= document.querySelector(".search");
      if(acdata===undefined){
       container.innerHTML=null;
       return false;
      }
      container.innerHTML=null;
      acdata.forEach(function(el){
       let dive=document.createElement("div");
       let image=document.createElement("img");
       image.src=el.Poster
       let div2=document.createElement("div");
 
       let name=document.createElement("p");
       name.innerText=el.Title;
       let rating=document.createElement("p");
       rating.innerText=el.Year;
       div2.append(name,rating)
       dive.append(image,div2);
       container.append(dive)
   
      })
   
     }
     let id;
     function debounce(notop,delay){
       if(id){
         clearTimeout(id)
       }
       id=setTimeout(function (){
        notop();
 
       },delay)
     }