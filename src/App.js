import "./App.css";
import Button from "@mui/material/Button";
import "draft-js/dist/Draft.css";
import { Editor, EditorState } from "draft-js";
import React from "react";
import Context from "./Context";

const MyInput = () => {
  const [value, setValue] = React.useState("");
  const onChange = (e) => setValue(e.target.value);
  return <input value={value} onChange={onChange} />;
};

function MyEditor() {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
  const editor = React.useRef(null);
  function focusEditor() {
    // console.log(editor.current.editor.innerText);
    editor.current.focus();
  }
  return (
    <div className="editor" onClick={focusEditor}>
      <Editor
        ref={editor}
        placeholder="Enter some text..."
        editorState={editorState}
        onChange={setEditorState}
      />
    </div>
  );
}

const initialState = 0;
// const initialState = {count: 0} - have to extract item from object or react will throw an error

function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
    default:
      throw new Error();
  }
}

// function fib() {
//   const [num, setNum] = React.useState(0);
//   const memoValue = React.useMemo(() => )
// }

function slowfunc(num) {
  console.log("slowfunc");
  for (let i = 0; i < 400000000; i++) {}
  return num * 2;
}

function App() {
  // useReducer setup
  const [state, dispatch] = React.useReducer(reducer, initialState);
  // slow func setup
  const [number, setNumber] = React.useState(0);
  const [dark, setDark] = React.useState(false);
  const doubleNumber = React.useMemo(() => {
    return slowfunc(number);
  }, [number]);
  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <div className="App">
      <header className="App-header">
        inc/dec
        {/* <Button variant="outlined" onClick={focusEditor}>Hello</Button> */}
        <Button onClick={() => dispatch({ type: "dec" })} variant="outlined">
          -
        </Button>
        <Button onClick={() => dispatch({ type: "inc" })} variant="outlined">
          +
        </Button>
        count: {state}
        <br />
        -----------
        <br />
        useContext
        <Context />
        <br />
        -----------
        <br />
        slow - useMemo
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <br />
        <button onClick={() => setDark((p) => !p)}>toggle dark</button>
        <div style={themeStyles}>{doubleNumber}</div>
        <br />
        -----------
        <br />
        Draft-JS
        <MyEditor />
        <MyInput />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
