import axios from "axios"
import {GET_WATCHES_DATA_FAILURE} from "./actionType"
import {GET_WATCHES_DATA_REQUEST} from "./actionType"
import {GET_WATCHES_DATA_SUCCESS} from "./actionType"


const getwatchRequestAction=()=>{
    return{type:GET_WATCHES_DATA_REQUEST}
}
const getwatchSuccessAction=(payload)=>{
    return{type:GET_WATCHES_DATA_SUCCESS,payload}
}
const getwatchFailureAction=()=>{
    return{type:GET_WATCHES_DATA_FAILURE}
}

export const getwatches=(param)=>(dispatch)=>{
    dispatch(getwatchRequestAction());
    axios
    .get(" http://localhost:8080/watches",param)
    .then((res)=>{
       
        dispatch(getwatchSuccessAction(res.data))
    }).catch((err)=>{
        dispatch(getwatchFailureAction())
    })

}


// let obj={
//     params:{
//         category:["Novel","Motivational"],
//         // _sort:"release_year",
//         _order:"asc"  //it will be dynamic like what ever we want
//     }
// }