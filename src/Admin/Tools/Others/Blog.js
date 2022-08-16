import { Markup } from "interweave";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const axios = require("axios");
const qs = require("qs");

function Blog(props) {
  const handleDelete = async () => {
    const data = qs.stringify({
      id: props._id,
    });
    const config = {
      method: "delete",
      url: `http://localhost:8000/api/blogs`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };
    const response = await axios(config);
    console.log(response.data);
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
        <Link to={`/admin/posts/edit/${props._id}`} className="card-link">
          Edit
        </Link>
        <Link to={"/admin/posts/all"} onClick={handleDelete} className="card-link">
          Delete
        </Link>
      </div>
    </div>
  );
}

export default Blog;
