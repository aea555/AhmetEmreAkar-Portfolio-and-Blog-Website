import React, { useRef, useCallback } from "react";
import { createReactEditorJS } from "react-editor-js";
import EditorConfig from "./EditorConfig";
const ReactEditorJS = createReactEditorJS();

export default function Editor() {
  const instanceRef = useRef(null);
  let data = { 1: "test" };
  const handleInit = useCallback((instance) => {
    instanceRef.current = instance;
  }, []);
  const handleSave = useCallback(() => {
    const savedData = instanceRef.current.save();
    console.log(savedData);
  }, []);
  return (
    <>
      <ReactEditorJS onChange={() => handleSave()} onInitialize={() => handleInit()} defaultValue={""} defaultBlock={""} holder="custom" tools={EditorConfig} data={data}>
        <div className="container-xl mt-5" id="custom"></div>
      </ReactEditorJS>
    </>
  );
}
