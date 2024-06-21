import React from "react";
import "./Home.css";
import { discountProducts } from "../../Products/Products";
import { newArrivals } from "../../Products/Products";
import { bestSales } from "../../Products/Products";
import { FaStar } from "react-icons/fa";
import { IoAddSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { add } from "../../../Redux/CartSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const ProductCard = () => {
  const dispatch = useDispatch();
  const handleAdd = (item) => {
    dispatch(add(item));
    toast.success("Product has been added to cart !");
  };

  return (
    <div>
      {/*--------Discount Product Section Start--------*/}

      <section className="discountSection">
        <div className="container">
          <h3 className="text-center pt-5">Big Discount</h3>
          <div className="row g-3 mt-3 pb-5">
            {discountProducts.map((item, index) => (
              <div className="col-md-4" key={index}>
                <div className="card shadow-sm h-100">
                  <Link to={`/singleproduct/${item.id}`}>
                  <img src={item.imgUrl} alt={item.productName}/>
                  </Link>
                  <div className="card-body">
                    <div className="productDiscount">{item.discount}% Off</div>
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
            ))}
          </div>
        </div>
      </section>
      {/*--------Discount Product Section End--------*/}

      {/*-------New Arrival Product Section Start---*/}
      <section className="newArrivalSection">
        <div className="container">
          <h3 className="text-center pt-5">New Arrivals</h3>
          <div className="row g-3 mt-3 pb-5 justify-content-md-center">
            {newArrivals.map((item, index) => (
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
            ))}
          </div>
        </div>
      </section>
      {/*-------New Arrival Product Section End---*/}

      {/*-------Best Sales Section Start-----*/}
      <section className="bestSalesSection">
        <div className="container">
          <h3 className="text-center pt-5">Best Sales</h3>
          <div className="row g-3 mt-3 pb-5 justify-content-md-center">
            {bestSales.map((item, index) => (
              <div className=" col-md-4 " key={index}>
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
            ))}
          </div>
        </div>
      </section>
      {/*--------Best Sales Section End-----*/}
    </div>
  );
};

export default ProductCard;
