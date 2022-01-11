// import { ThemeContext } from "./Context";
import React from "react";

export default class ClassContextComponent extends React.Component {
  themeStyles(dark) {
    return {
      backgroundColor: dark ? "#333" : "#ccc",
      color: dark ? "#fff" : "#000",
      padding: "2em",
      margin: "2em",
    };
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {(darkTheme) => {
          return <div style={this.themeStyles(darkTheme)}>Class Theme</div>;
        }}
      </ThemeContext.Consumer>
    );
  }
}
