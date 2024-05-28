import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import { BsBagFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
const Header = () => {
  return (
    <div>
      <Navbar
        expand="lg"
        className=" shadow fixed-top "
        style={{ backgroundColor: "#fff" }}
      >
        <Container>
          <Navbar.Brand style={{ fontWeight: "500" }}>
            <BsBagFill
              style={{ width: "30", height: "30", paddingBottom: "8" }}
            />{" "}
            MART
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ">
              <Nav.Link as={Link} to="/home" className="linkText pe-5 ">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/shop" className="linkText pe-5">
                Shop
              </Nav.Link>
              <Nav.Link as={Link} to="/cart" className="linkText pe-5">
                Cart
              </Nav.Link>
              <Nav.Link className="linkText">
                <FaUser style={{ fontSize: "25" }} />
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/cart"
                className="linkText position-relative"
              >
                <FaShoppingCart style={{ fontSize: "25" }} />
                <Badge
                  bg="black"
                  className="position-absolute top-20 start-55 translate-middle rounded-circle  "
                  style={{ fontSize: "8px" }}
                >
                  0
                </Badge>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
