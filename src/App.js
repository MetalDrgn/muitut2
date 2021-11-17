import "./App.css";
import Button from "@mui/material/Button";
import "draft-js/dist/Draft.css";
import { Editor, EditorState } from "draft-js";
import React from "react";

function MyEditor() {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
  return <Editor editorState={editorState} onChange={setEditorState} />;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button variant="outlined">Hello</Button>
        <Button variant="outlined">Hello</Button>
        <MyEditor />
        <meta charset="utf-8" />
        <meta name="viewport" content="initial-scale=1, eidth=devide-width" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
