import { Link } from "react-router-dom";
import axios from "axios";
import qs from "qs";
import { useEffect, useState } from "react";

function Header() {
  const [isBlogPage, setIsBlogPage] = useState("");
  const [url, setUrl] = useState("");

  const getRandomBlog = async () => {
    let data = qs.stringify({});
    let config = {
      method: "get",
      url: "http://localhost:8000/api/posts/",
      headers: {},
      data: data,
    };
    const response = await axios(config);
    const blogs = response.data.blogs;
    const randomBlog = blogs[Math.floor(Math.random() * blogs.length)];
    setUrl(`blog/posts/${randomBlog._id}`);
  };

  useEffect(() => {
    getRandomBlog();
  }, []);

  return (
    <div className="container-xl mt-2 mb-5">
      <nav className="navbar ms-auto navbar-expand-lg">
        <div className="container-xl" id="navbar-cont">
          <Link className="navbar-brand" to={"/"}>
            <img
              src="./Images/aea.png"
              alt=""
              width="60"
              height="45"
              className="d-inline-block align-text-top"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasResponsive"
            aria-controls="offcanvasResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
            id="toggleButton"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas-lg offcanvas-end me-auto"
            tabIndex="-1"
            id="offcanvasResponsive"
            aria-labelledby="offcanvasResponsiveLabel"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close ms-auto"
                data-bs-dismiss="offcanvas"
                data-bs-target="#offcanvasResponsive"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to={"/"}>
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Blog
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href={url}>
                        Random Blog
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to={"/blog/posts"}>
                        All Blogs
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex ms-2" role="search">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn ms-2" type="submit">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
