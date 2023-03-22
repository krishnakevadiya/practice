 function MyArray(){
    Object.defineProperty(this,'length',{
        value:0,
        enumerable:false,
        writable:true
    });
}

MyArray.prototype.push = function(el){
    this[this.length] =el;
    this.length++;
    return this.length;
}


MyArray.prototype.pop = function(){
    var popele =this[this.length]
 function MyArray(){
    Object.defineProperty(this,'length',{
        value:0,
        enumerable:false,
        writable:true
    });
}
}

MyArray.prototype.push = function(el){
    this[this.length] =el;
    this.length++;
    return this.length;
}


MyArray.prototype.pop = function(){
    var popele =this[this.length]
    delete this[this.length]
    return popele;
}

MyArray.prototype.map = function(){

}

MyArray.prototype.filter = function(){
  
}

MyArray.prototype.reduce = function(){
  
}

export default MyArray
