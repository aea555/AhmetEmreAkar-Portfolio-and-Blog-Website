import React, { useState } from "react";
import ReactQuill from "react-quill";
import Config from "./EditorConfig";

function QuillEditor() {
  const [value, setValue] = useState("");
  return (
    <div id="editor">
      <ReactQuill modules={{ toolbar: Config }} theme="snow" value={value} onChange={setValue} />
    </div>
  );
}

export default QuillEditor;
