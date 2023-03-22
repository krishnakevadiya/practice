//Ude Import export (MANDATORY)
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
            div.addEventListener("click", ()=> {
                localStorage.setItem("news", JSON.stringify(el));
                window.location.href ='./news.html';
            });
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
async function InTop() {
    let res = await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=in`);
    let data = await res.json();
    let org_data = await data.articles;
    let main = [];
    for(let i =0;i<data.articles.length;i++){
        main.push(org_data[i]);
    }
    main.forEach(el => {
        let results = document.querySelector("#results");
        let div = document.createElement("div");
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

InTop();

document.querySelector("#in").addEventListener("click", ()=>{
    // India 
    document.querySelector("#results").innerHTML=null;
    async function InTop() {
        let res = await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=in`);
        let data = await res.json();
        let org_data = await data.articles;
        let main = [];
        for(let i =0;i<data.articles.length;i++){
            main.push(org_data[i]);
        }
        main.forEach(el => {
            let results = document.querySelector("#results");
            let div = document.createElement("div");
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

    InTop();
});


document.querySelector("#ch").addEventListener("click", ()=>{
    // China
    document.querySelector("#results").innerHTML=null;
    async function InTop() {
        let res = await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=ch`);
        let data = await res.json();
        let org_data = await data.articles;
        let main = [];
        for(let i =0;i<data.articles.length;i++){
            main.push(org_data[i]);
        }
        main.forEach(el => {
            let results = document.querySelector("#results");
            let div = document.createElement("div");
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

    InTop();
});


document.querySelector("#us").addEventListener("click", ()=>{
    // Usa
    document.querySelector("#results").innerHTML=null;
    async function InTop() {
        let res = await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=us`);
        let data = await res.json();
        let org_data = await data.articles;
        let main = [];
        for(let i =0;i<data.articles.length;i++){
            main.push(org_data[i]);
        }
        main.forEach(el => {
            let results = document.querySelector("#results");
            let div = document.createElement("div");
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

    InTop();
});


document.querySelector("#uk").addEventListener("click", ()=>{
    // Uk
    document.querySelector("#results").innerHTML=null;
    async function InTop() {
        let res = await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=uk`);
        let data = await res.json();
        let org_data = await data.articles;
        let main = [];
        for(let i =0;i<data.articles.length;i++){
            main.push(org_data[i]);
        }
        main.forEach(el => {
            let results = document.querySelector("#results");
            let div = document.createElement("div");
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

    InTop();
});
document.querySelector("#nz").addEventListener("click", ()=>{
    // Nz
    document.querySelector("#results").innerHTML=null;
    async function InTop() {
        let res = await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=nz`);
        let data = await res.json();
        let org_data = await data.articles;
        let main = [];
        for(let i =0;i<data.articles.length;i++){
            main.push(org_data[i]);
        }
        main.forEach(el => {
            let results = document.querySelector("#results");
            let div = document.createElement("div");
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

    InTop();
});