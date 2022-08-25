import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Login from "./Pages/Login";
import SingleBlogPage from "./Pages/SingleBlog";
import AdminHeader from "./Admin/partials/AdminHeader";
import AdminLogin from "./Admin/Pages/AdminLogin";
import Add from "./Admin/Pages/Add";
import ViewBlogs from "./Admin/Pages/View";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/style.css";
import Edit from "./Admin/Pages/Edit";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/posts/*" element={<SingleBlogPage />} />
      </Routes>
      <Routes>
        <Route path="/admin" element={<AdminHeader />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/posts/add" element={<Add />} />
        <Route path="/admin/posts/all" element={<ViewBlogs />} />
        <Route path="/admin/posts/edit/:id" element={<Edit />} />
      </Routes>
      <Routes>
        <Route path="/admin/works/add" element={<Add />} />
        <Route path="/admin/works/all" element={<ViewBlogs />} />
        <Route path="admin/works/edit/:id" element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
