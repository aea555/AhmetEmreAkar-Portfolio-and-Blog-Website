import Header from "../Components/Partials/Header";
import Footer from "../Components/Partials/Footer";
import BlogSingle from "../Components/Others/Blog-Single";
import Navigation from "../Components/Partials/Navigation";
function SingleBlogPage() {
  return (
    <div className="container-xl">
      <Header />
      <Navigation />
      <BlogSingle />
      <Footer />
    </div>
  );
}

export default SingleBlogPage;
