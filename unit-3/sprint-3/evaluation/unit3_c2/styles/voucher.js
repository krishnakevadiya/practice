const apicall = async ()=>{
    try{
        let res = await fetch(`https://masai-vouchers-api.herokuapp.com/api/vouchers`);
        let data = await res.json();
        console.log(data[0].vouchers);
        append(data[0].vouchers);
    }catch(e){
        console.log(e);
    }
}
apicall();
const append = (data)=>{
    let con = document.getElementById("voucher_list");
    con.innerHTML=null;
    data.forEach((el)=>{
        let name = document.createElement("p");
        name.innerText=el.name;
        let image = document.createElement("img"); 
        image.src=el.image;
        let price = document.createElement("p");
        price.innerText=el.price;
        let btn = document.createElement("button");
        btn.className="buy_voucher";
        btn.innerText="Buy";
        btn.addEventListener("click",()=>{buycupan(el);});
        let div = document.createElement("div");
        div.append(image,name,price,btn);
        con.append(div);
    })
}
let udata = JSON.parse(localStorage.getItem("user"));
let amounts = document.getElementById("wallet_balance");
        amounts.innerText=udata.amount;
const buycupan = (el) =>{
    let udata = JSON.parse(localStorage.getItem("user"));
    if(udata.amount<el.price){
        alert("Sorry! insufficient balance");
        return;
    }
    if(udata.amount>=el.price){
        alert("Hurray! purchase successfull");
        let newudata = {
            name:udata.name,
            email:udata.email,
            address:udata.address,
            amount:udata.amount-el.price,
        }

        localStorage.setItem("user",JSON.stringify(newudata));
        let amountva = document.getElementById("wallet_balance");
        amountva.innerText=newudata.amount;
       
       
        let data = JSON.parse(localStorage.getItem("purchase"))||[];
        data.push(el)
        localStorage.setItem("purchase",JSON.stringify(data));
    }
}