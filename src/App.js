import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/style.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
