import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import SingleBlogPage from "./Pages/SingleBlog";
import AdminPanel from "./Admin/AdminPanel";
import AddPortfolio from "./Admin/Pages/AddPortfolio";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/style.css";
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
        <Route path="/admin/portfolio/add" element={<AddPortfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
