// React
import React, { useState, useRef, useEffect } from "react";

// Quill
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

// Quill Configs
import DefaultConfig from "./DefaultConfig";
import ThumbnailConfig from "./ThumbnailConfig";

// Quill Modules
import ImageCompress from "quill-image-compress";
import ImageResize from "quill-image-resize-module-react";

function QuillEditor(props) {
  // Create editor ref
  let quillRef = useRef();
  let reactQuillRef = useRef();

  // Editor instances
  let editor;
  let unprivilegedEditor;

  // Attach refs
  const attachQuillRefs = () => {
    if (typeof reactQuillRef.getEditor !== "function") return;
    quillRef = reactQuillRef.getEditor();
  };

  // Editor state
  const [value, setValue] = useState("");

  // Create safe unprivileged editor
  useEffect(() => {
    attachQuillRefs();
    editor = reactQuillRef.getEditor();
    unprivilegedEditor = reactQuillRef.makeUnprivilegedEditor(editor);
    if (props.defaultVal) {
      setValue(props.defaultVal);
    }
  });

  // Configure toolbar
  const modules =
    props.type === "content" ? DefaultConfig.modules : ThumbnailConfig.modules;

  // Register external modules
  Quill.register("modules/imageCompress", ImageCompress);
  Quill.register("modules/imageResize", ImageResize);

  const handleChange = () => {
    let content = unprivilegedEditor.getHTML();
    setValue(content);
    if (props.type === "thumbnail") {
      const firstPos = content.indexOf("<img");
      const lastPos = content.indexOf("</");
      const extractedImage = content.substring(firstPos, lastPos);
      props.passThumbnail(extractedImage);
    } else {
      props.passContent(content);
    }
  };

  return (
    <>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={handleChange}
        modules={modules}
        ref={(el) => {
          reactQuillRef = el;
        }}
        className={`${props.type} mb-5`}
      />
    </>
  );
}

export default QuillEditor;
