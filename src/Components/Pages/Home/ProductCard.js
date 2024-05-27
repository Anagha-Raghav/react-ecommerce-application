import React from "react";
import "./Home.css";
import { discountProducts } from "../../Products/Products";
import { FaStar } from "react-icons/fa";
import { IoAddSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

const ProductCard = () => {
  return (
    <div>
      {/*--------Discount Product Section Start--------*/}

      <section className="discountSection">
        <div className="container">
          <h3 className="text-center pt-5">Big Discount</h3>
          <div className="row g-3 mt-3">
            {discountProducts.map((item, index) => (
              <div className="col-md-4" key={index}>
                <div className="card shadow">
                  <img src={item.imgUrl} alt={item.productName} />
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
                        <IoAddSharp className="addIcon" />
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
    </div>
  );
};

export default ProductCard;
