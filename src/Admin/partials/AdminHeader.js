import "../../css/admin.css";
import { Link } from "react-router-dom";
function AdminHeader() {
  return (
    <nav className="navbar navbar-expand-sm" id="AdminHeader">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to={""}
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Works
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to={"/admin/portfolio/add"}>
                    Add a Work
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={"/admin/portfolio/edit"}>
                    Edit a Work
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to={""}
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Blog Posts
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to={"/admin/posts/add"}>
                    Create a New Post
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={"/admin/posts/all"}>
                    View Posts
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/"} role="button" aria-expanded="false">
                Home Page
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={"/admin"}
                role="button"
                aria-expanded="false"
              >
                Back To Panel
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={""} role="button" aria-expanded="false">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default AdminHeader;
