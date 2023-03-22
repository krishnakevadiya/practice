import { useReducer, useState } from "react";
import "./App.css";

const initialState = {
  email: "",
  password: "",
};

//should have the cases "email", "password", and "reset", along with the default cases
const reducer = (state, action) => {
  switch(action.type){
    case "email":
      return {...state,email:action.payload}
    case "password":
      return {...state,password:action.payload}
    case 'reset':
      return{...state,email:"",password:""}
    default:
      return state;
  }
};

function App() {
  // import and use the useReducer hook here, with the reducer function and the initialState.
    const [state, dispatch] = useReducer(reducer,initialState)
  //store the data in this object variable when you click on the submit button, to render, the data in the UI.
  const [submittedData, setSubmittedData] = useState({});

  const handlesubmit = (e) =>{
    e.preventDefault();
    setSubmittedData(state);
    dispatch({type:"reset"})
  }
  return (
    <div className="App">
      <h2>useReducer Hook</h2>
      <form onSubmit={handlesubmit} className="form-wrapper" data-testid="form-wrapper">
        <div className="useremail-wrapper">
          <label>User Email</label>
          <input value={state.email}onChange={(e)=>{dispatch({type:"email",payload:e.target.value})}} type="email" data-testid="user-email" />
        </div>
        <div className="userpassword-wrapper">
          <label>User Password</label>
          <input value={state.password}onChange={(e)=>{dispatch({type:"password",payload:e.target.value})}} type="password" data-testid="user-password" />
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* IF there is data in the submittedData variable after submitting the form, show the data here ELSE show the No details found div. */}
        
        {submittedData.email!==undefined && 
      <div>

        <div data-testid="submitted-data-email">User Email:{submittedData.email}</div>
        <div data-testid="submitted-data-password">User Password:{submittedData.password}</div>
      </div>}
      {submittedData.email===undefined && <div data-testid = "no-details-container">no details found</div>}
    </div>
  );
}

// DO NOT change/modify the exports
export default App;
export { reducer, initialState };