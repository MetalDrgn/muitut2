import React from "react";
import FunctionContextComponent from "./FunctionContextComponent";
// import ClassContextComponent from "./ClassContextComponent";
import { ThemeProvider } from "./ThemeContext";

// export const ThemeContext = React.createContext();

function Context() {
  // const [darkThm, setDarkThm] = React.useState(true);

  // function toggleThm() {
  //   setDarkThm(!darkThm);
  // }

  return (
    <>
      <ThemeProvider>
      {/* <ThemeContext.Provider value={darkThm}> */}
        
        <FunctionContextComponent />
        {/* <ClassContextComponent /> */}
      </ThemeProvider>
      {/* </ThemeContext.Provider> */}
    </>
  );
}

export default Context;
