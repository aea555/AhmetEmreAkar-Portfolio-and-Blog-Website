import React, { useState, useEffect, useRef } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import Config from "./EditorConfig";
import ImageCompress from "quill-image-compress";

function QuillEditor(props) {
  const { quill, quillRef, Quill } = useQuill(Config);

  if (Quill && !quill) {
    Quill.register("modules/imageCompress", ImageCompress);
  }

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
    props.passContent(savedText);
  };

  return (
    <>
      <div id="editor" ref={quillRef}></div>
      <button className="btn btn-warning mt-3" onClick={handleSave}>
        Save Text Content
      </button>
    </>
  );
}

export default QuillEditor;
