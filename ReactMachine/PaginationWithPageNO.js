import "./styles.css";
import { useEffect, useState } from "react";

const Pagimated = ({ download_url }) => {
  return <img src={download_url} alt="logo" />;
};

export default function App() {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(10);
  const fetchData = async () => {
    const data = await fetch(
      `https://picsum.photos/v2/list?page=${pageNo}&limit=5`
    );
    const json = await data.json();
    setData(json.products);
  };

  useEffect(() => {
    fetchData();
  }, [pageNo]);

  const handelClick = () => {
    setPageNo(pageNo + 1);
  };

  const handelPre = () => {
    setPageNo(pageNo - 1);
  };

  const prevThreeNoArr = Array.from(
    { length: 3 },
    (_, index) => pageNo - 1 - index
  )
    .filter((val) => val > 0)
    .reverse();
  // console.log(prevThreeNoArr);

  const nextFourValue = Array.from({ length: 4 }, (_, index) => pageNo + index);
  // console.log(nextFourValue);

  const pageNumber = [...prevThreeNoArr, ...nextFourValue];
  // console.log(pageNumber);

  return (
    <div className="App">
      <div className="dataContainer">
        {data.map((val) => (
          <Pagimated key={val.id} download_url={val.thumbnail} />
        ))}
      </div>
      <div className="btn-container">
        {pageNo > 1 ? (
          <div className="btn" onClick={handelPre}>
            {"<"}
          </div>
        ) : (
          ""
        )}
        {pageNumber.map((val) => (
          <div
            onClick={() => setPageNo(val)}
            className={pageNo == val ? "btn active" : "btn"}
          >
            {val}
          </div>
        ))}

        <div className="btn" onClick={handelClick}>
          {">"}
        </div>
      </div>
    </div>
  );
}
