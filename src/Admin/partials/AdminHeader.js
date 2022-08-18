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
                  <a className="dropdown-item" href={"/admin/works/add"}>
                    Create a New Work
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href={"/admin/works/all"}>
                    View all Works
                  </a>
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
                  <a className="dropdown-item" href={"/admin/posts/add"}>
                    Create a New Post
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href={"/admin/posts/all"}>
                    View Posts
                  </a>
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
