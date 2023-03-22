import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import PrivateRoute from "../Components/PrivateRoute";
import Dashboard from "./Dashboard";
import SingleRestaurantPage from "./SingleRestaurantPage";

function AllRoutes() {
  return (
    <div>
      {/* Add Home, Login and dashboard  */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/restaurants/:id" element={
        <PrivateRoute>
          {/* <SingleRestaurantPage/> */}
        </PrivateRoute>
        }/>
      </Routes>
    </div>
  );
}

export default AllRoutes;