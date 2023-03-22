// (`https://www.omdbapi.com/?apikey=903a510e&s=${tr}&type=movie`

const  search=async()=>{
    try{
        let data=await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=in`)
        let res=await data.json()
      
         append(res.articles)   
         console.log(res.articles)   

    }catch(e){
        console.log(e)
}
}
search()
const append=(data)=>{
    
let dunu=document.getElementById("box");
     dunu.innerHTML=null;
    data.forEach(({urlToImage,author})=>{

        let div=document.createElement("div");
        let aut=document.createElement("h2");
        aut=author;
        let img=document.createElement("img");
        img.src=urlToImage

        div.append(aut,img);
        box.append(div);
    })

    
}
// https://masai-api.herokuapp.com/news?q={query}

const search_news=document.getElementById("qurry")
.addEventListener("change",()=>{
    input_search()
})

 input_search= async()=>{
     let qurry=document.getElementById("qurry").value;

    let res=await fetch(` https://masai-api.herokuapp.com/news?q=tesla`);
    let data=await res.json()
    append(data.articles)

}