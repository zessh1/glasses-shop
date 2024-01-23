import React, { useState } from "react";
import GlassesCard from "../../components/GlassesCard/GlassesCard";
import ReactPaginate from "react-paginate";
import "./GlassesShop.css"; // Import your CSS file for styling
import Header from "../../components/Header/Header";

const GlassesShop = () => {
  const glassesData = [
    {
      id: 1,
      image: "path/to/glasses1.jpg",
      title: "Stylish Sunglasses 1",
      price: "49.99",
    },
    {
      id: 2,
      image: "path/to/glasses2.jpg",
      title: "Trendy Eyeglasses",
      price: "59.99",
    },
    {
      id: 3,
      image: "path/to/glasses3.jpg",
      title: "Classic Aviators",
      price: "39.99",
    },
    {
      id: 4,
      image: "path/to/glasses3.jpg",
      title: "Classic Aviators",
      price: "39.99",
    },
    {
      id: 5,
      image: "path/to/glasses3.jpg",
      title: "Classic Aviators",
      price: "39.99",
    },
    {
      id: 6,
      image: "path/to/glasses3.jpg",
      title: "Classic Aviators",
      price: "39.99",
    },
    // Add more glasses data as needed
  ];

  const itemsPerPage = 3;
  const pageCount = Math.ceil(glassesData.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const indexOfLastGlasses = (currentPage + 1) * itemsPerPage;
  const indexOfFirstGlasses = indexOfLastGlasses - itemsPerPage;
  const currentGlasses = glassesData.slice(
    indexOfFirstGlasses,
    indexOfLastGlasses
  );

  return (
    <div className="glasses-shop">
      <Header />
      <h1 className="page-title">Glasses Shop</h1>
      <div className="glasses-container">
        {currentGlasses.map((glasses) => (
          <GlassesCard
            key={glasses.id}
            image={glasses.image}
            title={glasses.title}
            price={glasses.price}
          />
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
  );
};

export default GlassesShop;
