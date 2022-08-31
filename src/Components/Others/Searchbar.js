import { useState } from "react";
import axios from "axios";
import qs from "qs";

function Searchbar() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const getSearchResults = async () => {
    let data = qs.stringify({});
    let config = {
      method: "get",
      url: `${process.env.REACT_APP_API_URL}api/posts/?title=${value}`,
      headers: {},
      data: data,
    };
    const response = await axios(config);
    const matches = response.data.matches;
    let ids = matches.filter(function (blog) {
      return blog !== null;
    });
    let queryString = "";
    const createString = ids.forEach((id) => {
      queryString = queryString + id._id + ",";
    });
    const urlPath = `blog/posts/search/${value}/${queryString}`;
    window.location.pathname = urlPath;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getSearchResults();
  };

  return (
    <form className="d-flex" role="search">
      <input
        className="form-control"
        type="search"
        value={value}
        onChange={handleChange}
        placeholder="Search Blogs"
        aria-label="Search"
        id="searchbar"
      />
      <button onClick={handleSearch} className="btn ms-2" type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
}

export default Searchbar;
