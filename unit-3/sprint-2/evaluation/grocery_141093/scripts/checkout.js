/*
Alerts 
0 seconds : Your order is accepted 
3 seconds : Your order is being Packed 
8 seconds : Your order is in transit  
10 seconds : Your order is out for delivery 
12 seconds : Order delivered
*/
document.querySelector("#submit").addEventListener("click", function(){
    alert("Your order is accepted");
});
setTimeout(Alert_1, 3000);
setTimeout(Alert_2, 8000);
setTimeout(Alert_3, 10000);
setTimeout(Alert_4, 12000);

function Alert_1(){
    alert("Your order is being Packed");
}
function Alert_2(){
    alert("Your order is in transit ");
}
function Alert_3(){
    alert("Your order is out for delivery ");
}
function Alert_4(){
    alert("Order delivered");
}