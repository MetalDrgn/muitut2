import React, { useState, useContext } from "react";

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }) {
  const [darkThm, setDarkThm] = useState(true);

  function toggleThm() {
    setDarkThm(!darkThm);
  }
  return (
    <ThemeContext.Provider value={darkThm}>
      <ThemeUpdateContext.Provider value={toggleThm}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
