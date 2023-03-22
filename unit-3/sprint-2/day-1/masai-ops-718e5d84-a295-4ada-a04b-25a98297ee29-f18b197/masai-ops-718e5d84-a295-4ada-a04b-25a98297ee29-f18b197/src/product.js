function Product(name,brand,price,description,sold) {
  // Complete the constructor function
this.name = name;
this.brand = brand;
this.price = price;
this.description= description;
this.sold= sold || false;
}

// Create these two methods in Product prototype :-
Product.prototype.changePrice = function(price){
  this.price = price;
};
Product.prototype.toggleStatus = function(){
if(this.sold == false){
  this.sold = true;
}else{
  this.sold = false;
}
};
// changePrice
// toggleStatus

// Do not change this
export default Product;