let data = JSON.parse(localStorage.getItem("items")) || [];
let sum = 0;
let total = document.querySelector("#cart_total");
total.innerText=sum;

data.forEach(el => {
    let cart = document.querySelector("#cart");
    let div = document.createElement("div");
    let img = document.querySelector("img");
    let price = document.querySelector("p");
    let name = document.querySelector("h3");
    let btn = document.querySelector("button");
    btn.setAttribute("class","remove");
    btn.innerText = "Remove"
    img.src=el.image;
    price.innerText=el.price;
    name.innerText=el.name;
    sum+=price;

    div.append(img,name,price,btn);
    cart.append(div);
});