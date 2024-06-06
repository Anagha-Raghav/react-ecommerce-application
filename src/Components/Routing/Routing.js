import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />}/>
      </Routes>
    </div>
  );
};

export default Routing;
