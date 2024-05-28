import React from "react";
import "./Footer.css";
import { BsBagFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer ">
      <div className="container ">
        <div className="row pt-5">
          {/*-----Logo start------*/}
          <div className="col-md-3 ">
            <div className="logo pb-2">
              <BsBagFill
                style={{ width: "30", height: "30", paddingBottom: "8" }}
              />
              <div className="ps-1">
                {" "}
                <h5>MART</h5>
              </div>
            </div>
            <p className="logoDescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et,in gravida.Sit diam duis mauris nulla cursus.Erat et
              lectus vel ut sollicitudin elit at amet.
            </p>
          </div>
          {/*-----Logo End------*/}

          {/*-----About Us start------*/}
          <div className="col-md-3">
            <h6>About Us</h6>
            <p>Careers</p>
            <p>Our Stores</p>
            <p>Our Cares</p>
            <p>Terms & Conitions</p>
            <p>Privacy Policy</p>
          </div>
          {/*-----About Us End------*/}

          {/*-----Customer Care start------*/}
          <div className="col-md-3">
            <h6>Customer Care</h6>
            <p>Help Center</p>
            <p>How to Buy</p>
            <p>Track Your Order</p>
            <p>Corporate & Bulk Purchasing</p>
            <p>Return & Refund</p>
          </div>
          {/*-----Customer Care End------*/}

          {/*-----Contact Us Start------*/}
          <div className="col-md-3">
            <h6>Contact Us</h6>
            <p>70 Washington Square South,New York,NY 10012, United States</p>
            <p>Email: example@gmail.com</p>
            <p>Phone: +1 1123 456 780</p>
          </div>
          {/*-----Contact Us End------*/}
        </div>
      </div>
    </div>
  );
};

export default Footer;
