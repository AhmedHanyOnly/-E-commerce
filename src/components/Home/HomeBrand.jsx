import React from "react";
import SubTitle from "../Utility/SubTitle";
import Brand from "../Brand/Brand";
import brand from "../../images/brand1.png";
import brand2 from "../../images/brand2.png";
import brand3 from "../../images/brand3.png";
import { Container, Row } from "react-bootstrap";

const HomeBrand = ({ img, img2, img3, title, btntitle, path }) => {
  return (
    <Container>
        <SubTitle title={title} btntitle={btntitle} pathLink={path} />
      <Row className="d-flex justify-content-around my-2 mx-1">
        <Brand img={brand} />
        <Brand img={brand2} />
        <Brand img={brand3} />
        <Brand img={brand} />
        <Brand img={brand2} />
        <Brand img={brand3} />
      </Row>
    </Container>
  );
};

export default HomeBrand;
