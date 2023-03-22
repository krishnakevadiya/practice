import React, { useState } from "react";

export const AppContext = React.createContext();

function AppContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(true);

  const login = () => {
    setIsAuth(true);
  };

  const logout = () => {
    setIsAuth(false);
  };
  const value = { isAuth, login, logout };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
