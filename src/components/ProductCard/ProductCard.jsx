import React from "react";
import { Card, Col } from "react-bootstrap";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
const productCard = ({ img, titleProp, num, pirce }) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3">
      <Card
        style={{
          width: "100%",
          border: "none",
          backgroundColor: "#fff",
          boxShadow: "2px 3px 10px #999",
          marginTop: "10px",
        }}
      >
        <Card.Img
          variant="top"
          src={img}
          style={{
            width: "100%",
            height: "200px",
          }}
        />
        <Card.Body>
          <AiOutlineHeart style={{ color: "#aaa" }} className="fs-3 mb-1/2" />
          <Card.Text>{titleProp}</Card.Text>
          <div className="d-flex justify-content-between ">
            <div className="d-flex">
              <AiFillStar style={{ color: "#fdd835" }} className="mt-2 fs-6" />
              <p className="p-1 fs-6" style={{ color: "#fdd835" }}>
                {num}
              </p>
            </div>
            <p className="p-1 fs-6">{pirce} جنية</p>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default productCard;
