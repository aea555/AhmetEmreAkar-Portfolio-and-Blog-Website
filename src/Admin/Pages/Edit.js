import Editor from "../Tools/Quill/Editor";
import AdminHeader from "../Components/partials/AdminHeader";
import { useEffect, useState } from "react";
const axios = require("axios");
const qs = require("qs");

function Edit(props) {
  const id = window.location.pathname.substring(18);
  var pathArray = window.location.pathname.split("/");
  var workOrBlog = pathArray[2];

  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");
  let [thumbnail, setThumbnail] = useState("");
  let data;

  const setResponse = (res) => {
    if (workOrBlog === "posts") {
      setTitle(res.data.blogs.title);
      setContent(res.data.blogs.content);
      setThumbnail(res.data.blogs.thumbnail);
    } else {
      setTitle(res.data.works.title);
      setContent(res.data.works.content);
      setThumbnail(res.data.works.thumbnail);
    }
  };

  const fetchData = async () => {
    try {
      const config = {
        method: "get",
        url: `http://localhost:8000/api/${workOrBlog}?id=${id}`,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };
      const response = await axios(config);
      setResponse(response);
      if (workOrBlog === "posts") {
        document.querySelector(".content").firstChild.innerHTML =
          response.data.blogs.content;
        document.querySelector(".thumbnail").firstChild.innerHTML =
          response.data.blogs.thumbnail;
      } else {
        document.querySelector(".content").firstChild.innerHTML =
          response.data.works.content;
        document.querySelector(".thumbnail").firstChild.innerHTML =
          response.data.works.thumbnail;
      }
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
        thumbnail: thumbnail,
        id: id,
      });
      var config = {
        method: "put",
        url: `http://localhost:8000/api/${workOrBlog}`,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${localStorage.getItem("jwtTokenAdmin")}`,
        },
        data: data,
      };
      const response = await axios(config);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

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
        <Editor id="postContent" passContent={passContent} type="content" />
        <label htmlFor="postThumbnail" className="form-label">
          Post Thumbnail
        </label>
        <Editor id="postThumbnail" passThumbnail={passThumbnail} type="thumbnail" />
        <button onClick={updateData} className="btn btn-success mt-5 d-block">
          Edit Post
        </button>
      </form>
    </div>
  );
}

export default Edit;
