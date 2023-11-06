import { createContext, useContext, useState } from "react";

// 1.create context
const DarkThemeContext = createContext();

// 2.create provider
const DarkThemeProvider = ({ children }) => {
  // theme boolean count
  const [theme, setTheme] = useState(false);
  // toggling the theme light to dark
  const toggleDarkTheme = () => {
    setTheme(!theme);
  };

  const value = {
    theme,
    toggleDarkTheme,
  };

  return (
    <DarkThemeContext.Provider value={value}>
      {children}
    </DarkThemeContext.Provider>
  );
};

// creating custom hook
const useDarkTheme = () => {
  return useContext(DarkThemeContext);
};

export { DarkThemeProvider, useDarkTheme };
