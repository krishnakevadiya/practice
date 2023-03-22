let udata = JSON.parse(localStorage.getItem("user"));
let amount = document.getElementById("wallet_balance");
        amount.innerText=udata.amount;
const append = ()=>{
    let data = JSON.parse(localStorage.getItem("purchase"))||[];
    let k = document.getElementById("purchased_vouchers");
    k.innerHTML=null;
    data.forEach((el)=>{
        let name = document.createElement("p");
        name.innerText=el.name;
        let image = document.createElement("img"); 
        image.src=el.image;
        let price = document.createElement("p");
        price.innerText=el.price;
        let div = document.createElement("div");
        div.append(image,name,price);
        k.append(div);
    })
}
append();