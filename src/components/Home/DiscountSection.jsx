import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img from "../../images/laptops.png";
const DiscountSection = () => {
  return (
    <Container>
      <Row className="d-flex align-items-center my-3 rounded bg-discount">
        <Col sm="4" md='6' className="text-discount ">
          <h3 className="fs-4 text-light fw-bold text-center">
            خصم يصل الي 30% علي اجهزة اللاب توب
          </h3>
        </Col>
        <Col sm="6">
          <img
            src={img}
            alt="img"
            style={{ height: "120px", marginRight:'40px'}}
            
          />
        </Col>
      </Row>
    </Container>
  );
};

export default DiscountSection;
