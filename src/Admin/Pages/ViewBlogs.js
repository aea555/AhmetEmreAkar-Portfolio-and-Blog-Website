import { useState, useEffect } from "react";
import AdminHeader from "../partials/AdminHeader";
import Blog from "../Tools/Others/Blog";
const axios = require("axios");
const qs = require("qs");

function ViewBlogs() {
  let [datas, setData] = useState([]);
  const data = qs.stringify({});
  const config = {
    method: "get",
    url: "http://localhost:8000/api/blogs",
    headers: {},
    data: data,
  };
  let blogs;
  useEffect(() => {
    const wait = async () => {
      await fetchData();
      blogs = datas;
    };
    wait();
  }, []);
  const fetchData = () => {
    axios(config)
      .then((res) => {
        setData(res.data.blogs);
        return null;
      })
      .catch((error) => {
        throw new Error(`request failed because of ${error}`);
      });
  };

  console.log(blogs);
  return (
    <div className="container-xl">
      <AdminHeader />
      <div className="row"></div>
    </div>
  );
}

export default ViewBlogs;
