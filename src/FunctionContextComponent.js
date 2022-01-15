import React from "react";
// import { ThemeContext } from "./Context";
import { useTheme, useThemeUpdate } from "./ThemeContext";

export default function FunctionContextComponent() {
  const darkTheme = useTheme();
  const toggleThm = useThemeUpdate();
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#ccc",
    color: darkTheme ? "#8f4" : "#c30",
    padding: "1em",
    margin: "1em",
  };
  return (
    <>
      <button onClick={toggleThm}>Toggle Theme</button>
      <div style={themeStyles}>Function Theme</div>
    </>
  );
}
