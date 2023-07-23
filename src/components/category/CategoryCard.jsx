import React from "react";

import { Col } from "react-bootstrap";
const CategoryCard = ({ title, bgColor, img }) => {
  return (
    <Col xs="6" sm="6" md="4" lg="2" className="d-flex justify-content-around">
      <div className="bg-category mx-3">
        <div
          style={{ backgroundColor: `${bgColor}` }}
          className="ground-card d-flex justify-content-center align-items-center"
        >
          <img src={img} alt="pic1" className="img-card" />
        </div>
        <p className="fs-5 text-center fw-bold my-3">{title}</p>
      </div>
    </Col>
  );
};

export default CategoryCard;
