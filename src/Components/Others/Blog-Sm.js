import { Link } from "react-router-dom";
function BlogSmall() {
  return (
    <div className="blog-small border-top border-secondary pt-3 pb-3">
      <div className="row">
        <div className="col-6 d-flex align-items-start">
          <img src="https://www.freecodecamp.org/news/content/images/2022/05/ilya-pavlov-OqtafYT5kTw-unsplash.jpg" className="blog-img" />
        </div>
        <div className="col-6">
          <div className="blog-sm-content-container">
            <h5>Blog Title Placeholder</h5>
            <p>Lorem Ipsum is simply dummy text of the printing...</p>
            <Link className="nav-link" to={""}>
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogSmall;
