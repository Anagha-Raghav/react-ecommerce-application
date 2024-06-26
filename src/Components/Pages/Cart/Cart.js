import React from "react";
import "./Cart.css";
import { IoCloseOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";

import {
  removeCart,
  incrementQuantity,
  decrementQuantity,
} from "../../../Redux/CartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeCart(id));
  };
  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };
  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  const cartTotal = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className=" cartSection  ">
      <section className="container pb-5  pt-5 gap-4">
        {/*------Cart Items Start------*/}

        <div className="cart_items  col-md-6">
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div class="card pb-3 mt-2 shadow-sm">
                <div class="row g-0">
                  <div class="col-md-3 ">
                    <img
                      src={item.imgUrl}
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <div className="d-flex justify-content-between mt-4">
                        <h6 class="card-title">{item.productName}</h6>
                        <span>
                          <IoCloseOutline
                            className="cart-remove"
                            onClick={() => {
                              handleRemove(item.id);
                            }}
                          />
                        </span>
                      </div>
                      <div className="d-flex justify-content-between mt-5">
                        <span className="text-muted cart-price">
                          ${item.price} * {item.quantity}
                        </span>
                        <span
                          className="fw-semibold cart-price"
                          style={{ color: "#000066" }}
                        >
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>

                        <div className="cartBtn">
                          <button
                            onClick={() => {
                              handleDecrement(item.id);
                            }}
                          >
                            -
                          </button>

                          <button
                            className="ms-2"
                            onClick={() => {
                              handleIncrement(item.id);
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div class="card w-100 mt-3 pb-5 shadow-sm">
              <div class="card-body">
                <p class="card-text fw-semibold">No Items are add in cart</p>
              </div>
            </div>
          )}
        </div>

        {/*------Cart Items End------*/}

        {/*----Cart Summary Start---*/}
        <div className="cart-summary col-md-6 mt-2  pb-3">
          <div className="cart-summary-box  shadow-sm">
            <h6 className="p-3 ">Cart Summary</h6>
            <div>
              <p className="px-3">Total Price:</p>
              <span
                className="ps-3 fw-semibold fs-5"
                style={{ color: "#000066" }}
              >
                ${cartTotal.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/*----Cart Summary End---*/}
      </section>
    </div>
  );
};

export default Cart;
