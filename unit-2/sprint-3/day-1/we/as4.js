let arr=[2,3,4]
let combine=function(acc,el){
    return acc*el
}
let res=arr.reduce(combine)
console.log(res)