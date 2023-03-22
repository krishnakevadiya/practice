let arr=[2, 4, 5, 3, 6, 8]
let res=arr.filter(function(ele,i){
    return ele%2==0 && i%2==0;

});

console.log(res)