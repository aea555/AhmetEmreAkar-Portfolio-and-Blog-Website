import { v4 as uuid } from "uuid";
import Header from "../Components/Partials/Header";
import Footer from "../Components/Partials/Footer";
import BlogSmall from "../Components/Others/Blog-Sm";
import axios from "axios";
import qs from "qs";
import { useEffect, useState } from "react";

function SearchResults(props) {
  let pathArray = window.location.pathname.split("/");
  let searchQuery = pathArray[4];
  let ids = pathArray[5];
  ids = ids.split(",");
  ids = ids.slice(0, -1);
  const [results, setResults] = useState([]);

  const filterBlogs = async () => {
    let data = qs.stringify({});
    let config = {
      method: "get",
      url: `${process.env.REACT_APP_API_URL}api/posts/`,
      headers: {},
      data: data,
    };
    const response = await axios(config);
    let blogs = response.data.blogs;
    blogs = blogs.filter((blog) => {
      return ids.includes(blog._id);
    });
    setResults(blogs);
  };

  const createImgSrc = (post) => {
    const startPos = post.thumbnail.indexOf("src");
    const endPos = post.thumbnail.indexOf("style");
    const imgSrc = post.thumbnail.substring(startPos + 4, endPos - 2).replace('"', "");
    return imgSrc;
  };

  const createDates = (post) => {
    const date = new Date(post.createdAt);
    const day = date.toLocaleDateString();
    const hour = date.toLocaleTimeString();
    return { day, hour };
  };

  useEffect(() => {
    filterBlogs();
  }, []);

  return (
    <div className="container-xl">
      <Header />
      <h2>
        Search results from : <strong>{searchQuery}</strong>
      </h2>
      <div className="row">
        <div className="col-10">
          {results.map((result) => {
            return (
              <BlogSmall
                key={uuid()}
                thumbnail={createImgSrc(result)}
                title={result.title}
                content={result.content}
                date={createDates(result)}
                id={result._id}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SearchResults;
