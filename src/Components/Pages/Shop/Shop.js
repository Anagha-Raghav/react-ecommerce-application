import React from "react";
import "./Shop.css";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { IoAddSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { products } from "../../Products/Products";
import { useDispatch } from "react-redux";
import { add } from "../../../Redux/CartSlice";
import { toast } from "react-toastify";

const Shop = () => {
  const dispatch = useDispatch();
  const handleAdd = (item) => {
    dispatch(add(item));
    toast.success("Product has been added to cart !");
  };
  const [productsData, setProductsData] = useState(products);
 
  
 
  const handleFilter = (e) => {
    const filterValue = e.target.value;
    console.log(e.target.value);
    if (filterValue === "sofa") {
      const filteredProducts = products.filter(
        (item) => item.category === "sofa"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "chair") {
      const filteredProducts = products.filter(
        (item) => item.category === "chair"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "watch") {
      const filteredProducts = products.filter(
        (item) => item.category === "watch"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "mobile") {
      const filteredProducts = products.filter(
        (item) => item.category === "mobile"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "wireless") {
      const filteredProducts = products.filter(
        (item) => item.category === "wireless"
      );
      setProductsData(filteredProducts);
    }
  };
  const handleSearch = (e) => {
    const searchItem = e.target.value;
    const searchedProduct = products.filter((item) =>
      item.productName.toLowerCase().includes(searchItem.toLowerCase())
    );
    setProductsData(searchedProduct);
  };

  return (
    <div>
      <div className="commonSection">
        <div className="overlayText">
          {" "}
          <h2>Products</h2>
        </div>
      </div>
      <section className="filterSection">
        <div className="container">
          <div className="row mt-5 pb-5">
            <div className="col-md-4">
              <select className="select" onChange={handleFilter}>
                <option disabled selected hidden>
                  Filter By Category
                </option>
                <option value="sofa">Sofa</option>
                <option value="chair">Chair</option>
                <option value="watch">Watch</option>
                <option value="mobile">Mobile</option>
                <option value="wireless">Wireless</option>
              </select>
            </div>
            <div className="col-md-6 ">
              <div className="searchBox">
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={handleSearch}
                ></input>
                <span>
                  <CiSearch />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="productListSection">
        <div className="container">
          <div className="row  g-3 justify-content-md-center">
            {productsData.length === 0 ? (
              <h2 className="text-center">No products are found!</h2>
            ) : (
              productsData.map((item, index) => (
                <div className="col-md-4 " key={index}>
                  <div className="card shadow-sm h-100 ">
                  <Link to={`/singleproduct/${item.id}`}>
                    <img src={item.imgUrl} alt={item.productName} />
                    </Link>
                    <div className="card-body">
                      <span className="wishIcon">
                        <CiHeart />
                      </span>
                      <h5 className="card-title">{item.productName}</h5>
                      <div className="productRating">
                        <span>
                          <FaStar />
                        </span>
                        <span>
                          <FaStar />
                        </span>
                        <span>
                          <FaStar />
                        </span>
                        <span>
                          <FaStar />
                        </span>
                        <span>
                          <FaStar />
                        </span>
                      </div>
                      <div className="d-flex justify-content-between mt-2">
                        <span className="productPrice ">${item.price}</span>
                        <span>
                          <IoAddSharp
                            className="addIcon"
                            onClick={() => handleAdd(item)}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
