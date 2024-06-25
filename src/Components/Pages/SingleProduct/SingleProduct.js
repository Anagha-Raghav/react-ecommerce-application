import React from "react";
import "./SingleProduct.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "../../../Redux/CartSlice";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { products } from "../../Products/Products";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { IoAddSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

const SingleProduct = () => {
  const [tab, setTab] = useState("tabDescription");
  const dispatch = useDispatch();
  const { id } = useParams();
  const singleProduct = products.find((item) => item.id === id);

  const {
    imgUrl,
    productName,
    price,
    avgRating,
    category,
    shortDesc,
    description,
    reviews,
  } = singleProduct;

  const relatedProducts = products.filter((item) => item.category === category);

  useEffect(() => {
    window.scroll(0, 0);
  }, [singleProduct]);

  const addToCart = (item) => {
    dispatch(
      add({
        id,
        imgUrl,
        productName,
        price,
      })
    );
    toast.success("Product has been added to cart !");
  };
  return (
    <div>
      <div className="commonSection">
        <div className="overlayText">
          {" "}
          <h4>{productName}</h4>
        </div>
      </div>
      {/*-----Product Details Start----- */}
      <section className="productDetails">
        <div className="container">
          <div className="row ">
            <div className="col-md-6 mt-3">
              <img src={imgUrl} alt={productName} />
            </div>
            <div className="col-md-6 mt-5">
              <h4 className="product-name">{productName}</h4>
              <div className="d-flex gap-4 mt-4 product-rating">
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
                <p>{avgRating} ratings</p>
              </div>
              <div className="d-flex gap-5 mt-2 price-category">
                <span className="fw-bold fs-5">${price}</span>
                <p>category: {category}</p>
              </div>
              <p className="mt-3 shortDescription">{shortDesc}</p>
              <input
                type="number"
                min={1}
                className="mt-4"
                style={{ textAlign: "center" }}
              />
              <div>
                <button className=" mt-3" onClick={() => addToCart()}>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* -----Product Details End----- */}

      {/*----Product Description & Review Start---*/}

      <section className="mt-4 pb-5 review-description">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="tab d-flex gap-3">
                <h6
                  className={`${tab === "tabDescription" ? "activeTab " : ""}`}
                  onClick={() => setTab("tabDescription")}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === "tabReview" ? "activeTab " : ""}`}
                  onClick={() => setTab("tabReview")}
                >
                  Reviews ({reviews.length})
                </h6>
              </div>
              {tab === "tabDescription" ? (
                <div className="tabContent">
                  <p className="mt-4">{description}</p>
                </div>
              ) : (
                <div className="reviewSection mt-4 ms-5">
                  <div className="productReview ">
                    {reviews.map((item, index) => (
                      <div key={index}>
                        <span>{item.rating} ratings</span>
                        <p>{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/*----Product Description & Review End---*/}

      {/*------Related Products Start-----*/}

      <section className="related_products mt-5 pb-5">
        <h4>You might also like</h4>
        <div className="container">
          <div className="row g-3 mt-3 justify-content-md-center">
            {relatedProducts.map((item, index) => (
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
      {/*------Related Products End-----*/}
    </div>
  );
};

export default SingleProduct;
