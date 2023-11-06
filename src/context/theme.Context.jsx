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

  // passing values to the app component with the provider
  const value = {
    theme,
    toggleDarkTheme,
  };

  return (
    // custome theme provider with values to the app as arugment
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
