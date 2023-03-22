import axios from "axios";
import { useEffect, useReducer } from "react";
import { getFailure, getRequest, getSuccess } from "./actionCreators";
import "./App.css";
import ProductCard from "./Components/ProductCard";
import { initialState } from "./initialState";
import { reducer } from "./reducer";

function App() {
  //DO NOT USE use useState;
  //use the useReducer function here; import the reducer function from reducer.js and initial state variable from initialState.js here, for useReducer arguments.
  const [reducerState, dispatch] = useReducer(reducer,initialState);


  const getData = () => {
    dispatch(getRequest())
    axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`).then((res) => {
      dispatch(getSuccess(res.data.data));
      // console.log(res.data.data)
    }).catch((err) => {
      dispatch(getFailure());
    })
  }
  useEffect(() => {
    getData();
  },[])

  return (
    <div>
      <div>
        <div style={{ textAlign: "center" }}>
          <h1>PRODUCTS</h1>
          <div>Welcome to the RCT-211-B22 E1 Evaluation</div>

          {/* If the application is in the loading state, show the below div else not */}
          {reducerState.isLoading &&<div data-tesid="loading">Loading...</div>}

          {/* If there is any error while fetching the data from the API, show the below div, else not */}
          {reducerState.isError && <div data-testid="error" style={{ color: "red" }}>
            Error in fetching details
          </div>}

          {/* Map through the products data, here, by passing the data to the ProductCards component */}
          {reducerState.data.length>0 && reducerState.data.map((item) => (
            <ProductCard key = {item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
