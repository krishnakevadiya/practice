//store the products array in localstorage as "data"
function products(b,n,p,i){
    this.brand=b;
    this.name=n;
    this.price=p;
    this.image=i;




}
function storeData(event){
    event.preventDefault();
    let form=document.getElementById("product_form");

    let brand =form.product_brand.value;
    let name=form.product_name.value;
    let price=form.product_price.value;
    let image=form.product_image.value;
    console.log(brand,name,price,image)
    let s1= new products(brand,name,price,image);
    let data=JSON.parse(localStorage.getItem("data"))||[];
    data.push(s1)
    localStorage.setItem("data",JSON.stringify(data));
   
}
