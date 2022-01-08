import React from "react";
import FunctionContextComponent from "./FunctionContextComponent";
import ClassContextComponent from "./ClassContextComponent";

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
        {/* <FunctionContextComponent /> */}
        <ClassContextComponent />
      </ThemeContext.Provider>
    </>
  );
}

export default Context;
