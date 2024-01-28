import React, { useEffect, useState } from "react";
import GlassesCard from "../../components/GlassesCard/GlassesCard";
import ReactPaginate from "react-paginate";
import "./GlassesShop.css"; // Import your CSS file for styling
import Header from "../../components/Header/Header";
import axios from "axios";

const GlassesShop = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3031/glasses")
      .then((data) => setData(data.data));
  }, []);

  console.log(data);

  const itemsPerPage = 6;
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const indexOfLastGlasses = (currentPage + 1) * itemsPerPage;
  const indexOfFirstGlasses = indexOfLastGlasses - itemsPerPage;
  const currentGlasses = data.slice(indexOfFirstGlasses, indexOfLastGlasses);

  return (
    <div>
      <Header />
      <div className="glasses-shop">
        <h1 className="page-title">Glasses Shop</h1>
        <div className="glasses-container">
          {currentGlasses.map((glasses) => (
            <GlassesCard data={glasses} />
          ))}
        </div>
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
};

export default GlassesShop;
