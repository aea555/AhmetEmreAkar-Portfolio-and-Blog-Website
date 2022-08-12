import "../../css/admin.css";
import { Link } from "react-router-dom";
function AdminHeader() {
  return (
    <nav className="navbar navbar-expand-lg" id="AdminHeader">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/admin/portfolio"}>
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={""}>
                Blog Posts
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to={""} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown link
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to={""}>
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={""}>
                    Another action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={""}>
                    Something else here
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default AdminHeader;
