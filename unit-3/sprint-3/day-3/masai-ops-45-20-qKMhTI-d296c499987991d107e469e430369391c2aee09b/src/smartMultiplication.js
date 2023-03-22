
function smartMultiply(param1, param2, param3) {
    if(param3==undefined){
        return function (){
            return param1*param2
        }
    }
    if(param2==undefined && param1==undefined){
        return param3*2;
    }
   return function smartMultiply(param4){
    if(param4==undefined){
        return param1*param2*param3;
    }
    return param1*param2*param3*param4
    }
}


export default smartMultiply
