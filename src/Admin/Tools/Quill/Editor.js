import React, { useState, useEffect, useRef } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import DefaultConfig from "./DefaultConfig";
import ThumbnailConfig from "./ThumbnailConfig";
import ImageCompress from "quill-image-compress";

function QuillEditor(props) {
  const type = props.type === "content" ? DefaultConfig : ThumbnailConfig;
  const { quill, quillRef, Quill } = useQuill(type);

  if (Quill && !quill) {
    Quill.register("modules/imageCompress", ImageCompress);
  }

  useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldDelta, source) => {
        if (props.type === "thumbnail") {
          const firstPos = quill.root.innerHTML.indexOf("<img");
          const lastPos = quill.root.innerHTML.indexOf("</");
          const extractedImage = quill.root.innerHTML.substring(firstPos, lastPos);
          props.passThumbnail(extractedImage);
        } else {
          props.passContent(quill.root.innerHTML);
        }
      });
    }
  }, [quill]);

  return (
    <>
      <div id="editor" className={`${props.type} mb-5`} ref={quillRef}></div>
    </>
  );
}

export default QuillEditor;
