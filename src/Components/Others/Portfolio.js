import axios from "axios";
import qs from "qs";
import { useEffect, useState } from "react";

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
      const endPos = data.thumbnail.indexOf(">");
      const imgSrc = data.thumbnail.substring(startPos + 4, endPos - 1).replace('"', "");
      return (
        <div className="work">
          <h5>{data.title}</h5>
          <img src={imgSrc} />
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
      <div className="row">
        <div className="col">{datas.length ? createDivs() : null}</div>
      </div>
    </div>
  );
}

export default Portfolio;
