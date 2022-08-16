import { Markup } from "interweave";
import { Link } from "react-router-dom";
function Blog(props) {
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
        <a href="#" className="card-link">
          Delete
        </a>
      </div>
    </div>
  );
}

export default Blog;
