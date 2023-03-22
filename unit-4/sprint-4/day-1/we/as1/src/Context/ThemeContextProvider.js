import React from "react";

export const ThemeContext = React.createContext();
const theme = {
  dark: {
    primary: "red",
    secondary: "green"
  },
  light: {
    primary: "blue",
    secondary: "white"
  }
};
function ThemeContextProvider({ children }) {
  const value = "dark";
  return (
    <ThemeContext.Provider value={{ value, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
