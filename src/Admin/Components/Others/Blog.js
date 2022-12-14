import { Markup } from "interweave";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const axios = require("axios");
const qs = require("qs");
var pathArray = window.location.pathname.split("/");
var workOrBlog = pathArray[2];

function Blog(props) {
  const handleDelete = async (e) => {
    e.preventDefault();
    const data = qs.stringify({
      id: props._id,
    });
    const config = {
      method: "delete",
      url: `${process.env.REACT_APP_API_URL}api/${workOrBlog}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${localStorage.getItem("jwtTokenAdmin")}`,
      },
      data: data,
    };
    const response = await axios(config);
    window.location.reload();
  };
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">id: {props._id}</h6>
        <p className="card-text">
          <Markup content={props.content.slice(0, 60)} />
        </p>
        <a href={`/admin/${workOrBlog}/edit/${props._id}`} className="card-link">
          Edit
        </a>
        <a href={`/admin/${workOrBlog}/all`} onClick={handleDelete} className="card-link">
          Delete
        </a>
      </div>
    </div>
  );
}

export default Blog;
