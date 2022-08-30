import { v4 as uuid } from "uuid";
import Header from "../Components/Partials/Header";
import Footer from "../Components/Partials/Footer";
import BlogSmall from "../Components/Others/Blog-Sm";
import BlogLarge from "../Components/Others/Blog-Xl";
import axios from "axios";
import qs from "qs";
import { useEffect, useState } from "react";

function Blog() {
  const [datas, setDatas] = useState("");
  const [randomPosts, setRandomPosts] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);

  const getPosts = async () => {
    let data = qs.stringify({});
    let config = {
      method: "get",
      url: "http://localhost:8000/api/posts",
      headers: {},
      data: data,
    };
    const response = await axios(config);
    const datas = response.data.blogs;
    groupPosts(datas);
    setDatas(datas);
  };

  const createDates = (post) => {
    const date = new Date(post.createdAt);
    const day = date.toLocaleDateString();
    const hour = date.toLocaleTimeString();
    return { day, hour };
  };

  const createImgSrc = (post) => {
    const startPos = post.thumbnail.indexOf("src");
    const endPos = post.thumbnail.indexOf("style");
    const imgSrc = post.thumbnail.substring(startPos + 4, endPos - 2).replace('"', "");
    return imgSrc;
  };

  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };

  const groupPosts = (datas) => {
    let recents = datas.slice(-2);
    let randoms = shuffle(datas.slice(0, datas.length - 2));
    setRandomPosts(randoms);
    setRecentPosts(recents);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="container-xl">
      <Header />
      <div className="row">
        <div className="col-md-6 mb-5">
          <h3>Posts</h3>
          <div className="">
            {randomPosts.map((post) => {
              return (
                <BlogSmall
                  key={uuid()}
                  id={post._id}
                  thumbnail={createImgSrc(post)}
                  title={post.title}
                  content={post.content}
                  date={createDates(post)}
                />
              );
            })}
          </div>
        </div>
        <div className="col-md-6 mb-5">
          <h3>New Posts</h3>
          <div className="">
            {recentPosts.map((post) => {
              return (
                <BlogLarge
                  key={uuid()}
                  id={post._id}
                  thumbnail={createImgSrc(post)}
                  title={post.title}
                  content={post.content}
                  date={createDates(post)}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
