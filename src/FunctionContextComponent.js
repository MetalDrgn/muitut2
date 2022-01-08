import React from "react";
import { ThemeContext } from "./Context";

export default function FunctionContextComponent() {
  const darkTheme = React.useContext(ThemeContext);
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#ccc",
    color: darkTheme ? "#fff" : "#000",
    padding: "2em",
    margin: "2em",
  };
  return <div>Function Theme</div>;
}
