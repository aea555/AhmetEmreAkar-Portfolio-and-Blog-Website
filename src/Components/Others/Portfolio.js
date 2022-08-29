import axios from "axios";
import qs from "qs";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Portfolio() {
  const [datas, setDatas] = useState("");

  const getWorks = async () => {
    var data = qs.stringify({});
    var config = {
      method: "get",
      url: "http://localhost:8000/api/works",
      headers: {},
      data: data,
    };
    const response = await axios(config);
    const works = response.data.works;
    setDatas(works);
  };

  const createDivs = () => {
    const works = datas.map((data) => {
      const startPos = data.thumbnail.indexOf("src");
      const endPos = data.thumbnail.indexOf("style");
      const imgSrc = data.thumbnail.substring(startPos + 4, endPos - 2).replace('"', "");
      return (
        <div className="work gap-1 d-flex flex-column align-items-start">
          <h3>{data.title}</h3>
          <img className="img-thumbnail img-fluid" src={imgSrc} />
          <Link className="text-dark" to={`works/${data._id}`}>
            View Details
          </Link>
        </div>
      );
    });
    return works;
  };

  useEffect(() => {
    getWorks();
  }, []);

  return (
    <div className="container-xl text-center portfolio">
      <h1 className="pt-3 mb-3">Work</h1>
      <div className="row p-3">
        <div className="col-md-4">{datas.length ? createDivs() : null}</div>
      </div>
    </div>
  );
}

export default Portfolio;
