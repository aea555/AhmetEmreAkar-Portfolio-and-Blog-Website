import Header from "../Partials/Header";
import Footer from "../Partials/Footer";
import axios from "axios";
import qs from "qs";
import { Markup } from "interweave";
import { useEffect, useState } from "react";
var pathArray = window.location.pathname.split("/");
var id = pathArray[2];

function WorkSingle() {
  const [datas, setDatas] = useState("");
  const [imgSrc, setImgSrc] = useState("");

  var data = qs.stringify({});
  var config = {
    method: "get",
    url: `${process.env.REACT_APP_API_URL}api/works?id=${id}`,
    headers: {},
    data: data,
  };

  const createSource = (data) => {
    const startPos = data.thumbnail.indexOf("src");
    const endPos = data.thumbnail.indexOf("style");
    const imgSrc = data.thumbnail.substring(startPos + 4, endPos - 2).replace('"', "");
    setImgSrc(imgSrc);
  };

  const getWork = async () => {
    const response = await axios(config);
    const data = response.data.works;
    createSource(data);
    setDatas(data);
  };

  useEffect(() => {
    getWork();
  }, []);

  return (
    <div className="container-xl">
      <div className="row">
        <Header />
      </div>
      <div className="row">
        <div className="col">
          <div className="blogTitle border-secondary mt-4">
            <h1 className="blog-heading">{datas.title}</h1>
          </div>
          <div className="blogImage border-secondary pt-4 mt-4">
            <img className="img-fluid" src={imgSrc} />
          </div>
          <div className="blogContent border-top border-secondary pt-4 mt-4">
            <Markup content={datas.content} />
          </div>
        </div>
      </div>
      <div className="row">
        <Footer />
      </div>
    </div>
  );
}

export default WorkSingle;
