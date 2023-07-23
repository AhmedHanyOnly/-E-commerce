import React from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import { FcShop } from "react-icons/fc";
import { CiShoppingCart } from "react-icons/ci";
import { IoMdPerson } from "react-icons/io";
//import { Form } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#" className=" py-1 m-0">
          <a href="/">
          <FcShop className="logo" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="w-100 mx-3">
            <Form.Control
              type="search"
              placeholder="البحث"
              className="text-center w-100"
              aria-label="Search"
            />
          </Form>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <div className="d-flex px-2 justify-content-center">
              <IoMdPerson className="text-light fs-2 my-1 mx-2" />
              <Nav.Link href="/login" className="text-light px-0">
                الدخول
              </Nav.Link>
            </div>
            <div className="d-flex px-2 justify-content-center">
              <CiShoppingCart className="text-light fs-2 my-1 mx-2" />
              <Nav.Link href="/cart" className="text-light px-0">
                العربة
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
