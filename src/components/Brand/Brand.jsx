import React from "react";
import { Card, Col } from "react-bootstrap";

const Brand = ({ img }) => {
  return (
    <Col xs="6" sm="6" md="4" lg="2">
      <Card
        style={{
          width: "100%",
          height: "151px",
          border: "none",
          backgroundColor: "#fff",
          boxShadow: "2px 3px 10px #999",
          margin:'10px 0 30px'
        }}
      >
        <Card.Img
          variant="button"
          src={img}
          style={{
            width: "100%",
            height: "151px",
          }}
        />
      </Card>
    </Col>
  );
};

export default Brand;
