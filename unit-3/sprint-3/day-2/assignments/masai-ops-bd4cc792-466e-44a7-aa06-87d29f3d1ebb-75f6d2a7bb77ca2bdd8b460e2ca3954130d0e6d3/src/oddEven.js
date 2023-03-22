function getData(data) {
    return new Promise(function(resolve,reject){
 
         setTimeout(function(){
             if(data%2==0){
                 resolve("even");
             }
         },4000);
         setTimeout(function(){
             if(data%2!=0){
                 resolve("odd");
             }
         },2000);
    });
 }
 
 export default getData
