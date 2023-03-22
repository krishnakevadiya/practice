let arr=[1, 2, 3, 4]

let getOdd=function(el){
    return el%2==1;
};
let res=arr.filter(getOdd)
console.log(res)