import axios from "axios";
import qs from "qs";
import { useEffect, useState } from "react";
import Searchbar from "../Others/Searchbar";
let pathArray = window.location.pathname.split("/");

function Header() {
  const [isBlogPage, setIsBlogPage] = useState(false);
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

  const checkState = () => {
    pathArray.includes("blog") ? setIsBlogPage(true) : setIsBlogPage(false);
  };

  useEffect(() => {
    getRandomBlog();
    checkState();
  }, []);

  return (
    <div className="container-xl mt-2 mb-5">
      <nav className="navbar ms-auto navbar-expand-lg">
        <div className="container-xl" id="navbar-cont">
          <a className="navbar-brand" href={"/"}>
            <img
              src="./Images/aea.png"
              alt=""
              width="60"
              height="45"
              className="d-inline-block align-text-top"
            />
          </a>
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
                  <a className="nav-link active" aria-current="page" href={"/"}>
                    Home
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle me-2"
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
                      <a className="dropdown-item" href={"/blog/posts"}>
                        All Blogs
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              {isBlogPage ? <Searchbar /> : null}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
