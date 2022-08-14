import React, { useState, useEffect, useRef } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import Config from "./EditorConfig";

function QuillEditor() {
  const { quill, quillRef } = useQuill(Config);
  const [savedText, setSavedText] = useState("");

  useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldDelta, source) => {
        setSavedText(quill.root.innerHTML);
      });
    }
  }, [quill]);

  const handleSave = (e) => {
    e.preventDefault();
    const saved = savedText;
    console.log(saved);
  };

  return (
    <>
      <div id="editor" data={savedText} ref={quillRef}></div>
      <button onClick={handleSave}>save</button>
    </>
  );
}

export default QuillEditor;
