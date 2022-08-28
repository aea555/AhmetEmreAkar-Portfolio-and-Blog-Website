import Editor from "../Tools/Quill/Editor";
import { useState, useEffect } from "react";
import ThumbnailUploader from "../Tools/Others/ThumbnailUploader";
import Modal from "../Tools/Others/Modal";
import AdminHeader from "../partials/AdminHeader";
import axios from "axios";
import qs from "qs";
var pathArray = window.location.pathname.split("/");
var workOrBlog = pathArray[2];

function Add() {
  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");
  let [thumbnail, setThumbnail] = useState("");
  let data;
  const passContent = (data) => {
    setContent(data);
  };
  const passThumbnail = (data) => {
    setThumbnail(data);
  };
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  useEffect(() => {
    data = qs.stringify({
      title: title,
      content: content,
      thumbnail: thumbnail,
    });
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(title);
    console.log(content);
    const config = {
      method: "post",
      url: `http://localhost:8000/api/${workOrBlog}`,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${localStorage.getItem("jwtTokenAdmin")}`,
      },
      data: data,
    };
    const response = await axios(config);
    console.log(response);
    window.location.reload();
  };
  return (
    <div className="container-xl">
      <AdminHeader />
      <form id="saveNew">
        <label htmlFor="postTitle" className="form-label">
          {workOrBlog === "posts" ? "Post" : "Work"} Title
        </label>
        <input
          type="text"
          className="form-control mb-3"
          onChange={handleChange}
          value={title}
          id="postTitle"
        />
        <label htmlFor="postContent" className="form-label">
          {workOrBlog === "posts" ? "Post" : "Work"} Content
        </label>
        <Editor passContent={passContent} type="content" id="postContent" />
        <label htmlFor="postThumbnail" className="form-label">
          Post Thumbnail
        </label>
        <Editor passThumbnail={passThumbnail} type="thumbnail" id="postThumbnail" />
        <button onClick={handleSubmit} className="btn btn-success mt-5 d-block">
          Create {workOrBlog === "posts" ? "Post" : "Work"}
        </button>
      </form>
    </div>
  );
}

export default Add;
