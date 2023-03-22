import React, { useState } from "react";

// Context instance
export const AppContext = React.createContext();

// debugging purpose
AppContext.displayName = "CONTEXT";

// Custom Component called AppContextProvider
const initState = {
  isAuth: false,
  username: null,
  token: null
};
function AppContextProvider({ children }) {
  const [authState, setAuthState] = useState(initState);

  function handleLogin() {
    setAuthState({
      ...authState,
      isAuth: true,
      username: "albseb",
      token: "abcd"
    });
  }
  function handleLogout() {
    setAuthState(initState);
  }

  const value = { authState, handleLogin, handleLogout };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
