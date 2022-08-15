import { Markup } from "interweave";
function Blog(props) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">id: {props._id}</h6>
        <p className="card-text">
          <Markup content={props.content.slice(0, 60)} />
        </p>
        <a href="#" className="card-link">
          Edit
        </a>
        <a href="#" className="card-link">
          Delete
        </a>
      </div>
    </div>
  );
}

export default Blog;
