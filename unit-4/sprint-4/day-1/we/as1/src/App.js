import { useContext } from "react";
import Form from "./Component/Form";
import LoginHeader from "./Component/LoginHeader";
import { AppContext } from "./Context/AppContextProvider";
import "./styles.css";

export default function App() {
  const { authState } = useContext(AppContext);
  return (
    <div className="App">
      {/* <Form /> */}
      <LoginHeader />
      <h3> {authState.token} </h3>
    </div>
  );
}

// working with forms
// input boxes
//

// Context API
