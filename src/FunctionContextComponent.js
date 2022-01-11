import React from "react";
// import { ThemeContext } from "./Context";
import { useTheme, useThemeUpdate } from "./ThemeContext";

export default function FunctionContextComponent() {
  const darkTheme = useTheme();
  const toggleThm = useThemeUpdate();
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#ccc",
    color: darkTheme ? "#fff" : "#000",
    padding: "2em",
    margin: "2em",
  };
  return (
    <>
      <button onClick={toggleThm}>Toggle Theme</button>
      <div style={themeStyles}>Function Theme</div>
    </>
  );
}
