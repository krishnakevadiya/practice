// api`hGYkAF2MXCWF2UE9vDfaW04Y9ul9BNFw`
// url=`https://api.giphy.com/v1/gifs/trending?api_key=hGYkAF2MXCWF2UE9vDfaW04Y9ul9BNFw&limit=25&rating=g`
let APIKEY=`hGYkAF2MXCWF2UE9vDfaW04Y9ul9BNFw`


const main= async()=>{
    try{
        let response=await fetch(
        `https://api.giphy.com/v1/gifs/trending?api_key=${APIKEY}&limit=25&rating=g`

    );
    let data=await response.json();
    append(data.data)
    console.log(data.data)
    
    }
    catch(e){
        console.log(e)
    }
}
main();
const append=async (data)=>{
    data.forEach(e=>{
        let gif=document.getElementById("gif");
        
        let img=document.createElement("img");
        img.src=e.images.downsized.url;
        img.addEventListener("click",()=>{detail_gif(e.id)})
        gif.append(img)


    })

}
const detail_gif=(id)=>{

localStorage.setItem("details",JSON.stringify(id));

window.location.href="gif.html"
}


const rendom= async()=>{
    let gif=document.getElementById("gif");
    gif.innerHTML=null
 try {let res=await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${APIKEY}&tag=&rating=g`);
    let result=await res.json();
    console.log(result)
    
    
    let img=document.createElement("img");
    img.src=result.data.images.downsized.url;
    img.addEventListener("click",()=>{
        detail_gif(result.data.id)
    })
    console.log(result.data.images.downsized.url)
    gif.append(img)

}catch(e){
    console.log(e)
}
}

const catagory= async()=>{
    
    let sorting=document.getElementById("sorting")
    sorting.innerHTML=null
    let gif=document.getElementById("gif")
    gif.innerHTML=null;
    try{
    let res=await fetch(`https://api.giphy.com/v1/gifs/categories?api_key=${APIKEY}`);
    
    let result=await res.json();
    console.log(result.data)
    localStorage.setItem("catagory",JSON.stringify(result.data))
    let sorting_Z_A=document.createElement("button")
    sorting_Z_A.innerText="Z-A"
    sorting.append(sorting_Z_A)


    let sorting_A_Z=document.createElement("button")
    sorting_A_Z.innerText="A-Z"
    sorting.append(sorting_A_Z)
    let dum;
    sorting_Z_A.onclick=()=>{
        sorting_cat(dum=false);
    }
    sorting_A_Z.onclick=()=>{
        sorting_cat(dum=true);
    }
    // let cat=document.getElementById("catagory")

    // for each is for array of obj and forin is for to acces data in onj
    
   result.data.forEach((e)=>{
    let name=document.createElement("p");
    name.innerHTML=e.name;
    console.log(name)
    let image=document.createElement("img");
    image.src=e.gif.images.downsized.url;
    image.addEventListener("click",()=>{
        detail_gif(e.gif.id)
    })
    gif.append(name,image)
   })
    

    }catch(e){
    console.log(e)
    }
}
const sorting_cat=(dum) =>{
    let data=JSON.parse(localStorage.getItem("catagory"))
     if(dum==true){
        data=data.reverse();
     }
    data=data.reverse();
    let gif=document.getElementById("gif");
    gif.innerHTML=null;
  
    data.forEach((e)=>{
    let name=document.createElement("p");
    name.innerHTML=e.name;
    // console.log(name)
    let image=document.createElement("img");
    image.src=e.gif.images.downsized.url;
    image.addEventListener("click",()=>{
        detail_gif(e.gif.id)
    });
    gif.append(name,image)
   })
}


const gif= async()=>{
   try{ 
    let gif=document.getElementById("gif");
    gif.innerHTML=null

    let query=document.getElementById("search").value
    if(query==""){
        alert("please provide your input")
    }
    let res=await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${query}&limit=25&offset=0&rating=g&lang=en`);
    let data=await res.json()
    console.log(data.data);
    data.data.forEach(e =>{
           let name=document.createElement("p");
           name.innerHTML=e.title;
           console.log(name)
           let image=document.createElement("img");
           image.src=e.images.downsized.url;
           image.addEventListener("click",()=>{
               detail_gif(e.id)
           })
           gif.append(name,image)
          
    })
    }
    catch(e){
        console.log(e)
        }
        
    }



