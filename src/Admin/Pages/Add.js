import Editor from "../Tools/Quill/Editor";
import { useState, useEffect } from "react";
import ThumbnailUploader from "../Tools/Others/ThumbnailUploader";
import Modal from "../Tools/Others/Modal";
import AdminHeader from "../partials/AdminHeader";
import axios from "axios";
import qs from "qs";

function Add() {
  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");
  let data;
  const passContent = (data) => {
    setContent(data);
  };
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  useEffect(() => {
    data = qs.stringify({
      title: title,
      content: content,
    });
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(content);
    const config = {
      method: "post",
      url: "http://localhost:8000/api/blogs",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };
    axios(config);
  };
  return (
    <div className="container-xl">
      <AdminHeader />
      <form id="saveNew">
        <label htmlFor="postTitle" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control mb-5"
          onChange={handleChange}
          value={title}
          id="postTitle"
        />
        <label htmlFor="postContent" className="form-label">
          Post Content
        </label>
        <Editor passContent={passContent} id="postContent" />
        <button onClick={handleSubmit} className="btn btn-success mt-5">
          Create
        </button>
      </form>
    </div>
  );
}

export default Add;
