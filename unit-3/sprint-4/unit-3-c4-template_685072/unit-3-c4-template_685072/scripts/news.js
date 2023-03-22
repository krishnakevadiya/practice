// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js";

let div_nav = document.querySelector("#navbar");
div_nav.innerHTML=navbar();

// Search code 
let search = document.querySelector("#search_input");
search.addEventListener("change", ()=>{
    let query = search.value;
    async function searchData() {
        let res = await fetch(`https://masai-api.herokuapp.com/news?q=${query}`);
        let data = await res.json();
        let org_data = await data.articles;
        let main = [];
        for(let i =0;i<data.articles.length;i++){
            main.push(org_data[i]);
        }
        document.querySelector("#results").innerHTML=null;
        main.forEach(el => {
            let results = document.querySelector("#results");
            let div = document.createElement("div");
            // click data code 
            //end click -----------------
            div.setAttribute("class", "news");
            let img = document.createElement("img");
            let title = document.createElement("h3");
            let dis = document.createElement("p");
            let cont = document.createElement("p");
            img.src = `${el.urlToImage}`;
            title.innerText =`${el.title}`;
            dis.innerText=`${el.description} ${el.content}`;
            div.append(img,title,dis);
            results.append(div);
        });
    }
    searchData();
});

let Luudata = JSON.parse(localStorage.getItem("news"));
document.querySelector("#detailed_news").innerHTML = null;
for(let i = 0;i<Luudata.length;i++){
    let results = document.querySelector("#detailed_news");
    let img = document.createElement("img");
    let title = document.createElement("h3");
    let dis = document.createElement("p");
    let cont = document.createElement("p");
    img.src = `${Ldata[i].urlToImage}`;
    title.innerText =`${Ldata[i].title}`;
    dis.innerText=`${Ldata[i].description}${Ldata[i].content}`;
    results.append(img,title,dis);
}

console.log(Luudata);