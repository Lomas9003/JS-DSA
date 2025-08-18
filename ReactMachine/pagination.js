import { useEffect, useState } from "react";
import "./styles.css";

const Product = ({ image, title }) => {
  return (
    <div className="product">
      <img className="imgae" src={image} alt="logo" />
      <span>{title}</span>
    </div>
  );
};

const pageSize = 10;

export default function App() {
  const [data, setdata] = useState([]);
  const [currentPage, setcurrentPage] = useState(0);

  const selectPage = (n) => {
    setcurrentPage(n);
  };

  const nextPage = () => {
    setcurrentPage((pre) => pre + 1);
  };

  const prePAge = () => {
    setcurrentPage((pre) => pre - 1);
  };

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=100");
    const data2 = await data.json();
    setdata(data2.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const totalData = data.length;
  const noOfPage = Math.ceil(totalData / pageSize);
  const start = currentPage * pageSize;
  const end = start + pageSize;

  return !data.length ? (
    <h1>no data found</h1>
  ) : (
    <div className="App">
      <h1>Pagination</h1>
      <div className="buttons">
        <button disabled={currentPage === 0} className="btn" onClick={prePAge}>
          ◀
        </button>
        {[...Array(noOfPage).keys()].map((n) => (
          <button
            key={n}
            className={"btn2" + (n === currentPage ? "active" : "")}
            onClick={() => selectPage(n)}
          >
            {n}
          </button>
        ))}
        <button
          disabled={currentPage === noOfPage - 1}
          className="btn"
          onClick={nextPage}
        >
          ▶
        </button>
        
      </div>
      <div className="produt-container">
        {data.slice(start, end).map((p) => (
          <Product key={p.id} image={p.thumbnail} title={p.title} />
        ))}
      </div>
    </div>
  );
}
