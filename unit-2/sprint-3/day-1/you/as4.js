let arr=["A", "Good", "Problem"]
let res=arr.filter(function(ele,index){
    return ele.length%2==1;
    

})
 let sum=res.reduce(function(acc,ele){
    return acc.length+ele.length;

 
})
console.log(sum);