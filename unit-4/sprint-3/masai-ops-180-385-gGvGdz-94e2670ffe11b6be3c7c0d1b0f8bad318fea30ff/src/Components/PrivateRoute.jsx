import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function PrivateRoute({ children }) {
  const { isAuth } = useContext(AppContext);
  if (!isAuth) return <Navigate to="/login" />;
  return children;
}

export default PrivateRoute;
