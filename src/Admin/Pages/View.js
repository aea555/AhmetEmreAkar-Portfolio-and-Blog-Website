import { v4 as uuid } from "uuid";
import { useState, useEffect } from "react";
import AdminHeader from "../Components/partials/AdminHeader";
import Blog from "../Components/Others/Blog";
const axios = require("axios");
const qs = require("qs");

function View() {
  var pathArray = window.location.pathname.split("/");
  var workOrBlog = pathArray[2];

  let [datas, setData] = useState([]);
  const data = qs.stringify({});
  const config = {
    method: "get",
    url: `${process.env.REACT_APP_API_URL}api/${workOrBlog}/`,
    headers: {},
    data: data,
  };
  const fetchBlogs = async () => {
    try {
      const response = await axios(config);
      setData(response.data.blogs);
    } catch (err) {
      console.log(`Request failed for reason: ${err}`);
    }
  };
  const fetchWorks = async () => {
    try {
      const response = await axios(config);
      setData(response.data.works);
    } catch (err) {
      console.log(`Request failed for reason: ${err}`);
    }
  };
  useEffect(() => {
    if (workOrBlog === "posts") fetchBlogs();
    else fetchWorks();
  }, []);

  const createDivs = () => {
    const blogs = datas.map((data) => {
      return (
        <div key={uuid()} className="col-sm-6 mt-3">
          <Blog
            key={data._id}
            title={data.title}
            content={data.content}
            author={data.author}
            _id={data._id}
          />
        </div>
      );
    });
    return blogs;
  };

  return (
    <div key={uuid()} className="container-xl">
      <AdminHeader key={uuid()} />
      <div key={uuid()} className="row">
        {datas.length ? createDivs() : null}
      </div>
    </div>
  );
}

export default View;
