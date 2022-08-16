import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import SingleBlogPage from "./Pages/SingleBlog";
import AdminPanel from "./Admin/AdminPanel";
import Add from "./Admin/Pages/Add";
import ViewBlogs from "./Admin/Pages/ViewBlogs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/style.css";
import Edit from "./Admin/Pages/Edit";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/posts/*" element={<SingleBlogPage />} />
      </Routes>
      <Routes>
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/admin/portfolio/add" element={<Add />} />
        {/* <Route path="/admin/portfolio/edit" element={<Edit />} /> */}
        <Route path="/admin/posts/add" element={<Add />} />
        <Route path="/admin/posts/all" element={<ViewBlogs />} />
        <Route path="/admin/posts/edit/:id" element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
