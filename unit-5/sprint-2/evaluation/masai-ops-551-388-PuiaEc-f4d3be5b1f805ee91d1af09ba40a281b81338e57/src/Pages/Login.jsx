import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../Redux/AuthReducer/action";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const isLoa = useSelector((store) => store.AuthReducer.isLoading);
  const location = useLocation();
  const loginHandler = () => {
    let userData = { email, password };
    dispatch(login(userData)).then(() => {
      navigate(location.state, { replace: true });
    });
  };
  return (
    <div>
      <h2>LOGIN</h2>
      <form>
        <div>
          <label>User Email</label>
          <br />
          <input value={email} onChange={(e)=>setEmail(e.target.value)} data-testid="login-email" />
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input value={password} onChange={(e)=>setPassword(e.target.value)} data-testid="login-password" />
        </div>
        <button type="submit" onClick={loginHandler} data-testid="login-submit">
          Loading
        </button>
      </form>
    </div>
  );
};

export default Login;
