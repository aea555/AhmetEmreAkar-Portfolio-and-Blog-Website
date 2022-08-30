import { Link } from "react-router-dom";
import { Markup } from "interweave";
let pathArray = window.location.pathname.split("/");

function BlogLarge(props) {
  return (
    <div className="blog-large border-top border-secondary pt-3 pb-3">
      <div className="row">
        <div className="col">
          <img src={props.thumbnail} className="blog-img-xl" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h5 className="mt-3">{props.title}</h5>
          <Markup content={props.content.slice(0, 60)} />
          <p>
            Posted at:
            <br></br>
            {props.date.day}
            <br></br>
            {props.date.hour}
          </p>
          <a className="nav-link" href={`blog/posts/${props.id}`}>
            <a>View</a>
          </a>
        </div>
      </div>
    </div>
  );
}

export default BlogLarge;
