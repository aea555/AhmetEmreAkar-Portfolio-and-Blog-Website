import Editor from "../Tools/Quill/Editor";
import AdminHeader from "../partials/AdminHeader";
import { useState } from "react";

function Edit() {
  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");
  return (
    <div className="container-xl">
      <AdminHeader />
      <form id="editWork">
        <Editor />
      </form>
    </div>
  );
}

export default Edit;
