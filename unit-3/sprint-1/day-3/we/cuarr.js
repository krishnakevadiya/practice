function MyArray(){

    Object.defineProperty(this, "length" ,{
     enumerable:false 
    })
 
    this.length=arguments.length
 
    for(let i=0;i<arguments.length;i++){
      this[i]=arguments[i];
      
        
 
    }
 
 }
 let myarray=new MyArray(4,5,6,5);
  
 MyArray.prototype.push=function(val){
   var len=this.length;
   this[len]=val;
   return myarray
 }
 myarray.push(1);
 


 console.log("myarray:",Object.values(myarray))
