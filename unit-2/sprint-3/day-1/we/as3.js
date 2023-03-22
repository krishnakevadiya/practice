let newArr=[1,2,3]

let getOdd=function(el){
    return el%2==1
}
let res=newArr.filter(getOdd)
console.log(res)