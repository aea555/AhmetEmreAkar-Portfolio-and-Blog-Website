import { Link } from "react-router-dom";
import BlogSmall from "./Blog-Sm";
function BlogSingle() {
  return (
    <div className="container-xl">
      <div className="row">
        <div className="col-md-8">
          <div className="blogTitle border-top border-secondary mt-4">
            <h1 className="blog-heading">Some Blog Title Here</h1>
          </div>
          <div className="blogImage border-top border-secondary pt-4 mt-4">
            <img src="https://www.freecodecamp.org/news/content/images/2022/05/ilya-pavlov-OqtafYT5kTw-unsplash.jpg" className="big-img" />
          </div>
          <div className="blogContent border-top border-secondary pt-4 mt-4">
            <p className="blogParagraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt praesent semper feugiat nibh sed pulvinar. Dignissim enim sit amet venenatis urna.
              <br></br>
              <br></br>
              Imperdiet dui accumsan sit amet nulla facilisi morbi. Feugiat in fermentum posuere urna nec tincidunt praesent. Eu volutpat odio facilisis mauris sit amet massa vitae tortor. Aenean euismod elementum nisi quis.
              <br></br>
              <br></br>
              Fringilla urna porttitor rhoncus dolor purus non enim praesent elementum. Laoreet id donec ultrices tincidunt arcu non sodales neque. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Risus pretium quam vulputate
              dignissim suspendisse in est.
              <br></br>
              <br></br>
              Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Sagittis id consectetur purus ut faucibus pulvinar elementum integer enim. Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Diam quis enim lobortis
              scelerisque fermentum dui faucibus in. Ornare arcu dui vivamus arcu felis bibendum.
            </p>
          </div>
        </div>
        <div className="col-md-4 mt-4">
          <BlogSmall />
          <BlogSmall />
          <BlogSmall />
          <BlogSmall />
          <BlogSmall />
          <BlogSmall />
          <BlogSmall />
        </div>
      </div>
    </div>
  );
}

export default BlogSingle;
