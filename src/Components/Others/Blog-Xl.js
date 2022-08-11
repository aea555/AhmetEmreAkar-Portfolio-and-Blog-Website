import { Link } from "react-router-dom";

function BlogLarge() {
  return (
    <div className="blog-large border-top border-secondary pt-3 pb-3">
      <div className="row">
        <div className="col">
          <img src="https://www.freecodecamp.org/news/content/images/2022/05/ilya-pavlov-OqtafYT5kTw-unsplash.jpg" className="blog-img-xl" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h5 className="mt-3">Blog Title Placeholder</h5>
          <p>Lorem Ipsum is simply dummy text of the printing...</p>
          <Link className="nav-link" to={""}>
            View
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogLarge;
