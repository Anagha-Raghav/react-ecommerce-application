import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";
import Cart from "../Pages/Cart/Cart";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
};

export default Routing;
