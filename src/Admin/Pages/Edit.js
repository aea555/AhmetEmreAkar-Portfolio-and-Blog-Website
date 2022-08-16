import Editor from "../Tools/Quill/Editor";
import AdminHeader from "../partials/AdminHeader";
import { useEffect, useState } from "react";
const axios = require("axios");
const qs = require("qs");
const id = window.location.pathname.substring(18);

function Edit(props) {
  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");
  let data;

  const fetchData = async () => {
    try {
      const config = {
        method: "get",
        url: `http://localhost:8000/api/blogs?id=${id}`,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };
      const response = await axios(config);
      setTitle(response.data.blogs.title);
      setContent(response.data.blogs.content);
      document.querySelector(".ql-editor").innerHTML = response.data.blogs.content;
    } catch (err) {
      console.log(`Request failed for reason: ${err}`);
    }
  };

  const updateData = async (e) => {
    try {
      e.preventDefault();
      var data = qs.stringify({
        title: title,
        content: content,
        id: id,
      });
      var config = {
        method: "put",
        url: "http://localhost:8000/api/blogs",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: data,
      };
      const response = await axios(config);
      console.log(response);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const passContent = (data) => {
    setContent(data);
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container-xl">
      <AdminHeader />
      <form id="editWork">
        <label htmlFor="postTitle" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control mb-3"
          onChange={handleChange}
          value={title}
          id="postTitle"
        />
        <label htmlFor="postContent" className="form-label">
          Post Content
        </label>
        <Editor id="postContent" passContent={passContent} />
        <button onClick={updateData} className="btn btn-success mt-5 d-block">
          Edit Post
        </button>
      </form>
    </div>
  );
}

export default Edit;
