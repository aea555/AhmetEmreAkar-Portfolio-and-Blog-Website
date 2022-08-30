import { v4 as uuid } from "uuid";
import Header from "../Components/Partials/Header";
import Footer from "../Components/Partials/Footer";
import Navigation from "../Components/Partials/Navigation";
import BlogSmall from "../Components/Others/Blog-Sm";
import axios from "axios";
import qs from "qs";
import { useEffect, useState } from "react";
import { Markup } from "interweave";
let pathArray = window.location.pathname.split("/");
let id = pathArray[3];

function SingleBlogPage() {
  const [datas, setDatas] = useState("");
  const [otherBlogs, setOtherBlogs] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const [randomPosts, setRandomPosts] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);

  const getBlog = async () => {
    console.log(id);
    let data = qs.stringify({});
    let config = {
      method: "get",
      url: `http://localhost:8000/api/posts/?id=${id}`,
      headers: {},
      data: data,
    };
    const response = await axios(config);
    setDatas(response.data.blogs);
    setImgSrc(createImgSrc(response.data.blogs));
  };

  const createImgSrc = (post) => {
    const startPos = post.thumbnail.indexOf("src");
    const endPos = post.thumbnail.indexOf("style");
    const imgSrc = post.thumbnail.substring(startPos + 4, endPos - 2).replace('"', "");
    return imgSrc;
  };

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
    setOtherBlogs(datas);
  };

  const createDates = (post) => {
    const date = new Date(post.createdAt);
    const day = date.toLocaleDateString();
    const hour = date.toLocaleTimeString();
    return { day, hour };
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
    getBlog();
    getPosts();
  }, []);

  return (
    <div className="container-xl">
      <Header />
      <Navigation />
      <div className="container-xl">
        <div className="row mb-5">
          <div className="col-10">
            <div className="blogTitle border-top border-secondary pt-4">
              <h1 className="blog-heading">{datas.title}</h1>
            </div>
            <div className="blogImage pt-2 mt-4">
              <img src={imgSrc} className="big-img" />
            </div>
            <div className="blogContent border-top border-secondary pt-4 mt-4">
              <Markup content={datas.content} />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-10 mt-5">
            <div className="">
              <h3 className="border-top border-secondary pt-4 mb-4">Recent Posts</h3>
              {recentPosts.map((post) => {
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
            <div className="">
              <h3 className="border-top border-secondary pt-4 mb-4">Other Posts</h3>
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
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SingleBlogPage;
