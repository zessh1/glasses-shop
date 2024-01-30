import React, { useEffect, useState } from "react";
import GlassesCard from "../../components/GlassesCard/GlassesCard";
import ReactPaginate from "react-paginate";
import "./GlassesShop.css";
import Header from "../../components/Header/Header";
import axios from "axios";

const GlassesShop = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3031/glasses")
      .then((response) => {
        setData(response.data);
        setFilteredData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching glasses data:", error);
      });
  }, []);

  useEffect(() => {
    const updatedFilteredData = data.filter((glasses) =>
      glasses.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(updatedFilteredData);
  }, [data, searchValue]);

  const itemsPerPage = 6;
  const pageCount = Math.ceil(filteredData.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const indexOfLastGlasses = (currentPage + 1) * itemsPerPage;
  const indexOfFirstGlasses = indexOfLastGlasses - itemsPerPage;
  const currentGlasses = filteredData.slice(
    indexOfFirstGlasses,
    indexOfLastGlasses
  );

  return (
    <div>
      <Header />
      <div className="glasses-shop">
        <h1 className="page-title">Glasses Shop</h1>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="filter with name"
        />
        <div className="glasses-container">
          {currentGlasses.map((glasses) => (
            <GlassesCard key={glasses.id} data={glasses} />
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
