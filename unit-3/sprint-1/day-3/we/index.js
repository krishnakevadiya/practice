let color=["red",'blue','yellow'];
  

    let myMap=function(callback){
      let arr=[];
      for(let i=0;i<this.length;i++){
          arr.push(callback(this[i],i,this))
      }
      return arr
    }
  
    Array.prototype.myMap=myMap;
  
    let newcolor=color.myMap(function(color,i,arr){
      return color
    })
  
  
    console.log(newcolor)
  
  Array.prototype.myfilter=function(callback){
      let arr=[];
       for(let i=0;i<this.length;i++){
         {
          if(callback(this[i]==true))
             
             arr.push(this[i]);
           }
       }
      
       return arr;
     }
     var a=[5,43,23,24,4];
     var res=a.myfilter(function(i,el){
            return i%2==0
     })
      
     console.log(res)
  
  Array.prototype.myReduce=function(cb){
      let a=0;
      for(let i=0;i<this.length;i++){
          cb(a=a+this[i]);
      }
      return a
  }
  let arr1=[2,3,4,5];
  let res1=arr1.myReduce(function(acc,i){
      return acc+i;
  })
  console.log(res1);
  
  Array.prototype.myforeach = function(callback){
      //this keyword reference to the array itself
      for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
      }
    }
    let arr=["a",'b','c'];
    let result=arr.myforeach(function(el,i,array){
      console.log(el,i,array)
    })