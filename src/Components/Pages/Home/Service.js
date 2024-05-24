import React from "react";
import "./Home.css";
import { serviceData } from "../../ProductData/ProductData";

const Service = () => {
  return (
    <div className="service-section">
      <div className="container ">
        <div className="row">
          {serviceData.map((item) => (
            <div className="col-md-3 gx-2 ">
              <div
                className="card text-center "
                style={{ backgroundColor: `${item.bg}` }}
              >
                <div className="service-icon ">{item.icon}</div>
                <div className="card-body">
                  <h5 className="card-title mt-2">{item.title}</h5>
                  <p className="card-subtitle mt-3">{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
