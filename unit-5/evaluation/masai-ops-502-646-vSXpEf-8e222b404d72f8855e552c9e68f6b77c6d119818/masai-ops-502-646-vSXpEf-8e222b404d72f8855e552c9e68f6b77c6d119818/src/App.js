import { useEffect, useReducer } from "react";
import "./App.css";
import axios from "axios";
import { getrequest,geterror,getsuccess } from "./actionCreators";
import { reducer } from "./reducer";
import { initialState } from "./initialState";
import ProductCard from "./Components/ProductCard";
function App() {
  //DO NOT USE use useState;
  //use the useReducer function here; import the reducer function from reducer.js and initial state variable from initialState.js here, for useReducer arguments.
  const [state, dispatch] = useReducer(reducer,initialState);
  console.log(state.isLoading)

  let getproducts = ()=>{
    dispatch(getrequest());
    axios.get("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products").then((res)=>{
      dispatch(getsuccess(res.data))
      console.log(state)
      }).catch((err)=>{
        dispatch(geterror());
      })
  }
  useEffect(() => {
    getproducts();  
  }, [])

  return (
    <div>
      <div>
        <div style={{ textAlign: "center" }}>
          <h1>PRODUCTS</h1>
          <div>Welcome to the RCT-211-B22 E1 Evaluation</div>

          {/* If the application is in the loading state, show the below div else not */}
          <div data-tesid="loading">{state.isLoading &&  "Loading..."}</div>

          {/* If there is any error while fetching the data from the API, show the below div, else not */}
          <div data-testid="error" style={{ color: "red" }}>
            { state.isError && "Error in fetching details"}
          </div>
          {state.data.length>0 && state.data?.map(({id,title,brand,image,price})=>{
          return (
              <ProductCard id={id} title={title} brand={brand} image={image} price={price}/>
          )
      })}
          {/* Map through the products data, here, by passing the data to the ProductCards component */}
        </div>
      </div>
    </div>
  );
}

export default App;