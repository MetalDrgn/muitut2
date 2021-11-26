import "./App.css";
import Button from "@mui/material/Button";
import "draft-js/dist/Draft.css";
import { Editor, EditorState } from "draft-js";
import React from "react";

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
    console.log(editor.current);
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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button variant="outlined">Hello</Button>
        <Button variant="outlined">Hello</Button>
        <MyEditor />
        <MyInput />
        <meta name="viewport" content="initial-scale=1, eidth=devide-width" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
