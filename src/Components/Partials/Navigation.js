import { Link } from "react-router-dom";
function Navigation() {
  return (
    <nav id="breadcrumb" aria-label="breadcrumb" className="container-xl">
      <ol className="breadcrumb">
        <Link to={""} className="breadcrumb-item" aria-current="page">
          Home
        </Link>
        <Link to={""} className="breadcrumb-item" aria-current="page">
          Blog
        </Link>
        <Link to={""} className="breadcrumb-item active" aria-current="page">
          Placeholder Blog
        </Link>
      </ol>
    </nav>
  );
}

export default Navigation;
