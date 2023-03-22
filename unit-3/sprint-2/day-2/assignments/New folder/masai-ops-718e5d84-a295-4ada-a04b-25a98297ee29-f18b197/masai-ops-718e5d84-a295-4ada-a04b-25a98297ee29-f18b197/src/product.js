function Product(name,brand,price,description,sold) {
  this.name=name;
  this.brand=brand;
  this.price=price;
  this.description=description;
  this.sold=sold||false;
  // Complete the constructor function
}

// Create these two methods in Product prototype :-
// changePrice
// toggleStatus
Product.changePrice=function(new_price){
  this.price=new_price;
}
Product.togglleStatus=function(){
  if(this.sold==false){
    this.sold=true;
  }else{
    this.sold=false
  }
}

// Do not change this
export default Product;
