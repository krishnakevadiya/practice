import { useReducer, useState } from "react";
import "./App.css";
import { UserRow } from "./Component/UserRow";

const initialState = {
  name: "",
  gender: "Male",
  role: "FrontEnd Developer",
  maritalStatus: false,
};

//should have the cases "name", "gender", "role", "maritalStatus", and "reset" along with the default cases
const reducer = (state, action) => {
    switch(action.type){
      case"name":
      return{...state,name:action.payload};
      case"gender":
      return{...state,gender:action.payload};
      case"role":
      return{...state,role:action.payload};
      case"martialStatus":
      return{...state,maritalStatus:action.payload};
      case"reset":
      return initialState;
      default:
        return state;
    }
};

function App() {
  const [state,dispatch]=useReducer(reducer,initialState);
  const [submittedData, setSubmittedData] = useState([]);

  const handleSubmit=(e)=>{
    e.preventDefault();
    setSubmittedData([...submittedData,state]);
    dispatch({type:'reset'});
  }
  const handleChange=(e)=>{
    const{checked,name,value}=e.target;
    const val=name==="maritalStatus"?checked:value;
    dispatch({type:name,payload:val});
  }

  // import and use the useReducer hook here, with the reducer function and the initialState.

  //store the data in this object variable when you click on the submit button, to render, the data in the UI.

  return (
    <div className="App">
      <div>
        <h1>User Form</h1>
        <h3>useReducer</h3>
        <div className="form-wrapper" data-testid="form-wrapper">
          <form data-testid="form-element" onSubmit={handleSubmit}>
            <div className="name-wrapper" data-testid="name-wrapper">
              <label>Name</label>
              {/* keep an input tag with name attribute as "name" type as "text" and placeholder as "Name" */}
              <input onChange={(e)=>handleChange(e)} name='name' placeholder='name' value={state.name} type="text" />
            </div>
            <div className="gender-wrapper" data-testid="gender-wrapper">
              <label>Gender</label>
              <select value={state.gender} onChange={(e)=>handleChange(e)} name="gender" data-testid="gender-select">
                <option>Male</option>
                <option>Female</option>
                <option>Prefer Not To Say</option>
              </select>
            </div>
            <div className="role-wrapper" data-testid="role-wrapper">
              <label>Role</label>
              <select value={state.role} onChange={(e)=>handleChange(e)} name="role" data-testid="role-select">
                <option>FrontEnd Developer</option>
                <option>BackEnd Developer</option>
                <option>FullStack Developer</option>
              </select>
            </div>
            <div
              className="marital-status-wrapper"
              data-testid="marital-status-wrapper"
            >
              <legend>Martial Status</legend>
              <div>
                {/* keep an input tag with type as "checkbox" and name as "maritalStatus" */}
                <input type={"checkbox"} name="maritalStatus" checked={state.maritalStatus} onChange={(e)=>handleChange(e)} />
                <label>Married</label>
              </div>
            </div>
            <div>
              <button type="submit">SUBMIT</button>
            </div>
          </form>
        </div>

        {submittedData.length===0?(
        <h2 data-testid="no-user-container">no users found</h2>
        )
        :(
          <table>
            <thead>
              <tr>
                <th>S.no</th>
                <th>Users</th>
                <th>Gender</th>
                <th>Role</th>
                <th>marital Status</th>
              </tr>
            </thead>
            <tbody>
              {submittedData.map((el,i)=>{
                return (
                  <tr>
                    <UserRow key={el.id}/>
                  </tr>
                )
              })}
            </tbody>
          </table>

        )}

        {/* map through the submittedData and render UserRow component to display the data in tabular format ELSE print "no users found"  in there is no user data */}
      </div>
    </div>
  );
}

// DO NOT change/modify the exports
export default App;
export {reducer, initialState}