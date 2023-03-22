import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../Components/PrivateRoute"
import Home from "./Home";
import Login from "./Login";


function AllRoutes() {
  return <Routes>{/* Add Home, Login and dashboard  */}
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
   
    
  </Routes>;
}

export default AllRoutes;
