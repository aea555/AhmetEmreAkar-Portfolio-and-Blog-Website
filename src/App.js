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
  const getUser = () => {
    const userToken = localStorage.getItem("jwtToken");
    if (userToken) return true;
    else return false;
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/posts/*" element={<SingleBlogPage />} />
      </Routes>
      <Routes>
        <Route path="/admin" element={getUser() ? <AdminHeader /> : <AdminLogin />} />
        <Route
          path="/admin/login"
          element={getUser() ? <AdminHeader /> : <AdminLogin />}
        />
        <Route path="/admin/posts/add" element={getUser() ? <Add /> : <AdminLogin />} />
        <Route
          path="/admin/posts/all"
          element={getUser() ? <ViewBlogs /> : <AdminLogin />}
        />
        <Route
          path="/admin/posts/edit/:id"
          element={getUser() ? <Edit /> : <AdminLogin />}
        />
      </Routes>
      <Routes>
        <Route path="/admin/works/add" element={getUser() ? <Add /> : <AdminLogin />} />
        <Route
          path="/admin/works/all"
          element={getUser() ? <ViewBlogs /> : <AdminLogin />}
        />
        <Route
          path="admin/works/edit/:id"
          element={getUser() ? <Edit /> : <AdminLogin />}
        />
      </Routes>
    </Router>
  );
}

export default App;
