import React from "react";

export const ThemeContext = React.createContext();

function Context() {
  const [darkThm, setDarkThm] = React.useState(true);

  function toggleThm() {
    setDarkThm(!darkThm);
  }

  return (
    <>
      <ThemeContext.Provider value={darkThm}>
        <button onClick={toggleThm}>Toggle Theme</button>
        
      </ThemeContext.Provider>
    </>
    )
}

export default Context;
