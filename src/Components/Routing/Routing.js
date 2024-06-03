import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
};

export default Routing;
