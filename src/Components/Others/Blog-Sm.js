import { Link } from "react-router-dom";
import { Markup } from "interweave";
let pathArray = window.location.pathname.split("/");

function BlogSmall(props) {
  return (
    <div className="blog-small border-top border-secondary pt-3 pb-3">
      <div className="row">
        <div className="col-6 d-flex align-items-start">
          <img src={props.thumbnail} className="blog-img" />
        </div>
        <div className="col-6">
          <div className="blog-sm-content-container">
            <h3>{props.title}</h3>
            <Markup content={props.content.slice(0, 60)} />
            <p>
              Posted at:
              <br></br>
              {props.date.day}
              <br></br>
              {props.date.hour}
            </p>
            <a className="nav-link" href={`blog/posts/${props.id}`}>
              View
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogSmall;
