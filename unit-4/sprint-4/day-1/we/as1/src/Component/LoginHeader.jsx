import { useContext } from "react";
import { AppContext } from "../Context/AppContextProvider";

function LoginHeader() {
  const { authState, handleLogin, handleLogout } = useContext(AppContext);

  console.log(authState.isAuth);
  if (!authState.isAuth) {
    return (
      <div>
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }
  return (
    <div>
      <h3>{authState.username}</h3>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default LoginHeader;
