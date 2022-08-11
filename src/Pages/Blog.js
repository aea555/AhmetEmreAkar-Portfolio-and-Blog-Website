import Header from "../Components/Partials/Header";
import Footer from "../Components/Partials/Footer";
import BlogSmall from "../Components/Others/Blog-Sm";
import BlogLarge from "../Components/Others/Blog-Xl";

function Blog() {
  return (
    <div className="container-xl">
      <Header />
      <div className="row">
        <div className="col-md-6 mb-5">
          <h3>Popular Blogs</h3>
          <div className="">
            <BlogSmall />
            <BlogSmall />
            <BlogSmall />
            <BlogSmall />
          </div>
        </div>
        <div className="col-md-6 mb-5">
          <h3>Featured Blogs</h3>
          <div className="">
            <BlogLarge />
            <BlogLarge />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
