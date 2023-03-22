function database(){
    let data=JSON.parse(localStorage.getItem("data"))||[];
    let products_data=document.querySelector("#products_data");
    products_data.innerHTML=null;
    data.forEach(function(el,index){
        let div=document.createElement("div")
        let product_brand=document.createElement("p")
        product_brand.innerText=el.brand;
        let product_name=document.createElement("p")
        product_name.innerText=el.name;
        let product_price=document.createElement("p")
        product_price.innerText=el.price;
        let product_image=document.createElement("img")
        product_image.src=el.image;

        let btn=document.createElement("button")
        btn.innerText="remove";
        btn.addEventListener("click",function(){
            remove(index)
        })
        div.append(product_brand,product_name,product_price,product_image,btn);
        products_data.append(div)
    })
}
database();